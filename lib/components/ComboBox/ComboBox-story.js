"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ComboBox = _interopRequireDefault(require("../ComboBox"));

var _withState = _interopRequireDefault(require("../../tools/withState"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var items = [{
  id: 'option-1',
  text: 'Option 1'
}, {
  id: 'option-2',
  text: 'Option 2'
}, {
  id: 'option-3',
  text: 'Option 3'
}, {
  id: 'option-4',
  text: 'Option 4'
}];
(0, _react2.storiesOf)('ComboBox', module).addWithInfo('default', "\n    ComboBox\n  ", function () {
  return _react.default.createElement("div", {
    style: {
      width: 300
    }
  }, _react.default.createElement(_ComboBox.default, {
    items: items,
    itemToString: function itemToString(item) {
      return item ? item.text : '';
    },
    onChange: (0, _react2.action)('onChange - ComboBox'),
    placeholder: "Filter..."
  }));
}).addWithInfo('disabled', "\n    Disabled ComboBox\n  ", function () {
  return _react.default.createElement("div", {
    style: {
      width: 300
    }
  }, _react.default.createElement(_ComboBox.default, {
    items: items,
    itemToString: function itemToString(item) {
      return item ? item.text : '';
    },
    onChange: (0, _react2.action)('onChange - ComboBox'),
    placeholder: "Filter...",
    disabled: true
  }));
}).addWithInfo('custom text input handling', "Sometimes you want to perform an async action to trigger a backend call on input change.", function () {
  return _react.default.createElement(_withState.default, {
    initialState: {
      inputText: ''
    }
  }, function (_ref) {
    var state = _ref.state,
        setState = _ref.setState;
    return _react.default.createElement("div", {
      style: {
        width: 300
      }
    }, _react.default.createElement(_ComboBox.default, {
      items: items,
      itemToString: function itemToString(item) {
        return item ? "".concat(item.text, " queried with ").concat(state.inputText) : '';
      },
      onChange: (0, _react2.action)('onChange - ComboBox'),
      placeholder: "Filter...",
      shouldFilterItem: function shouldFilterItem() {
        return true;
      },
      onInputChange: function onInputChange(text) {
        return setState({
          inputText: text
        });
      }
    }));
  });
});