"use strict";

var _react = _interopRequireDefault(require("react"));

var _OrderSummary = require("../OrderSummary");

var _Button = _interopRequireDefault(require("../Button"));

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('OrderSummaryTotal', function () {
  describe('Renders as expected', function () {
    var orderSummaryTotal = (0, _enzyme.shallow)(_react.default.createElement(_OrderSummary.OrderSummaryTotal, {
      summaryText: "Total due now:",
      summaryPrice: "$0.00",
      summaryDetails: "estimated",
      className: "some-class"
    }, _react.default.createElement(_Button.default, null, "Primary Button"), _react.default.createElement(_Button.default, {
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
      expect(orderSummaryTotal.find(_Button.default).length).toEqual(2);
    });
  });
});