import React from 'react';
import ContentSwitcher from '../ContentSwitcher';
import Switch from '../Switch';
import { mount, shallow } from 'enzyme';
describe('ContentSwitcher', function () {
  describe('component initial rendering', function () {
    var wrapper = shallow(React.createElement(ContentSwitcher, {
      onChange: function onChange() {},
      className: "extra-class"
    }, React.createElement(Switch, {
      kind: "anchor",
      text: "one"
    }), React.createElement(Switch, {
      kind: "anchor",
      text: "two"
    })));
    var children = wrapper.find(Switch);
    it('should have the correct class', function () {
      expect(wrapper.hasClass('bx--content-switcher')).toEqual(true);
    });
    it('should render children as expected', function () {
      expect(children.length).toEqual(2);
    });
    it('should default "selected" property to true on first child', function () {
      expect(children.first().props().selected).toEqual(true);
      expect(children.last().props().selected).toEqual(false);
    });
    it('should apply extra classes passed to it', function () {
      expect(wrapper.hasClass('extra-class')).toEqual(true);
    });
  });
  describe('Allow initial state to draw from props', function () {
    var wrapper = shallow(React.createElement(ContentSwitcher, {
      selectedIndex: 1,
      onChange: function onChange() {},
      className: "extra-class"
    }, React.createElement(Switch, {
      kind: "anchor",
      text: "one"
    }), React.createElement(Switch, {
      kind: "anchor",
      text: "two"
    })));
    var children = wrapper.find(Switch);
    it('Should apply the selected property on the selected child', function () {
      expect(children.first().props().selected).toEqual(false);
      expect(children.last().props().selected).toEqual(true);
    });
  });
  describe('when child component onClick is invoked', function () {
    var onChange = jest.fn();
    var mockData = {
      index: 1
    };
    var wrapper = mount(React.createElement(ContentSwitcher, {
      onChange: onChange
    }, React.createElement(Switch, {
      kind: "anchor",
      text: "one"
    }), React.createElement(Switch, {
      kind: "anchor",
      text: "two"
    })));
    var children = wrapper.find(Switch);
    children.first().props().onClick(mockData);
    it('should invoke onChange', function () {
      expect(onChange).toBeCalledWith(mockData);
    });
    it('should set the correct selectedIndex', function () {
      expect(wrapper.state('selectedIndex')).toEqual(mockData.index);
    });
    it('should set selected to true on the correct child', function () {
      wrapper.update();
      var firstChild = wrapper.find(Switch).first();
      var secondChild = wrapper.find(Switch).last();
      expect(firstChild.props().selected).toEqual(false);
      expect(secondChild.props().selected).toEqual(true);
    });
  });
  describe('when child component onKeyDown is invoked', function () {
    var onChange = jest.fn();
    var mockData = {
      index: 1
    };
    var wrapper = mount(React.createElement(ContentSwitcher, {
      onChange: onChange
    }, React.createElement(Switch, {
      kind: "anchor",
      text: "one"
    }), React.createElement(Switch, {
      kind: "anchor",
      text: "two"
    })));
    var children = wrapper.find(Switch);
    children.first().props().onKeyDown(mockData);
    it('should invoke onChange', function () {
      expect(onChange).toBeCalledWith(mockData);
    });
    it('should set the correct selectedIndex', function () {
      expect(wrapper.state('selectedIndex')).toEqual(mockData.index);
    });
    it('should set selected to true on the correct child', function () {
      wrapper.update();
      var firstChild = wrapper.find(Switch).first();
      var secondChild = wrapper.find(Switch).last();
      expect(firstChild.props().selected).toEqual(false);
      expect(secondChild.props().selected).toEqual(true);
    });
  });
});