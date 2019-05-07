function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Tabs from '../Tabs';
import Tab from '../Tab';
import TabsSkeleton from '../Tabs/Tabs.Skeleton';
var props = {
  tabs: {
    className: 'some-class',
    triggerHref: '#anotherAnchor'
  },
  tab: {
    className: 'another-class',
    onClick: action('onClick'),
    onKeyDown: action('onKeyDown')
  }
};
storiesOf('Tabs', module).addWithInfo('Default', "\n      Tabs are used to quickly navigate between views within the same context. Create individual\n      Tab components for each item in the Tabs list.\n    ", function () {
  return React.createElement(Tabs, props.tabs, React.createElement(Tab, _extends({}, props.tab, {
    label: "Tab label 1"
  }), React.createElement("div", {
    className: "some-content"
  }, "Content for first tab goes here.")), React.createElement(Tab, _extends({}, props.tab, {
    label: "Tab label 2"
  }), React.createElement("div", {
    className: "some-content"
  }, "Content for second tab goes here.")), React.createElement(Tab, _extends({}, props.tab, {
    label: "Tab label 3"
  }), React.createElement("div", {
    className: "some-content"
  }, "Content for third tab goes here.")), React.createElement(Tab, _extends({}, props.tab, {
    label: "Tab label 4"
  }), React.createElement("div", {
    className: "some-content"
  }, "Content for fourth tab goes here.")));
}).addWithInfo('Selected Example', "\n      By using the selected prop on the Tabs component, you can switch which Tab gets\n      rendered by default\n    ", function () {
  return React.createElement(Tabs, _extends({}, props.tabs, {
    selected: 3
  }), React.createElement(Tab, _extends({}, props.tab, {
    label: "Tab label 1"
  }), React.createElement("div", {
    className: "some-content"
  }, "Content for first tab goes here.")), React.createElement(Tab, _extends({}, props.tab, {
    label: "Tab label 2"
  }), React.createElement("div", {
    className: "some-content"
  }, "Content for second tab goes here.")), React.createElement(Tab, _extends({}, props.tab, {
    label: "Tab label 3"
  }), React.createElement("div", {
    className: "some-content"
  }, "Content for third tab goes here.")), React.createElement(Tab, _extends({}, props.tab, {
    label: "Tab label 4"
  }), React.createElement("div", {
    className: "some-content"
  }, "ontent for fourth tab goes here.")));
}).addWithInfo('skeleton', "\n      Placeholder skeleton state to use when content is loading.\n    ", function () {
  return React.createElement(TabsSkeleton, null);
});