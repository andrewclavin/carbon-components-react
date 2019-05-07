import React from 'react';
import { OrderSummary, OrderSummaryHeader } from '../OrderSummary';
import { shallow } from 'enzyme';
describe('OrderSummary', function () {
  describe('Renders as expected', function () {
    var orderSummary = shallow(React.createElement(OrderSummary, {
      className: "some-class"
    }, React.createElement(OrderSummaryHeader, null)));
    it('renders Order Summary', function () {
      expect(orderSummary.length).toEqual(1);
    });
    it('should render with the appropriate classes', function () {
      expect(orderSummary.hasClass('bx--order-summary')).toEqual(true);
      expect(orderSummary.hasClass('some-class')).toEqual(true);
    });
    it('should render children as expected', function () {
      expect(orderSummary.find(OrderSummaryHeader).length).toEqual(1);
    });
  });
});