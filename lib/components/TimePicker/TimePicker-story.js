"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _TimePicker = _interopRequireDefault(require("../TimePicker"));

var _TimePickerSelect = _interopRequireDefault(require("../TimePickerSelect"));

var _SelectItem = _interopRequireDefault(require("../SelectItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('TimePicker', module).addWithInfo('Default', "\n      The time picker allow users to select a time.\n    ", function () {
  return _react.default.createElement(_TimePicker.default, {
    id: "time-picker",
    labelText: "Select a time"
  }, _react.default.createElement(_TimePickerSelect.default, {
    id: "time-picker-select-1",
    labelText: "Choose AM or PM"
  }, _react.default.createElement(_SelectItem.default, {
    value: "AM",
    text: "AM"
  }), _react.default.createElement(_SelectItem.default, {
    value: "PM",
    text: "PM"
  })), _react.default.createElement(_TimePickerSelect.default, {
    id: "time-picker-select-2",
    labelText: "Choose a timezone"
  }, _react.default.createElement(_SelectItem.default, {
    value: "Timezone 1",
    text: "Timezone 1"
  }), _react.default.createElement(_SelectItem.default, {
    value: "Timezone 2",
    text: "Timezone 2"
  })));
});