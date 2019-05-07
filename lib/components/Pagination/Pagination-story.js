"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _Pagination = _interopRequireDefault(require("../Pagination"));

var _PaginationV = _interopRequireDefault(require("../PaginationV2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var props = {
  onChange: function onChange(_ref) {
    var page = _ref.page,
        pageSize = _ref.pageSize;
    console.log("Page: ".concat(page), "Page Size: ".concat(pageSize)); // eslint-disable-line no-console
  },
  pageSizes: [10, 20, 30, 40, 50]
};
(0, _react2.storiesOf)('Pagination', module).addDecorator(function (story) {
  return _react.default.createElement("div", {
    style: {
      width: '800px'
    }
  }, story());
}).addWithInfo('v2', "\n      V2 version of the Pagination\n    ", function () {
  return _react.default.createElement(_PaginationV.default, _extends({}, props, {
    totalItems: 103
  }));
}).addWithInfo('with known total number of items', "\n      The pagination component is used to paginate through items with known total.\n    ", function () {
  return _react.default.createElement(_Pagination.default, _extends({}, props, {
    totalItems: 103
  }));
}).addWithInfo('with unknown total number of items', "\n      The pagination component is used to paginate through items with unknown total.\n    ", function () {
  return _react.default.createElement(_Pagination.default, _extends({}, props, {
    pagesUnknown: true,
    isLastPage: false,
    pageInputDisabled: true
  }));
}).addWithInfo('multipe pagination components', "Showcasing unique ids for each pagination component", function () {
  return _react.default.createElement("div", null, _react.default.createElement(_Pagination.default, _extends({}, props, {
    totalItems: 103
  })), _react.default.createElement(_Pagination.default, _extends({}, props, {
    totalItems: 103
  })));
});