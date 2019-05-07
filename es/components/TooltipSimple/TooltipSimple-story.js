import React from 'react';
import { storiesOf } from '@storybook/react';
import TooltipSimple from '../TooltipSimple';
storiesOf('TooltipSimple', module).addWithInfo('default', "\n      Tooltips are used to supply additional information to an element when hovering over it. By default,\n      the tooltip will render above the element. The example below shows the default scenario.\n    ", function () {
  return React.createElement("div", {
    style: {
      marginTop: '2rem'
    }
  }, React.createElement(TooltipSimple, {
    text: "This is some Tooltip text.",
    className: "some-class"
  }, React.createElement("p", {
    className: "bx--tooltip__trigger"
  }, "Tooltip - hover")));
}).addWithInfo('position', "\n      Tooltips are used to supply additional information to an element when hovering over it. By default,\n      the tooltip will render above the element. The example below shows specifying the position (supports 'bottom' and 'top')\n    ", function () {
  return React.createElement("div", {
    style: {
      marginTop: '2rem'
    }
  }, React.createElement(TooltipSimple, {
    position: "bottom",
    text: "This is some Tooltip text."
  }, React.createElement("p", {
    className: "bx--tooltip__trigger"
  }, "Tooltip - hover")));
}).addWithInfo('no icon', "\n      Tooltips are used to supply additional information to an element when hovering over it. By default,\n      the tooltip will render with an information Icon. The example below shows the option to exclude the Icon.\n    ", function () {
  return React.createElement("div", {
    style: {
      marginTop: '2rem'
    }
  }, React.createElement(TooltipSimple, {
    text: "This is some Tooltip text.",
    showIcon: false
  }, React.createElement("p", {
    className: "bx--tooltip__trigger"
  }, "Tooltip - hover")));
});