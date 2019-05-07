"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _InteriorLeftNav = _interopRequireDefault(require("../InteriorLeftNav"));

var _InteriorLeftNavItem = _interopRequireDefault(require("../InteriorLeftNavItem"));

var _InteriorLeftNavList = _interopRequireDefault(require("../InteriorLeftNavList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('InteriorLeftNav', module).addWithInfo('Default', "\n      Interior left navigation organizes the content structure and provides\n      context to support user orientation. This pattern accommodates the\n      breadth of content and tasks users expect to see.\n    ", function () {
  return _react.default.createElement(_InteriorLeftNav.default, null, _react.default.createElement(_InteriorLeftNavList.default, {
    title: "Example Item 1"
  }, _react.default.createElement(_InteriorLeftNavItem.default, null, _react.default.createElement("a", {
    target: "_blank",
    href: "http://www.carbondesignsystem.com"
  }, "Link Child")), _react.default.createElement(_InteriorLeftNavItem.default, null, _react.default.createElement("a", {
    href: "http://www.carbondesignsystem.com"
  }, "Link Child")), _react.default.createElement(_InteriorLeftNavItem.default, null, _react.default.createElement("a", {
    href: "http://www.carbondesignsystem.com"
  }, "Link Child"))), _react.default.createElement(_InteriorLeftNavList.default, {
    title: "Example Item 2"
  }, _react.default.createElement(_InteriorLeftNavItem.default, null, _react.default.createElement("a", {
    href: "http://www.carbondesignsystem.com"
  }, "Link Child")), _react.default.createElement(_InteriorLeftNavItem.default, null, _react.default.createElement("a", {
    href: "http://www.carbondesignsystem.com"
  }, "Link Child")), _react.default.createElement(_InteriorLeftNavItem.default, null, _react.default.createElement("a", {
    href: "http://www.carbondesignsystem.com"
  }, "Link Child")), _react.default.createElement(_InteriorLeftNavItem.default, null, _react.default.createElement("a", {
    href: "http://www.carbondesignsystem.com"
  }, "Link Child"))), _react.default.createElement(_InteriorLeftNavItem.default, null, _react.default.createElement("a", {
    href: "#example-1"
  }, "Link label")), _react.default.createElement(_InteriorLeftNavItem.default, null, _react.default.createElement("a", {
    href: "http://www.carbondesignsystem.com",
    target: "_blank"
  }, "Link label 2")));
});