"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _OverflowMenu = _interopRequireDefault(require("../OverflowMenu"));

var _OverflowMenuItem = _interopRequireDefault(require("../OverflowMenuItem"));

var _Icon = _interopRequireDefault(require("../Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var overflowMenuEvents = {
  onClick: (0, _addonActions.action)('onClick'),
  className: 'some-class'
};
var overflowMenuItemEvents = {
  onClick: (0, _addonActions.action)('onClick'),
  className: 'some-class'
};
(0, _react2.storiesOf)('OverflowMenu', module).addWithInfo('basic', "\n      Overflow Menu is used when additional options are available to the user and there is a space constraint.\n      Create Overflow Menu Item components for each option on the menu.\n    ", function () {
  return _react.default.createElement(_OverflowMenu.default, overflowMenuEvents, _react.default.createElement(_OverflowMenuItem.default, _extends({}, overflowMenuItemEvents, {
    itemText: "Option 1",
    primaryFocus: true
  })), _react.default.createElement(_OverflowMenuItem.default, _extends({}, overflowMenuItemEvents, {
    itemText: "Option 2"
  })), _react.default.createElement(_OverflowMenuItem.default, _extends({}, overflowMenuItemEvents, {
    itemText: "Option 3"
  })), _react.default.createElement(_OverflowMenuItem.default, _extends({}, overflowMenuItemEvents, {
    itemText: "Option 4"
  })), _react.default.createElement(_OverflowMenuItem.default, _extends({}, overflowMenuItemEvents, {
    itemText: _react.default.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between'
      }
    }, "Add ", _react.default.createElement(_Icon.default, {
      name: "icon--add",
      style: {
        height: '12px'
      }
    }))
  })), _react.default.createElement(_OverflowMenuItem.default, _extends({}, overflowMenuItemEvents, {
    itemText: "Danger option",
    hasDivider: true,
    isDelete: true
  })));
}).addWithInfo('floating menu', "\n      Overflow Menu with the floatingMenu prop is used when you need to place an OverflowMenu\n      inside a container with \"overflow\" CSS set.\n    ", function () {
  return _react.default.createElement(_OverflowMenu.default, _extends({}, overflowMenuEvents, {
    floatingMenu: true
  }), _react.default.createElement(_OverflowMenuItem.default, _extends({}, overflowMenuItemEvents, {
    itemText: "Option 1",
    primaryFocus: true
  })), _react.default.createElement(_OverflowMenuItem.default, _extends({}, overflowMenuItemEvents, {
    itemText: "Option 2"
  })), _react.default.createElement(_OverflowMenuItem.default, _extends({}, overflowMenuItemEvents, {
    itemText: "Option 3"
  })), _react.default.createElement(_OverflowMenuItem.default, _extends({}, overflowMenuItemEvents, {
    itemText: "Option 4"
  })), _react.default.createElement(_OverflowMenuItem.default, _extends({}, overflowMenuItemEvents, {
    itemText: "Danger option",
    hasDivider: true,
    isDelete: true
  })));
}).addWithInfo('custom trigger', "\n      Sometimes you just want to render something other than an icon\n    ", function () {
  return _react.default.createElement(_OverflowMenu.default, _extends({}, overflowMenuEvents, {
    style: {
      width: 'auto'
    },
    floatingMenu: true,
    renderIcon: function renderIcon(iconProps) {
      return _react.default.createElement("div", iconProps, "Custom trigger");
    }
  }), _react.default.createElement(_OverflowMenuItem.default, _extends({}, overflowMenuItemEvents, {
    itemText: "Option 1"
  })), _react.default.createElement(_OverflowMenuItem.default, _extends({}, overflowMenuItemEvents, {
    itemText: "Option 2"
  })), _react.default.createElement(_OverflowMenuItem.default, _extends({}, overflowMenuItemEvents, {
    itemText: "Option 3"
  })), _react.default.createElement(_OverflowMenuItem.default, _extends({}, overflowMenuItemEvents, {
    itemText: "Option 4"
  })), _react.default.createElement(_OverflowMenuItem.default, _extends({}, overflowMenuItemEvents, {
    itemText: "Danger option",
    hasDivider: true,
    isDelete: true
  })));
});