import React from 'react';
import InteriorLeftNavItem from '../InteriorLeftNavItem';
import { shallow, mount } from 'enzyme';
describe('InteriorLeftNavItem', function () {
  describe('Renders as expected', function () {
    var wrapper = mount(React.createElement(InteriorLeftNavItem, {
      className: "extra-class",
      href: "test-href",
      activeHref: "test-href"
    }, React.createElement("a", {
      href: "test-href"
    }, "link")));
    it('renders a interior left nav item', function () {
      expect(wrapper.length).toEqual(1);
    });
    it('has the expected classes', function () {
      expect(wrapper.children().hasClass('left-nav-list__item')).toEqual(true);
    });
    it('should add extra classes that are passed via className', function () {
      expect(wrapper.hasClass('extra-class')).toEqual(true);
    });
    it('should contain a default label', function () {
      expect(wrapper.find('a').text()).toEqual('link');
    });
    it('should contain an href', function () {
      expect(wrapper.find('a').props().href).toEqual(wrapper.props().href);
    });
    it('should add active class to item when activeHref is matched', function () {
      expect(wrapper.children().hasClass('left-nav-list__item--active')).toEqual(true);
    });
    it('has an anchor with the expected class', function () {
      expect(wrapper.find('a').hasClass('left-nav-list__item-link')).toEqual(true);
    });
  });
  describe('actions', function () {
    var onClick = jest.fn();
    var wrapper = shallow(React.createElement(InteriorLeftNavItem, {
      onClick: onClick,
      href: ""
    }, React.createElement("a", {
      href: "http://www.carbondesignsystem.com"
    }, "test-title")));
    it('handles click to leftNavList as expected', function () {
      wrapper.simulate('click');
      expect(onClick).toBeCalled();
    });
    it('should toggle the leftNavList on Enter', function () {
      wrapper.simulate('keypress', {
        which: 13
      });
      expect(onClick).toBeCalled();
    });
    it('should toggle the leftNavList on Space', function () {
      wrapper.simulate('keypress', {
        which: 32
      });
      expect(onClick).toBeCalled();
    });
  });
});