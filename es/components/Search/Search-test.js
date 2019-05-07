import React from 'react';
import Icon from '../Icon';
import Search from '../Search';
import SearchSkeleton from '../Search/Search.Skeleton';
import { mount, shallow } from 'enzyme';
describe('Search', function () {
  describe('renders as expected', function () {
    var wrapper = mount(React.createElement(Search, {
      id: "test",
      className: "extra-class",
      label: "Search Field",
      labelText: "testlabel"
    }));
    var label = wrapper.find('label');
    var textInput = wrapper.find('input');
    var container = wrapper.find('[role="search"]');
    describe('container', function () {
      it('should add extra classes that are passed via className', function () {
        expect(container.hasClass('extra-class')).toEqual(true);
      });
      it('should have the role of search', function () {
        expect(container.props().role).toEqual('search');
      });
    });
    describe('input', function () {
      it('renders as expected', function () {
        expect(textInput.length).toBe(1);
      });
      it('has the expected classes', function () {
        expect(textInput.hasClass('bx--search-input')).toEqual(true);
      });
      it('should set type as expected', function () {
        expect(textInput.props().type).toEqual('text');
        wrapper.setProps({
          type: 'email'
        });
        expect(wrapper.find('input').props().type).toEqual('email');
      });
      it('should set value as expected', function () {
        expect(textInput.props().defaultValue).toEqual(undefined);
        wrapper.setProps({
          defaultValue: 'test'
        });
        expect(wrapper.find('input').props().defaultValue).toEqual('test');
        expect(wrapper.find('input').props().value).toEqual(undefined);
      });
      it('should set placeholder as expected', function () {
        expect(textInput.props().placeholder).toEqual('');
        wrapper.setProps({
          placeHolderText: 'Enter text'
        });
        expect(wrapper.find('input').props().placeholder).toEqual('Enter text');
      });
    });
    describe('label', function () {
      it('renders a label', function () {
        expect(label.length).toBe(1);
      });
      it('has the expected classes', function () {
        expect(label.hasClass('bx--label')).toEqual(true);
      });
      it('should set label as expected', function () {
        expect(wrapper.props().label).toEqual('Search Field');
        wrapper.setProps({
          label: 'Email Input'
        });
        expect(wrapper.props().label).toEqual('Email Input');
      });
    });
    describe('Large Search', function () {
      describe('buttons', function () {
        var btns = wrapper.find('button');
        var sortBtn = btns.last();
        it('should be three buttons', function () {
          expect(btns.length).toBe(3);
        });
        it('should have type="button"', function () {
          var type1 = btns.first().instance().getAttribute('type');
          var type2 = btns.last().instance().getAttribute('type');
          expect(type1).toEqual('button');
          expect(type2).toEqual('button');
        });
        it('has expected class for sort button', function () {
          expect(sortBtn.hasClass('bx--search-button')).toEqual(true);
        });
      });
      describe('icons', function () {
        it('renders "search--glyph" icon', function () {
          var icons = wrapper.find(Icon);
          expect(icons.at(0).props().name).toEqual('search--glyph');
        });
        it('renders four Icons', function () {
          wrapper.setProps({
            small: false
          });
          var icons = wrapper.find(Icon);
          expect(icons.length).toEqual(4);
        });
        it('should use "filter--glyph" icon for sort button', function () {
          var icon = wrapper.find(Icon).at(2);
          expect(icon.props().name).toEqual('filter--glyph');
        });
        it('should use "list" icon for toggle button', function () {
          var icon = wrapper.find(Icon).at(3);
          expect(icon.props().name).toEqual('list');
        });
      });
    });
    describe('Small Search', function () {
      var small = mount(React.createElement(Search, {
        id: "test",
        small: true,
        className: "extra-class",
        label: "Search Field",
        labelText: "testlabel"
      }));
      var smallContainer = small.find('[role="search"]');
      it('renders correct search icon', function () {
        var icons = small.find(Icon);
        expect(icons.at(0).props().name).toEqual('search--glyph');
      });
      it('should have the expected small class', function () {
        expect(smallContainer.hasClass('bx--search--sm')).toEqual(true);
      });
      it('should only have 1 button (clear)', function () {
        var btn = small.find('button');
        expect(btn.length).toEqual(1);
      });
      it('renders one Icon', function () {
        var icons = small.find(Icon);
        expect(icons.length).toEqual(2);
      });
    });
  });
  describe('events', function () {
    describe('enabled textinput', function () {
      var onClick = jest.fn();
      var onChange = jest.fn();
      var wrapper = shallow(React.createElement(Search, {
        id: "test",
        labelText: "testlabel",
        onClick: onClick,
        onChange: onChange
      }));
      var input = wrapper.find('input');
      var eventObject = {
        target: {
          defaultValue: 'test'
        }
      };
      it('should invoke onClick when input is clicked', function () {
        input.simulate('click');
        expect(onClick).toBeCalled();
      });
      it('should invoke onChange when input value is changed', function () {
        input.simulate('change', eventObject);
        expect(onChange).toBeCalledWith(eventObject);
      });
    });
    describe('enabled toggling layout', function () {
      var wrapper = mount(React.createElement(Search, {
        labelText: "testlabel",
        id: "test"
      }));
      it('should default to "list" layout', function () {
        var icon = wrapper.find(Icon).at(3);
        expect(icon.props().name).toEqual('list');
      });
      it('should toggle layout to "grid" when clicked', function () {
        var button = wrapper.find('button').at(2);
        button.simulate('click');
        var icon = wrapper.find(Icon).at(3);
        expect(icon.props().name).toEqual('grid');
      });
      it('should toggle layout to "list" when clicked and currently set to "grid"', function () {
        var button = wrapper.find('button').at(2);
        wrapper.setState({
          format: 'grid'
        });
        button.simulate('click');
        var icon = wrapper.find(Icon).at(3);
        expect(icon.props().name).toEqual('list');
      });
    });
  });
});
describe('SearchSkeleton', function () {
  describe('Renders as expected', function () {
    var wrapper = shallow(React.createElement(SearchSkeleton, null));
    it('Has the expected classes', function () {
      expect(wrapper.hasClass('bx--skeleton')).toEqual(true);
      expect(wrapper.hasClass('bx--search--lg')).toEqual(true);
    });
  });
});
describe('SearchSkeleton Small', function () {
  describe('Renders as expected', function () {
    var wrapper = shallow(React.createElement(SearchSkeleton, {
      small: true
    }));
    it('Has the expected classes', function () {
      expect(wrapper.hasClass('bx--skeleton')).toEqual(true);
      expect(wrapper.hasClass('bx--search--sm')).toEqual(true);
    });
  });
});