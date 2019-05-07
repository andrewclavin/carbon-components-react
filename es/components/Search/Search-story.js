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

/* eslint-disable no-console */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Search from '../Search';
import SearchSkeleton from '../Search/Search.Skeleton';
import SearchFilterButton from '../SearchFilterButton';
var searchProps = {
  className: 'some-class'
};
storiesOf('Search', module).addWithInfo('normal', "\n      Search enables users to specify a word or a phrase to find particular relevant pieces of content\n      without the use of navigation. Search can be used as the primary means of discovering content,\n      or as a filter to aid the user in finding content.\n    ", function () {
  return React.createElement(Search, _extends({}, searchProps, {
    className: "some-class",
    id: "search-1",
    labelText: "Search",
    placeHolderText: "Search",
    onChange: action('onChange')
  }));
}).addWithInfo('small', "\n      Search enables users to specify a word or a phrase to find particular relevant pieces of content\n      without the use of navigation. Search can be used as the primary means of discovering content,\n      or as a filter to aid the user in finding content. With the small property, the search field will be\n      more compact.\n    ", function () {
  return React.createElement(Search, _extends({}, searchProps, {
    className: "some-class",
    small: true,
    id: "search-2",
    labelText: "Search",
    placeHolderText: "Search",
    onChange: action('onChange')
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
        return React.createElement(Search, _extends({}, searchProps, {
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
  }(React.Component);

  return React.createElement(ControlledSearch, null);
}).addWithInfo('Custom set of buttons', "\n      You can control what set of buttons you want.\n    ", function () {
  return React.createElement(Search, _extends({}, searchProps, {
    className: "some-class",
    id: "search-1",
    labelText: "Search",
    placeHolderText: "Search",
    onChange: action('onChange')
  }), React.createElement(SearchFilterButton, {
    onClick: action('onClick')
  }));
}).addWithInfo('skeleton', "\n      Placeholder skeleton state to use when content is loading.\n    ", function () {
  return React.createElement("div", {
    style: {
      width: '200px'
    }
  }, React.createElement(SearchSkeleton, null), "\xA0", React.createElement(SearchSkeleton, {
    small: true
  }));
});