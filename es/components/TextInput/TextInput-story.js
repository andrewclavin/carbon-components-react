function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import TextInput from '../TextInput';
import TextInputSkeleton from '../TextInput/TextInput.Skeleton';
var TextInputProps = {
  className: 'some-class',
  id: 'test2',
  labelText: 'Text Input label',
  onClick: action('onClick'),
  onChange: action('onChange'),
  placeholder: 'Placeholder text'
};
var introText = "\n  Text fields enable the user to interact with and input data. A single line\n  field is used when the input anticipated by the user is a single line of\n  text as opposed to a paragraph.\n";
storiesOf('TextInput', module).addWithInfo('enabled', "\n      ".concat(introText, "\n      The example below shows an enabled Text Input component. The default type is 'text' and its\n      value can be either 'string' or 'number'.\n    "), function () {
  return React.createElement(TextInput, TextInputProps);
}).addWithInfo('disabled', "\n      ".concat(introText, "\n      The example below shows a disabled Text Input component.\n    "), function () {
  return React.createElement(TextInput, _extends({
    disabled: true
  }, TextInputProps));
}).addWithInfo('email', "\n      ".concat(introText, "\n      The example below shows an enabled Text Input component with type 'email'.\n    "), function () {
  return React.createElement(TextInput, _extends({}, TextInputProps, {
    type: 'email',
    placeholder: 'Please enter an email'
  }));
}).addWithInfo('password', "\n      ".concat(introText, "\n      The example below shows an enabled Text Input component with type 'password'.\n    "), function () {
  return React.createElement(TextInput, _extends({}, TextInputProps, {
    type: 'password',
    placeholder: 'Please enter a password'
  }));
}).addWithInfo('invalid', "\n      ".concat(introText, "\n      The example below shows an invalid entry in the Text Input.\n    "), function () {
  return React.createElement(TextInput, _extends({}, TextInputProps, {
    invalid: true,
    invalidText: 'A valid value is required'
  }));
}).addWithInfo('no Label', "\n      ".concat(introText, "\n      The example below shows an Text Input with a hidden Label.  Use this property to hide the label visually but still preserve accessibility.\n    "), function () {
  return React.createElement(TextInput, _extends({}, TextInputProps, {
    hideLabel: true
  }));
}).addWithInfo('skeleton', "\n    Placeholder skeleton state to use when content is loading.\n    ", function () {
  return React.createElement("div", null, React.createElement(TextInputSkeleton, null), React.createElement(TextInputSkeleton, {
    hideLabel: true
  }));
});