"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _Tabs = _interopRequireDefault(require("../Tabs"));

var _Tab = _interopRequireDefault(require("../Tab"));

var _Tabs2 = _interopRequireDefault(require("../Tabs/Tabs.Skeleton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var props = {
  tabs: {
    className: 'some-class',
    triggerHref: '#anotherAnchor'
  },
  tab: {
    className: 'another-class',
    onClick: (0, _addonActions.action)('onClick'),
    onKeyDown: (0, _addonActions.action)('onKeyDown')
  }
};
(0, _react2.storiesOf)('Tabs', module).addWithInfo('Default', "\n      Tabs are used to quickly navigate between views within the same context. Create individual\n      Tab components for each item in the Tabs list.\n    ", function () {
  return _react.default.createElement(_Tabs.default, props.tabs, _react.default.createElement(_Tab.default, _extends({}, props.tab, {
    label: "Tab label 1"
  }), _react.default.createElement("div", {
    className: "some-content"
  }, "Content for first tab goes here.")), _react.default.createElement(_Tab.default, _extends({}, props.tab, {
    label: "Tab label 2"
  }), _react.default.createElement("div", {
    className: "some-content"
  }, "Content for second tab goes here.")), _react.default.createElement(_Tab.default, _extends({}, props.tab, {
    label: "Tab label 3"
  }), _react.default.createElement("div", {
    className: "some-content"
  }, "Content for third tab goes here.")), _react.default.createElement(_Tab.default, _extends({}, props.tab, {
    label: "Tab label 4"
  }), _react.default.createElement("div", {
    className: "some-content"
  }, "Content for fourth tab goes here.")));
}).addWithInfo('Selected Example', "\n      By using the selected prop on the Tabs component, you can switch which Tab gets\n      rendered by default\n    ", function () {
  return _react.default.createElement(_Tabs.default, _extends({}, props.tabs, {
    selected: 3
  }), _react.default.createElement(_Tab.default, _extends({}, props.tab, {
    label: "Tab label 1"
  }), _react.default.createElement("div", {
    className: "some-content"
  }, "Content for first tab goes here.")), _react.default.createElement(_Tab.default, _extends({}, props.tab, {
    label: "Tab label 2"
  }), _react.default.createElement("div", {
    className: "some-content"
  }, "Content for second tab goes here.")), _react.default.createElement(_Tab.default, _extends({}, props.tab, {
    label: "Tab label 3"
  }), _react.default.createElement("div", {
    className: "some-content"
  }, "Content for third tab goes here.")), _react.default.createElement(_Tab.default, _extends({}, props.tab, {
    label: "Tab label 4"
  }), _react.default.createElement("div", {
    className: "some-content"
  }, "ontent for fourth tab goes here.")));
}).addWithInfo('skeleton', "\n      Placeholder skeleton state to use when content is loading.\n    ", function () {
  return _react.default.createElement(_Tabs2.default, null);
});