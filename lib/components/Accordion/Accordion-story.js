"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _Accordion = _interopRequireDefault(require("../Accordion"));

var _AccordionItem = _interopRequireDefault(require("../AccordionItem"));

var _Select = _interopRequireDefault(require("../Select"));

var _SelectItem = _interopRequireDefault(require("../SelectItem"));

var _Accordion2 = _interopRequireDefault(require("../Accordion/Accordion.Skeleton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var props = {
  onHeadingClick: function onHeadingClick(_ref) {
    var isOpen = _ref.isOpen;
    console.log("Is open: ".concat(isOpen));
  } // eslint-disable-line no-console

};
(0, _react2.storiesOf)('Accordion', module).addWithInfo('Default', "\n      Accordions allow users to expand and collapse sections of content.\n    ", function () {
  return _react.default.createElement(_Accordion.default, null, _react.default.createElement(_AccordionItem.default, _extends({
    title: "Section 1 title"
  }, props), _react.default.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")), _react.default.createElement(_AccordionItem.default, _extends({
    title: "Section 2 title",
    open: true
  }, props), _react.default.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")), _react.default.createElement(_AccordionItem.default, _extends({
    title: "Section 3 title"
  }, props), _react.default.createElement(_Select.default, {
    onChange: (0, _addonActions.action)('onChange'),
    id: "select-1",
    defaultValue: "placeholder-item"
  }, _react.default.createElement(_SelectItem.default, {
    disabled: true,
    hidden: true,
    value: "placeholder-item",
    text: "Choose an option"
  }), _react.default.createElement(_SelectItem.default, {
    value: "option-1",
    text: "Option 1"
  }), _react.default.createElement(_SelectItem.default, {
    value: "option-2",
    text: "Option 2"
  }), _react.default.createElement(_SelectItem.default, {
    value: "option-3",
    text: "Option 3"
  }))), _react.default.createElement(_AccordionItem.default, _extends({
    title: _react.default.createElement("h4", null, "Section 4 title (", _react.default.createElement("em", null, "the title can be a node"), ")")
  }, props), _react.default.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")));
}).addWithInfo('skeleton', "\n    Placeholder skeleton state to use when content is loading.\n  ", function () {
  return _react.default.createElement("div", {
    style: {
      width: '500px'
    }
  }, _react.default.createElement(_Accordion2.default, null));
});