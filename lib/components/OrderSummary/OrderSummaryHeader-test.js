"use strict";

var _react = _interopRequireDefault(require("react"));

var _OrderSummary = require("../OrderSummary");

var _Dropdown = _interopRequireDefault(require("../Dropdown"));

var _DropdownItem = _interopRequireDefault(require("../DropdownItem"));

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('OrderSummaryHeader', function () {
  describe('Renders as expected', function () {
    var orderSummaryHeader = (0, _enzyme.mount)(_react.default.createElement(_OrderSummary.OrderSummaryHeader, {
      className: "some-class",
      title: "Order Summary"
    }, _react.default.createElement(_Dropdown.default, {
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
      expect(orderSummaryHeader.find(_Dropdown.default).length).toEqual(1);
    });
  });
});