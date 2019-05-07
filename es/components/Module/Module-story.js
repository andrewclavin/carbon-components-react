import React from 'react';
import { storiesOf } from '@storybook/react';
import { Module, ModuleHeader, ModuleBody } from '../Module';
storiesOf('Module', module).addWithInfo('Single', "\n      Modules are used to organize content in a structural manner.\n\n\n      Modules are separated into different components. Module components can be\n      'single' or 'double' with the default as 'double'.\n\n\n      ModuleHeader and ModuleBody components hold the content of the\n      Module\n    ", function () {
  return React.createElement(Module, {
    className: "some-class",
    size: "single"
  }, React.createElement(ModuleHeader, null, "Module Example"), React.createElement(ModuleBody, null, React.createElement("p", null, "Lorem Ipsum is dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."), React.createElement("p", null, "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.")));
}).addWithInfo('Double', "\n      Modules are used to organize content in a structural manner.\n\n      Modules are separated into different components. Module components can be\n      'single' or 'double' with the default as 'double'.\n\n      ModuleHeader and ModuleBody components hold the content of the\n      Module\n    ", function () {
  return React.createElement(Module, {
    className: "some-class"
  }, React.createElement(ModuleHeader, null, "Module Example"), React.createElement(ModuleBody, null, React.createElement("p", null, "Lorem Ipsum is dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."), React.createElement("p", null, "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.")));
}).addWithInfo('No Header', "\n      Modules are used to organize content in a structural manner.\n\n      Modules are separated into different components. Module components can be\n      'single' or 'double' with the default as 'double'.\n\n      ModuleHeader and ModuleBody components hold the content of the\n      Module\n    ", function () {
  return React.createElement(Module, {
    className: "some-class",
    size: "single"
  }, React.createElement(ModuleBody, null, React.createElement("p", null, "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.")));
}).addWithInfo('No Header - Centered Content', "\n      Modules are used to organize content in a structural manner.\n\n      Modules are separated into different components. Module components can be\n      'single' or 'double' with the default as 'double'.\n\n      ModuleHeader and ModuleBody components hold the content of the\n      Module\n    ", function () {
  return React.createElement(Module, {
    className: "some-class",
    size: "single"
  }, React.createElement(ModuleBody, {
    centered: true
  }, React.createElement("p", null, "Lorem Ipsum is dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."), React.createElement("p", null, "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.")));
});