"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _Modal = _interopRequireDefault(require("../Modal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var modalProps = {
  onBlur: (0, _addonActions.action)('onBlur'),
  onClick: (0, _addonActions.action)('onClick'),
  onFocus: (0, _addonActions.action)('onFocus'),
  className: 'some-class'
};
(0, _react2.storiesOf)('Modal', module).addWithInfo('transactional', "\n      Modals communicate information via a secondary window and allow the user to maintain the context of a particular task.\n      Use the Modal Wrapper component to encapsulate your Modal within a button.\n    ", function () {
  return _react.default.createElement(_Modal.default, _extends({}, modalProps, {
    open: true,
    modalHeading: "Modal heading",
    modalLabel: "Optional label",
    primaryButtonText: "Primary Button",
    secondaryButtonText: "Secondary Button"
  }), _react.default.createElement("p", {
    className: "bx--modal-content__text"
  }, "Please see ModalWrapper for more examples and demo of the functionality."));
}).addWithInfo('passive', "\n      Passive modals are modals without footers. Add passiveModal prop or set to true to render passive modal.\n    ", function () {
  return _react.default.createElement(_Modal.default, _extends({}, modalProps, {
    open: true,
    passiveModal: true,
    modalHeading: "Modal heading",
    modalLabel: "Optional label",
    primaryButtonText: "Primary Button",
    secondaryButtonText: "Secondary Button"
  }), _react.default.createElement("p", {
    className: "bx--modal-content__text"
  }, "Please see ModalWrapper for more examples and demo of the functionality."));
}).addWithInfo('danger', "\n      For dangerous situations.\n    ", function () {
  return _react.default.createElement(_Modal.default, _extends({}, modalProps, {
    danger: true,
    open: true,
    modalHeading: "Modal heading",
    modalLabel: "Optional label",
    primaryButtonText: "Primary Button",
    secondaryButtonText: "Secondary Button"
  }), _react.default.createElement("p", {
    className: "bx--modal-content__text"
  }, "Please see ModalWrapper for more examples and demo of the functionality."));
});