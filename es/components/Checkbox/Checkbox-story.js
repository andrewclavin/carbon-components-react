function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Checkbox from '../Checkbox';
import CheckboxSkeleton from '../Checkbox/Checkbox.Skeleton';
var checkboxEvents = {
  className: 'some-class',
  onChange: action('onChange')
};
storiesOf('Checkbox', module).addWithInfo('enabled checked', "\n      Checkboxes are used when there is a list of options and the user may select multiple options, including all or none.\n      The example below shows how the Checkbox component can be used as an uncontrolled component that is initially checked\n      by setting the defaultChecked property to true. To use the component in a controlled way, you should set the\n      checked property instead.\n    ", function () {
  return React.createElement("fieldset", {
    className: "bx--fieldset"
  }, React.createElement("legend", {
    className: "bx--label"
  }, "Checkbox heading"), React.createElement(Checkbox, _extends({
    defaultChecked: true
  }, checkboxEvents, {
    id: "checkbox-label-1",
    labelText: "Checkbox label 1"
  })), React.createElement(Checkbox, _extends({
    defaultChecked: true
  }, checkboxEvents, {
    id: "checkbox-label-2",
    labelText: "Checkbox label 2"
  })));
}).addWithInfo('enabled unchecked', "\n      Checkboxes are used when there is a list of options and the user may select multiple options, including all or none.\n      The example below shows how the Checkbox component can be used as an uncontrolled component that is initially\n      unchecked. To use the component in a controlled way, you should set the checked property instead.\n    ", function () {
  return React.createElement("fieldset", {
    className: "bx--fieldset"
  }, React.createElement("legend", {
    className: "bx--label"
  }, "Checkbox heading"), React.createElement(Checkbox, _extends({}, checkboxEvents, {
    id: "checkbox-label-1",
    labelText: "Checkbox label 1"
  })), React.createElement(Checkbox, _extends({}, checkboxEvents, {
    id: "checkbox-label-2",
    labelText: "Checkbox label 2"
  })));
}).addWithInfo('enabled indeterminate', "\n      Checkboxes are used when there is a list of options and the user may select multiple options, including all or none.\n      The example below shows how the Checkbox component can be used as a controlled component that is initially\n      indeterminate.\n    ", function () {
  return React.createElement("fieldset", {
    className: "bx--fieldset"
  }, React.createElement("legend", {
    className: "bx--label"
  }, "Checkbox heading"), React.createElement(Checkbox, _extends({}, checkboxEvents, {
    id: "checkbox-label-1",
    labelText: "Checkbox label 1",
    indeterminate: true
  })), React.createElement(Checkbox, _extends({}, checkboxEvents, {
    id: "checkbox-label-2",
    labelText: "Checkbox label 2",
    indeterminate: true
  })));
}).addWithInfo('disabled', "\n      Checkboxes are used when there is a list of options and the user may select multiple options, including all or none.\n      The example below shows a disabled Checkbox component.\n    ", function () {
  return React.createElement("fieldset", {
    disabled: true,
    className: "bx--fieldset"
  }, React.createElement("legend", {
    className: "bx--label"
  }, "Checkbox heading"), React.createElement(Checkbox, _extends({}, checkboxEvents, {
    id: "checkbox-label-1",
    labelText: "Checkbox label 1"
  })), React.createElement(Checkbox, _extends({}, checkboxEvents, {
    id: "checkbox-label-2",
    labelText: "Checkbox label 2"
  })));
}).addWithInfo('no label', "\n      Checkboxes are used when there is a list of options and the user may select multiple options, including all or none.\n      The example below shows a Checkbox component with a hidden label. Use this property to hide the label visually but still preserve accessibility.\n    ", function () {
  return React.createElement("fieldset", {
    className: "bx--fieldset"
  }, React.createElement("legend", {
    className: "bx--label"
  }, "Checkbox heading"), React.createElement(Checkbox, _extends({}, checkboxEvents, {
    id: "checkbox-label-2",
    labelText: "Checkbox label hidden",
    hideLabel: true,
    wrapperClassName: "wrapper-class"
  })));
}).addWithInfo('skeleton', "\n      Placeholder skeleton state to use when content is loading.\n    ", function () {
  return React.createElement("div", null, React.createElement(CheckboxSkeleton, null));
});