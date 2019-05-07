"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _windowOrGlobal = _interopRequireDefault(require("window-or-global"));

var _warning = _interopRequireDefault(require("warning"));

var _InteriorLeftNavList = _interopRequireDefault(require("../InteriorLeftNavList"));

var _InteriorLeftNavItem = _interopRequireDefault(require("../InteriorLeftNavItem"));

var _Icon = _interopRequireDefault(require("../Icon"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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

var didWarnAboutDeprecation = false;

var InteriorLeftNav =
/*#__PURE__*/
function (_Component) {
  _inherits(InteriorLeftNav, _Component);

  function InteriorLeftNav(props) {
    var _this;

    _classCallCheck(this, InteriorLeftNav);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(InteriorLeftNav).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "componentWillReceiveProps", function (nextProps) {
      if (nextProps.activeHref) {
        _this.setState({
          activeHref: nextProps.activeHref
        });
      }

      if (nextProps.open !== undefined && nextProps.open !== _this.props.open) {
        _this.setState({
          open: nextProps.open
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleItemClick", function (evt, href) {
      evt.stopPropagation(); // 13 = Enter, 32 = Spacebar

      var acceptableEvent = evt.which === 13 || evt.which === 32 || evt.type === 'click';
      var diffHref = href !== _this.state.activeHref;

      if (acceptableEvent && diffHref) {
        _this.setState({
          activeHref: href
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleListClick", function (id) {
      _this.props.children.forEach(function (child, index) {
        if (child.type === _InteriorLeftNavList.default) {
          var childId = "list-".concat(index);

          if (childId !== id && !child.props.isExpanded) {
            _this.refs[childId].close();
          }
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "toggle", function (evt) {
      evt.stopPropagation();

      _this.props.onToggle(!_this.state.open);

      _this.setState({
        open: !_this.state.open
      });
    });

    _defineProperty(_assertThisInitialized(_this), "buildNewListChild", function (child, index) {
      var key = "list-".concat(index);
      return _react.default.createElement(_InteriorLeftNavList.default, _extends({}, child.props, {
        key: key,
        ref: key,
        id: key,
        onListClick: _this.handleListClick,
        onItemClick: _this.handleItemClick,
        activeHref: _this.state.activeHref
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "buildNewItemChild", function (child, index) {
      var key = "item-".concat(index);
      return _react.default.createElement(_InteriorLeftNavItem.default, _extends({}, child.props, {
        key: key,
        onClick: _this.handleItemClick,
        activeHref: _this.state.activeHref
      }));
    });

    _this.state = {
      activeHref: props.activeHref || _windowOrGlobal.default.location && _windowOrGlobal.default.location.pathname,
      open: props.open !== undefined ? props.open : true
    };

    if (process.env.NODE_ENV !== "production") {
      process.env.NODE_ENV !== "production" ? (0, _warning.default)(didWarnAboutDeprecation, 'Accessing the `InteriorLeftNav` component from the ' + '`carbon-components-react` package is deprecated. Use the ' + '`carbon-addons-cloud-react` package instead.') : void 0;
      didWarnAboutDeprecation = true;
    }

    return _this;
  }

  _createClass(InteriorLeftNav, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children,
          activeHref = _this$props.activeHref,
          onToggle = _this$props.onToggle,
          other = _objectWithoutProperties(_this$props, ["className", "children", "activeHref", "onToggle"]);

      var newChildren = _react.default.Children.map(children, function (child, index) {
        if (child.type === _InteriorLeftNavList.default) {
          return _this2.buildNewListChild(child, index);
        } else if (child.type === _InteriorLeftNavItem.default) {
          return _this2.buildNewItemChild(child, index);
        }

        return child;
      });

      var classNames = (0, _classnames.default)('bx--interior-left-nav', 'bx--interior-left-nav--collapseable', {
        'bx--interior-left-nav--collapsed': !this.state.open
      }, className);
      var buttonStyles = {
        border: 'none'
      };
      return _react.default.createElement("nav", _extends({
        role: "presentation",
        tabIndex: -1,
        "aria-label": "Interior Left Navigation",
        className: classNames,
        onClick: !this.state.open ? this.toggle : function () {}
      }, other), _react.default.createElement("ul", {
        key: "main_list",
        className: "left-nav-list",
        role: "menubar"
      }, newChildren), _react.default.createElement("button", {
        className: "bx--interior-left-nav-collapse",
        onClick: this.toggle,
        style: buttonStyles
      }, _react.default.createElement(_Icon.default, {
        name: "chevron--left",
        description: "close/open iln",
        className: "bx--interior-left-nav-collapse__arrow"
      })));
    }
  }]);

  return InteriorLeftNav;
}(_react.Component);

exports.default = InteriorLeftNav;

_defineProperty(InteriorLeftNav, "propTypes", {
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  activeHref: _propTypes.default.string,
  onToggle: _propTypes.default.func,
  open: _propTypes.default.bool
});

_defineProperty(InteriorLeftNav, "defaultProps", {
  onToggle: function onToggle() {},
  open: true
});