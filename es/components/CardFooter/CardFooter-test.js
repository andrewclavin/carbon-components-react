import React from 'react';
import CardFooter from '../CardFooter';
import { shallow } from 'enzyme';
describe('CardFooter', function () {
  describe('Renders as expected', function () {
    var wrapper = shallow(React.createElement(CardFooter, {
      className: "extra-class"
    }, React.createElement("div", {
      className: "child"
    }, "Test")));
    it('renders children as expected', function () {
      expect(wrapper.find('.child').length).toBe(1);
    });
    it('has the expected classes', function () {
      expect(wrapper.hasClass('bx--card-footer')).toEqual(true);
    });
    it('renders extra classes passed in via className', function () {
      expect(wrapper.hasClass('extra-class')).toEqual(true);
    });
  });
});