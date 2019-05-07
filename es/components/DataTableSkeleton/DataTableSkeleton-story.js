/* eslint-disable no-console */
import React from 'react';
import { storiesOf } from '@storybook/react';
import DataTableSkeleton from '../DataTableSkeleton';
storiesOf('DataTableSkeleton', module).addWithInfo('default', "\n      Skeleton states are used as a progressive loading state while the user waits for content to load.\n\n      This example shows a skeleton state for a data table.\n    ", function () {
  return React.createElement("div", {
    style: {
      width: '800px'
    }
  }, React.createElement(DataTableSkeleton, null), React.createElement("br", null));
}).addWithInfo('zebra', "\n      Skeleton states are used as a progressive loading state while the user waits for content to load.\n\n      This example shows a skeleton state for a data table.\n    ", function () {
  return React.createElement("div", {
    style: {
      width: '800px'
    }
  }, React.createElement(DataTableSkeleton, {
    zebra: true
  }));
}).addWithInfo('compact', "\n      Skeleton states are used as a progressive loading state while the user waits for content to load.\n\n      This example shows a skeleton state for a compact data table.\n    ", function () {
  return React.createElement("div", {
    style: {
      width: '800px'
    }
  }, React.createElement(DataTableSkeleton, {
    compact: true,
    zebra: true,
    rowCount: 10
  }));
});