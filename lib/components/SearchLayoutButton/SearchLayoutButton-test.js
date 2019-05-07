"use strict";

var _react = _interopRequireDefault(require("react"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _SearchLayoutButton = _interopRequireDefault(require("../SearchLayoutButton"));

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('SearchLayoutButton', function () {
  var wrapper = (0, _enzyme.mount)(_react.default.createElement(_SearchLayoutButton.default, {
    labelText: "testlabel"
  }));
  describe('buttons', function () {
    var btn = wrapper.find('button');
    it('should have type="button"', function () {
      var type = btn.instance().getAttribute('type');
      expect(type).toEqual('button');
    });
    it('has expected class for sort button', function () {
      expect(btn.hasClass('bx--search-button')).toEqual(true);
    });
  });
  describe('icons', function () {
    it('should use "list" icon for toggle button', function () {
      var icon = wrapper.find(_Icon.default);
      expect(icon.props().name).toEqual('list');
    });
    it('should use "grid" icon when format state is not "list"', function () {
      wrapper.setState({
        format: 'not-list'
      });
      var icon = wrapper.find(_Icon.default);
      expect(icon.props().name).toEqual('grid');
    });
    it('should support specifying the layout via props', function () {
      var wrapperWithFormatProps = (0, _enzyme.mount)(_react.default.createElement(_SearchLayoutButton.default, {
        format: "grid"
      }));
      expect(wrapperWithFormatProps.find(_Icon.default).props().name).toEqual('grid');
      wrapperWithFormatProps.setProps({
        format: 'list'
      });
      expect(wrapperWithFormatProps.find(_Icon.default).props().name).toEqual('list');
    });
    it('should support being notified of change in layout', function () {
      var onChangeFormat = jest.fn();
      var wrapperWithFormatProps = (0, _enzyme.mount)(_react.default.createElement(_SearchLayoutButton.default, {
        format: "grid",
        onChangeFormat: onChangeFormat
      }));
      wrapperWithFormatProps.find('button').simulate('click');
      wrapperWithFormatProps.find('button').simulate('click');
      expect(onChangeFormat.mock.calls).toEqual([[{
        format: 'list'
      }], [{
        format: 'grid'
      }]]);
    });
  });
});