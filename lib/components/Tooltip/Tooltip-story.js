"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _Tooltip = _interopRequireDefault(require("../Tooltip"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Tooltip', module).addWithInfo('default (bottom)', "\n      Tooltips are used to supply additional information to an element when hovering over it. By default,\n      the tooltip will render above the element. The example below shows the default scenario.\n    ", function () {
  return _react.default.createElement("div", {
    style: {
      marginTop: '2rem'
    }
  }, _react.default.createElement(_Tooltip.default, {
    triggerText: "Tooltip label"
  }, _react.default.createElement("p", {
    className: "bx--tooltip__label"
  }, "Tooltip subtitle"), _react.default.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaeca cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")));
}).addWithInfo('position - top', "\n        Tooltips are used to supply additional information to an element when hovering over it. By default,\n        the tooltip will render above the element. The example below shows specifying the position (supports 'bottom' and 'top')\n      ", function () {
  return _react.default.createElement("div", {
    style: {
      marginTop: '2rem'
    }
  }, _react.default.createElement(_Tooltip.default, {
    triggerText: "Tooltip - top",
    direction: "top"
  }, _react.default.createElement("p", {
    className: "bx--tooltip__label"
  }, "Tooltip subtitle"), _react.default.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaeca cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")));
}).addWithInfo('position - right', "\n      Tooltips are used to supply additional information to an element when hovering over it. By default,\n      the tooltip will render above the element. The example below shows specifying the position (supports 'bottom' and 'top')\n    ", function () {
  return _react.default.createElement("div", {
    style: {
      marginTop: '2rem'
    }
  }, _react.default.createElement(_Tooltip.default, {
    triggerText: "Tooltip - right",
    direction: "right"
  }, _react.default.createElement("p", {
    className: "bx--tooltip__label"
  }, "Tooltip subtitle"), _react.default.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaeca cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")));
}).addWithInfo('position - left', "\n      Tooltips are used to supply additional information to an element when hovering over it. By default,\n      the tooltip will render above the element. The example below shows specifying the position (supports 'bottom' and 'top')\n    ", function () {
  return _react.default.createElement("div", {
    style: {
      marginTop: '2rem'
    }
  }, _react.default.createElement(_Tooltip.default, {
    triggerText: "Tooltip - left",
    direction: "left"
  }, _react.default.createElement("p", {
    className: "bx--tooltip__label"
  }, "Tooltip subtitle"), _react.default.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaeca cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")));
}).addWithInfo('no icon - bottom (default)', "\n      Tooltips are used to supply additional information to an element when hovering over it. By default,\n      the tooltip will render with an information Icon. The example below shows the option to exclude the Icon.\n    ", function () {
  return _react.default.createElement("div", {
    style: {
      marginTop: '2rem'
    }
  }, _react.default.createElement(_Tooltip.default, {
    triggerText: "Tooltip - no icon - bottom (default)",
    showIcon: false
  }, _react.default.createElement("p", {
    className: "bx--tooltip__label"
  }, "Tooltip subtitle"), _react.default.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaeca cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")));
}).addWithInfo('no icon - right', "\n      Tooltips are used to supply additional information to an element when hovering over it. By default,\n      the tooltip will render with an information Icon. The example below shows the option to exclude the Icon.\n    ", function () {
  return _react.default.createElement("div", {
    style: {
      marginTop: '2rem'
    }
  }, _react.default.createElement(_Tooltip.default, {
    triggerText: "Tooltip - no icon - right",
    direction: "right",
    showIcon: false
  }, _react.default.createElement("p", {
    className: "bx--tooltip__label"
  }, "Tooltip subtitle"), _react.default.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaeca cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")));
}).addWithInfo('no icon - left', "\n      Tooltips are used to supply additional information to an element when hovering over it. By default,\n      the tooltip will render with an information Icon. The example below shows the option to exclude the Icon.\n    ", function () {
  return _react.default.createElement("div", {
    style: {
      marginTop: '2rem'
    }
  }, _react.default.createElement(_Tooltip.default, {
    triggerText: "Tooltip - no icon - left",
    direction: "left",
    showIcon: false
  }, ">", _react.default.createElement("p", {
    className: "bx--tooltip__label"
  }, "Tooltip subtitle"), _react.default.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaeca cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")));
}).addWithInfo('click to open', "\n      Tooltips are used to supply additional information to an element when hovering over it. The example\n      below shows the option to open on click instead of hover, which is useful when including interactive\n      elements such as links inside the tooltip.\n    ", function () {
  return _react.default.createElement("div", {
    style: {
      marginTop: '2rem'
    }
  }, _react.default.createElement(_Tooltip.default, {
    clickToOpen: true,
    triggerText: "Tooltip label"
  }, _react.default.createElement("p", {
    className: "bx--tooltip__label"
  }, "Tooltip with link"), _react.default.createElement("a", {
    href: "http://react.carbondesignsystem.com/",
    target: "_blank"
  }, "Visit Carbon React")));
});