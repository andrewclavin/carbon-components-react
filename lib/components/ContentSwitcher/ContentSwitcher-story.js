"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _ContentSwitcher = _interopRequireDefault(require("../ContentSwitcher"));

var _Switch = _interopRequireDefault(require("../Switch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('ContentSwitcher', module).addWithInfo('Default', "\n      The Content Switcher component manipulates the content shown following an exclusive or \u201Ceither/or\u201D pattern.\n      Create Switch components for each section in the content switcher.\n    ", function () {
  return _react.default.createElement(_ContentSwitcher.default, {
    onChange: (0, _addonActions.action)('onChange')
  }, _react.default.createElement(_Switch.default, {
    kind: "anchor",
    name: "one",
    text: "First section"
  }), _react.default.createElement(_Switch.default, {
    kind: "anchor",
    name: "two",
    text: "Second section"
  }), _react.default.createElement(_Switch.default, {
    kind: "anchor",
    name: "three",
    text: "Third section"
  }));
}).addWithInfo('Selected', "\n      Render the Content Switcher with a different section automatically selected\n    ", function () {
  return _react.default.createElement(_ContentSwitcher.default, {
    selectedIndex: 1,
    onChange: (0, _addonActions.action)('onChange')
  }, _react.default.createElement(_Switch.default, {
    kind: "anchor",
    name: "one",
    text: "First section"
  }), _react.default.createElement(_Switch.default, {
    kind: "anchor",
    name: "two",
    text: "Second section"
  }), _react.default.createElement(_Switch.default, {
    kind: "anchor",
    name: "three",
    text: "Third section"
  }));
});