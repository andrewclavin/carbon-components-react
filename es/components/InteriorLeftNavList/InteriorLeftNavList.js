function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import warning from 'warning';
import InteriorLeftNavItem from '../InteriorLeftNavItem';
import Icon from '../Icon';
var didWarnAboutDeprecation = false;

var InteriorLeftNavList =
/*#__PURE__*/
function (_Component) {
  _inherits(InteriorLeftNavList, _Component);

  function InteriorLeftNavList(props) {
    var _this;

    _classCallCheck(this, InteriorLeftNavList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(InteriorLeftNavList).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "toggle", function (evt) {
      if (evt.which === 13 || evt.which === 32 || evt.type === 'click') {
        if (!_this.state.open) {
          _this.props.onListClick(_this.props.id);
        }

        _this.setState({
          open: !_this.state.open
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "close", function () {
      return _this.state.open && _this.setState({
        open: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "buildNewItemChild", function (child, index) {
      var _this$props = _this.props,
          onItemClick = _this$props.onItemClick,
          activeHref = _this$props.activeHref;
      var key = "listitem-".concat(index);
      return React.createElement(InteriorLeftNavItem, _extends({}, child.props, {
        key: key,
        onClick: onItemClick,
        activeHref: activeHref,
        tabIndex: _this.state.open ? 0 : -1
      }));
    });

    _this.state = {
      open: props.open
    };

    if (process.env.NODE_ENV !== "production") {
      process.env.NODE_ENV !== "production" ? warning(didWarnAboutDeprecation, 'Accessing the `InteriorLeftNavList` component from the ' + '`carbon-components-react` package is deprecated. Use the ' + '`carbon-addons-cloud-react` package instead.') : void 0;
      didWarnAboutDeprecation = true;
    }

    return _this;
  }

  _createClass(InteriorLeftNavList, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          tabIndex = _this$props2.tabIndex,
          title = _this$props2.title,
          children = _this$props2.children,
          className = _this$props2.className,
          iconDescription = _this$props2.iconDescription,
          onListClick = _this$props2.onListClick,
          onItemClick = _this$props2.onItemClick,
          activeHref = _this$props2.activeHref;
      var classNames = classnames('left-nav-list__item', 'left-nav-list__item--has-children', {
        'left-nav-list__item--expanded': this.state.open
      }, className);
      var newChildren = React.Children.map(children, function (child, index) {
        return _this2.buildNewItemChild(child, index);
      });
      return React.createElement("li", {
        className: classNames,
        tabIndex: tabIndex,
        onClick: this.toggle,
        onKeyPress: this.toggle,
        role: "menuitem"
      }, React.createElement("div", {
        className: "left-nav-list__item-link"
      }, title, React.createElement("div", {
        className: "left-nav-list__item-icon"
      }, React.createElement(Icon, {
        name: "chevron--down",
        description: iconDescription,
        className: "left-nav-list__item-icon bx--interior-left-nav__icon"
      }))), React.createElement("ul", {
        role: "menu",
        className: "left-nav-list left-nav-list--nested",
        "aria-label": title,
        "aria-hidden": true
      }, newChildren));
    }
  }]);

  return InteriorLeftNavList;
}(Component);

_defineProperty(InteriorLeftNavList, "propTypes", {
  className: PropTypes.string,
  children: PropTypes.node,
  tabIndex: PropTypes.number,
  title: PropTypes.string,
  open: PropTypes.bool,
  onListClick: PropTypes.func,
  onItemClick: PropTypes.func,
  activeHref: PropTypes.string,
  iconDescription: PropTypes.string,
  id: PropTypes.string,
  isExpanded: PropTypes.bool
});

_defineProperty(InteriorLeftNavList, "defaultProps", {
  title: 'Provide title',
  open: false,
  tabIndex: 0,
  activeHref: '#',
  iconDescription: 'display sub navigation items',
  onListClick:
  /* istanbul ignore next */
  function onListClick() {},
  onItemClick:
  /* istanbul ignore next */
  function onItemClick() {},
  isExpanded: false
});

export { InteriorLeftNavList as default };