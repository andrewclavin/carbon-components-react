function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { storiesOf } from '@storybook/react';
import Loading from '../Loading';
var loadingProps = {
  active: true,
  className: 'some-class'
};
storiesOf('Loading', module).addWithInfo('Loading with overlay', "\n      Loading spinners are used when retrieving data or performing slow computations,\n      and help to notify users that loading is underway. The 'active' property is true by default;\n      set to false to end the animation.\n    ", function () {
  return React.createElement(Loading, loadingProps);
}).addWithInfo('Loading without overlay', "\n      Loading spinners are used when retrieving data or performing slow computations,\n      and help to notify users that loading is underway. The 'active' property is true by default;\n      set to false to end the animation.\n    ", function () {
  return React.createElement(Loading, _extends({}, loadingProps, {
    withOverlay: false
  }));
}).addWithInfo('Small loading', "\n      Loading spinners are used when retrieving data or performing slow computations,\n      and help to notify users that loading is underway. The 'active' property is true by default;\n      set to false to end the animation.\n    ", function () {
  return React.createElement(Loading, _extends({}, loadingProps, {
    small: true,
    withOverlay: false
  }));
});