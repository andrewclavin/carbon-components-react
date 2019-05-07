"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _DatePicker = _interopRequireDefault(require("../DatePicker"));

var _DatePickerInput = _interopRequireDefault(require("../DatePickerInput"));

var _DatePicker2 = _interopRequireDefault(require("../DatePicker/DatePicker.Skeleton"));

var _withState = _interopRequireDefault(require("../../tools/withState"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// Datepickers last argument contains an instance of flatpickr
// and will cause action logger to enter an infinite loop. Just don't log that argument
var datePickerOnChangeActions = (0, _addonActions.decorateAction)([function (args) {
  return args.slice(0, args.length - 2);
}]);
var datePickerProps = {
  id: 'date-picker',
  onChange: datePickerOnChangeActions('onPickerChange')
};
var datePickerInputProps = {
  className: 'some-class',
  labelText: 'Date Picker label',
  locale: 'en',
  onClick: (0, _addonActions.action)('onClick'),
  onChange: (0, _addonActions.action)('onInputChange'),
  placeholder: 'mm/dd/yyyy',
  pattern: '\\d{1,2}\\/\\d{1,2}\\/\\d{4}',
  id: 'date-picker-input-id'
};
var simpleShortDatePickerInputProps = {
  placeholder: 'mm/yyyy',
  pattern: '\\d{1,2}\\/\\d{4}'
};
(0, _react2.storiesOf)('DatePicker', module).addWithInfo('simple and short', "\n      A simple Date Picker consists of an input field and no calendar.\n    ", function () {
  return _react.default.createElement(_DatePicker.default, _extends({}, datePickerProps, {
    short: true,
    datePickerType: "simple"
  }), _react.default.createElement(_DatePickerInput.default, _extends({}, datePickerInputProps, simpleShortDatePickerInputProps)));
}).addWithInfo('simple and normal', "\n      A simple Date Picker consists of an input field and no calendar.\n    ", function () {
  return _react.default.createElement(_DatePicker.default, {
    id: "date-picker",
    datePickerType: "simple"
  }, _react.default.createElement(_DatePickerInput.default, datePickerInputProps));
}).addWithInfo('single with calendar', "\n      A single Date Picker consists of an input field and a calendar.\n    ", function () {
  return _react.default.createElement(_DatePicker.default, _extends({}, datePickerProps, {
    datePickerType: "single",
    dateFormat: "m/d/Y"
  }), _react.default.createElement(_DatePickerInput.default, datePickerInputProps));
}).addWithInfo('range with calendar', "\n      A range Date Picker consists of two input fields and a calendar.\n    ", function () {
  return _react.default.createElement(_DatePicker.default, _extends({}, datePickerProps, {
    datePickerType: "range",
    dateFormat: "m/d/Y"
  }), _react.default.createElement(_DatePickerInput.default, _extends({}, datePickerInputProps, {
    id: "date-picker-input-id"
  })), _react.default.createElement(_DatePickerInput.default, _extends({}, datePickerInputProps, {
    id: "date-picker-input-id-2"
  })));
}).addWithInfo('range with calendar and min/max dates', "\n      A range Date Picker consists of two input fields and a calendar, and optionally, the minDate and maxDate fields.\n    ", function () {
  return _react.default.createElement(_DatePicker.default, _extends({}, datePickerProps, {
    minDate: "1/10/2020",
    maxDate: "1/20/2020",
    datePickerType: "range",
    dateFormat: "m/d/Y"
  }), _react.default.createElement(_DatePickerInput.default, _extends({}, datePickerInputProps, {
    id: "date-picker-input-id"
  })), _react.default.createElement(_DatePickerInput.default, _extends({}, datePickerInputProps, {
    id: "date-picker-input-id-2"
  })));
}).addWithInfo('fully controlled', "\n      If your application needs to control the value of the date picker and\n      be notified of any changes.\n    ", function () {
  return _react.default.createElement(_withState.default, {
    initialState: {
      date: ''
    }
  }, function (_ref) {
    var state = _ref.state,
        setState = _ref.setState;
    return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_DatePicker.default, {
      datePickerType: "single",
      dateFormat: "m/d/Y",
      value: state.date,
      onChange: function onChange(eventOrDates) {
        var value = eventOrDates.target ? eventOrDates.target.value : eventOrDates[0];
        setState({
          date: value
        });
      }
    }, _react.default.createElement(_DatePickerInput.default, {
      key: "label",
      labelText: "Controlled Date",
      id: "date-picker-input-id"
    })), _react.default.createElement("button", {
      onClick: function onClick() {
        return setState({
          date: '01/01/2011'
        });
      }
    }, "Click me to set to 01/01/2011"));
  });
}).addWithInfo('skeleton', "\n    Placeholder skeleton state to use when content is loading.\n    ", function () {
  return _react.default.createElement(_DatePicker2.default, {
    range: true
  });
});