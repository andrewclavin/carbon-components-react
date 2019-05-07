import React from 'react';
import { storiesOf } from '@storybook/react';
import FormLabel from './FormLabel';
import Tooltip from '../Tooltip';
var additionalProps = {
  className: 'some-class'
};
storiesOf('FormLabel', module).addWithInfo('Default', "\n    Form label.\n\n  ", function () {
  return React.createElement(FormLabel, additionalProps, "Label");
}).addWithInfo('With tooltip', "\n    Form label with tooltip.\n  ", function () {
  return React.createElement(FormLabel, additionalProps, React.createElement(Tooltip, {
    triggerText: "Label"
  }, "This is the content of the tooltip."));
});