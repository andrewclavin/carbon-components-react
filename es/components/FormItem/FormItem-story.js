import React from 'react';
import { storiesOf } from '@storybook/react';
import FormItem from './FormItem';
import NumberInput from '../NumberInput';
storiesOf('FormItem', module).addWithInfo('Default', "\n    Form item.\n\n  ", function () {
  return React.createElement(FormItem, null, React.createElement(NumberInput, {
    id: "number-input-1"
  }));
});