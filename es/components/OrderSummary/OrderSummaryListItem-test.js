import React from 'react';
import { OrderSummaryListItem } from '../OrderSummary';
import { shallow } from 'enzyme';
describe('OrderSummaryListItem', function () {
  describe('Renders as expected', function () {
    var orderSummaryListItem = shallow(React.createElement(OrderSummaryListItem, {
      className: "some-class",
      text: "Item 1",
      price: "$50.00"
    }));
    it('renders Order Summary List Item', function () {
      expect(orderSummaryListItem.length).toEqual(1);
    });
    it('should render with the appropriate classes', function () {
      expect(orderSummaryListItem.hasClass('bx--order-item')).toEqual(true);
      expect(orderSummaryListItem.hasClass('some-class')).toEqual(true);
    });
    it('should render with the correct label', function () {
      expect(orderSummaryListItem.find('.bx--order-detail').text()).toEqual('Item 1');
    });
    it('should render with the correct price', function () {
      expect(orderSummaryListItem.find('.bx--order-price').text()).toEqual('$50.00');
    });
  });
});