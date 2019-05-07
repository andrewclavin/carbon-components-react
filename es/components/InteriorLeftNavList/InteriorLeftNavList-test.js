import React from 'react';
import InteriorLeftNavList from '../InteriorLeftNavList';
import InteriorLeftNavItem from '../InteriorLeftNavItem';
import Icon from '../Icon';
import { shallow, mount } from 'enzyme';
describe('InteriorLeftNavList', function () {
  describe('Renders as expected', function () {
    var openList = shallow(React.createElement(InteriorLeftNavList, {
      className: "extra-class",
      title: "test-title",
      open: true
    }, React.createElement(InteriorLeftNavItem, {
      href: ""
    }, React.createElement("a", {
      href: "http://www.carbondesignsystem.com"
    }, "test-title"))));
    var closedList = shallow(React.createElement(InteriorLeftNavList, null, React.createElement(InteriorLeftNavItem, {
      href: ""
    }, React.createElement("a", {
      href: "http://www.carbondesignsystem.com"
    }, "test-title"))));
    var expectedChildrenList = shallow(React.createElement(InteriorLeftNavList, null, React.createElement(InteriorLeftNavItem, {
      href: "",
      className: "test-child"
    }, React.createElement("a", {
      href: "http://www.carbondesignsystem.com"
    }, "test-title")), React.createElement(InteriorLeftNavItem, {
      href: "",
      className: "test-child"
    }, React.createElement("a", {
      href: "http://www.carbondesignsystem.com"
    }, "test-title"))));
    it('renders a interior left nav list', function () {
      expect(openList.length).toEqual(1);
    });
    it('has the expected classes', function () {
      expect(openList.hasClass('left-nav-list__item--has-children')).toEqual(true);
    });
    it('should add extra classes that are passed via className', function () {
      expect(openList.hasClass('extra-class')).toEqual(true);
    });
    it('should have children with tab index of zero when open', function () {
      expect(openList.find(InteriorLeftNavItem).props().tabIndex).toEqual(0);
    });
    it('should have children with tab index of negative one when closed', function () {
      expect(closedList.find(InteriorLeftNavItem).props().tabIndex).toEqual(-1);
    });
    it('has the expected class when open', function () {
      expect(openList.hasClass('left-nav-list__item--expanded')).toEqual(true);
    });
    it('should not have the expanded class when closed', function () {
      expect(closedList.hasClass('left-nav-list__item--expanded')).toEqual(false);
    });
    it('should use correct icon', function () {
      var icon = openList.find(Icon);
      expect(icon.props().name).toEqual('chevron--down');
    });
    it('should use correct icon class names', function () {
      var icon = openList.find(Icon);
      expect(icon.props().className).toEqual('left-nav-list__item-icon bx--interior-left-nav__icon');
    });
    it('should render children as expected', function () {
      expect(expectedChildrenList.find('.left-nav-list__item-link').length).toEqual(1);
      expect(expectedChildrenList.find('.left-nav-list--nested').length).toEqual(1);
      expect(expectedChildrenList.find('.test-child').length).toEqual(2);
    });
  });
  describe('Check that functions passed in as props are called', function () {
    var onListClick = jest.fn();
    var wrapper = mount(React.createElement(InteriorLeftNavList, {
      onListClick: onListClick
    }));
    it('should call onListClick', function () {
      wrapper.simulate('click');
      expect(onListClick).toBeCalled();
    });
  });
  describe('calling the close method should close the list when open', function () {
    var wrapper = shallow(React.createElement(InteriorLeftNavList, {
      open: true
    }));
    it('should close the list', function () {
      wrapper.instance().close();
      expect(wrapper.state().open).toEqual(false);
    });
  });
  describe('actions', function () {
    var list = mount(React.createElement(InteriorLeftNavList, {
      title: "test-title"
    }, React.createElement(InteriorLeftNavItem, {
      href: ""
    }, React.createElement("a", {
      href: "http://www.carbondesignsystem.com"
    }, "test-title"))));
    it('handles click to leftNavList as expected', function () {
      list.setState({
        open: false
      });
      list.simulate('click');
      expect(list.state().open).toEqual(true);
    });
    it('should toggle the leftNavList on Enter', function () {
      list.setState({
        open: false
      });
      list.simulate('keypress', {
        which: 13
      });
      expect(list.state().open).toEqual(true);
      list.simulate('keypress', {
        which: 13
      });
      expect(list.state().open).toEqual(false);
    });
    it('should toggle the leftNavList on Space', function () {
      list.setState({
        open: false
      });
      list.simulate('keypress', {
        which: 32
      });
      expect(list.state().open).toEqual(true);
      list.simulate('keypress', {
        which: 32
      });
      expect(list.state().open).toEqual(false);
    });
  });
});