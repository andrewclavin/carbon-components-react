function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { storiesOf } from '@storybook/react';
import Pagination from '../Pagination';
import PaginationV2 from '../PaginationV2';
var props = {
  onChange: function onChange(_ref) {
    var page = _ref.page,
        pageSize = _ref.pageSize;
    console.log("Page: ".concat(page), "Page Size: ".concat(pageSize)); // eslint-disable-line no-console
  },
  pageSizes: [10, 20, 30, 40, 50]
};
storiesOf('Pagination', module).addDecorator(function (story) {
  return React.createElement("div", {
    style: {
      width: '800px'
    }
  }, story());
}).addWithInfo('v2', "\n      V2 version of the Pagination\n    ", function () {
  return React.createElement(PaginationV2, _extends({}, props, {
    totalItems: 103
  }));
}).addWithInfo('with known total number of items', "\n      The pagination component is used to paginate through items with known total.\n    ", function () {
  return React.createElement(Pagination, _extends({}, props, {
    totalItems: 103
  }));
}).addWithInfo('with unknown total number of items', "\n      The pagination component is used to paginate through items with unknown total.\n    ", function () {
  return React.createElement(Pagination, _extends({}, props, {
    pagesUnknown: true,
    isLastPage: false,
    pageInputDisabled: true
  }));
}).addWithInfo('multipe pagination components', "Showcasing unique ids for each pagination component", function () {
  return React.createElement("div", null, React.createElement(Pagination, _extends({}, props, {
    totalItems: 103
  })), React.createElement(Pagination, _extends({}, props, {
    totalItems: 103
  })));
});