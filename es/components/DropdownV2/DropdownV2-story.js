import React from 'react';
import { storiesOf, action } from '@storybook/react';
import DropdownV2 from '../DropdownV2';
import DropdownItem from '../DropdownItem';
import DropdownSkeleton from '../DropdownV2/Dropdown.Skeleton';
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
  return React.createElement("div", null, React.createElement("span", null, itemAsArray[0]), React.createElement("span", {
    style: {
      color: 'red'
    }
  }, " ", itemAsArray[1]));
};

storiesOf('DropdownV2', module).addWithInfo('default', "\n    DropdownV2\n  ", function () {
  return React.createElement("div", {
    style: {
      width: 300
    }
  }, React.createElement(DropdownV2, {
    label: "Label",
    items: items,
    itemToString: function itemToString(item) {
      return item ? item.text : '';
    },
    onChange: action('onChange')
  }));
}).add('items as strings', function () {
  return React.createElement("div", {
    style: {
      width: 300
    }
  }, React.createElement(DropdownV2, {
    label: "Label",
    items: stringItems,
    onChange: action('onChange')
  }));
}, {
  info: {
    text: 'Rendering an array of strings as `items`'
  }
}).add('items as components', function () {
  return React.createElement("div", {
    style: {
      width: 300
    }
  }, React.createElement(DropdownV2, {
    label: "Label",
    items: items,
    itemToString: function itemToString(item) {
      return item ? item.text : '';
    },
    itemToElement: itemToElement,
    onChange: action('onChange')
  }));
}, {
  info: {
    text: "Rendering items as custom components"
  }
}).add('with DropdownItems', function () {
  return React.createElement("div", {
    style: {
      width: 300
    }
  }, React.createElement(DropdownV2, {
    label: "Label",
    items: dropdownItems,
    itemToString: function itemToString(item) {
      return item ? item.itemText : '';
    },
    itemToElement: DropdownItem,
    onChange: action('onChange')
  }));
}, {
  info: {
    text: "\n          Using DropdownItem as the components to render. Has some kinks due to the onClick in the DropdownItem.\n        "
  }
}).addWithInfo('inline', "\n    Disabled DropdownV2\n  ", function () {
  return React.createElement("div", {
    style: {
      width: 300
    }
  }, React.createElement(DropdownV2, {
    type: "inline",
    label: "Label",
    items: items,
    itemToString: function itemToString(item) {
      return item ? item.text : '';
    },
    onChange: action('onChange')
  }));
}).addWithInfo('disabled', "\n    Disabled DropdownV2\n  ", function () {
  return React.createElement("div", {
    style: {
      width: 300
    }
  }, React.createElement(DropdownV2, {
    label: "Label",
    items: items,
    itemToString: function itemToString(item) {
      return item ? item.text : '';
    },
    onChange: action('onChange'),
    disabled: true
  }));
}).addWithInfo('disabled - inline', "\n    Disabled Inline DropdownV2\n  ", function () {
  return React.createElement("div", {
    style: {
      width: 300
    }
  }, React.createElement(DropdownV2, {
    type: "inline",
    label: "Label",
    items: items,
    itemToString: function itemToString(item) {
      return item ? item.text : '';
    },
    onChange: action('onChange'),
    disabled: true
  }));
}).addWithInfo('fully controlled', "\n    Sometimes you want to control everything.\n  ", function () {
  return React.createElement(WithState, {
    initialState: {
      selectedItem: items[0]
    }
  }, function (_ref) {
    var state = _ref.state,
        setState = _ref.setState;
    return React.createElement("div", {
      style: {
        width: 300
      }
    }, React.createElement(DropdownV2, {
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
  return React.createElement("div", {
    style: {
      width: 300
    }
  }, React.createElement(DropdownSkeleton, null), "\xA0", React.createElement(DropdownSkeleton, {
    inline: true
  }));
});