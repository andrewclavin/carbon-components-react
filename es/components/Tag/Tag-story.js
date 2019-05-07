import React from 'react';
import { storiesOf } from '@storybook/react';
import Tag, { types } from '../Tag';
import TagSkeleton from '../Tag/Tag.Skeleton';
storiesOf('Tag', module).addWithInfo('Default', "\n      Tags are used for items that need to be labeled, categorized, or organized using keywords that describe them.\n      The example below shows how the Tag component can be used. Each type has a default message describing the type,\n      but a custom message can also be applied.\n    ", function () {
  return React.createElement("div", null, React.createElement("div", null, types.map(function (type) {
    return React.createElement(Tag, {
      key: type,
      className: "some-class",
      type: type
    });
  })), React.createElement("div", null, React.createElement(Tag, {
    type: "experimental"
  }, "Custom Message")));
}).addWithInfo('skeleton', "\n    Placeholder skeleton state to use when content is loading.\n    ", function () {
  return React.createElement("div", null, React.createElement(TagSkeleton, null));
});