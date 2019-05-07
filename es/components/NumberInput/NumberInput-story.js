function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import NumberInput from '../NumberInput';
import NumberInputSkeleton from '../NumberInput/NumberInput.Skeleton';
var numberInputProps = {
  className: 'some-class',
  id: 'tj-input',
  label: 'Number Input label',
  onChange: action('onChange'),
  onClick: action('onClick'),
  min: 0,
  max: 100,
  value: 50,
  step: 10,
  invalidText: 'Number is not valid'
};
var introText = "\n  Number inputs are similar to text fields, but contain controls used to increase or decrease an incremental value. The Number Input component can be passed a starting value, a min, a max, and the step.\n";
storiesOf('NumberInput', module).addWithInfo('enabled', "\n      ".concat(introText, "\n      The example below shows an enabled Number Input component.\n    "), function () {
  return React.createElement(NumberInput, numberInputProps);
}).addWithInfo('disabled', "\n      ".concat(introText, "\n      The example below shows an disabled Number Input component.\n    "), function () {
  return React.createElement(NumberInput, _extends({
    disabled: true
  }, numberInputProps));
}).addWithInfo('invalid', "\n      ".concat(introText, "\n      The example below shows an disabled Number Input component.\n    "), function () {
  return React.createElement(NumberInput, _extends({}, numberInputProps, {
    invalid: true
  }));
}).addWithInfo('skeleton', "\n      Placeholder skeleton state to use when content is loading.\n    ", function () {
  return React.createElement(NumberInputSkeleton, null);
});