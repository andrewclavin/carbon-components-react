function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Breadcrumb from '../Breadcrumb';
import BreadcrumbItem from '../BreadcrumbItem';
import OverflowMenu from '../OverflowMenu';
import OverflowMenuItem from '../OverflowMenuItem';
import DetailPageHeader from '../DetailPageHeader';
import Tabs from '../Tabs';
import Tab from '../Tab';
import Icon from '../Icon';
var detailPageHeaderProps = {
  title: 'Detail Page Header',
  statusText: 'Running'
};
var overflowMenuProps = {
  onClick: action('onClick'),
  className: 'some-class',
  flipped: true
};
var overflowMenuItemProps = {
  onClick: action('onClick'),
  className: 'some-class'
};
storiesOf('DetailPageHeader', module).addDecorator(function (story) {
  return React.createElement("div", {
    style: {
      minWidth: '60em'
    }
  }, story());
}).addWithInfo('without tabs', function () {
  return React.createElement(DetailPageHeader, detailPageHeaderProps, React.createElement(Icon, {
    name: "watson"
  }), React.createElement(Breadcrumb, null, React.createElement(BreadcrumbItem, {
    href: "www.google.com"
  }, "Breadcrumb 1"), React.createElement(BreadcrumbItem, {
    href: "www.google.com"
  }, "Breadcrumb 2"), React.createElement(BreadcrumbItem, {
    href: "www.google.com"
  }, "Breadcrumb 3")), React.createElement(OverflowMenu, overflowMenuProps, React.createElement(OverflowMenuItem, _extends({}, overflowMenuItemProps, {
    itemText: "Stop App"
  })), React.createElement(OverflowMenuItem, _extends({}, overflowMenuItemProps, {
    itemText: "Restart App"
  })), React.createElement(OverflowMenuItem, _extends({}, overflowMenuItemProps, {
    itemText: "Rename App"
  })), React.createElement(OverflowMenuItem, _extends({}, overflowMenuItemProps, {
    itemText: "Edit Routes and Access"
  })), React.createElement(OverflowMenuItem, _extends({}, overflowMenuItemProps, {
    itemText: "Delete App",
    isDelete: true,
    isLastItem: true
  }))));
}).addWithInfo('with tabs', function () {
  return React.createElement(DetailPageHeader, _extends({}, detailPageHeaderProps, {
    hasTabs: true
  }), React.createElement(Icon, {
    name: "watson"
  }), React.createElement(Breadcrumb, null, React.createElement(BreadcrumbItem, {
    href: "www.google.com"
  }, "Breadcrumb 1"), React.createElement(BreadcrumbItem, {
    href: "www.google.com"
  }, "Breadcrumb 2"), React.createElement(BreadcrumbItem, {
    href: "www.google.com"
  }, "Breadcrumb 3")), React.createElement(OverflowMenu, overflowMenuProps, React.createElement(OverflowMenuItem, _extends({}, overflowMenuItemProps, {
    itemText: "Stop App"
  })), React.createElement(OverflowMenuItem, _extends({}, overflowMenuItemProps, {
    itemText: "Restart App"
  })), React.createElement(OverflowMenuItem, _extends({}, overflowMenuItemProps, {
    itemText: "Rename App"
  })), React.createElement(OverflowMenuItem, _extends({}, overflowMenuItemProps, {
    itemText: "Edit Routes and Access"
  })), React.createElement(OverflowMenuItem, _extends({}, overflowMenuItemProps, {
    itemText: "Delete App",
    isDelete: true,
    isLastItem: true
  }))), React.createElement(Tabs, null, React.createElement(Tab, {
    label: "Overview"
  }), React.createElement(Tab, {
    label: "Apple"
  }), React.createElement(Tab, {
    label: "Banana"
  }), React.createElement(Tab, {
    label: "Orange"
  })));
});