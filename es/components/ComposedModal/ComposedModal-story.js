import React from 'react';
import { storiesOf } from '@storybook/react';
import ComposedModal, { ModalHeader, ModalBody, ModalFooter } from '../ComposedModal';
import Button from '../Button';
storiesOf('ComposedModal', module).addWithInfo('Using Header / Footer Props', "\n    Composed Modal allows you to create your own modal with just the parts you need. The ComposedModal element provides the state management for open/close, as well as passes the ModalHeader a prop to close the modal (with the close button).\n\n    The interior components - ModalHeader / ModalBody / ModalFooter - are all container elements that will render any children you add in, wrapped in the appropriate CSS classes.\n\n    The Modal Header / Modal Footer come with some built in props to let you accelerate towards standard Carbon modal UI. If there are customizations you need to do, see the next example of just using the interior components as containers.\n  ", function () {
  return React.createElement(ComposedModal, {
    open: true
  }, React.createElement(ModalHeader, {
    label: "Optional Label",
    title: "Example"
  }), React.createElement(ModalBody, null, React.createElement("p", {
    className: "bx--modal-content__text"
  }, "Please see ModalWrapper for more examples and demo of the functionality.")), React.createElement(ModalFooter, {
    primaryButtonText: "save"
  }));
}).addWithInfo('Using child nodes', "\n    Alternatively, you can just use the Modal components as wrapper elements and figure the children out yourself. We do suggest for the header you utilize the built in props for label and title though, for the footer it's mostly a composed element so creating the two buttons yourself (using the Button component) is probably the most straight-forward pattern.\n  ", function () {
  return React.createElement(ComposedModal, {
    open: true
  }, React.createElement(ModalHeader, null, React.createElement("h1", null, "Testing")), React.createElement(ModalBody, null, React.createElement("p", null, "Please see ModalWrapper for more examples and demo of the functionality.")), React.createElement(ModalFooter, null, React.createElement(Button, {
    kind: "secondary"
  }, "Cancel"), React.createElement(Button, {
    kind: "primary"
  }, "Save")));
});