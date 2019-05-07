function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import OverflowMenu from '../OverflowMenu';
import OverflowMenuItem from '../OverflowMenuItem';
import Icon from '../Icon';
var overflowMenuEvents = {
  onClick: action('onClick'),
  className: 'some-class'
};
var overflowMenuItemEvents = {
  onClick: action('onClick'),
  className: 'some-class'
};
storiesOf('OverflowMenu', module).addWithInfo('basic', "\n      Overflow Menu is used when additional options are available to the user and there is a space constraint.\n      Create Overflow Menu Item components for each option on the menu.\n    ", function () {
  return React.createElement(OverflowMenu, overflowMenuEvents, React.createElement(OverflowMenuItem, _extends({}, overflowMenuItemEvents, {
    itemText: "Option 1",
    primaryFocus: true
  })), React.createElement(OverflowMenuItem, _extends({}, overflowMenuItemEvents, {
    itemText: "Option 2"
  })), React.createElement(OverflowMenuItem, _extends({}, overflowMenuItemEvents, {
    itemText: "Option 3"
  })), React.createElement(OverflowMenuItem, _extends({}, overflowMenuItemEvents, {
    itemText: "Option 4"
  })), React.createElement(OverflowMenuItem, _extends({}, overflowMenuItemEvents, {
    itemText: React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between'
      }
    }, "Add ", React.createElement(Icon, {
      name: "icon--add",
      style: {
        height: '12px'
      }
    }))
  })), React.createElement(OverflowMenuItem, _extends({}, overflowMenuItemEvents, {
    itemText: "Danger option",
    hasDivider: true,
    isDelete: true
  })));
}).addWithInfo('floating menu', "\n      Overflow Menu with the floatingMenu prop is used when you need to place an OverflowMenu\n      inside a container with \"overflow\" CSS set.\n    ", function () {
  return React.createElement(OverflowMenu, _extends({}, overflowMenuEvents, {
    floatingMenu: true
  }), React.createElement(OverflowMenuItem, _extends({}, overflowMenuItemEvents, {
    itemText: "Option 1",
    primaryFocus: true
  })), React.createElement(OverflowMenuItem, _extends({}, overflowMenuItemEvents, {
    itemText: "Option 2"
  })), React.createElement(OverflowMenuItem, _extends({}, overflowMenuItemEvents, {
    itemText: "Option 3"
  })), React.createElement(OverflowMenuItem, _extends({}, overflowMenuItemEvents, {
    itemText: "Option 4"
  })), React.createElement(OverflowMenuItem, _extends({}, overflowMenuItemEvents, {
    itemText: "Danger option",
    hasDivider: true,
    isDelete: true
  })));
}).addWithInfo('custom trigger', "\n      Sometimes you just want to render something other than an icon\n    ", function () {
  return React.createElement(OverflowMenu, _extends({}, overflowMenuEvents, {
    style: {
      width: 'auto'
    },
    floatingMenu: true,
    renderIcon: function renderIcon(iconProps) {
      return React.createElement("div", iconProps, "Custom trigger");
    }
  }), React.createElement(OverflowMenuItem, _extends({}, overflowMenuItemEvents, {
    itemText: "Option 1"
  })), React.createElement(OverflowMenuItem, _extends({}, overflowMenuItemEvents, {
    itemText: "Option 2"
  })), React.createElement(OverflowMenuItem, _extends({}, overflowMenuItemEvents, {
    itemText: "Option 3"
  })), React.createElement(OverflowMenuItem, _extends({}, overflowMenuItemEvents, {
    itemText: "Option 4"
  })), React.createElement(OverflowMenuItem, _extends({}, overflowMenuItemEvents, {
    itemText: "Danger option",
    hasDivider: true,
    isDelete: true
  })));
});