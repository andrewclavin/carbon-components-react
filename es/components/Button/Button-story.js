function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../Button';
import ButtonSkeleton from '../Button/Button.Skeleton';
var buttonEvents = {
  onClick: action('onClick'),
  onFocus: action('onFocus'),
  className: 'some-class'
};
storiesOf('Buttons', module).addWithInfo('Primary Buttons', "\n      Buttons are used to initialize an action, either in the background or\n      foreground of an experience.\n\n      Primary buttons should be used for the principle call to action\n      on the page. Modify the behavior of the button by changing its event properties.\n\n      Small buttons may be used when there is not enough space for a\n      regular sized button. This issue is most found in tables. Small button should have three words\n      or less.\n\n      The example below shows Primary Button component .\n    ", function () {
  return React.createElement("div", null, React.createElement(Button, _extends({}, buttonEvents, {
    className: "some-class"
  }), "Primary button"), "\xA0", React.createElement(Button, _extends({}, buttonEvents, {
    href: "#",
    className: "some-class"
  }), "Primary link"), "\xA0");
}).addWithInfo('Secondary Buttons', "\n      Buttons are used to initialize an action, either in the background or\n      foreground of an experience. Secondary buttons should be used for secondary actions on each page.\n      Modify the behavior of the button by changing its property events.\n      The example below shows a Secondary Button component.\n    ", function () {
  return React.createElement("div", null, React.createElement(Button, _extends({
    kind: "secondary"
  }, buttonEvents, {
    className: "some-class"
  }), "Secondary button"), "\xA0", React.createElement(Button, _extends({
    kind: "secondary"
  }, buttonEvents, {
    href: "#",
    className: "some-class"
  }), "Secondary link"));
}).addWithInfo('Small Buttons', "\n      Small buttons may be used when there is not enough vertical space for a regular sized button. This issue is most\n      commonly found in tables. Small buttons should have three words or less.\n    ", function () {
  return React.createElement("div", null, React.createElement(Button, _extends({
    small: true
  }, buttonEvents, {
    className: "some-class"
  }), "Small primary button"), "\xA0", React.createElement(Button, _extends({
    small: true
  }, buttonEvents, {
    kind: "secondary"
  }), "Small secondary Button"), "\xA0", React.createElement(Button, _extends({
    small: true
  }, buttonEvents, {
    kind: "ghost",
    icon: "add--glyph",
    iconDescription: "Add"
  }), "Small ghost Button"), "\xA0", React.createElement(Button, _extends({
    small: true
  }, buttonEvents, {
    kind: "danger"
  }), "Small danger Button"), "\xA0", React.createElement(Button, _extends({
    small: true
  }, buttonEvents, {
    href: "#",
    className: "some-class"
  }), "Small primary link"));
}).addWithInfo('Disabled Button', "\n      Disabled Buttons may be used when the user cannot proceed until input is collected.\n    ", function () {
  return React.createElement("div", null, React.createElement(Button, _extends({}, buttonEvents, {
    disabled: true
  }), "Disabled button"));
}).addWithInfo('Button with Icon', "\n      When words are not enough, icons can be used in buttons to better communicate what the button does. Icons are\n      always paired with text.\n    ", function () {
  return React.createElement("div", null, React.createElement(Button, _extends({
    icon: "search--glyph",
    iconDescription: "Search"
  }, buttonEvents), "Primary with icon"), "\xA0", React.createElement(Button, _extends({
    kind: "secondary",
    icon: "search--glyph",
    iconDescription: "Search"
  }, buttonEvents), "Secondary with icon"), "\xA0", React.createElement(Button, _extends({
    small: true,
    kind: "primary",
    icon: "search--glyph",
    iconDescription: "Search"
  }, buttonEvents), "Small primary with icon"), "\xA0", React.createElement(Button, _extends({
    small: true,
    kind: "secondary",
    icon: "search--glyph",
    iconDescription: "Search"
  }, buttonEvents), "Small secondary with icon"));
}).addWithInfo('Ghost Buttons', "\n      Buttons are used to initialize an action, either in the background or\n      foreground of an experience. Danger buttons should be used for a negative action (such as Delete)\n      on the page. Modify the behavior of the button by changing its event properties. The example below\n      shows an enabled Danger Button component.\n    ", function () {
  return React.createElement("div", null, React.createElement(Button, _extends({
    kind: "ghost",
    className: "some-class",
    icon: "add--glyph",
    iconDescription: "Add"
  }, buttonEvents), "Ghost button"), "\xA0", React.createElement(Button, _extends({
    kind: "ghost",
    href: "#",
    className: "some-class",
    icon: "add--glyph",
    iconDescription: "Add"
  }, buttonEvents), "Ghost link"));
}).addWithInfo('Danger Buttons', "\n      Buttons are used to initialize an action, either in the background or\n      foreground of an experience. Danger buttons should be used for a negative action (such as Delete)\n      on the page. Modify the behavior of the button by changing its event properties. The example below\n      shows an enabled Danger Button component.\n    ", function () {
  return React.createElement("div", null, React.createElement(Button, _extends({
    kind: "danger"
  }, buttonEvents, {
    className: "some-class"
  }), "Danger button"), "\xA0", React.createElement(Button, _extends({
    kind: "danger"
  }, buttonEvents, {
    href: "#",
    className: "some-class"
  }), "Danger link"), "\xA0", React.createElement(Button, _extends({
    kind: "danger--primary"
  }, buttonEvents, {
    className: "some-class"
  }), "Danger Primary button"), "\xA0", React.createElement(Button, _extends({
    kind: "danger--primary"
  }, buttonEvents, {
    href: "#",
    className: "some-class"
  }), "Danger Primary link"));
}).addWithInfo('Sets of Buttons', "\n      When an action required by the user has more than one option, always use a a negative action button (secondary) paired with a positive action button (primary) in that order. Negative action buttons will be on the left. Positive action buttons should be on the right. When these two types buttons are paired in the correct order, they will automatically space themselves apart.\n    ", function () {
  return React.createElement("div", null, React.createElement(Button, _extends({
    kind: "secondary"
  }, buttonEvents, {
    className: "some-class"
  }), "Secondary button"), React.createElement(Button, _extends({
    kind: "primary"
  }, buttonEvents, {
    className: "some-class"
  }), "Primary button"));
}).addWithInfo('skeleton', "\n      Placeholder skeleton state to use when content is loading.\n    ", function () {
  return React.createElement("div", null, React.createElement(ButtonSkeleton, null), "\xA0", React.createElement(ButtonSkeleton, {
    href: "#"
  }), "\xA0", React.createElement(ButtonSkeleton, {
    small: true
  }));
});