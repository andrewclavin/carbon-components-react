"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _DataTableSkeleton = _interopRequireDefault(require("../DataTableSkeleton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-console */
(0, _react2.storiesOf)('DataTableSkeleton', module).addWithInfo('default', "\n      Skeleton states are used as a progressive loading state while the user waits for content to load.\n\n      This example shows a skeleton state for a data table.\n    ", function () {
  return _react.default.createElement("div", {
    style: {
      width: '800px'
    }
  }, _react.default.createElement(_DataTableSkeleton.default, null), _react.default.createElement("br", null));
}).addWithInfo('zebra', "\n      Skeleton states are used as a progressive loading state while the user waits for content to load.\n\n      This example shows a skeleton state for a data table.\n    ", function () {
  return _react.default.createElement("div", {
    style: {
      width: '800px'
    }
  }, _react.default.createElement(_DataTableSkeleton.default, {
    zebra: true
  }));
}).addWithInfo('compact', "\n      Skeleton states are used as a progressive loading state while the user waits for content to load.\n\n      This example shows a skeleton state for a compact data table.\n    ", function () {
  return _react.default.createElement("div", {
    style: {
      width: '800px'
    }
  }, _react.default.createElement(_DataTableSkeleton.default, {
    compact: true,
    zebra: true,
    rowCount: 10
  }));
});