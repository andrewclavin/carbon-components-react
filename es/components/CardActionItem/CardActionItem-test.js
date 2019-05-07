import React from 'react';
import CardActionItem from '../CardActionItem';
import Icon from '../Icon';
import { shallow } from 'enzyme';
describe('CardActionItem', function () {
  describe('Renders as expected', function () {
    var props = {
      className: 'extra-class',
      id: 'testId',
      ariaLabel: 'testLabel',
      iconName: 'testName',
      description: 'testDescription'
    };
    var wrapper = shallow(React.createElement(CardActionItem, props));
    describe('Renders button as expected', function () {
      it('has the expected classes', function () {
        expect(wrapper.hasClass('bx--app-actions__button')).toEqual(true);
      });
      it('renders extra classes passed in via className', function () {
        expect(wrapper.hasClass('extra-class')).toEqual(true);
      });
      it('has id passed in via props', function () {
        expect(wrapper.props().id).toEqual('testId');
      });
      it('has ariaLabel passed in via props', function () {
        expect(wrapper.props()['aria-label']).toEqual('testLabel');
      });
    });
    describe('Renders Icon as expected', function () {
      var icon = wrapper.find(Icon);
      it('Icon should have expected class', function () {
        expect(icon.hasClass('bx--app-actions__button--icon')).toEqual(true);
      });
      it('Icon has specified name', function () {
        expect(icon.props().name).toEqual('testName');
      });
      it('Icon has specified description', function () {
        expect(icon.props().description).toEqual('testDescription');
      });
    });
  });
});