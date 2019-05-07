"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _Search = _interopRequireDefault(require("../Search"));

var _Search2 = _interopRequireDefault(require("../Search/Search.Skeleton"));

var _SearchFilterButton = _interopRequireDefault(require("../SearchFilterButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var searchProps = {
  className: 'some-class'
};
(0, _react2.storiesOf)('Search', module).addWithInfo('normal', "\n      Search enables users to specify a word or a phrase to find particular relevant pieces of content\n      without the use of navigation. Search can be used as the primary means of discovering content,\n      or as a filter to aid the user in finding content.\n    ", function () {
  return _react.default.createElement(_Search.default, _extends({}, searchProps, {
    className: "some-class",
    id: "search-1",
    labelText: "Search",
    placeHolderText: "Search",
    onChange: (0, _addonActions.action)('onChange')
  }));
}).addWithInfo('small', "\n      Search enables users to specify a word or a phrase to find particular relevant pieces of content\n      without the use of navigation. Search can be used as the primary means of discovering content,\n      or as a filter to aid the user in finding content. With the small property, the search field will be\n      more compact.\n    ", function () {
  return _react.default.createElement(_Search.default, _extends({}, searchProps, {
    className: "some-class",
    small: true,
    id: "search-2",
    labelText: "Search",
    placeHolderText: "Search",
    onChange: (0, _addonActions.action)('onChange')
  }));
}).addWithInfo('Controlled', "\n      You can control the Search input like you would with a normal input as well. See the Storybook source to see the source code behind this at https://github.com/carbon-design-system/carbon-components-react/blob/master/.storybook/components/SearchStory.js\n    ", function () {
  var ControlledSearch =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(ControlledSearch, _React$Component);

    function ControlledSearch() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, ControlledSearch);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ControlledSearch)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_this), "state", {
        searchValue: ''
      });

      _defineProperty(_assertThisInitialized(_this), "handleChange", function (evt) {
        console.log('handleChange');

        _this.setState({
          searchValue: evt.target.value
        });
      });

      return _this;
    }

    _createClass(ControlledSearch, [{
      key: "render",
      value: function render() {
        return _react.default.createElement(_Search.default, _extends({}, searchProps, {
          className: "some-class",
          id: "search-1",
          labelText: "Search",
          value: this.state.searchValue,
          onChange: this.handleChange,
          placeHolderText: "Search"
        }));
      }
    }]);

    return ControlledSearch;
  }(_react.default.Component);

  return _react.default.createElement(ControlledSearch, null);
}).addWithInfo('Custom set of buttons', "\n      You can control what set of buttons you want.\n    ", function () {
  return _react.default.createElement(_Search.default, _extends({}, searchProps, {
    className: "some-class",
    id: "search-1",
    labelText: "Search",
    placeHolderText: "Search",
    onChange: (0, _addonActions.action)('onChange')
  }), _react.default.createElement(_SearchFilterButton.default, {
    onClick: (0, _addonActions.action)('onClick')
  }));
}).addWithInfo('skeleton', "\n      Placeholder skeleton state to use when content is loading.\n    ", function () {
  return _react.default.createElement("div", {
    style: {
      width: '200px'
    }
  }, _react.default.createElement(_Search2.default, null), "\xA0", _react.default.createElement(_Search2.default, {
    small: true
  }));
});