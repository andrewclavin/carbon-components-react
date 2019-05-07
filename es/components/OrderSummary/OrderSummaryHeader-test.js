import React from 'react';
import { OrderSummaryHeader } from '../OrderSummary';
import Dropdown from '../Dropdown';
import DropdownItem from '../DropdownItem';
import { mount } from 'enzyme';
describe('OrderSummaryHeader', function () {
  describe('Renders as expected', function () {
    var orderSummaryHeader = mount(React.createElement(OrderSummaryHeader, {
      className: "some-class",
      title: "Order Summary"
    }, React.createElement(Dropdown, {
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
    }))));
    it('renders Order Summary Header', function () {
      expect(orderSummaryHeader.length).toEqual(1);
    });
    it('should render with the appropriate classes', function () {
      expect(orderSummaryHeader.children().hasClass('bx--order-header')).toEqual(true);
      expect(orderSummaryHeader.children().hasClass('some-class')).toEqual(true);
    });
    it('should render with the correct title', function () {
      expect(orderSummaryHeader.find('.bx--order-header-title').text()).toEqual('Order Summary');
    });
    it('should render children as expected', function () {
      expect(orderSummaryHeader.find(Dropdown).length).toEqual(1);
    });
  });
});