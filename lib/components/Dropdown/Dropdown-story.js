"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _Dropdown = _interopRequireDefault(require("../Dropdown"));

var _DropdownItem = _interopRequireDefault(require("../DropdownItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var dropdownEvents = {
  className: 'some-class'
};
(0, _react2.storiesOf)('Dropdown', module).addDecorator(function (story) {
  return _react.default.createElement("div", {
    style: {
      minWidth: '20em'
    }
  }, story());
}).addWithInfo('with default text', "\n      The Dropdown component is used for navigating or filtering existing content.\n      Create Dropdown Item components for each option in the dropdown menu.\n    ", function () {
  return _react.default.createElement(_Dropdown.default, _extends({}, dropdownEvents, {
    ariaLabel: "dropdown menu label",
    onChange: (0, _addonActions.action)('onChange'),
    onOpen: (0, _addonActions.action)('onOpen'),
    onClose: (0, _addonActions.action)('onClose'),
    defaultText: "Dropdown label"
  }), _react.default.createElement(_DropdownItem.default, {
    itemText: "Option 1",
    value: "option1"
  }), _react.default.createElement(_DropdownItem.default, {
    itemText: "Option 2",
    value: "option2"
  }), _react.default.createElement(_DropdownItem.default, {
    itemText: "Option 3",
    value: "option3"
  }), _react.default.createElement(_DropdownItem.default, {
    itemText: "Option 4",
    value: "option4"
  }), _react.default.createElement(_DropdownItem.default, {
    itemText: "Option 5",
    value: "option5"
  }));
}).addWithInfo('with item preselected', "\n      The Dropdown component is used for navigating or filtering existing content.\n      You can also have an option preselected in the dropdown.\n    ", function () {
  return _react.default.createElement(_Dropdown.default, _extends({}, dropdownEvents, {
    onChange: function onChange(selectedItemInfo) {
      return console.log(selectedItemInfo);
    },
    onOpen: (0, _addonActions.action)('onOpen'),
    onClose: (0, _addonActions.action)('onClose'),
    defaultText: "Option 1",
    value: "all"
  }), _react.default.createElement(_DropdownItem.default, {
    itemText: "Option 1",
    value: "option1"
  }), _react.default.createElement(_DropdownItem.default, {
    itemText: "Option 2",
    value: "option2"
  }), _react.default.createElement(_DropdownItem.default, {
    itemText: "Option 3",
    value: "option3"
  }), _react.default.createElement(_DropdownItem.default, {
    itemText: "Option 4",
    value: "option4"
  }), _react.default.createElement(_DropdownItem.default, {
    itemText: "Option 5",
    value: "option5"
  }));
}).addWithInfo('disabled', "\n      The Dropdown component is used for navigating or filtering existing content.\n      You can also have an option preselected in the dropdown.\n    ", function () {
  return _react.default.createElement(_Dropdown.default, _extends({}, dropdownEvents, {
    onChange: function onChange(selectedItemInfo) {
      return console.log(selectedItemInfo);
    },
    onOpen: (0, _addonActions.action)('onOpen'),
    onClose: (0, _addonActions.action)('onClose'),
    defaultText: "Dropdown label",
    disabled: true
  }), _react.default.createElement(_DropdownItem.default, {
    itemText: "Option 1",
    value: "option1"
  }), _react.default.createElement(_DropdownItem.default, {
    itemText: "Option 2",
    value: "option2"
  }), _react.default.createElement(_DropdownItem.default, {
    itemText: "Option 3",
    value: "option3"
  }), _react.default.createElement(_DropdownItem.default, {
    itemText: "Option 4",
    value: "option4"
  }), _react.default.createElement(_DropdownItem.default, {
    itemText: "Option 5",
    value: "option5"
  }));
}).addWithInfo('with pre-selected value', "\n        The Dropdown component is used for navigating or filtering existing content.\n        You can also have an option preselected in the dropdown.\n      ", function () {
  return _react.default.createElement(_Dropdown.default, _extends({}, dropdownEvents, {
    onChange: function onChange(selectedItemInfo) {
      return console.log(selectedItemInfo);
    },
    onOpen: (0, _addonActions.action)('onOpen'),
    onClose: (0, _addonActions.action)('onClose'),
    defaultText: "Dropdown label",
    value: "all",
    selectedText: "Option 4"
  }), _react.default.createElement(_DropdownItem.default, {
    itemText: "Option 1",
    value: "option1"
  }), _react.default.createElement(_DropdownItem.default, {
    itemText: "Option 2",
    value: "option2"
  }), _react.default.createElement(_DropdownItem.default, {
    itemText: "Option 3",
    value: "option3"
  }), _react.default.createElement(_DropdownItem.default, {
    itemText: "Option 4",
    value: "option4"
  }), _react.default.createElement(_DropdownItem.default, {
    itemText: "Option 5",
    value: "option5"
  }));
});