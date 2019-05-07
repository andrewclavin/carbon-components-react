"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ComposedModal = _interopRequireWildcard(require("../ComposedModal"));

var _Button = _interopRequireDefault(require("../Button"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('ComposedModal', module).addWithInfo('Using Header / Footer Props', "\n    Composed Modal allows you to create your own modal with just the parts you need. The ComposedModal element provides the state management for open/close, as well as passes the ModalHeader a prop to close the modal (with the close button).\n\n    The interior components - ModalHeader / ModalBody / ModalFooter - are all container elements that will render any children you add in, wrapped in the appropriate CSS classes.\n\n    The Modal Header / Modal Footer come with some built in props to let you accelerate towards standard Carbon modal UI. If there are customizations you need to do, see the next example of just using the interior components as containers.\n  ", function () {
  return _react.default.createElement(_ComposedModal.default, {
    open: true
  }, _react.default.createElement(_ComposedModal.ModalHeader, {
    label: "Optional Label",
    title: "Example"
  }), _react.default.createElement(_ComposedModal.ModalBody, null, _react.default.createElement("p", {
    className: "bx--modal-content__text"
  }, "Please see ModalWrapper for more examples and demo of the functionality.")), _react.default.createElement(_ComposedModal.ModalFooter, {
    primaryButtonText: "save"
  }));
}).addWithInfo('Using child nodes', "\n    Alternatively, you can just use the Modal components as wrapper elements and figure the children out yourself. We do suggest for the header you utilize the built in props for label and title though, for the footer it's mostly a composed element so creating the two buttons yourself (using the Button component) is probably the most straight-forward pattern.\n  ", function () {
  return _react.default.createElement(_ComposedModal.default, {
    open: true
  }, _react.default.createElement(_ComposedModal.ModalHeader, null, _react.default.createElement("h1", null, "Testing")), _react.default.createElement(_ComposedModal.ModalBody, null, _react.default.createElement("p", null, "Please see ModalWrapper for more examples and demo of the functionality.")), _react.default.createElement(_ComposedModal.ModalFooter, null, _react.default.createElement(_Button.default, {
    kind: "secondary"
  }, "Cancel"), _react.default.createElement(_Button.default, {
    kind: "primary"
  }, "Save")));
});