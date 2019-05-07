"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _SkeletonText = _interopRequireDefault(require("../SkeletonText"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-console */
(0, _react2.storiesOf)('SkeletonText', module).addWithInfo('heading', "\n      Skeleton states are used as a progressive loading state while the user waits for content to load.\n\n      This example shows a skeleton state for a heading. \n    ", function () {
  return _react.default.createElement("div", {
    style: {
      width: '300px'
    }
  }, _react.default.createElement(_SkeletonText.default, {
    heading: true
  }));
}).addWithInfo('paragraph', "\n      Skeleton states are used as a progressive loading state while the user waits for content to load.\n\n      This example shows a skeleton state for a paragraph of text.\n    ", function () {
  return _react.default.createElement("div", {
    style: {
      width: '500px'
    }
  }, _react.default.createElement(_SkeletonText.default, {
    paragraph: true
  }), _react.default.createElement("br", null), _react.default.createElement(_SkeletonText.default, {
    width: "250px",
    lineCount: 8,
    paragraph: true
  }));
});