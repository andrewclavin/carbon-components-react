function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* eslint-disable no-console */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Dropdown from '../Dropdown';
import DropdownItem from '../DropdownItem';
var dropdownEvents = {
  className: 'some-class'
};
storiesOf('Dropdown', module).addDecorator(function (story) {
  return React.createElement("div", {
    style: {
      minWidth: '20em'
    }
  }, story());
}).addWithInfo('with default text', "\n      The Dropdown component is used for navigating or filtering existing content.\n      Create Dropdown Item components for each option in the dropdown menu.\n    ", function () {
  return React.createElement(Dropdown, _extends({}, dropdownEvents, {
    ariaLabel: "dropdown menu label",
    onChange: action('onChange'),
    onOpen: action('onOpen'),
    onClose: action('onClose'),
    defaultText: "Dropdown label"
  }), React.createElement(DropdownItem, {
    itemText: "Option 1",
    value: "option1"
  }), React.createElement(DropdownItem, {
    itemText: "Option 2",
    value: "option2"
  }), React.createElement(DropdownItem, {
    itemText: "Option 3",
    value: "option3"
  }), React.createElement(DropdownItem, {
    itemText: "Option 4",
    value: "option4"
  }), React.createElement(DropdownItem, {
    itemText: "Option 5",
    value: "option5"
  }));
}).addWithInfo('with item preselected', "\n      The Dropdown component is used for navigating or filtering existing content.\n      You can also have an option preselected in the dropdown.\n    ", function () {
  return React.createElement(Dropdown, _extends({}, dropdownEvents, {
    onChange: function onChange(selectedItemInfo) {
      return console.log(selectedItemInfo);
    },
    onOpen: action('onOpen'),
    onClose: action('onClose'),
    defaultText: "Option 1",
    value: "all"
  }), React.createElement(DropdownItem, {
    itemText: "Option 1",
    value: "option1"
  }), React.createElement(DropdownItem, {
    itemText: "Option 2",
    value: "option2"
  }), React.createElement(DropdownItem, {
    itemText: "Option 3",
    value: "option3"
  }), React.createElement(DropdownItem, {
    itemText: "Option 4",
    value: "option4"
  }), React.createElement(DropdownItem, {
    itemText: "Option 5",
    value: "option5"
  }));
}).addWithInfo('disabled', "\n      The Dropdown component is used for navigating or filtering existing content.\n      You can also have an option preselected in the dropdown.\n    ", function () {
  return React.createElement(Dropdown, _extends({}, dropdownEvents, {
    onChange: function onChange(selectedItemInfo) {
      return console.log(selectedItemInfo);
    },
    onOpen: action('onOpen'),
    onClose: action('onClose'),
    defaultText: "Dropdown label",
    disabled: true
  }), React.createElement(DropdownItem, {
    itemText: "Option 1",
    value: "option1"
  }), React.createElement(DropdownItem, {
    itemText: "Option 2",
    value: "option2"
  }), React.createElement(DropdownItem, {
    itemText: "Option 3",
    value: "option3"
  }), React.createElement(DropdownItem, {
    itemText: "Option 4",
    value: "option4"
  }), React.createElement(DropdownItem, {
    itemText: "Option 5",
    value: "option5"
  }));
}).addWithInfo('with pre-selected value', "\n        The Dropdown component is used for navigating or filtering existing content.\n        You can also have an option preselected in the dropdown.\n      ", function () {
  return React.createElement(Dropdown, _extends({}, dropdownEvents, {
    onChange: function onChange(selectedItemInfo) {
      return console.log(selectedItemInfo);
    },
    onOpen: action('onOpen'),
    onClose: action('onClose'),
    defaultText: "Dropdown label",
    value: "all",
    selectedText: "Option 4"
  }), React.createElement(DropdownItem, {
    itemText: "Option 1",
    value: "option1"
  }), React.createElement(DropdownItem, {
    itemText: "Option 2",
    value: "option2"
  }), React.createElement(DropdownItem, {
    itemText: "Option 3",
    value: "option3"
  }), React.createElement(DropdownItem, {
    itemText: "Option 4",
    value: "option4"
  }), React.createElement(DropdownItem, {
    itemText: "Option 5",
    value: "option5"
  }));
});