function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* eslint-disable no-console */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Accordion from '../Accordion';
import AccordionItem from '../AccordionItem';
import Select from '../Select';
import SelectItem from '../SelectItem';
import AccordionSkeleton from '../Accordion/Accordion.Skeleton';
var props = {
  onHeadingClick: function onHeadingClick(_ref) {
    var isOpen = _ref.isOpen;
    console.log("Is open: ".concat(isOpen));
  } // eslint-disable-line no-console

};
storiesOf('Accordion', module).addWithInfo('Default', "\n      Accordions allow users to expand and collapse sections of content.\n    ", function () {
  return React.createElement(Accordion, null, React.createElement(AccordionItem, _extends({
    title: "Section 1 title"
  }, props), React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")), React.createElement(AccordionItem, _extends({
    title: "Section 2 title",
    open: true
  }, props), React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")), React.createElement(AccordionItem, _extends({
    title: "Section 3 title"
  }, props), React.createElement(Select, {
    onChange: action('onChange'),
    id: "select-1",
    defaultValue: "placeholder-item"
  }, React.createElement(SelectItem, {
    disabled: true,
    hidden: true,
    value: "placeholder-item",
    text: "Choose an option"
  }), React.createElement(SelectItem, {
    value: "option-1",
    text: "Option 1"
  }), React.createElement(SelectItem, {
    value: "option-2",
    text: "Option 2"
  }), React.createElement(SelectItem, {
    value: "option-3",
    text: "Option 3"
  }))), React.createElement(AccordionItem, _extends({
    title: React.createElement("h4", null, "Section 4 title (", React.createElement("em", null, "the title can be a node"), ")")
  }, props), React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")));
}).addWithInfo('skeleton', "\n    Placeholder skeleton state to use when content is loading.\n  ", function () {
  return React.createElement("div", {
    style: {
      width: '500px'
    }
  }, React.createElement(AccordionSkeleton, null));
});