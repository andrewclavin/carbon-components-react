import React from 'react';
import { OrderSummaryList, OrderSummaryListItem } from '../OrderSummary';
import { shallow } from 'enzyme';
describe('OrderSummaryList', function () {
  describe('Renders as expected', function () {
    var orderSummaryList = shallow(React.createElement(OrderSummaryList, {
      className: "some-class"
    }, React.createElement(OrderSummaryListItem, null), React.createElement(OrderSummaryListItem, null), React.createElement(OrderSummaryListItem, null)));
    it('renders Order Summary List', function () {
      expect(orderSummaryList.length).toEqual(1);
    });
    it('should render with the appropriate classes', function () {
      expect(orderSummaryList.hasClass('bx--order-list')).toEqual(true);
      expect(orderSummaryList.hasClass('some-class')).toEqual(true);
    });
    it('should render children as expected', function () {
      expect(orderSummaryList.find(OrderSummaryListItem).length).toEqual(3);
    });
  });
});