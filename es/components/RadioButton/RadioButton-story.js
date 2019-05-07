function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import RadioButton from '../RadioButton';
import RadioButtonSkeleton from '../RadioButton/RadioButton.Skeleton';
var radioProps = {
  className: 'some-class'
};
storiesOf('RadioButton', module).addWithInfo('enabled', "\n      Radio buttons are used when a list of two or more options are mutually exclusive,\n      meaning the user must select only one option. The example below shows how the Radio Button component\n      can be used as an uncontrolled component that is initially checked by setting the defaultChecked property\n      to true. To use the component in a controlled way, set the checked property instead.\n    ", function () {
  return React.createElement(RadioButton, _extends({
    name: "test",
    onChange: action('onChange'),
    value: "standard",
    labelText: "Standard Radio Button",
    id: "radio-1"
  }, radioProps));
}).addWithInfo('disabled', "\n      Radio buttons are used when a list of two or more options are mutually exclusive,\n      meaning the user must select only one option. The example below shows a disabled Radio Button component.\n    ", function () {
  return React.createElement(RadioButton, _extends({
    name: "test-2",
    value: "disabled",
    labelText: "Disabled Radio Button",
    id: "radio-2",
    disabled: true
  }, radioProps));
}).addWithInfo('skeleton', "\n      Placeholder skeleton state to use when content is loading.\n    ", function () {
  return React.createElement("div", null, React.createElement(RadioButtonSkeleton, null));
});