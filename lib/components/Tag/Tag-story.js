"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _Tag = _interopRequireWildcard(require("../Tag"));

var _Tag2 = _interopRequireDefault(require("../Tag/Tag.Skeleton"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Tag', module).addWithInfo('Default', "\n      Tags are used for items that need to be labeled, categorized, or organized using keywords that describe them.\n      The example below shows how the Tag component can be used. Each type has a default message describing the type,\n      but a custom message can also be applied.\n    ", function () {
  return _react.default.createElement("div", null, _react.default.createElement("div", null, _Tag.types.map(function (type) {
    return _react.default.createElement(_Tag.default, {
      key: type,
      className: "some-class",
      type: type
    });
  })), _react.default.createElement("div", null, _react.default.createElement(_Tag.default, {
    type: "experimental"
  }, "Custom Message")));
}).addWithInfo('skeleton', "\n    Placeholder skeleton state to use when content is loading.\n    ", function () {
  return _react.default.createElement("div", null, _react.default.createElement(_Tag2.default, null));
});