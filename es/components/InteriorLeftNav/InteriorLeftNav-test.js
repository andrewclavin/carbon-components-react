import React from 'react';
import InteriorLeftNav from '../InteriorLeftNav';
import InteriorLeftNavList from '../InteriorLeftNavList';
import InteriorLeftNavItem from '../InteriorLeftNavItem';
import { mount } from 'enzyme';
describe('InteriorLeftNav', function () {
  describe('Renders as expected', function () {
    var wrapper = mount(React.createElement(InteriorLeftNav, {
      className: "extra-class"
    }));
    it('renders a interior left nav', function () {
      expect(wrapper.length).toEqual(1);
    });
    it('has the expected classes', function () {
      expect(wrapper.children().hasClass('bx--interior-left-nav')).toEqual(true);
    });
    it('should add extra classes that are passed via className', function () {
      expect(wrapper.hasClass('extra-class')).toEqual(true);
    });
    it('should render children as expected', function () {
      var interiorLeftNav = mount(React.createElement(InteriorLeftNav, null, React.createElement(InteriorLeftNavList, {
        className: "test-child"
      }), React.createElement(InteriorLeftNavItem, {
        href: "",
        title: "test-title",
        className: "test-child"
      }, React.createElement("a", {
        href: "http://www.carbondesignsystem.com"
      }, "test-title")), React.createElement("div", {
        "data-child-div": true
      }, "foo")));
      expect(interiorLeftNav.find('.left-nav-list').length).toEqual(2);
      expect(interiorLeftNav.find('.test-child').length).toEqual(4);
      expect(interiorLeftNav.find('.bx--interior-left-nav-collapse').length).toEqual(1);
      expect(interiorLeftNav.find('[data-child-div]').matchesElement(React.createElement("div", {
        "data-child-div": true
      }, "foo"))).toBe(true);
    });
    it('renders a interior left nav with open to be true', function () {
      var interiorLeftNav = mount(React.createElement(InteriorLeftNav, {
        open: true
      }));
      expect(interiorLeftNav.length).toEqual(1);
      expect(interiorLeftNav.find('.bx--interior-left-nav--collapsed').length).toEqual(0);
    });
    it('renders a interior left nav with open to be false', function () {
      var interiorLeftNav = mount(React.createElement(InteriorLeftNav, {
        open: false
      }));
      expect(interiorLeftNav.length).toEqual(1);
      expect(interiorLeftNav.find('.bx--interior-left-nav--collapsed').length).toEqual(1);
    });
  });
  describe('clicking on one list should close any currently opened lists', function () {
    var twoLists = mount(React.createElement(InteriorLeftNav, null, React.createElement(InteriorLeftNavList, {
      className: "first"
    }), React.createElement(InteriorLeftNavList, {
      className: "second",
      open: true
    })));

    var first = function first() {
      return twoLists.find('li.first');
    };

    var second = function second() {
      return twoLists.find('li.second');
    };

    it('should close the second list when the first is clicked', function () {
      expect(second().hasClass('left-nav-list__item--expanded')).toBe(true);
      first().simulate('click');
      expect(second().hasClass('left-nav-list__item--expanded')).toBe(false);
    });
  });
  describe('actions', function () {
    var interiorLeftNav = mount(React.createElement(InteriorLeftNav, null, React.createElement(InteriorLeftNavList, null), React.createElement(InteriorLeftNavItem, null, React.createElement("a", {
      href: "#first"
    }, "test-title"))));
    var item = interiorLeftNav.find(InteriorLeftNavItem).first();
    var toggler = interiorLeftNav.find('.bx--interior-left-nav-collapse').first();
    it('handles item click as expected', function () {
      interiorLeftNav.setState({
        activeHref: '#'
      });
      item.simulate('click');
      expect(interiorLeftNav.state().activeHref).toEqual('#first');
    });
    it('should set activeHref to items href on Enter', function () {
      interiorLeftNav.setState({
        activeHref: '#'
      });
      item.simulate('keypress', {
        which: 13
      });
      expect(interiorLeftNav.state().activeHref).toEqual('#first');
    });
    it('should set activeHref to items href on Space', function () {
      interiorLeftNav.setState({
        activeHref: '#'
      });
      item.simulate('keypress', {
        which: 32
      });
      expect(interiorLeftNav.state().activeHref).toEqual('#first');
    });
    it('should close the nav when the toggler is clicked', function () {
      toggler.simulate('click');
      expect(interiorLeftNav.children().hasClass('bx--interior-left-nav--collapsed')).toBe(true);
      expect(interiorLeftNav.state().open).toBe(false);
    });
  });
  describe('check accordion behaviour', function () {
    var twoLists = mount(React.createElement(InteriorLeftNav, null, React.createElement(InteriorLeftNavList, {
      className: "first",
      isExpanded: true
    }), React.createElement(InteriorLeftNavList, {
      className: "second",
      isExpanded: true,
      open: true
    })));

    var first = function first() {
      return twoLists.find('li.first');
    };

    var second = function second() {
      return twoLists.find('li.second');
    };

    it('should keep the second list open when the first is clicked', function () {
      expect(first().hasClass('left-nav-list__item--expanded')).toBe(false);
      expect(second().hasClass('left-nav-list__item--expanded')).toBe(true);
      first().simulate('click');
      expect(first().hasClass('left-nav-list__item--expanded')).toBe(true);
      expect(second().hasClass('left-nav-list__item--expanded')).toBe(true);
    });
  });
});