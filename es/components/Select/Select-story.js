function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Select from '../Select';
import SelectItem from '../SelectItem';
import SelectItemGroup from '../SelectItemGroup';
import SelectSkeleton from '../Select/Select.Skeleton';
var selectProps = {
  onChange: action('onChange'),
  className: 'some-class'
};
storiesOf('Select', module).addWithInfo('enabled', "\n      Select displays a list below its title when selected. They are used primarily in forms,\n      where a user chooses one option from a list. Once the user selects an item, the dropdown will\n      dissapear and the field will reflect the user's choice. Create Select Item components for each\n      option in the list. The example below shows an enabled Select component with three items.\n    ", function () {
  return React.createElement(Select, _extends({}, selectProps, {
    id: "select-1",
    defaultValue: "placeholder-item"
  }), React.createElement(SelectItem, {
    disabled: true,
    hidden: true,
    value: "placeholder-item",
    text: "Choose an option"
  }), React.createElement(SelectItemGroup, {
    label: "Category 1"
  }, React.createElement(SelectItem, {
    value: "option-1",
    text: "Option 1"
  }), React.createElement(SelectItem, {
    value: "option-2",
    text: "Option 2"
  })), React.createElement(SelectItemGroup, {
    label: "Category 2"
  }, React.createElement(SelectItem, {
    value: "option-3",
    text: "Option 3"
  }), React.createElement(SelectItem, {
    value: "option-4",
    text: "Option 4"
  })));
}).addWithInfo('inline', "\n      Inline select is for use when there will be multiple elements in a row\n    ", function () {
  return React.createElement(Select, _extends({}, selectProps, {
    inline: true,
    id: "select-1",
    defaultValue: "placeholder-item"
  }), React.createElement(SelectItem, {
    disabled: true,
    hidden: true,
    value: "placeholder-item",
    text: "Choose an option"
  }), React.createElement(SelectItemGroup, {
    label: "Starter"
  }, React.createElement(SelectItem, {
    value: "option-1",
    text: "Option 1"
  }), React.createElement(SelectItem, {
    value: "option-2",
    text: "Option 2"
  })), React.createElement(SelectItemGroup, {
    label: "Advanced"
  }, React.createElement(SelectItem, {
    value: "option-3",
    text: "Option 3"
  })));
}).addWithInfo('disabled', "\n      Select displays a list below its title when selected. They are used primarily in forms,\n      where a user chooses one option from a list. Once the user selects an item, the dropdown will\n      dissapear and the field will reflect the user's choice. Create SelectItem components for each\n      option in the list. The example below shows an disabled Select component.\n    ", function () {
  return React.createElement(Select, _extends({
    disabled: true
  }, selectProps, {
    id: "select-2"
  }), React.createElement(SelectItem, {
    disabled: true,
    hidden: true,
    value: "placeholder-item",
    text: "Choose an option"
  }), React.createElement(SelectItemGroup, {
    label: "Category 1"
  }, React.createElement(SelectItem, {
    value: "option-1",
    text: "Option 1"
  }), React.createElement(SelectItem, {
    value: "option-2",
    text: "Option 2"
  })), React.createElement(SelectItemGroup, {
    label: "Category 2"
  }, React.createElement(SelectItem, {
    value: "option-3",
    text: "Option 3"
  })));
}).addWithInfo('no label', "\n      Select displays a list below its title when selected. They are used primarily in forms,\n      where a user chooses one option from a list. Once the user selects an item, the dropdown will\n      dissapear and the field will reflect the user's choice. Create SelectItem components for each\n      option in the list. The example below shows a Select component without a label.\n    ", function () {
  return React.createElement(Select, _extends({}, selectProps, {
    id: "select-3",
    defaultValue: "placeholder-item",
    hideLabel: true
  }), React.createElement(SelectItem, {
    disabled: true,
    hidden: true,
    value: "placeholder-item",
    text: "Choose an option"
  }), React.createElement(SelectItemGroup, {
    label: "Starter"
  }, React.createElement(SelectItem, {
    value: "option-1",
    text: "Option 1"
  }), React.createElement(SelectItem, {
    value: "option-2",
    text: "Option 2"
  })), React.createElement(SelectItemGroup, {
    label: "Category 2"
  }, React.createElement(SelectItem, {
    value: "option-3",
    text: "Option 3"
  }), React.createElement(SelectItem, {
    value: "option-4",
    text: "Option 4"
  })));
}).addWithInfo('skeleton', "\n      Placeholder skeleton state to use when content is loading.\n    ", function () {
  return React.createElement("div", {
    style: {
      width: '300px'
    }
  }, React.createElement(SelectSkeleton, null));
});