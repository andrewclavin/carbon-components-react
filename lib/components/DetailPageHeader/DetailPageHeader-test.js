"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _windowOrGlobal = _interopRequireDefault(require("window-or-global"));

var _DetailPageHeader = _interopRequireDefault(require("../DetailPageHeader"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _Breadcrumb = _interopRequireDefault(require("../Breadcrumb"));

var _BreadcrumbItem = _interopRequireDefault(require("../BreadcrumbItem"));

var _OverflowMenu = _interopRequireDefault(require("../OverflowMenu"));

var _OverflowMenuItem = _interopRequireDefault(require("../OverflowMenuItem"));

var _Tab = _interopRequireDefault(require("../Tab"));

var _Tabs = _interopRequireDefault(require("../Tabs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('DetailPageHeader', function () {
  describe('component is rendered correctly without tabs', function () {
    var wrapper = (0, _enzyme.mount)(_react.default.createElement(_DetailPageHeader.default, {
      title: "test",
      statusText: "Stopped",
      statusColor: "#BADA55"
    }, _react.default.createElement(_Icon.default, {
      description: "watson",
      name: "watson"
    }), _react.default.createElement(_Breadcrumb.default, null, _react.default.createElement(_BreadcrumbItem.default, {
      href: "www.google.com"
    }, "Breadcrumb 1"), _react.default.createElement(_BreadcrumbItem.default, {
      href: "www.google.com"
    }, "Breadcrumb 2"), _react.default.createElement(_BreadcrumbItem.default, {
      href: "www.google.com"
    }, "Breadcrumb 3")), _react.default.createElement(_OverflowMenu.default, null, _react.default.createElement(_OverflowMenuItem.default, {
      itemText: "Stop App"
    }), _react.default.createElement(_OverflowMenuItem.default, {
      itemText: "Restart App"
    }), _react.default.createElement(_OverflowMenuItem.default, {
      itemText: "Rename App"
    }), _react.default.createElement(_OverflowMenuItem.default, {
      itemText: "Edit Routes and Access"
    }), _react.default.createElement(_OverflowMenuItem.default, {
      itemText: "Delete App",
      isDelete: true
    }))));
    it('should render wrapper with the correct class', function () {
      expect(wrapper.children().hasClass('bx--detail-page-header')).toEqual(true);
      expect(wrapper.children().hasClass('bx--detail-page-header--no-tabs')).toEqual(true);
    });
    it('should render an icon', function () {
      var container = wrapper.find('.bx--detail-page-header-icon-container');
      var icon = container.find(_Icon.default);
      var hasIcon = icon.length === 1;
      expect(hasIcon).toEqual(true);
    });
    it('should render an icon, even without one passed in', function () {
      var noIcon = (0, _enzyme.shallow)(_react.default.createElement(_DetailPageHeader.default, {
        title: "test"
      }));
      var container = noIcon.find('.bx--detail-page-header-icon-container');
      var icon = container.find('svg');
      var hasIcon = icon.length === 1;
      expect(hasIcon).toEqual(true);
    });
    it('should render correct icon', function () {
      expect(wrapper.find(_Icon.default).at(0).props().name).toEqual('watson');
    });
    it('should render Breadcrumb', function () {
      var breadcrumb = wrapper.find(_Breadcrumb.default).length === 1;
      expect(breadcrumb).toEqual(true);
    });
    it('should render BreadcrumbItem', function () {
      var breadcrumbItem = wrapper.find(_BreadcrumbItem.default).length === 3;
      expect(breadcrumbItem).toEqual(true);
    });
    it('should render OverflowMenu', function () {
      var overflow = wrapper.find(_OverflowMenu.default).length === 1;
      expect(overflow).toEqual(true);
    });
    it('should render an element with a title class', function () {
      var hasTitle = wrapper.find('.bx--detail-page-header-title').length === 1;
      expect(hasTitle).toEqual(true);
    });
    it('should render the correct title', function () {
      expect(wrapper.props().title).toEqual('test');
    });
    it('should render the correct status text', function () {
      expect(wrapper.props().statusText).toEqual('Stopped');
    });
    it('should render the correct status color', function () {
      expect(wrapper.props().statusColor).toEqual('#BADA55');
    });
  });
  describe('component is rendered correctly with tabs', function () {
    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_DetailPageHeader.default, {
      hasTabs: true,
      title: "test"
    }, _react.default.createElement(_Icon.default, {
      description: "watson",
      name: "watson"
    }), _react.default.createElement(_Breadcrumb.default, null, _react.default.createElement(_BreadcrumbItem.default, {
      href: "www.google.com"
    }, "Breadcrumb 1"), _react.default.createElement(_BreadcrumbItem.default, {
      href: "www.google.com"
    }, "Breadcrumb 2"), _react.default.createElement(_BreadcrumbItem.default, {
      href: "www.google.com"
    }, "Breadcrumb 3")), _react.default.createElement(_OverflowMenu.default, null, _react.default.createElement(_OverflowMenuItem.default, {
      itemText: "Stop App"
    }), _react.default.createElement(_OverflowMenuItem.default, {
      itemText: "Restart App"
    }), _react.default.createElement(_OverflowMenuItem.default, {
      itemText: "Rename App"
    }), _react.default.createElement(_OverflowMenuItem.default, {
      itemText: "Edit Routes and Access"
    }), _react.default.createElement(_OverflowMenuItem.default, {
      itemText: "Delete App",
      isDelete: true
    })), _react.default.createElement(_Tabs.default, null, _react.default.createElement(_Tab.default, {
      label: "Overview"
    }), _react.default.createElement(_Tab.default, {
      label: "Apple"
    }), _react.default.createElement(_Tab.default, {
      label: "Banana"
    }), _react.default.createElement(_Tab.default, {
      label: "Orange"
    }))));
    it('should render a wrapper with the correct class', function () {
      expect(wrapper.hasClass('bx--detail-page-header--with-tabs')).toEqual(true);
    });
    it('should render Tabs', function () {
      var tabs = wrapper.find(_Tabs.default).length === 1;
      expect(tabs).toEqual(true);
    });
    it('should render 4 Tab', function () {
      var tabs = wrapper.find(_Tab.default).length === 4;
      expect(tabs).toEqual(true);
    });
  });
  describe('scroll event listener', function () {
    var addEvent;
    var removeEvent;
    var spyAddEventListener = jest.fn();
    var spyRemoveEventListener = jest.fn();
    beforeEach(function () {
      addEvent = jest.spyOn(_windowOrGlobal.default, 'addEventListener').mockImplementation(function (type) {
        if (type === 'scroll') {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          spyAddEventListener.apply(void 0, [type].concat(args));
        }
      });
      removeEvent = jest.spyOn(_windowOrGlobal.default, 'removeEventListener').mockImplementation(function (type) {
        if (type === 'scroll') {
          for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
          }

          spyRemoveEventListener.apply(void 0, [type].concat(args));
        }
      });
    });
    afterEach(function () {
      addEvent.mockRestore();
      removeEvent.mockRestore();
    });
    it('should pass in the same method when adding and removing the scroll event listener', function () {
      var wrapper = (0, _enzyme.mount)(_react.default.createElement(_DetailPageHeader.default, {
        title: "test"
      }));
      wrapper.unmount();
      expect(spyAddEventListener.mock.calls.length).toBe(1);
      expect(spyRemoveEventListener.mock.calls.length).toBe(1);
      var addArgs = spyAddEventListener.mock.calls[0];
      var removeArgs = spyRemoveEventListener.mock.calls[0];
      expect(addArgs[1]).toBe(removeArgs[1]); // the scroll handler function
    });
  });
});