function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import RadioButtonGroup from '../RadioButtonGroup';
import RadioButton from '../RadioButton';
import FormGroup from '../FormGroup';
var radioProps = {
  className: 'some-class'
};
storiesOf('RadioButtonGroup', module).addWithInfo('Default', "\n       The example below shows a Radio Button Group component with a default selected Radio Button.\n       Although you can set the checked prop on the Radio Button, when using the Radio Button component\n       as a child of the Radio Button Group, either set the defaultSelected or valueSelected which will\n       automatically set the selected prop on the corresponding Radio Button component.\n\n       Use defaultSelected when you want a radio button to be selected initially, but don't need to set it\n       at a later time. If you do need to set it dynamically at a later time, then use the valueSelected property instead.\n    ", function () {
  return React.createElement(FormGroup, {
    legendText: "Radio Button heading"
  }, React.createElement(RadioButtonGroup, {
    onChange: action('onChange'),
    name: "radio-button-group",
    defaultSelected: "default-selected",
    legend: "Group Legend"
  }, React.createElement(RadioButton, _extends({
    value: "standard",
    id: "radio-1",
    labelText: "Standard Radio Button label"
  }, radioProps)), React.createElement(RadioButton, _extends({
    value: "default-selected",
    labelText: "Default selected Radio Button",
    id: "radio-2"
  }, radioProps)), React.createElement(RadioButton, _extends({
    value: "disabled",
    labelText: "Disabled Radio Button",
    id: "radio-3",
    disabled: true
  }, radioProps))));
});