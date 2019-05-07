import React from 'react';
import Toggle from '../Toggle';
import ToggleSkeleton from '../Toggle/Toggle.Skeleton';
import { mount, shallow } from 'enzyme';
describe('Toggle', function () {
  describe('Renders as expected', function () {
    var wrapper = mount(React.createElement(Toggle, {
      id: "toggle-1"
    }));
    var input = wrapper.find('input');
    it('Switch and label Ids should match', function () {
      var toggleLabel = wrapper.find('.bx--toggle__label');
      expect(input.id).toEqual(toggleLabel.htmlFor);
    });
    it('should set defaultChecked as expected', function () {
      expect(input.props().defaultChecked).toEqual(false);
      wrapper.setProps({
        defaultToggled: true
      });
      expect(wrapper.find('input').props().defaultChecked).toEqual(true);
    });
    it('Can set defaultToggled state', function () {
      wrapper.setProps({
        defaultToggled: true
      });
      expect(wrapper.find('.bx--toggle').props().defaultChecked).toEqual(true);
    });
    it('Should add extra classes that are passed via className', function () {
      wrapper.setProps({
        className: 'extra-class'
      });
      expect(wrapper.find('div').hasClass('extra-class')).toEqual(true);
    });
    it('Can be disabled', function () {
      wrapper.setProps({
        disabled: true
      });
      expect(wrapper.find('.bx--toggle').props().disabled).toEqual(true);
    });
    it('Can have a labelA', function () {
      wrapper.setProps({
        labelA: 'labelA-test'
      });
      expect(wrapper.find('.bx--toggle__text--left').text()).toEqual('labelA-test');
    });
    it('Can have a labelB', function () {
      wrapper.setProps({
        labelB: 'labelB-test'
      });
      expect(wrapper.find('.bx--toggle__text--right').text()).toEqual('labelB-test');
    });
  });
  it('toggled prop sets checked prop on input', function () {
    var wrapper = mount(React.createElement(Toggle, {
      id: "test",
      toggled: true
    }));

    var input = function input() {
      return wrapper.find('input');
    };

    expect(input().props().checked).toEqual(true);
    wrapper.setProps({
      toggled: false
    });
    expect(input().props().checked).toEqual(false);
  });
  describe('events', function () {
    it('passes along onChange to <input>', function () {
      var onChange = jest.fn();
      var id = 'test-input';
      var wrapper = mount(React.createElement(Toggle, {
        id: id,
        onChange: onChange
      }));
      var input = wrapper.find('input');
      var inputElement = input.instance();
      inputElement.checked = true;
      wrapper.find('input').simulate('change');
      expect(onChange.mock.calls.map(function (call) {
        return call.map(function (arg, i) {
          return i > 0 ? arg : arg.target;
        });
      })).toEqual([[inputElement]]);
    });
    it('should invoke onToggle with expected arguments', function () {
      var onToggle = jest.fn();
      var id = 'test-input';
      var wrapper = mount(React.createElement(Toggle, {
        id: id,
        onToggle: onToggle
      }));
      var input = wrapper.find('input');
      var inputElement = input.instance();
      inputElement.checked = true;
      wrapper.find('input').simulate('change');
      var call = onToggle.mock.calls[0];
      expect(call[0]).toEqual(true);
      expect(call[1]).toEqual(id);
      expect(call[2].target).toBe(inputElement);
    });
  });
});
describe('ToggleSkeleton', function () {
  describe('Renders as expected', function () {
    var wrapper = shallow(React.createElement(ToggleSkeleton, null));
    var input = wrapper.find('input');
    var toggleLabel = wrapper.find('.bx--toggle__label');
    it('Has the expected classes', function () {
      expect(input.hasClass('bx--skeleton')).toEqual(true);
      expect(input.hasClass('bx--toggle')).toEqual(true);
      expect(toggleLabel.hasClass('bx--skeleton')).toEqual(true);
    });
  });
});