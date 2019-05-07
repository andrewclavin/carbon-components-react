"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _CodeSnippet = _interopRequireDefault(require("../CodeSnippet"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var copyProps = {
  onClick: (0, _addonActions.action)('onClick'),
  feedback: 'Feedback Enabled 👍'
};
(0, _react2.storiesOf)('CodeSnippet', module).addWithInfo('code', "\n      Code snippets are small blocks of reusable code that can be inserted in a code file.\n\n      The Code style is for larger, multi-line code snippets.\n    ", function () {
  return _react.default.createElement(_CodeSnippet.default, _extends({
    type: "code"
  }, copyProps), "@mixin bx--snippet($type) {\n  @if $type == 'terminal' {\n    background-color: red;\n  } @else if $type == 'code' {\n    background-color: blue;\n  } @else if $type == 'text' {\n    background-color: white;\n  }\n\n  @if $type == 'terminal' {\n    background-color: red;\n  } @else if $type == 'code' {\n    background-color: blue;\n  } @else if $type == 'text' {\n    background-color: white;\n  }\n}\n          ");
}).addWithInfo('terminal', "\n      Code snippets are small blocks of reusable code that can be inserted in a code file.\n\n      The Terminal style is for single-line .\n    ", function () {
  return _react.default.createElement(_CodeSnippet.default, _extends({
    type: "terminal"
  }, copyProps), 'node -v Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, veritatis voluptate id incidunt molestiae officia possimus, quasi itaque alias, architecto hic, dicta fugit? Debitis delectus quidem explicabo vitae fuga laboriosam!');
});