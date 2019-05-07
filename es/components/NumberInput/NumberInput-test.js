import React from 'react';
import { mount, shallow } from 'enzyme';
import Icon from '../Icon';
import NumberInput from '../NumberInput';
import NumberInputSkeleton from '../NumberInput/NumberInput.Skeleton';
describe('NumberInput', function () {
  describe('should render as expected', function () {
    var wrapper;
    var label;
    var numberInput;
    var container;
    var formItem;
    var icons;
    beforeEach(function () {
      wrapper = mount(React.createElement(NumberInput, {
        min: 0,
        max: 100,
        id: "test",
        label: "Number Input",
        className: "extra-class",
        invalidText: "invalid text"
      }));
      label = wrapper.find('label');
      numberInput = wrapper.find('input');
      container = wrapper.find('.bx--number');
      formItem = wrapper.find('.bx--form-item');
      icons = wrapper.find(Icon);
    });
    describe('input', function () {
      it('renders a numberInput', function () {
        expect(numberInput.length).toEqual(1);
      });
      it('has the expected classes', function () {
        expect(container.hasClass('bx--number')).toEqual(true);
      });
      it('has renders with form-item wrapper', function () {
        expect(formItem.hasClass('bx--form-item')).toEqual(true);
      });
      it('applies extra classes via className', function () {
        expect(container.hasClass('extra-class')).toEqual(true);
      });
      it('should set a min as expected', function () {
        expect(numberInput.prop('min')).toEqual(0);
        wrapper.setProps({
          min: 10
        });
        expect(wrapper.find('input').prop('min')).toEqual(10);
      });
      it('should set a max as expected', function () {
        expect(numberInput.prop('max')).toEqual(100);
        wrapper.setProps({
          max: 10
        });
        expect(wrapper.find('input').prop('max')).toEqual(10);
      });
      it('should set step as expected', function () {
        expect(numberInput.prop('step')).toEqual(1);
        wrapper.setProps({
          step: 10
        });
        expect(wrapper.find('input').prop('step')).toEqual(10);
      });
      it('should set disabled as expected', function () {
        expect(numberInput.prop('disabled')).toEqual(false);
        wrapper.setProps({
          disabled: true
        });
        expect(wrapper.find('input').prop('disabled')).toEqual(true);
      });
      it('should set invalid as expected', function () {
        expect(container.prop('data-invalid')).toEqual(undefined);
        wrapper.setProps({
          invalid: true
        });
        expect(wrapper.find('.bx--number').prop('data-invalid')).toEqual(true);
      });
      it('should set invalidText as expected', function () {
        expect(wrapper.find('.bx--form-requirement').length).toEqual(0);
        wrapper.setProps({
          invalid: true
        });
        var invalidText = wrapper.find('.bx--form-requirement');
        expect(invalidText.length).toEqual(1);
        expect(invalidText.text()).toEqual('invalid text');
      });
      describe('initial rendering', function () {
        var getWrapper = function getWrapper(min, max, value) {
          return mount(React.createElement(NumberInput, {
            min: min,
            max: max,
            value: value,
            id: "test",
            label: "Number Input",
            className: "extra-class"
          }));
        };

        var getNumberInput = function getNumberInput(wrapper) {
          return wrapper.find('input');
        };

        it('should set value as expected when value > min', function () {
          var wrapper = getWrapper(-1, 100, 0);
          var numberInput = getNumberInput(wrapper);
          expect(numberInput.prop('value')).toEqual(0);
        });
        it('should set value as expected when min === 0 and value > min', function () {
          var wrapper = getWrapper(0, 100, 1);
          var numberInput = getNumberInput(wrapper);
          expect(numberInput.prop('value')).toEqual(1);
        });
        it('should set value to equal min when value < min', function () {
          var wrapper = getWrapper(5, 100, 0);
          var numberInput = wrapper.find('input');
          expect(numberInput.prop('value')).toEqual(5);
        });
        it('should set value when min is undefined', function () {
          var wrapper = getWrapper(undefined, 100, 5);
          var numberInput = wrapper.find('input');
          expect(numberInput.prop('value')).toEqual(5);
        });
        it('should set invalidText when value is empty string', function () {
          wrapper.setProps({
            value: ''
          });
          var invalidText = wrapper.find('.bx--form-requirement');
          expect(invalidText.length).toEqual(1);
          expect(invalidText.text()).toEqual('invalid text');
        });
      });
    });
    describe('Icon', function () {
      it('renders two Icon components', function () {
        expect(icons.length).toEqual(2);
      });
      it('has the expected default iconDescription', function () {
        expect(wrapper.prop('iconDescription')).toEqual('choose a number');
      });
      it('should use correct icons', function () {
        expect(icons.at(0).prop('name')).toEqual('caret--up');
        expect(icons.at(1).prop('name')).toEqual('caret--down');
      });
      it('adds new iconDescription when passed via props', function () {
        wrapper.setProps({
          iconDescription: 'new description'
        });
        expect(wrapper.prop('iconDescription')).toEqual('new description');
      });
      it('should have iconDescription match Icon component description prop', function () {
        var iconUpText = wrapper.find('.up-icon title').text();
        var iconDownText = wrapper.find('.down-icon title').text();
        var iconDescription = wrapper.prop('iconDescription');
        var matches = iconDescription === iconUpText && iconDescription === iconDownText;
        expect(matches).toEqual(true);
      });
    });
    describe('label', function () {
      it('renders a label', function () {
        expect(label.length).toEqual(1);
      });
      it('has the expected classes', function () {
        expect(label.hasClass('bx--label')).toEqual(true);
      });
    });
  });
  describe('events', function () {
    describe('disabled numberInput', function () {
      var onClick = jest.fn();
      var onChange = jest.fn();
      var wrapper = shallow(React.createElement(NumberInput, {
        id: "test",
        onClick: onClick,
        onChange: onChange,
        disabled: true
      }));
      var input = wrapper.find('input');
      var upArrow = wrapper.find('.up-icon').parent();
      var downArrow = wrapper.find('.down-icon').parent();
      it('should be disabled when numberInput is disabled', function () {
        expect(upArrow.prop('disabled')).toEqual(true);
        expect(downArrow.prop('disabled')).toEqual(true);
      });
      it('should not invoke onClick when up arrow is clicked', function () {
        upArrow.simulate('click');
        expect(onClick).not.toBeCalled();
      });
      it('should not invoke onClick when down arrow is clicked', function () {
        downArrow.simulate('click');
        expect(onClick).not.toBeCalled();
      });
      it('should not invoke onChange when numberInput is changed', function () {
        input.simulate('change');
        expect(onChange).not.toBeCalled();
      });
    });
    describe('enabled numberInput', function () {
      var onClick;
      var onChange;
      var input;
      var upArrow;
      var downArrow;
      var wrapper;
      beforeEach(function () {
        onClick = jest.fn();
        onChange = jest.fn();
        wrapper = mount(React.createElement(NumberInput, {
          id: "test",
          onClick: onClick,
          onChange: onChange,
          min: 0,
          max: 100
        }));
        input = wrapper.find('input');
        upArrow = wrapper.find('Icon.up-icon').closest('button');
        downArrow = wrapper.find('Icon.down-icon').closest('button');
      });
      it('should invoke onClick when numberInput is clicked', function () {
        input.simulate('click');
        expect(onClick).toBeCalled();
      });
      it('should invoke onClick when up arrow is clicked', function () {
        upArrow.simulate('click');
        expect(onClick).toBeCalled();
        expect(onClick).toHaveBeenCalledWith(expect.anything(), 'up');
      });
      it('should only increase the value on up arrow click if value is less than max', function () {
        wrapper.setProps({
          value: 100
        });
        upArrow.simulate('click');
        expect(wrapper.state().value).toEqual(100);
        expect(onClick).not.toBeCalled();
      });
      it('should only decrease the value on down arrow click if value is greater than min', function () {
        wrapper.setProps({
          value: 0
        });
        downArrow.simulate('click');
        expect(wrapper.state().value).toEqual(0);
        expect(onClick).not.toBeCalled();
      });
      it('should increase by the value of step', function () {
        wrapper.setProps({
          step: 10,
          value: 0
        });
        expect(wrapper.state().value).toEqual(0);
        upArrow.simulate('click');
        expect(wrapper.state().value).toEqual(10);
      });
      it('should decrease by the value of step', function () {
        wrapper.setProps({
          step: 10,
          value: 100
        });
        expect(wrapper.state().value).toEqual(100);
        downArrow.simulate('click');
        expect(wrapper.state().value).toEqual(90);
      });
      it('should not invoke onClick when down arrow is clicked and value is 0', function () {
        downArrow.simulate('click');
        expect(onClick).not.toBeCalled();
      });
      it('should invoke onClick when down arrow is clicked and value is above min', function () {
        wrapper.setProps({
          value: 1
        });
        downArrow.simulate('click');
        expect(onClick).toBeCalled();
        expect(onChange).toBeCalled();
        expect(onClick).toHaveBeenCalledWith(expect.anything(), 'down');
      });
      it('should invoke onChange when numberInput is changed', function () {
        input.simulate('change');
        expect(onChange).toBeCalled();
        expect(onChange).toHaveBeenCalledWith(expect.anything());
      });
    });
  });
});
describe('NumberInputSkeleton', function () {
  describe('Renders as expected', function () {
    var wrapper = shallow(React.createElement(NumberInputSkeleton, null));
    var container = wrapper.find('.bx--number');
    var label = wrapper.find('.bx--label');
    it('has the expected classes', function () {
      expect(container.hasClass('bx--skeleton')).toEqual(true);
      expect(label.hasClass('bx--skeleton')).toEqual(true);
    });
  });
});