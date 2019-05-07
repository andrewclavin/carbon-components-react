"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _TooltipSimple = _interopRequireDefault(require("../TooltipSimple"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('TooltipSimple', module).addWithInfo('default', "\n      Tooltips are used to supply additional information to an element when hovering over it. By default,\n      the tooltip will render above the element. The example below shows the default scenario.\n    ", function () {
  return _react.default.createElement("div", {
    style: {
      marginTop: '2rem'
    }
  }, _react.default.createElement(_TooltipSimple.default, {
    text: "This is some Tooltip text.",
    className: "some-class"
  }, _react.default.createElement("p", {
    className: "bx--tooltip__trigger"
  }, "Tooltip - hover")));
}).addWithInfo('position', "\n      Tooltips are used to supply additional information to an element when hovering over it. By default,\n      the tooltip will render above the element. The example below shows specifying the position (supports 'bottom' and 'top')\n    ", function () {
  return _react.default.createElement("div", {
    style: {
      marginTop: '2rem'
    }
  }, _react.default.createElement(_TooltipSimple.default, {
    position: "bottom",
    text: "This is some Tooltip text."
  }, _react.default.createElement("p", {
    className: "bx--tooltip__trigger"
  }, "Tooltip - hover")));
}).addWithInfo('no icon', "\n      Tooltips are used to supply additional information to an element when hovering over it. By default,\n      the tooltip will render with an information Icon. The example below shows the option to exclude the Icon.\n    ", function () {
  return _react.default.createElement("div", {
    style: {
      marginTop: '2rem'
    }
  }, _react.default.createElement(_TooltipSimple.default, {
    text: "This is some Tooltip text.",
    showIcon: false
  }, _react.default.createElement("p", {
    className: "bx--tooltip__trigger"
  }, "Tooltip - hover")));
});