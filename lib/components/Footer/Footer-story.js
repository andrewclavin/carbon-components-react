"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _Footer = _interopRequireDefault(require("../Footer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var additionalProps = {
  onClick: (0, _addonActions.action)('onClick'),
  className: 'some-class',
  labelOne: 'Need Help?',
  linkTextOne: 'Contact Bluemix Sales',
  linkHrefOne: 'www.google.com',
  labelTwo: 'Estimate Monthly Cost',
  linkTextTwo: 'Cost Calculator',
  linkHrefTwo: 'www.google.com',
  buttonText: 'Create'
};
(0, _react2.storiesOf)('Footer', module).addWithInfo('Default', "\n      Footer is used on configuration screens.\n    ", function () {
  return _react.default.createElement(_Footer.default, additionalProps);
}).addWithInfo('Custom', "\n      This footer allows custom elements to be placed inside.\n    ", function () {
  return _react.default.createElement(_Footer.default, {
    className: "some-class"
  }, "This is a test Footer.");
});