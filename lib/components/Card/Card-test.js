"use strict";

var _react = _interopRequireDefault(require("react"));

var _Card = _interopRequireDefault(require("../Card"));

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Card', function () {
  describe('Renders as expected', function () {
    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Card.default, {
      className: "extra-class"
    }, _react.default.createElement("div", {
      className: "child"
    }, "Test")));
    it('renders children as expected', function () {
      expect(wrapper.find('.child').length).toBe(1);
    });
    it('has the expected classes', function () {
      expect(wrapper.hasClass('bx--card')).toEqual(true);
    });
    it('renders extra classes passed in via className', function () {
      expect(wrapper.hasClass('extra-class')).toEqual(true);
    });
    it('has default tabIndex of 0', function () {
      expect(wrapper.props().tabIndex).toEqual(0);
    });
  });
  describe('Check that functions passed in as props are called', function () {
    var onClick = jest.fn();
    var wrapper = (0, _enzyme.mount)(_react.default.createElement(_Card.default, {
      onClick: onClick
    }));
    it('should call onClick', function () {
      wrapper.simulate('click');
      expect(onClick).toBeCalled();
    });
  });
});