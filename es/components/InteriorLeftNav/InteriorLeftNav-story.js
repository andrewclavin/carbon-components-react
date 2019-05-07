import React from 'react';
import { storiesOf } from '@storybook/react';
import InteriorLeftNav from '../InteriorLeftNav';
import InteriorLeftNavItem from '../InteriorLeftNavItem';
import InteriorLeftNavList from '../InteriorLeftNavList';
storiesOf('InteriorLeftNav', module).addWithInfo('Default', "\n      Interior left navigation organizes the content structure and provides\n      context to support user orientation. This pattern accommodates the\n      breadth of content and tasks users expect to see.\n    ", function () {
  return React.createElement(InteriorLeftNav, null, React.createElement(InteriorLeftNavList, {
    title: "Example Item 1"
  }, React.createElement(InteriorLeftNavItem, null, React.createElement("a", {
    target: "_blank",
    href: "http://www.carbondesignsystem.com"
  }, "Link Child")), React.createElement(InteriorLeftNavItem, null, React.createElement("a", {
    href: "http://www.carbondesignsystem.com"
  }, "Link Child")), React.createElement(InteriorLeftNavItem, null, React.createElement("a", {
    href: "http://www.carbondesignsystem.com"
  }, "Link Child"))), React.createElement(InteriorLeftNavList, {
    title: "Example Item 2"
  }, React.createElement(InteriorLeftNavItem, null, React.createElement("a", {
    href: "http://www.carbondesignsystem.com"
  }, "Link Child")), React.createElement(InteriorLeftNavItem, null, React.createElement("a", {
    href: "http://www.carbondesignsystem.com"
  }, "Link Child")), React.createElement(InteriorLeftNavItem, null, React.createElement("a", {
    href: "http://www.carbondesignsystem.com"
  }, "Link Child")), React.createElement(InteriorLeftNavItem, null, React.createElement("a", {
    href: "http://www.carbondesignsystem.com"
  }, "Link Child"))), React.createElement(InteriorLeftNavItem, null, React.createElement("a", {
    href: "#example-1"
  }, "Link label")), React.createElement(InteriorLeftNavItem, null, React.createElement("a", {
    href: "http://www.carbondesignsystem.com",
    target: "_blank"
  }, "Link label 2")));
});