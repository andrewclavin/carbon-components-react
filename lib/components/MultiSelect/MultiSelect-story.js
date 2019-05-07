"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _MultiSelect = _interopRequireDefault(require("../MultiSelect"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var items = [{
  id: 'item-1',
  text: 'Item 1'
}, {
  id: 'item-2',
  text: 'Item 2'
}, {
  id: 'item-3',
  text: 'Item 3'
}, {
  id: 'item-4',
  text: 'Item 4'
}];
var defaultLabel = 'MultiSelect Label';
var defaultPlaceholder = 'Filter';
(0, _react2.storiesOf)('MultiSelect', module).addWithInfo('default', "\n    MultiSelect\n  ", function () {
  return _react.default.createElement("div", {
    style: {
      width: 300
    }
  }, _react.default.createElement(_MultiSelect.default, {
    label: defaultLabel,
    items: items,
    itemToString: function itemToString(item) {
      return item ? item.text : '';
    },
    onChange: (0, _react2.action)('onChange')
  }));
}).addWithInfo('inline', "\n      Inline variant of a MultiSelect\n    ", function () {
  return _react.default.createElement(_MultiSelect.default, {
    type: "inline",
    label: defaultLabel,
    items: items,
    itemToString: function itemToString(item) {
      return item ? item.text : '';
    },
    onChange: (0, _react2.action)('onChange')
  });
}).addWithInfo('disabled', "\n      Disabled variant of a MultiSelect\n    ", function () {
  return _react.default.createElement("div", {
    style: {
      width: 300
    }
  }, _react.default.createElement(_MultiSelect.default, {
    label: defaultLabel,
    items: items,
    itemToString: function itemToString(item) {
      return item ? item.text : '';
    },
    onChange: (0, _react2.action)('onChange'),
    disabled: true
  }));
}).addWithInfo('disabled - inline', "\n      Disabled, inline variant of a MultiSelect\n    ", function () {
  return _react.default.createElement(_MultiSelect.default, {
    type: "inline",
    label: defaultLabel,
    items: items,
    itemToString: function itemToString(item) {
      return item ? item.text : '';
    },
    onChange: (0, _react2.action)('onChange'),
    disabled: true
  });
}).addWithInfo('with initial selected items', "\n      Provide a set of items to initially select in the control\n    ", function () {
  return _react.default.createElement("div", {
    style: {
      width: 300
    }
  }, _react.default.createElement(_MultiSelect.default, {
    label: defaultLabel,
    items: items,
    itemToString: function itemToString(item) {
      return item ? item.text : '';
    },
    initialSelectedItems: [items[0], items[1]],
    onChange: (0, _react2.action)('onChange - Inline MultiSelect')
  }));
}).addWithInfo('filterable', "\n      Filterable version of our MultiSelect component\n    ", function () {
  return _react.default.createElement("div", {
    style: {
      width: 300
    }
  }, _react.default.createElement(_MultiSelect.default.Filterable, {
    items: items,
    itemToString: function itemToString(item) {
      return item ? item.text : '';
    },
    onChange: (0, _react2.action)('onChange'),
    placeholder: defaultPlaceholder
  }));
}).addWithInfo('filterable - disabled', "\n      Dislabed filterable version of our MultiSelect component\n    ", function () {
  return _react.default.createElement("div", {
    style: {
      width: 300
    }
  }, _react.default.createElement(_MultiSelect.default.Filterable, {
    items: items,
    itemToString: function itemToString(item) {
      return item ? item.text : '';
    },
    onChange: (0, _react2.action)('onChange'),
    placeholder: defaultPlaceholder,
    disabled: true
  }));
});