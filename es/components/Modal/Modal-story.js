function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Modal from '../Modal';
var modalProps = {
  onBlur: action('onBlur'),
  onClick: action('onClick'),
  onFocus: action('onFocus'),
  className: 'some-class'
};
storiesOf('Modal', module).addWithInfo('transactional', "\n      Modals communicate information via a secondary window and allow the user to maintain the context of a particular task.\n      Use the Modal Wrapper component to encapsulate your Modal within a button.\n    ", function () {
  return React.createElement(Modal, _extends({}, modalProps, {
    open: true,
    modalHeading: "Modal heading",
    modalLabel: "Optional label",
    primaryButtonText: "Primary Button",
    secondaryButtonText: "Secondary Button"
  }), React.createElement("p", {
    className: "bx--modal-content__text"
  }, "Please see ModalWrapper for more examples and demo of the functionality."));
}).addWithInfo('passive', "\n      Passive modals are modals without footers. Add passiveModal prop or set to true to render passive modal.\n    ", function () {
  return React.createElement(Modal, _extends({}, modalProps, {
    open: true,
    passiveModal: true,
    modalHeading: "Modal heading",
    modalLabel: "Optional label",
    primaryButtonText: "Primary Button",
    secondaryButtonText: "Secondary Button"
  }), React.createElement("p", {
    className: "bx--modal-content__text"
  }, "Please see ModalWrapper for more examples and demo of the functionality."));
}).addWithInfo('danger', "\n      For dangerous situations.\n    ", function () {
  return React.createElement(Modal, _extends({}, modalProps, {
    danger: true,
    open: true,
    modalHeading: "Modal heading",
    modalLabel: "Optional label",
    primaryButtonText: "Primary Button",
    secondaryButtonText: "Secondary Button"
  }), React.createElement("p", {
    className: "bx--modal-content__text"
  }, "Please see ModalWrapper for more examples and demo of the functionality."));
});