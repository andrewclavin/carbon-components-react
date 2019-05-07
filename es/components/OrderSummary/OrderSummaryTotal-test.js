import React from 'react';
import { OrderSummaryTotal } from '../OrderSummary';
import Button from '../Button';
import { shallow } from 'enzyme';
describe('OrderSummaryTotal', function () {
  describe('Renders as expected', function () {
    var orderSummaryTotal = shallow(React.createElement(OrderSummaryTotal, {
      summaryText: "Total due now:",
      summaryPrice: "$0.00",
      summaryDetails: "estimated",
      className: "some-class"
    }, React.createElement(Button, null, "Primary Button"), React.createElement(Button, {
      kind: "secondary"
    }, "Primary Button")));
    it('renders Order Summary Total', function () {
      expect(orderSummaryTotal.length).toEqual(1);
    });
    it('should render with the appropriate classes', function () {
      expect(orderSummaryTotal.hasClass('bx--order-total-container')).toEqual(true);
      expect(orderSummaryTotal.hasClass('some-class')).toEqual(true);
    });
    it('should render with the correct summary text', function () {
      expect(orderSummaryTotal.find('.bx--order-total-text').text()).toEqual('Total due now:');
    });
    it('should render with the correct price', function () {
      expect(orderSummaryTotal.find('.bx--order-total-price').children().first().text()).toEqual('$0.00');
    });
    it('should render with the correct details', function () {
      expect(orderSummaryTotal.find('.bx--order-total-price').children().last().text()).toEqual('estimated');
    });
    it('should render children as expected', function () {
      expect(orderSummaryTotal.find(Button).length).toEqual(2);
    });
  });
});