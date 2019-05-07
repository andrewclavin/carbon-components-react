/* eslint-disable no-console */
import React from 'react';
import { storiesOf } from '@storybook/react';
import Breadcrumb from '../Breadcrumb';
import BreadcrumbItem from '../BreadcrumbItem';
import BreadcrumbSkeleton from '../Breadcrumb/Breadcrumb.Skeleton';
var additionalProps = {
  onClick: function onClick() {
    console.log('Clicked!');
  },
  // eslint-disable-line no-console
  className: 'some-class'
};
storiesOf('Breadcrumb', module).addWithInfo('Default', "\n      Breadcrumb enables users to quickly see their location within a path of navigation and move up to a parent level if desired.\n    ", function () {
  return React.createElement(Breadcrumb, additionalProps, React.createElement(BreadcrumbItem, null, React.createElement("a", {
    href: "/#"
  }, "Breadcrumb 1")), React.createElement(BreadcrumbItem, {
    href: "#"
  }, "Breadcrumb 2"), React.createElement(BreadcrumbItem, {
    href: "#"
  }, "Breadcrumb 3"));
}).addWithInfo('skeleton', "\n    Placeholder skeleton state to use when content is loading.\n    ", function () {
  return React.createElement(BreadcrumbSkeleton, null);
});