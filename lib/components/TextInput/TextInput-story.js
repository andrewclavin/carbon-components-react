"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _TextInput = _interopRequireDefault(require("../TextInput"));

var _TextInput2 = _interopRequireDefault(require("../TextInput/TextInput.Skeleton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var TextInputProps = {
  className: 'some-class',
  id: 'test2',
  labelText: 'Text Input label',
  onClick: (0, _addonActions.action)('onClick'),
  onChange: (0, _addonActions.action)('onChange'),
  placeholder: 'Placeholder text'
};
var introText = "\n  Text fields enable the user to interact with and input data. A single line\n  field is used when the input anticipated by the user is a single line of\n  text as opposed to a paragraph.\n";
(0, _react2.storiesOf)('TextInput', module).addWithInfo('enabled', "\n      ".concat(introText, "\n      The example below shows an enabled Text Input component. The default type is 'text' and its\n      value can be either 'string' or 'number'.\n    "), function () {
  return _react.default.createElement(_TextInput.default, TextInputProps);
}).addWithInfo('disabled', "\n      ".concat(introText, "\n      The example below shows a disabled Text Input component.\n    "), function () {
  return _react.default.createElement(_TextInput.default, _extends({
    disabled: true
  }, TextInputProps));
}).addWithInfo('email', "\n      ".concat(introText, "\n      The example below shows an enabled Text Input component with type 'email'.\n    "), function () {
  return _react.default.createElement(_TextInput.default, _extends({}, TextInputProps, {
    type: 'email',
    placeholder: 'Please enter an email'
  }));
}).addWithInfo('password', "\n      ".concat(introText, "\n      The example below shows an enabled Text Input component with type 'password'.\n    "), function () {
  return _react.default.createElement(_TextInput.default, _extends({}, TextInputProps, {
    type: 'password',
    placeholder: 'Please enter a password'
  }));
}).addWithInfo('invalid', "\n      ".concat(introText, "\n      The example below shows an invalid entry in the Text Input.\n    "), function () {
  return _react.default.createElement(_TextInput.default, _extends({}, TextInputProps, {
    invalid: true,
    invalidText: 'A valid value is required'
  }));
}).addWithInfo('no Label', "\n      ".concat(introText, "\n      The example below shows an Text Input with a hidden Label.  Use this property to hide the label visually but still preserve accessibility.\n    "), function () {
  return _react.default.createElement(_TextInput.default, _extends({}, TextInputProps, {
    hideLabel: true
  }));
}).addWithInfo('skeleton', "\n    Placeholder skeleton state to use when content is loading.\n    ", function () {
  return _react.default.createElement("div", null, _react.default.createElement(_TextInput2.default, null), _react.default.createElement(_TextInput2.default, {
    hideLabel: true
  }));
});