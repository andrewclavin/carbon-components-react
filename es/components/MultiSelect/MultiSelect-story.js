import React from 'react';
import { storiesOf, action } from '@storybook/react';
import MultiSelect from '../MultiSelect';
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
storiesOf('MultiSelect', module).addWithInfo('default', "\n    MultiSelect\n  ", function () {
  return React.createElement("div", {
    style: {
      width: 300
    }
  }, React.createElement(MultiSelect, {
    label: defaultLabel,
    items: items,
    itemToString: function itemToString(item) {
      return item ? item.text : '';
    },
    onChange: action('onChange')
  }));
}).addWithInfo('inline', "\n      Inline variant of a MultiSelect\n    ", function () {
  return React.createElement(MultiSelect, {
    type: "inline",
    label: defaultLabel,
    items: items,
    itemToString: function itemToString(item) {
      return item ? item.text : '';
    },
    onChange: action('onChange')
  });
}).addWithInfo('disabled', "\n      Disabled variant of a MultiSelect\n    ", function () {
  return React.createElement("div", {
    style: {
      width: 300
    }
  }, React.createElement(MultiSelect, {
    label: defaultLabel,
    items: items,
    itemToString: function itemToString(item) {
      return item ? item.text : '';
    },
    onChange: action('onChange'),
    disabled: true
  }));
}).addWithInfo('disabled - inline', "\n      Disabled, inline variant of a MultiSelect\n    ", function () {
  return React.createElement(MultiSelect, {
    type: "inline",
    label: defaultLabel,
    items: items,
    itemToString: function itemToString(item) {
      return item ? item.text : '';
    },
    onChange: action('onChange'),
    disabled: true
  });
}).addWithInfo('with initial selected items', "\n      Provide a set of items to initially select in the control\n    ", function () {
  return React.createElement("div", {
    style: {
      width: 300
    }
  }, React.createElement(MultiSelect, {
    label: defaultLabel,
    items: items,
    itemToString: function itemToString(item) {
      return item ? item.text : '';
    },
    initialSelectedItems: [items[0], items[1]],
    onChange: action('onChange - Inline MultiSelect')
  }));
}).addWithInfo('filterable', "\n      Filterable version of our MultiSelect component\n    ", function () {
  return React.createElement("div", {
    style: {
      width: 300
    }
  }, React.createElement(MultiSelect.Filterable, {
    items: items,
    itemToString: function itemToString(item) {
      return item ? item.text : '';
    },
    onChange: action('onChange'),
    placeholder: defaultPlaceholder
  }));
}).addWithInfo('filterable - disabled', "\n      Dislabed filterable version of our MultiSelect component\n    ", function () {
  return React.createElement("div", {
    style: {
      width: 300
    }
  }, React.createElement(MultiSelect.Filterable, {
    items: items,
    itemToString: function itemToString(item) {
      return item ? item.text : '';
    },
    onChange: action('onChange'),
    placeholder: defaultPlaceholder,
    disabled: true
  }));
});