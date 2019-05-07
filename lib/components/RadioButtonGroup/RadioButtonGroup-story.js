"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _RadioButtonGroup = _interopRequireDefault(require("../RadioButtonGroup"));

var _RadioButton = _interopRequireDefault(require("../RadioButton"));

var _FormGroup = _interopRequireDefault(require("../FormGroup"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var radioProps = {
  className: 'some-class'
};
(0, _react2.storiesOf)('RadioButtonGroup', module).addWithInfo('Default', "\n       The example below shows a Radio Button Group component with a default selected Radio Button.\n       Although you can set the checked prop on the Radio Button, when using the Radio Button component\n       as a child of the Radio Button Group, either set the defaultSelected or valueSelected which will\n       automatically set the selected prop on the corresponding Radio Button component.\n\n       Use defaultSelected when you want a radio button to be selected initially, but don't need to set it\n       at a later time. If you do need to set it dynamically at a later time, then use the valueSelected property instead.\n    ", function () {
  return _react.default.createElement(_FormGroup.default, {
    legendText: "Radio Button heading"
  }, _react.default.createElement(_RadioButtonGroup.default, {
    onChange: (0, _addonActions.action)('onChange'),
    name: "radio-button-group",
    defaultSelected: "default-selected",
    legend: "Group Legend"
  }, _react.default.createElement(_RadioButton.default, _extends({
    value: "standard",
    id: "radio-1",
    labelText: "Standard Radio Button label"
  }, radioProps)), _react.default.createElement(_RadioButton.default, _extends({
    value: "default-selected",
    labelText: "Default selected Radio Button",
    id: "radio-2"
  }, radioProps)), _react.default.createElement(_RadioButton.default, _extends({
    value: "disabled",
    labelText: "Disabled Radio Button",
    id: "radio-3",
    disabled: true
  }, radioProps))));
});