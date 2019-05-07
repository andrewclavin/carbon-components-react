function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import TextArea from '../TextArea';
import TextAreaSkeleton from '../TextArea/TextArea.Skeleton';
var TextAreaProps = {
  labelText: 'Text Area label',
  className: 'some-class',
  onChange: action('onChange'),
  onClick: action('onClick'),
  placeholder: 'Placeholder text.',
  id: 'test2',
  cols: 50,
  rows: 4
};
storiesOf('TextArea', module).addWithInfo('enabled', "\n      Text areas enable the user to interact with and input data. A text area is used when you\n      anticipate the user to input more than 1 sentence. The example belows shows an enabled\n      Text Area component.\n    ", function () {
  return React.createElement(TextArea, TextAreaProps);
}).addWithInfo('disabled', "\n      Text areas enable the user to interact with and input data. A text area is used when you\n      anticipate the user to input more than 1 sentence. The example belows shows an disabled\n      Text Area component.\n    ", function () {
  return React.createElement(TextArea, _extends({
    disabled: true
  }, TextAreaProps, {
    placeholder: 'Disabled'
  }));
}).addWithInfo('skeleton', "\n      Placeholder skeleton state to use when content is loading.\n    ", function () {
  return React.createElement(TextAreaSkeleton, null);
});