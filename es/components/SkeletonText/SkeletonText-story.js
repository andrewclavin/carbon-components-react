/* eslint-disable no-console */
import React from 'react';
import { storiesOf } from '@storybook/react';
import SkeletonText from '../SkeletonText';
storiesOf('SkeletonText', module).addWithInfo('heading', "\n      Skeleton states are used as a progressive loading state while the user waits for content to load.\n\n      This example shows a skeleton state for a heading. \n    ", function () {
  return React.createElement("div", {
    style: {
      width: '300px'
    }
  }, React.createElement(SkeletonText, {
    heading: true
  }));
}).addWithInfo('paragraph', "\n      Skeleton states are used as a progressive loading state while the user waits for content to load.\n\n      This example shows a skeleton state for a paragraph of text.\n    ", function () {
  return React.createElement("div", {
    style: {
      width: '500px'
    }
  }, React.createElement(SkeletonText, {
    paragraph: true
  }), React.createElement("br", null), React.createElement(SkeletonText, {
    width: "250px",
    lineCount: 8,
    paragraph: true
  }));
});