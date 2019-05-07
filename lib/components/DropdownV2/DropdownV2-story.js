"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _DropdownV = _interopRequireDefault(require("../DropdownV2"));

var _DropdownItem = _interopRequireDefault(require("../DropdownItem"));

var _Dropdown = _interopRequireDefault(require("../DropdownV2/Dropdown.Skeleton"));

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
var stringItems = ['Option 1', 'Option 2', 'Option 3'];
var dropdownItems = [{
  itemText: 'hello',
  value: 'hello',
  style: {
    opacity: 1
  }
}, {
  itemText: 'world',
  value: 'world',
  style: {
    opacity: 1
  }
}];

var itemToElement = function itemToElement(item) {
  var itemAsArray = item.text.split(' ');
  return _react.default.createElement("div", null, _react.default.createElement("span", null, itemAsArray[0]), _react.default.createElement("span", {
    style: {
      color: 'red'
    }
  }, " ", itemAsArray[1]));
};

(0, _react2.storiesOf)('DropdownV2', module).addWithInfo('default', "\n    DropdownV2\n  ", function () {
  return _react.default.createElement("div", {
    style: {
      width: 300
    }
  }, _react.default.createElement(_DropdownV.default, {
    label: "Label",
    items: items,
    itemToString: function itemToString(item) {
      return item ? item.text : '';
    },
    onChange: (0, _react2.action)('onChange')
  }));
}).add('items as strings', function () {
  return _react.default.createElement("div", {
    style: {
      width: 300
    }
  }, _react.default.createElement(_DropdownV.default, {
    label: "Label",
    items: stringItems,
    onChange: (0, _react2.action)('onChange')
  }));
}, {
  info: {
    text: 'Rendering an array of strings as `items`'
  }
}).add('items as components', function () {
  return _react.default.createElement("div", {
    style: {
      width: 300
    }
  }, _react.default.createElement(_DropdownV.default, {
    label: "Label",
    items: items,
    itemToString: function itemToString(item) {
      return item ? item.text : '';
    },
    itemToElement: itemToElement,
    onChange: (0, _react2.action)('onChange')
  }));
}, {
  info: {
    text: "Rendering items as custom components"
  }
}).add('with DropdownItems', function () {
  return _react.default.createElement("div", {
    style: {
      width: 300
    }
  }, _react.default.createElement(_DropdownV.default, {
    label: "Label",
    items: dropdownItems,
    itemToString: function itemToString(item) {
      return item ? item.itemText : '';
    },
    itemToElement: _DropdownItem.default,
    onChange: (0, _react2.action)('onChange')
  }));
}, {
  info: {
    text: "\n          Using DropdownItem as the components to render. Has some kinks due to the onClick in the DropdownItem.\n        "
  }
}).addWithInfo('inline', "\n    Disabled DropdownV2\n  ", function () {
  return _react.default.createElement("div", {
    style: {
      width: 300
    }
  }, _react.default.createElement(_DropdownV.default, {
    type: "inline",
    label: "Label",
    items: items,
    itemToString: function itemToString(item) {
      return item ? item.text : '';
    },
    onChange: (0, _react2.action)('onChange')
  }));
}).addWithInfo('disabled', "\n    Disabled DropdownV2\n  ", function () {
  return _react.default.createElement("div", {
    style: {
      width: 300
    }
  }, _react.default.createElement(_DropdownV.default, {
    label: "Label",
    items: items,
    itemToString: function itemToString(item) {
      return item ? item.text : '';
    },
    onChange: (0, _react2.action)('onChange'),
    disabled: true
  }));
}).addWithInfo('disabled - inline', "\n    Disabled Inline DropdownV2\n  ", function () {
  return _react.default.createElement("div", {
    style: {
      width: 300
    }
  }, _react.default.createElement(_DropdownV.default, {
    type: "inline",
    label: "Label",
    items: items,
    itemToString: function itemToString(item) {
      return item ? item.text : '';
    },
    onChange: (0, _react2.action)('onChange'),
    disabled: true
  }));
}).addWithInfo('fully controlled', "\n    Sometimes you want to control everything.\n  ", function () {
  return _react.default.createElement(_withState.default, {
    initialState: {
      selectedItem: items[0]
    }
  }, function (_ref) {
    var state = _ref.state,
        setState = _ref.setState;
    return _react.default.createElement("div", {
      style: {
        width: 300
      }
    }, _react.default.createElement(_DropdownV.default, {
      type: "inline",
      label: "Label",
      items: items,
      itemToString: function itemToString(item) {
        return item ? item.text : '';
      },
      onChange: function onChange(_ref2) {
        var selectedItem = _ref2.selectedItem;
        return setTimeout(function () {
          return setState({
            selectedItem: selectedItem
          });
        }, 1000);
      },
      selectedItem: state.selectedItem
    }));
  });
}).addWithInfo('skeleton', "\n    Placeholder skeleton state to use when content is loading.\n  ", function () {
  return _react.default.createElement("div", {
    style: {
      width: 300
    }
  }, _react.default.createElement(_Dropdown.default, null), "\xA0", _react.default.createElement(_Dropdown.default, {
    inline: true
  }));
});