function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Notification, { ToastNotification, InlineNotification } from '../Notification';
import Link from '../Link';
var notificationProps = {
  toast: {
    onCloseButtonClick: action('onCloseButtonClick'),
    className: 'some-class',
    title: 'Notification title',
    subtitle: 'Subtitle text goes here.',
    caption: 'Time stamp [00:00:00]',
    captionNode: React.createElement(Link, {
      href: "#"
    }, "The caption can be any node."),
    iconDescription: 'describes the close button',
    style: {
      minWidth: '30rem',
      marginBottom: '.5rem'
    }
  },
  inline: {
    onCloseButtonClick: action('onCloseButtonClick'),
    className: 'some-class',
    title: 'Notification title',
    subtitle: 'Subtitle text goes here.',
    iconDescription: 'describes the close button'
  },
  subtitleNode: React.createElement(Link, {
    href: "#"
  }, "The subtitle can be any node.")
};
storiesOf('Notifications', module).addWithInfo('Deprecated: <Notfication />', "\n      Toast notifications are typically passive, meaning they won't affect the user's workflow if not addressed.\n      Toast Notifications use 'kind' props to specify the kind of notification that should render (error, info, success, warning).\n    ", function () {
  return React.createElement("div", null, React.createElement(Notification, _extends({}, notificationProps.toast, {
    kind: "error"
  })), React.createElement(Notification, _extends({}, notificationProps.toast, {
    kind: "info"
  })), React.createElement(Notification, _extends({}, notificationProps.toast, {
    kind: "success"
  })), React.createElement(Notification, _extends({}, notificationProps.toast, {
    kind: "warning"
  })), React.createElement(Notification, _extends({}, notificationProps.inline, {
    kind: "error"
  })), React.createElement(Notification, _extends({}, notificationProps.inline, {
    kind: "info"
  })), React.createElement(Notification, _extends({}, notificationProps.inline, {
    kind: "success"
  })), React.createElement(Notification, _extends({}, notificationProps.inline, {
    kind: "warning"
  })));
}).addWithInfo('Toast', "\n  ...\n  ", function () {
  var toast = notificationProps.toast;
  return React.createElement("div", null, React.createElement(ToastNotification, _extends({}, toast, {
    kind: "error"
  })), React.createElement(ToastNotification, _extends({}, toast, {
    kind: "info"
  })), React.createElement(ToastNotification, _extends({}, toast, {
    kind: "success"
  })), React.createElement(ToastNotification, _extends({}, toast, {
    kind: "warning"
  })), React.createElement(ToastNotification, _extends({}, _objectSpread({}, toast, {
    subtitle: notificationProps.subtitleNode,
    caption: toast.captionNode
  }), {
    kind: "info"
  })));
}).addWithInfo('inline', "\n  ...\n  ", function () {
  return React.createElement("div", null, React.createElement(InlineNotification, _extends({}, notificationProps.inline, {
    kind: "error"
  })), React.createElement(InlineNotification, _extends({}, notificationProps.inline, {
    kind: "info"
  })), React.createElement(InlineNotification, _extends({}, notificationProps.inline, {
    kind: "success"
  })), React.createElement(InlineNotification, _extends({}, notificationProps.inline, {
    kind: "warning"
  })), React.createElement(InlineNotification, _extends({}, _objectSpread({}, notificationProps.inline, {
    subtitle: notificationProps.subtitleNode
  }), {
    kind: "info"
  })));
}).addWithInfo('hidden close button', "\n  ...\n  ", function () {
  return React.createElement("div", null, React.createElement(ToastNotification, _extends({}, notificationProps.toast, {
    kind: "error",
    hideCloseButton: true
  })), React.createElement(ToastNotification, _extends({}, notificationProps.toast, {
    kind: "error"
  })), React.createElement(InlineNotification, _extends({}, notificationProps.inline, {
    kind: "info",
    hideCloseButton: true
  })), React.createElement(InlineNotification, _extends({}, notificationProps.inline, {
    kind: "success"
  })));
});