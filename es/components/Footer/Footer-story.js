import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Footer from '../Footer';
var additionalProps = {
  onClick: action('onClick'),
  className: 'some-class',
  labelOne: 'Need Help?',
  linkTextOne: 'Contact Bluemix Sales',
  linkHrefOne: 'www.google.com',
  labelTwo: 'Estimate Monthly Cost',
  linkTextTwo: 'Cost Calculator',
  linkHrefTwo: 'www.google.com',
  buttonText: 'Create'
};
storiesOf('Footer', module).addWithInfo('Default', "\n      Footer is used on configuration screens.\n    ", function () {
  return React.createElement(Footer, additionalProps);
}).addWithInfo('Custom', "\n      This footer allows custom elements to be placed inside.\n    ", function () {
  return React.createElement(Footer, {
    className: "some-class"
  }, "This is a test Footer.");
});