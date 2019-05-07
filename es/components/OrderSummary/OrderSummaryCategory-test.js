import React from 'react';
import { OrderSummaryCategory, OrderSummaryListItem } from '../OrderSummary';
import { shallow } from 'enzyme';
describe('OrderSummaryCategory', function () {
  describe('Renders as expected', function () {
    var orderSummaryCategory = shallow(React.createElement(OrderSummaryCategory, {
      className: "some-class",
      categoryText: "Category 1"
    }, React.createElement(OrderSummaryListItem, null), React.createElement(OrderSummaryListItem, null), React.createElement(OrderSummaryListItem, null)));
    it('renders Order Summary Category', function () {
      expect(orderSummaryCategory.length).toEqual(1);
    });
    it('should render with the appropriate classes', function () {
      expect(orderSummaryCategory.hasClass('bx--order-category')).toEqual(true);
      expect(orderSummaryCategory.hasClass('some-class')).toEqual(true);
    });
    it('should render with the correct title', function () {
      expect(orderSummaryCategory.find('.bx--order-category-title').text()).toEqual('Category 1');
    });
    it('should render children as expected', function () {
      expect(orderSummaryCategory.find(OrderSummaryListItem).length).toEqual(3);
    });
  });
});