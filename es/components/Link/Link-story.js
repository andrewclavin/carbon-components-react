function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* eslint-disable no-console */
import React from 'react';
import { storiesOf } from '@storybook/react';
import Link from '../Link';
var additionalProps = {
  onClick: function onClick() {
    console.log('Clicked!');
  },
  // eslint-disable-line no-console
  className: 'some-class'
};
storiesOf('Link', module).addWithInfo('Default', "\n      Links are typically used as a means of navigation either within the application, to a place outside, or to a resource.\n      For anything else, especially things that change data, you should be using a button.\n    ", function () {
  return React.createElement(Link, _extends({
    href: "#"
  }, additionalProps), "Link");
});