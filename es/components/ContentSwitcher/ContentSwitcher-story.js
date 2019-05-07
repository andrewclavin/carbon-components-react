import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ContentSwitcher from '../ContentSwitcher';
import Switch from '../Switch';
storiesOf('ContentSwitcher', module).addWithInfo('Default', "\n      The Content Switcher component manipulates the content shown following an exclusive or \u201Ceither/or\u201D pattern.\n      Create Switch components for each section in the content switcher.\n    ", function () {
  return React.createElement(ContentSwitcher, {
    onChange: action('onChange')
  }, React.createElement(Switch, {
    kind: "anchor",
    name: "one",
    text: "First section"
  }), React.createElement(Switch, {
    kind: "anchor",
    name: "two",
    text: "Second section"
  }), React.createElement(Switch, {
    kind: "anchor",
    name: "three",
    text: "Third section"
  }));
}).addWithInfo('Selected', "\n      Render the Content Switcher with a different section automatically selected\n    ", function () {
  return React.createElement(ContentSwitcher, {
    selectedIndex: 1,
    onChange: action('onChange')
  }, React.createElement(Switch, {
    kind: "anchor",
    name: "one",
    text: "First section"
  }), React.createElement(Switch, {
    kind: "anchor",
    name: "two",
    text: "Second section"
  }), React.createElement(Switch, {
    kind: "anchor",
    name: "three",
    text: "Third section"
  }));
});