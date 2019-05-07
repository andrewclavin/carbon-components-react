"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _Notification = _interopRequireWildcard(require("../Notification"));

var _Link = _interopRequireDefault(require("../Link"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var notificationProps = {
  toast: {
    onCloseButtonClick: (0, _addonActions.action)('onCloseButtonClick'),
    className: 'some-class',
    title: 'Notification title',
    subtitle: 'Subtitle text goes here.',
    caption: 'Time stamp [00:00:00]',
    captionNode: _react.default.createElement(_Link.default, {
      href: "#"
    }, "The caption can be any node."),
    iconDescription: 'describes the close button',
    style: {
      minWidth: '30rem',
      marginBottom: '.5rem'
    }
  },
  inline: {
    onCloseButtonClick: (0, _addonActions.action)('onCloseButtonClick'),
    className: 'some-class',
    title: 'Notification title',
    subtitle: 'Subtitle text goes here.',
    iconDescription: 'describes the close button'
  },
  subtitleNode: _react.default.createElement(_Link.default, {
    href: "#"
  }, "The subtitle can be any node.")
};
(0, _react2.storiesOf)('Notifications', module).addWithInfo('Deprecated: <Notfication />', "\n      Toast notifications are typically passive, meaning they won't affect the user's workflow if not addressed.\n      Toast Notifications use 'kind' props to specify the kind of notification that should render (error, info, success, warning).\n    ", function () {
  return _react.default.createElement("div", null, _react.default.createElement(_Notification.default, _extends({}, notificationProps.toast, {
    kind: "error"
  })), _react.default.createElement(_Notification.default, _extends({}, notificationProps.toast, {
    kind: "info"
  })), _react.default.createElement(_Notification.default, _extends({}, notificationProps.toast, {
    kind: "success"
  })), _react.default.createElement(_Notification.default, _extends({}, notificationProps.toast, {
    kind: "warning"
  })), _react.default.createElement(_Notification.default, _extends({}, notificationProps.inline, {
    kind: "error"
  })), _react.default.createElement(_Notification.default, _extends({}, notificationProps.inline, {
    kind: "info"
  })), _react.default.createElement(_Notification.default, _extends({}, notificationProps.inline, {
    kind: "success"
  })), _react.default.createElement(_Notification.default, _extends({}, notificationProps.inline, {
    kind: "warning"
  })));
}).addWithInfo('Toast', "\n  ...\n  ", function () {
  var toast = notificationProps.toast;
  return _react.default.createElement("div", null, _react.default.createElement(_Notification.ToastNotification, _extends({}, toast, {
    kind: "error"
  })), _react.default.createElement(_Notification.ToastNotification, _extends({}, toast, {
    kind: "info"
  })), _react.default.createElement(_Notification.ToastNotification, _extends({}, toast, {
    kind: "success"
  })), _react.default.createElement(_Notification.ToastNotification, _extends({}, toast, {
    kind: "warning"
  })), _react.default.createElement(_Notification.ToastNotification, _extends({}, _objectSpread({}, toast, {
    subtitle: notificationProps.subtitleNode,
    caption: toast.captionNode
  }), {
    kind: "info"
  })));
}).addWithInfo('inline', "\n  ...\n  ", function () {
  return _react.default.createElement("div", null, _react.default.createElement(_Notification.InlineNotification, _extends({}, notificationProps.inline, {
    kind: "error"
  })), _react.default.createElement(_Notification.InlineNotification, _extends({}, notificationProps.inline, {
    kind: "info"
  })), _react.default.createElement(_Notification.InlineNotification, _extends({}, notificationProps.inline, {
    kind: "success"
  })), _react.default.createElement(_Notification.InlineNotification, _extends({}, notificationProps.inline, {
    kind: "warning"
  })), _react.default.createElement(_Notification.InlineNotification, _extends({}, _objectSpread({}, notificationProps.inline, {
    subtitle: notificationProps.subtitleNode
  }), {
    kind: "info"
  })));
}).addWithInfo('hidden close button', "\n  ...\n  ", function () {
  return _react.default.createElement("div", null, _react.default.createElement(_Notification.ToastNotification, _extends({}, notificationProps.toast, {
    kind: "error",
    hideCloseButton: true
  })), _react.default.createElement(_Notification.ToastNotification, _extends({}, notificationProps.toast, {
    kind: "error"
  })), _react.default.createElement(_Notification.InlineNotification, _extends({}, notificationProps.inline, {
    kind: "info",
    hideCloseButton: true
  })), _react.default.createElement(_Notification.InlineNotification, _extends({}, notificationProps.inline, {
    kind: "success"
  })));
});