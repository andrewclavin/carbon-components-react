"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _Checkbox = _interopRequireDefault(require("../Checkbox"));

var _Checkbox2 = _interopRequireDefault(require("../Checkbox/Checkbox.Skeleton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var checkboxEvents = {
  className: 'some-class',
  onChange: (0, _addonActions.action)('onChange')
};
(0, _react2.storiesOf)('Checkbox', module).addWithInfo('enabled checked', "\n      Checkboxes are used when there is a list of options and the user may select multiple options, including all or none.\n      The example below shows how the Checkbox component can be used as an uncontrolled component that is initially checked\n      by setting the defaultChecked property to true. To use the component in a controlled way, you should set the\n      checked property instead.\n    ", function () {
  return _react.default.createElement("fieldset", {
    className: "bx--fieldset"
  }, _react.default.createElement("legend", {
    className: "bx--label"
  }, "Checkbox heading"), _react.default.createElement(_Checkbox.default, _extends({
    defaultChecked: true
  }, checkboxEvents, {
    id: "checkbox-label-1",
    labelText: "Checkbox label 1"
  })), _react.default.createElement(_Checkbox.default, _extends({
    defaultChecked: true
  }, checkboxEvents, {
    id: "checkbox-label-2",
    labelText: "Checkbox label 2"
  })));
}).addWithInfo('enabled unchecked', "\n      Checkboxes are used when there is a list of options and the user may select multiple options, including all or none.\n      The example below shows how the Checkbox component can be used as an uncontrolled component that is initially\n      unchecked. To use the component in a controlled way, you should set the checked property instead.\n    ", function () {
  return _react.default.createElement("fieldset", {
    className: "bx--fieldset"
  }, _react.default.createElement("legend", {
    className: "bx--label"
  }, "Checkbox heading"), _react.default.createElement(_Checkbox.default, _extends({}, checkboxEvents, {
    id: "checkbox-label-1",
    labelText: "Checkbox label 1"
  })), _react.default.createElement(_Checkbox.default, _extends({}, checkboxEvents, {
    id: "checkbox-label-2",
    labelText: "Checkbox label 2"
  })));
}).addWithInfo('enabled indeterminate', "\n      Checkboxes are used when there is a list of options and the user may select multiple options, including all or none.\n      The example below shows how the Checkbox component can be used as a controlled component that is initially\n      indeterminate.\n    ", function () {
  return _react.default.createElement("fieldset", {
    className: "bx--fieldset"
  }, _react.default.createElement("legend", {
    className: "bx--label"
  }, "Checkbox heading"), _react.default.createElement(_Checkbox.default, _extends({}, checkboxEvents, {
    id: "checkbox-label-1",
    labelText: "Checkbox label 1",
    indeterminate: true
  })), _react.default.createElement(_Checkbox.default, _extends({}, checkboxEvents, {
    id: "checkbox-label-2",
    labelText: "Checkbox label 2",
    indeterminate: true
  })));
}).addWithInfo('disabled', "\n      Checkboxes are used when there is a list of options and the user may select multiple options, including all or none.\n      The example below shows a disabled Checkbox component.\n    ", function () {
  return _react.default.createElement("fieldset", {
    disabled: true,
    className: "bx--fieldset"
  }, _react.default.createElement("legend", {
    className: "bx--label"
  }, "Checkbox heading"), _react.default.createElement(_Checkbox.default, _extends({}, checkboxEvents, {
    id: "checkbox-label-1",
    labelText: "Checkbox label 1"
  })), _react.default.createElement(_Checkbox.default, _extends({}, checkboxEvents, {
    id: "checkbox-label-2",
    labelText: "Checkbox label 2"
  })));
}).addWithInfo('no label', "\n      Checkboxes are used when there is a list of options and the user may select multiple options, including all or none.\n      The example below shows a Checkbox component with a hidden label. Use this property to hide the label visually but still preserve accessibility.\n    ", function () {
  return _react.default.createElement("fieldset", {
    className: "bx--fieldset"
  }, _react.default.createElement("legend", {
    className: "bx--label"
  }, "Checkbox heading"), _react.default.createElement(_Checkbox.default, _extends({}, checkboxEvents, {
    id: "checkbox-label-2",
    labelText: "Checkbox label hidden",
    hideLabel: true,
    wrapperClassName: "wrapper-class"
  })));
}).addWithInfo('skeleton', "\n      Placeholder skeleton state to use when content is loading.\n    ", function () {
  return _react.default.createElement("div", null, _react.default.createElement(_Checkbox2.default, null));
});