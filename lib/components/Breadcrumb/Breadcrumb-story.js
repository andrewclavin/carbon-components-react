"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _Breadcrumb = _interopRequireDefault(require("../Breadcrumb"));

var _BreadcrumbItem = _interopRequireDefault(require("../BreadcrumbItem"));

var _Breadcrumb2 = _interopRequireDefault(require("../Breadcrumb/Breadcrumb.Skeleton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-console */
var additionalProps = {
  onClick: function onClick() {
    console.log('Clicked!');
  },
  // eslint-disable-line no-console
  className: 'some-class'
};
(0, _react2.storiesOf)('Breadcrumb', module).addWithInfo('Default', "\n      Breadcrumb enables users to quickly see their location within a path of navigation and move up to a parent level if desired.\n    ", function () {
  return _react.default.createElement(_Breadcrumb.default, additionalProps, _react.default.createElement(_BreadcrumbItem.default, null, _react.default.createElement("a", {
    href: "/#"
  }, "Breadcrumb 1")), _react.default.createElement(_BreadcrumbItem.default, {
    href: "#"
  }, "Breadcrumb 2"), _react.default.createElement(_BreadcrumbItem.default, {
    href: "#"
  }, "Breadcrumb 3"));
}).addWithInfo('skeleton', "\n    Placeholder skeleton state to use when content is loading.\n    ", function () {
  return _react.default.createElement(_Breadcrumb2.default, null);
});