"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _Breadcrumb = _interopRequireDefault(require("../Breadcrumb"));

var _BreadcrumbItem = _interopRequireDefault(require("../BreadcrumbItem"));

var _OverflowMenu = _interopRequireDefault(require("../OverflowMenu"));

var _OverflowMenuItem = _interopRequireDefault(require("../OverflowMenuItem"));

var _DetailPageHeader = _interopRequireDefault(require("../DetailPageHeader"));

var _Tabs = _interopRequireDefault(require("../Tabs"));

var _Tab = _interopRequireDefault(require("../Tab"));

var _Icon = _interopRequireDefault(require("../Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var detailPageHeaderProps = {
  title: 'Detail Page Header',
  statusText: 'Running'
};
var overflowMenuProps = {
  onClick: (0, _addonActions.action)('onClick'),
  className: 'some-class',
  flipped: true
};
var overflowMenuItemProps = {
  onClick: (0, _addonActions.action)('onClick'),
  className: 'some-class'
};
(0, _react2.storiesOf)('DetailPageHeader', module).addDecorator(function (story) {
  return _react.default.createElement("div", {
    style: {
      minWidth: '60em'
    }
  }, story());
}).addWithInfo('without tabs', function () {
  return _react.default.createElement(_DetailPageHeader.default, detailPageHeaderProps, _react.default.createElement(_Icon.default, {
    name: "watson"
  }), _react.default.createElement(_Breadcrumb.default, null, _react.default.createElement(_BreadcrumbItem.default, {
    href: "www.google.com"
  }, "Breadcrumb 1"), _react.default.createElement(_BreadcrumbItem.default, {
    href: "www.google.com"
  }, "Breadcrumb 2"), _react.default.createElement(_BreadcrumbItem.default, {
    href: "www.google.com"
  }, "Breadcrumb 3")), _react.default.createElement(_OverflowMenu.default, overflowMenuProps, _react.default.createElement(_OverflowMenuItem.default, _extends({}, overflowMenuItemProps, {
    itemText: "Stop App"
  })), _react.default.createElement(_OverflowMenuItem.default, _extends({}, overflowMenuItemProps, {
    itemText: "Restart App"
  })), _react.default.createElement(_OverflowMenuItem.default, _extends({}, overflowMenuItemProps, {
    itemText: "Rename App"
  })), _react.default.createElement(_OverflowMenuItem.default, _extends({}, overflowMenuItemProps, {
    itemText: "Edit Routes and Access"
  })), _react.default.createElement(_OverflowMenuItem.default, _extends({}, overflowMenuItemProps, {
    itemText: "Delete App",
    isDelete: true,
    isLastItem: true
  }))));
}).addWithInfo('with tabs', function () {
  return _react.default.createElement(_DetailPageHeader.default, _extends({}, detailPageHeaderProps, {
    hasTabs: true
  }), _react.default.createElement(_Icon.default, {
    name: "watson"
  }), _react.default.createElement(_Breadcrumb.default, null, _react.default.createElement(_BreadcrumbItem.default, {
    href: "www.google.com"
  }, "Breadcrumb 1"), _react.default.createElement(_BreadcrumbItem.default, {
    href: "www.google.com"
  }, "Breadcrumb 2"), _react.default.createElement(_BreadcrumbItem.default, {
    href: "www.google.com"
  }, "Breadcrumb 3")), _react.default.createElement(_OverflowMenu.default, overflowMenuProps, _react.default.createElement(_OverflowMenuItem.default, _extends({}, overflowMenuItemProps, {
    itemText: "Stop App"
  })), _react.default.createElement(_OverflowMenuItem.default, _extends({}, overflowMenuItemProps, {
    itemText: "Restart App"
  })), _react.default.createElement(_OverflowMenuItem.default, _extends({}, overflowMenuItemProps, {
    itemText: "Rename App"
  })), _react.default.createElement(_OverflowMenuItem.default, _extends({}, overflowMenuItemProps, {
    itemText: "Edit Routes and Access"
  })), _react.default.createElement(_OverflowMenuItem.default, _extends({}, overflowMenuItemProps, {
    itemText: "Delete App",
    isDelete: true,
    isLastItem: true
  }))), _react.default.createElement(_Tabs.default, null, _react.default.createElement(_Tab.default, {
    label: "Overview"
  }), _react.default.createElement(_Tab.default, {
    label: "Apple"
  }), _react.default.createElement(_Tab.default, {
    label: "Banana"
  }), _react.default.createElement(_Tab.default, {
    label: "Orange"
  })));
});