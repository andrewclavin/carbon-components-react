/* eslint-disable no-console */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { OrderSummary, OrderSummaryHeader, OrderSummaryCategory, OrderSummaryList, OrderSummaryListItem, OrderSummaryTotal, OrderSummaryFooter } from '../OrderSummary';
import Button from '../Button';
import Dropdown from '../Dropdown';
import DropdownItem from '../DropdownItem';
storiesOf('OrderSummary', module).addWithInfo('Simple', "\n      This component is used to display the items a user will be purchasing. This version does not include OrderSummaryCategory.\n    ", function () {
  return React.createElement(OrderSummary, null, React.createElement(OrderSummaryHeader, {
    title: "Order Summary"
  }, React.createElement(Dropdown, {
    ariaLabel: "currency selector",
    onChange: function onChange(selectedItemInfo) {
      return console.log(selectedItemInfo);
    },
    defaultText: "USD"
  }, React.createElement(DropdownItem, {
    itemText: "USD",
    value: "usd"
  }), React.createElement(DropdownItem, {
    itemText: "GBP",
    value: "gbp"
  }), React.createElement(DropdownItem, {
    itemText: "NOK",
    value: "nok"
  }), React.createElement(DropdownItem, {
    itemText: "EUR",
    value: "eur"
  }))), React.createElement(OrderSummaryList, null, React.createElement(OrderSummaryListItem, null), React.createElement(OrderSummaryListItem, {
    text: "Detail 2",
    price: "$20.00"
  }), React.createElement(OrderSummaryListItem, {
    text: "Detail 3",
    price: "$40.00"
  })), React.createElement(OrderSummaryTotal, {
    summaryText: "Total due now:",
    summaryPrice: "$0.00",
    summaryDetails: "estimated"
  }, React.createElement(Button, null, "Primary Button"), React.createElement(Button, {
    kind: "secondary"
  }, "Primary Button")), React.createElement(OrderSummaryFooter, {
    footerText: "Need Help?",
    linkText: "Contact Bluemix Sales",
    href: "www.google.com"
  }));
}).addWithInfo('Category', "\n      This component is used to display the items a user will be purchasing. The category version of OrderSummary can break the items being purchased into categories.\n    ", function () {
  return React.createElement(OrderSummary, null, React.createElement(OrderSummaryHeader, {
    title: "Order Summary"
  }, React.createElement(Dropdown, {
    onChange: function onChange(selectedItemInfo) {
      return console.log(selectedItemInfo);
    },
    defaultText: "USD"
  }, React.createElement(DropdownItem, {
    itemText: "USD",
    value: "usd"
  }), React.createElement(DropdownItem, {
    itemText: "GBP",
    value: "gbp"
  }), React.createElement(DropdownItem, {
    itemText: "NOK",
    value: "nok"
  }), React.createElement(DropdownItem, {
    itemText: "EUR",
    value: "eur"
  }))), React.createElement(OrderSummaryList, null, React.createElement(OrderSummaryCategory, null, React.createElement(OrderSummaryListItem, null), React.createElement(OrderSummaryListItem, {
    text: "Detail 2",
    price: "$20.00"
  }), React.createElement(OrderSummaryListItem, {
    text: "Detail 3",
    price: "$40.00"
  })), React.createElement(OrderSummaryCategory, null, React.createElement(OrderSummaryListItem, null), React.createElement(OrderSummaryListItem, {
    text: "Detail 2",
    price: "$20.00"
  }), React.createElement(OrderSummaryListItem, {
    text: "Detail 3",
    price: "$40.00"
  })), React.createElement(OrderSummaryCategory, null, React.createElement(OrderSummaryListItem, null), React.createElement(OrderSummaryListItem, {
    text: "Detail 2",
    price: "$20.00"
  }), React.createElement(OrderSummaryListItem, {
    text: "Detail 3",
    price: "$40.00"
  }))), React.createElement(OrderSummaryTotal, {
    summaryText: "Total due now:",
    summaryPrice: "$0.00",
    summaryDetails: "estimated"
  }, React.createElement(Button, null, "Primary Button"), React.createElement(Button, {
    kind: "secondary"
  }, "Primary Button")), React.createElement(OrderSummaryFooter, {
    footerText: "Need Help?",
    linkText: "Contact Bluemix Sales",
    href: "www.google.com"
  }));
});