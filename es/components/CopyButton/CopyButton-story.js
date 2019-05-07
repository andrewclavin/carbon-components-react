import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import CopyButton from '../CopyButton';
storiesOf('CopyButton', module).addWithInfo('Default', "\n      The copy button can be used when the user needs to copy information, such as a code snippet, to their clipboard.\n    ", function () {
  return React.createElement(CopyButton, {
    feedback: "Copied!",
    onClick: action('onClick'),
    feedbackTimeout: 3000
  });
});