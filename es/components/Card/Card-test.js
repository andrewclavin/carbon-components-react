import React from 'react';
import Card from '../Card';
import { shallow, mount } from 'enzyme';
describe('Card', function () {
  describe('Renders as expected', function () {
    var wrapper = shallow(React.createElement(Card, {
      className: "extra-class"
    }, React.createElement("div", {
      className: "child"
    }, "Test")));
    it('renders children as expected', function () {
      expect(wrapper.find('.child').length).toBe(1);
    });
    it('has the expected classes', function () {
      expect(wrapper.hasClass('bx--card')).toEqual(true);
    });
    it('renders extra classes passed in via className', function () {
      expect(wrapper.hasClass('extra-class')).toEqual(true);
    });
    it('has default tabIndex of 0', function () {
      expect(wrapper.props().tabIndex).toEqual(0);
    });
  });
  describe('Check that functions passed in as props are called', function () {
    var onClick = jest.fn();
    var wrapper = mount(React.createElement(Card, {
      onClick: onClick
    }));
    it('should call onClick', function () {
      wrapper.simulate('click');
      expect(onClick).toBeCalled();
    });
  });
});