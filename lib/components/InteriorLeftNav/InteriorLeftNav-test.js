"use strict";

var _react = _interopRequireDefault(require("react"));

var _InteriorLeftNav = _interopRequireDefault(require("../InteriorLeftNav"));

var _InteriorLeftNavList = _interopRequireDefault(require("../InteriorLeftNavList"));

var _InteriorLeftNavItem = _interopRequireDefault(require("../InteriorLeftNavItem"));

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('InteriorLeftNav', function () {
  describe('Renders as expected', function () {
    var wrapper = (0, _enzyme.mount)(_react.default.createElement(_InteriorLeftNav.default, {
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
      var interiorLeftNav = (0, _enzyme.mount)(_react.default.createElement(_InteriorLeftNav.default, null, _react.default.createElement(_InteriorLeftNavList.default, {
        className: "test-child"
      }), _react.default.createElement(_InteriorLeftNavItem.default, {
        href: "",
        title: "test-title",
        className: "test-child"
      }, _react.default.createElement("a", {
        href: "http://www.carbondesignsystem.com"
      }, "test-title")), _react.default.createElement("div", {
        "data-child-div": true
      }, "foo")));
      expect(interiorLeftNav.find('.left-nav-list').length).toEqual(2);
      expect(interiorLeftNav.find('.test-child').length).toEqual(4);
      expect(interiorLeftNav.find('.bx--interior-left-nav-collapse').length).toEqual(1);
      expect(interiorLeftNav.find('[data-child-div]').matchesElement(_react.default.createElement("div", {
        "data-child-div": true
      }, "foo"))).toBe(true);
    });
    it('renders a interior left nav with open to be true', function () {
      var interiorLeftNav = (0, _enzyme.mount)(_react.default.createElement(_InteriorLeftNav.default, {
        open: true
      }));
      expect(interiorLeftNav.length).toEqual(1);
      expect(interiorLeftNav.find('.bx--interior-left-nav--collapsed').length).toEqual(0);
    });
    it('renders a interior left nav with open to be false', function () {
      var interiorLeftNav = (0, _enzyme.mount)(_react.default.createElement(_InteriorLeftNav.default, {
        open: false
      }));
      expect(interiorLeftNav.length).toEqual(1);
      expect(interiorLeftNav.find('.bx--interior-left-nav--collapsed').length).toEqual(1);
    });
  });
  describe('clicking on one list should close any currently opened lists', function () {
    var twoLists = (0, _enzyme.mount)(_react.default.createElement(_InteriorLeftNav.default, null, _react.default.createElement(_InteriorLeftNavList.default, {
      className: "first"
    }), _react.default.createElement(_InteriorLeftNavList.default, {
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
    var interiorLeftNav = (0, _enzyme.mount)(_react.default.createElement(_InteriorLeftNav.default, null, _react.default.createElement(_InteriorLeftNavList.default, null), _react.default.createElement(_InteriorLeftNavItem.default, null, _react.default.createElement("a", {
      href: "#first"
    }, "test-title"))));
    var item = interiorLeftNav.find(_InteriorLeftNavItem.default).first();
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
    var twoLists = (0, _enzyme.mount)(_react.default.createElement(_InteriorLeftNav.default, null, _react.default.createElement(_InteriorLeftNavList.default, {
      className: "first",
      isExpanded: true
    }), _react.default.createElement(_InteriorLeftNavList.default, {
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