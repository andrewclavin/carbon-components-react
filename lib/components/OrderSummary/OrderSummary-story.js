"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _OrderSummary = require("../OrderSummary");

var _Button = _interopRequireDefault(require("../Button"));

var _Dropdown = _interopRequireDefault(require("../Dropdown"));

var _DropdownItem = _interopRequireDefault(require("../DropdownItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-console */
(0, _react2.storiesOf)('OrderSummary', module).addWithInfo('Simple', "\n      This component is used to display the items a user will be purchasing. This version does not include OrderSummaryCategory.\n    ", function () {
  return _react.default.createElement(_OrderSummary.OrderSummary, null, _react.default.createElement(_OrderSummary.OrderSummaryHeader, {
    title: "Order Summary"
  }, _react.default.createElement(_Dropdown.default, {
    ariaLabel: "currency selector",
    onChange: function onChange(selectedItemInfo) {
      return console.log(selectedItemInfo);
    },
    defaultText: "USD"
  }, _react.default.createElement(_DropdownItem.default, {
    itemText: "USD",
    value: "usd"
  }), _react.default.createElement(_DropdownItem.default, {
    itemText: "GBP",
    value: "gbp"
  }), _react.default.createElement(_DropdownItem.default, {
    itemText: "NOK",
    value: "nok"
  }), _react.default.createElement(_DropdownItem.default, {
    itemText: "EUR",
    value: "eur"
  }))), _react.default.createElement(_OrderSummary.OrderSummaryList, null, _react.default.createElement(_OrderSummary.OrderSummaryListItem, null), _react.default.createElement(_OrderSummary.OrderSummaryListItem, {
    text: "Detail 2",
    price: "$20.00"
  }), _react.default.createElement(_OrderSummary.OrderSummaryListItem, {
    text: "Detail 3",
    price: "$40.00"
  })), _react.default.createElement(_OrderSummary.OrderSummaryTotal, {
    summaryText: "Total due now:",
    summaryPrice: "$0.00",
    summaryDetails: "estimated"
  }, _react.default.createElement(_Button.default, null, "Primary Button"), _react.default.createElement(_Button.default, {
    kind: "secondary"
  }, "Primary Button")), _react.default.createElement(_OrderSummary.OrderSummaryFooter, {
    footerText: "Need Help?",
    linkText: "Contact Bluemix Sales",
    href: "www.google.com"
  }));
}).addWithInfo('Category', "\n      This component is used to display the items a user will be purchasing. The category version of OrderSummary can break the items being purchased into categories.\n    ", function () {
  return _react.default.createElement(_OrderSummary.OrderSummary, null, _react.default.createElement(_OrderSummary.OrderSummaryHeader, {
    title: "Order Summary"
  }, _react.default.createElement(_Dropdown.default, {
    onChange: function onChange(selectedItemInfo) {
      return console.log(selectedItemInfo);
    },
    defaultText: "USD"
  }, _react.default.createElement(_DropdownItem.default, {
    itemText: "USD",
    value: "usd"
  }), _react.default.createElement(_DropdownItem.default, {
    itemText: "GBP",
    value: "gbp"
  }), _react.default.createElement(_DropdownItem.default, {
    itemText: "NOK",
    value: "nok"
  }), _react.default.createElement(_DropdownItem.default, {
    itemText: "EUR",
    value: "eur"
  }))), _react.default.createElement(_OrderSummary.OrderSummaryList, null, _react.default.createElement(_OrderSummary.OrderSummaryCategory, null, _react.default.createElement(_OrderSummary.OrderSummaryListItem, null), _react.default.createElement(_OrderSummary.OrderSummaryListItem, {
    text: "Detail 2",
    price: "$20.00"
  }), _react.default.createElement(_OrderSummary.OrderSummaryListItem, {
    text: "Detail 3",
    price: "$40.00"
  })), _react.default.createElement(_OrderSummary.OrderSummaryCategory, null, _react.default.createElement(_OrderSummary.OrderSummaryListItem, null), _react.default.createElement(_OrderSummary.OrderSummaryListItem, {
    text: "Detail 2",
    price: "$20.00"
  }), _react.default.createElement(_OrderSummary.OrderSummaryListItem, {
    text: "Detail 3",
    price: "$40.00"
  })), _react.default.createElement(_OrderSummary.OrderSummaryCategory, null, _react.default.createElement(_OrderSummary.OrderSummaryListItem, null), _react.default.createElement(_OrderSummary.OrderSummaryListItem, {
    text: "Detail 2",
    price: "$20.00"
  }), _react.default.createElement(_OrderSummary.OrderSummaryListItem, {
    text: "Detail 3",
    price: "$40.00"
  }))), _react.default.createElement(_OrderSummary.OrderSummaryTotal, {
    summaryText: "Total due now:",
    summaryPrice: "$0.00",
    summaryDetails: "estimated"
  }, _react.default.createElement(_Button.default, null, "Primary Button"), _react.default.createElement(_Button.default, {
    kind: "secondary"
  }, "Primary Button")), _react.default.createElement(_OrderSummary.OrderSummaryFooter, {
    footerText: "Need Help?",
    linkText: "Contact Bluemix Sales",
    href: "www.google.com"
  }));
});