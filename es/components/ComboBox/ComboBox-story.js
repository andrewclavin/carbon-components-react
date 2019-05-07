import React from 'react';
import { storiesOf, action } from '@storybook/react';
import ComboBox from '../ComboBox';
import WithState from '../../tools/withState';
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
storiesOf('ComboBox', module).addWithInfo('default', "\n    ComboBox\n  ", function () {
  return React.createElement("div", {
    style: {
      width: 300
    }
  }, React.createElement(ComboBox, {
    items: items,
    itemToString: function itemToString(item) {
      return item ? item.text : '';
    },
    onChange: action('onChange - ComboBox'),
    placeholder: "Filter..."
  }));
}).addWithInfo('disabled', "\n    Disabled ComboBox\n  ", function () {
  return React.createElement("div", {
    style: {
      width: 300
    }
  }, React.createElement(ComboBox, {
    items: items,
    itemToString: function itemToString(item) {
      return item ? item.text : '';
    },
    onChange: action('onChange - ComboBox'),
    placeholder: "Filter...",
    disabled: true
  }));
}).addWithInfo('custom text input handling', "Sometimes you want to perform an async action to trigger a backend call on input change.", function () {
  return React.createElement(WithState, {
    initialState: {
      inputText: ''
    }
  }, function (_ref) {
    var state = _ref.state,
        setState = _ref.setState;
    return React.createElement("div", {
      style: {
        width: 300
      }
    }, React.createElement(ComboBox, {
      items: items,
      itemToString: function itemToString(item) {
        return item ? "".concat(item.text, " queried with ").concat(state.inputText) : '';
      },
      onChange: action('onChange - ComboBox'),
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