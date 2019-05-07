"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _Select = _interopRequireDefault(require("../Select"));

var _SelectItem = _interopRequireDefault(require("../SelectItem"));

var _SelectItemGroup = _interopRequireDefault(require("../SelectItemGroup"));

var _Select2 = _interopRequireDefault(require("../Select/Select.Skeleton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var selectProps = {
  onChange: (0, _addonActions.action)('onChange'),
  className: 'some-class'
};
(0, _react2.storiesOf)('Select', module).addWithInfo('enabled', "\n      Select displays a list below its title when selected. They are used primarily in forms,\n      where a user chooses one option from a list. Once the user selects an item, the dropdown will\n      dissapear and the field will reflect the user's choice. Create Select Item components for each\n      option in the list. The example below shows an enabled Select component with three items.\n    ", function () {
  return _react.default.createElement(_Select.default, _extends({}, selectProps, {
    id: "select-1",
    defaultValue: "placeholder-item"
  }), _react.default.createElement(_SelectItem.default, {
    disabled: true,
    hidden: true,
    value: "placeholder-item",
    text: "Choose an option"
  }), _react.default.createElement(_SelectItemGroup.default, {
    label: "Category 1"
  }, _react.default.createElement(_SelectItem.default, {
    value: "option-1",
    text: "Option 1"
  }), _react.default.createElement(_SelectItem.default, {
    value: "option-2",
    text: "Option 2"
  })), _react.default.createElement(_SelectItemGroup.default, {
    label: "Category 2"
  }, _react.default.createElement(_SelectItem.default, {
    value: "option-3",
    text: "Option 3"
  }), _react.default.createElement(_SelectItem.default, {
    value: "option-4",
    text: "Option 4"
  })));
}).addWithInfo('inline', "\n      Inline select is for use when there will be multiple elements in a row\n    ", function () {
  return _react.default.createElement(_Select.default, _extends({}, selectProps, {
    inline: true,
    id: "select-1",
    defaultValue: "placeholder-item"
  }), _react.default.createElement(_SelectItem.default, {
    disabled: true,
    hidden: true,
    value: "placeholder-item",
    text: "Choose an option"
  }), _react.default.createElement(_SelectItemGroup.default, {
    label: "Starter"
  }, _react.default.createElement(_SelectItem.default, {
    value: "option-1",
    text: "Option 1"
  }), _react.default.createElement(_SelectItem.default, {
    value: "option-2",
    text: "Option 2"
  })), _react.default.createElement(_SelectItemGroup.default, {
    label: "Advanced"
  }, _react.default.createElement(_SelectItem.default, {
    value: "option-3",
    text: "Option 3"
  })));
}).addWithInfo('disabled', "\n      Select displays a list below its title when selected. They are used primarily in forms,\n      where a user chooses one option from a list. Once the user selects an item, the dropdown will\n      dissapear and the field will reflect the user's choice. Create SelectItem components for each\n      option in the list. The example below shows an disabled Select component.\n    ", function () {
  return _react.default.createElement(_Select.default, _extends({
    disabled: true
  }, selectProps, {
    id: "select-2"
  }), _react.default.createElement(_SelectItem.default, {
    disabled: true,
    hidden: true,
    value: "placeholder-item",
    text: "Choose an option"
  }), _react.default.createElement(_SelectItemGroup.default, {
    label: "Category 1"
  }, _react.default.createElement(_SelectItem.default, {
    value: "option-1",
    text: "Option 1"
  }), _react.default.createElement(_SelectItem.default, {
    value: "option-2",
    text: "Option 2"
  })), _react.default.createElement(_SelectItemGroup.default, {
    label: "Category 2"
  }, _react.default.createElement(_SelectItem.default, {
    value: "option-3",
    text: "Option 3"
  })));
}).addWithInfo('no label', "\n      Select displays a list below its title when selected. They are used primarily in forms,\n      where a user chooses one option from a list. Once the user selects an item, the dropdown will\n      dissapear and the field will reflect the user's choice. Create SelectItem components for each\n      option in the list. The example below shows a Select component without a label.\n    ", function () {
  return _react.default.createElement(_Select.default, _extends({}, selectProps, {
    id: "select-3",
    defaultValue: "placeholder-item",
    hideLabel: true
  }), _react.default.createElement(_SelectItem.default, {
    disabled: true,
    hidden: true,
    value: "placeholder-item",
    text: "Choose an option"
  }), _react.default.createElement(_SelectItemGroup.default, {
    label: "Starter"
  }, _react.default.createElement(_SelectItem.default, {
    value: "option-1",
    text: "Option 1"
  }), _react.default.createElement(_SelectItem.default, {
    value: "option-2",
    text: "Option 2"
  })), _react.default.createElement(_SelectItemGroup.default, {
    label: "Category 2"
  }, _react.default.createElement(_SelectItem.default, {
    value: "option-3",
    text: "Option 3"
  }), _react.default.createElement(_SelectItem.default, {
    value: "option-4",
    text: "Option 4"
  })));
}).addWithInfo('skeleton', "\n      Placeholder skeleton state to use when content is loading.\n    ", function () {
  return _react.default.createElement("div", {
    style: {
      width: '300px'
    }
  }, _react.default.createElement(_Select2.default, null));
});