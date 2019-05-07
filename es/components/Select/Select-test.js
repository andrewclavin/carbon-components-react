import React from 'react';
import Icon from '../Icon';
import Select from '../Select';
import SelectItem from '../SelectItem';
import SelectSkeleton from '../Select/Select.Skeleton';
import { mount, shallow } from 'enzyme';
describe('Select', function () {
  describe('Renders as expected', function () {
    var wrapper = mount(React.createElement(Select, {
      id: "testing",
      labelText: "Select",
      className: "extra-class"
    }, React.createElement(SelectItem, null), React.createElement(SelectItem, null)));
    var selectContainer = wrapper.find('.bx--form-item > div');
    var label = wrapper.find('label');
    var select = wrapper.find('select');
    describe('selectContainer', function () {
      it('renders a container', function () {
        expect(selectContainer.length).toEqual(1);
      });
      it('renders the down arrow icon', function () {
        expect(selectContainer.find(Icon).length).toEqual(1);
      });
      it('should use correct icon', function () {
        var icon = wrapper.find(Icon);
        expect(icon.props().name).toEqual('caret--down');
      });
      it('has the expected classes', function () {
        expect(selectContainer.hasClass('bx--select')).toEqual(true);
      });
      it('applies extra classes specified via className', function () {
        expect(selectContainer.hasClass('extra-class')).toEqual(true);
      });
      it('has the expected default iconDescription', function () {
        expect(wrapper.props().iconDescription).toEqual('open list of options');
      });
      it('adds new iconDescription when passed via props', function () {
        wrapper.setProps({
          iconDescription: 'new description'
        });
        expect(wrapper.props().iconDescription).toEqual('new description');
      });
      it('should have iconDescription match Icon component description prop', function () {
        var matches = wrapper.props().iconDescription === wrapper.find(Icon).props().description;
        expect(matches).toEqual(true);
      });
    });
    describe('select', function () {
      it('renders a select', function () {
        expect(select.length).toEqual(1);
      });
      it('has the expected classes', function () {
        expect(select.hasClass('bx--select-input')).toEqual(true);
      });
      it('has the expected id', function () {
        expect(select.props().id).toEqual('testing');
      });
      it('should set defaultValue as expected', function () {
        wrapper.setProps({
          defaultValue: 'select-1'
        });
        expect(wrapper.find('select').props().defaultValue).toEqual('select-1');
      });
      it('should set disabled as expected', function () {
        expect(select.props().disabled).toEqual(false);
        wrapper.setProps({
          disabled: true
        });
        expect(wrapper.find('select').props().disabled).toEqual(true);
      });
      it('renders children as expected', function () {
        expect(select.props().children.length).toEqual(2);
      });
    });
    describe('label', function () {
      it('renders a label', function () {
        expect(label.length).toEqual(1);
      });
      it('has the expected classes', function () {
        expect(label.hasClass('bx--label')).toEqual(true);
      });
      it('has the expected htmlFor value', function () {
        expect(label.props().htmlFor).toEqual('testing');
      });
      it('renders children as expected', function () {
        expect(label.props().children).toEqual('Select');
      });
    });
  });
  describe('Renders as expected', function () {
    var wrapper = mount(React.createElement(Select, {
      id: "testing",
      labelText: "Select",
      className: "extra-class",
      inline: true
    }, React.createElement(SelectItem, null), React.createElement(SelectItem, null)));
    var selectContainer = wrapper.find('.bx--form-item > div');
    it('has the expected classes', function () {
      expect(selectContainer.hasClass('bx--select--inline')).toEqual(true);
    });
  });
});
describe('SelectSkeleton', function () {
  describe('Renders as expected', function () {
    var wrapper = shallow(React.createElement(SelectSkeleton, null));
    var select = wrapper.find('.bx--select');
    it('Has the expected classes', function () {
      expect(select.hasClass('bx--skeleton')).toEqual(true);
    });
  });
});