"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _CopyButton = _interopRequireDefault(require("../CopyButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('CopyButton', module).addWithInfo('Default', "\n      The copy button can be used when the user needs to copy information, such as a code snippet, to their clipboard.\n    ", function () {
  return _react.default.createElement(_CopyButton.default, {
    feedback: "Copied!",
    onClick: (0, _addonActions.action)('onClick'),
    feedbackTimeout: 3000
  });
});