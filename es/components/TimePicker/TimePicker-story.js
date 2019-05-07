import React from 'react';
import { storiesOf } from '@storybook/react';
import TimePicker from '../TimePicker';
import TimePickerSelect from '../TimePickerSelect';
import SelectItem from '../SelectItem';
storiesOf('TimePicker', module).addWithInfo('Default', "\n      The time picker allow users to select a time.\n    ", function () {
  return React.createElement(TimePicker, {
    id: "time-picker",
    labelText: "Select a time"
  }, React.createElement(TimePickerSelect, {
    id: "time-picker-select-1",
    labelText: "Choose AM or PM"
  }, React.createElement(SelectItem, {
    value: "AM",
    text: "AM"
  }), React.createElement(SelectItem, {
    value: "PM",
    text: "PM"
  })), React.createElement(TimePickerSelect, {
    id: "time-picker-select-2",
    labelText: "Choose a timezone"
  }, React.createElement(SelectItem, {
    value: "Timezone 1",
    text: "Timezone 1"
  }), React.createElement(SelectItem, {
    value: "Timezone 2",
    text: "Timezone 2"
  })));
});