import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Slider from '../Slider';
import SliderSkeleton from '../Slider/Slider.Skeleton';
var mock = action('onChange');
storiesOf('Slider', module).addWithInfo('default', "\n      Sliders provide a visual indication of adjustable content, where the user can move the handle along a horizontal track to increase or decrease the value.\n    ", function () {
  return React.createElement("div", {
    style: {
      marginTop: '2rem'
    }
  }, React.createElement(Slider, {
    id: "slider",
    value: 50,
    min: 0,
    max: 100,
    step: 1,
    labelText: "Slider Label",
    onChange: mock
  }));
}).addWithInfo('without TextInput', "\n      This example shows the Slider without its accompanying TextInput. This is an exception and the majority of the time the default state should be used.\n    ", function () {
  return React.createElement("div", {
    style: {
      marginTop: '2rem'
    }
  }, React.createElement(Slider, {
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
  return React.createElement("div", {
    style: {
      marginTop: '2rem'
    }
  }, React.createElement(Slider, {
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
  return React.createElement("div", {
    style: {
      marginTop: '2rem'
    }
  }, React.createElement(SliderSkeleton, null));
});