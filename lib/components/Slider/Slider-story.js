"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _Slider = _interopRequireDefault(require("../Slider"));

var _Slider2 = _interopRequireDefault(require("../Slider/Slider.Skeleton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mock = (0, _addonActions.action)('onChange');
(0, _react2.storiesOf)('Slider', module).addWithInfo('default', "\n      Sliders provide a visual indication of adjustable content, where the user can move the handle along a horizontal track to increase or decrease the value.\n    ", function () {
  return _react.default.createElement("div", {
    style: {
      marginTop: '2rem'
    }
  }, _react.default.createElement(_Slider.default, {
    id: "slider",
    value: 50,
    min: 0,
    max: 100,
    step: 1,
    labelText: "Slider Label",
    onChange: mock
  }));
}).addWithInfo('without TextInput', "\n      This example shows the Slider without its accompanying TextInput. This is an exception and the majority of the time the default state should be used.\n    ", function () {
  return _react.default.createElement("div", {
    style: {
      marginTop: '2rem'
    }
  }, _react.default.createElement(_Slider.default, {
    id: "slider",
    value: 50,
    min: 0,
    max: 100,
    step: 1,
    labelText: "Slider Label",
    hideTextInput: true,
    onChange: mock
  }));
}).addWithInfo('disabled', "\n      This example shows the disabled state of the Slider\n    ", function () {
  return _react.default.createElement("div", {
    style: {
      marginTop: '2rem'
    }
  }, _react.default.createElement(_Slider.default, {
    id: "slider",
    value: 50,
    min: 0,
    max: 100,
    step: 1,
    labelText: "Slider Label",
    onChange: mock,
    disabled: true
  }));
}).addWithInfo('skeleton', "\n      Placeholder skeleton state to use when content is loading.\n    ", function () {
  return _react.default.createElement("div", {
    style: {
      marginTop: '2rem'
    }
  }, _react.default.createElement(_Slider2.default, null));
});