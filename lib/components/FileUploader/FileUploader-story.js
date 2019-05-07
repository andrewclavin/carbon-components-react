"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _FileUploader = _interopRequireWildcard(require("../FileUploader"));

var _FileUploader2 = _interopRequireDefault(require("../FileUploader/FileUploader.Skeleton"));

var _Button = _interopRequireDefault(require("../Button"));

var _this = void 0;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('FileUploader', module).addWithInfo('FileUploaderButton', "\n      The FileUploaderButton can be used as a standalone component if you do not need the extra UI that comes with FileUploader. The FileUploaderButton is used in FileUploader.\n    ", function () {
  return _react.default.createElement(_FileUploader.FileUploaderButton, {
    labelText: "Add files",
    className: "bob",
    onChange: function onChange() {
      return console.log('hi');
    },
    multiple: true
  });
}).addWithInfo('FileUploader', "\n      The FileUploader components allow the user to upload any necessary files. This uses the FileUploaderButton and Filename components. Filename components will appear below the FileUploaderButton when files are added. Use the filenameStatus prop to control what icon appears in Filename ('edit', 'complete', or 'uploading'). The FileUploader component contains a method to clear all files uploaded, clearFiles. This can be used with a ref in the parent component. The clear file button in this example is an example of how to use the clearFiles method.\n    ", function () {
  return _react.default.createElement("div", {
    className: "bx--file__container"
  }, _react.default.createElement(_FileUploader.default, {
    labelTitle: "Upload",
    labelDescription: "only .jpg and .png files at 500mb or less",
    buttonLabel: "Add files",
    filenameStatus: "edit",
    accept: ['.jpg', '.png'],
    multiple: true,
    ref: function ref(fileUploader) {
      return _this.fileUploader = fileUploader;
    }
  }), _react.default.createElement(_Button.default, {
    kind: "secondary",
    small: true,
    style: {
      marginTop: '1rem'
    },
    onClick: function onClick() {
      _this.fileUploader.clearFiles();
    }
  }, "Clear File"));
}).addWithInfo('skeleton', "\n      Placeholder skeleton state to use when content is loading.\n    ", function () {
  return _react.default.createElement("div", {
    style: {
      width: '500px'
    }
  }, _react.default.createElement(_FileUploader2.default, null));
});