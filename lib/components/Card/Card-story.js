"use strict";

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react2 = require("@storybook/react");

var _Card = _interopRequireDefault(require("../Card"));

var _OverflowMenu = _interopRequireDefault(require("../OverflowMenu"));

var _OverflowMenuItem = _interopRequireDefault(require("../OverflowMenuItem"));

var _CardFooter = _interopRequireDefault(require("../CardFooter"));

var _CardContent = _interopRequireDefault(require("../CardContent"));

var _CardStatus = _interopRequireDefault(require("../CardStatus"));

var _CardActions = _interopRequireDefault(require("../CardActions"));

var _CardActionItem = _interopRequireDefault(require("../CardActionItem"));

var _Button = _interopRequireDefault(require("../Button"));

var _Link = _interopRequireDefault(require("../Link"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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

var cardProps = {
  onClick: function onClick() {
    console.log('click');
  },
  onFocus: function onFocus() {
    console.log('focus');
  },
  className: 'some-class'
};
var overflowMenuProps = {
  onClick: function onClick() {
    console.log('click');
  },
  onFocus: function onFocus() {
    console.log('focus');
  },
  className: 'some-class'
};
var overflowMenuItemProps = {
  onFocus: function onFocus() {
    console.log('focus');
  },
  className: 'some-class'
};

var ControlledCard =
/*#__PURE__*/
function (_Component) {
  _inherits(ControlledCard, _Component);

  function ControlledCard(props) {
    var _this;

    _classCallCheck(this, ControlledCard);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ControlledCard).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "stopApp", function () {
      _this.setState({
        status: _CardStatus.default.appStatus.STOPPED
      });
    });

    _defineProperty(_assertThisInitialized(_this), "restartApp", function () {
      _this.setState({
        status: _CardStatus.default.appStatus.RUNNING
      });
    });

    _defineProperty(_assertThisInitialized(_this), "deleteApp", function () {
      console.log('Example function deleteApp() is triggered');
    });

    _defineProperty(_assertThisInitialized(_this), "renameApp", function () {
      console.log('Example function renameApp() is triggered');
    });

    _defineProperty(_assertThisInitialized(_this), "goToApp", function () {
      console.log('Example function goToApp() is triggered');
    });

    _defineProperty(_assertThisInitialized(_this), "favoriteApp", function () {
      console.log('Example function favoriteApp() is triggered');
    });

    _this.state = {
      status: _this.props.status
    };
    return _this;
  }

  _createClass(ControlledCard, [{
    key: "render",
    value: function render() {
      var cardLinks = ['http://myapp.mybluemix.net'];
      return this.props.simple ? _react.default.createElement(_Card.default, cardProps, _react.default.createElement(_CardContent.default, {
        cardTitle: "Card Name",
        cardIcon: "app-services",
        cardInfo: ['Secondary Information']
      }, _react.default.createElement(_OverflowMenu.default, overflowMenuProps, _react.default.createElement(_OverflowMenuItem.default, _extends({}, overflowMenuItemProps, {
        itemText: "Stop App"
      })), _react.default.createElement(_OverflowMenuItem.default, _extends({}, overflowMenuItemProps, {
        itemText: "Restart App"
      })), _react.default.createElement(_OverflowMenuItem.default, _extends({}, overflowMenuItemProps, {
        itemText: "Rename App"
      })), _react.default.createElement(_OverflowMenuItem.default, _extends({}, overflowMenuItemProps, {
        itemText: "Delete App",
        hasDivider: true
      })))), _react.default.createElement(_CardFooter.default, null, _react.default.createElement(_Button.default, {
        small: true,
        kind: "primary"
      }, "View credentials"), _react.default.createElement(_Link.default, {
        href: "#",
        className: "bx--card-footer__link"
      }, "Link"))) : _react.default.createElement(_Card.default, cardProps, _react.default.createElement(_CardContent.default, {
        cardTitle: "App Title 1",
        cardLink: cardLinks
      }, _react.default.createElement(_OverflowMenu.default, overflowMenuProps, _react.default.createElement(_OverflowMenuItem.default, _extends({}, overflowMenuItemProps, {
        itemText: "Stop App",
        onClick: this.stopApp
      })), _react.default.createElement(_OverflowMenuItem.default, _extends({}, overflowMenuItemProps, {
        itemText: "Restart App",
        onClick: this.restartApp
      })), _react.default.createElement(_OverflowMenuItem.default, _extends({}, overflowMenuItemProps, {
        itemText: "Rename App",
        onClick: this.renameApp
      })), _react.default.createElement(_OverflowMenuItem.default, _extends({}, overflowMenuItemProps, {
        itemText: "Delete App",
        hasDivider: true,
        onClick: this.deleteApp
      })))), _react.default.createElement(_CardFooter.default, null, _react.default.createElement(_CardStatus.default, {
        status: this.state.status
      }), _react.default.createElement(_CardActions.default, null, _react.default.createElement(_CardActionItem.default, {
        iconName: "restart--glyph",
        onClick: this.restartApp,
        description: "Restart App"
      }), _react.default.createElement(_CardActionItem.default, {
        iconName: "launch--glyph",
        onClick: this.goToApp,
        description: "Go To App"
      }), _react.default.createElement(_CardActionItem.default, {
        iconName: "favorite",
        onClick: this.favoriteApp,
        description: "Favorite App"
      }))));
    }
  }]);

  return ControlledCard;
}(_react.Component);

_defineProperty(ControlledCard, "propTypes", {
  status: _propTypes.default.number,
  simple: _propTypes.default.bool
});

_defineProperty(ControlledCard, "defaultProps", {
  status: _CardStatus.default.appStatus.RUNNING,
  simple: false
});

(0, _react2.storiesOf)('Card', module).addWithInfo('card', "\n      Cards provide an at-a glance preview of the content they link to and frequently contain\n      easily-consumable content. The example below shows an empty card. Create Card Content, Card Footer,\n      Card Status and Card Actions components to add content to your card.\n    ", function () {
  return _react.default.createElement(ControlledCard, {
    simple: true
  });
}).addWithInfo('card with example functions', "\n      Cards provide an at-a glance preview of the content they link to and frequently contain\n      easily-consumable content. The Card component can be divided into seperate parts.\n      Use the Card Footer component to add a section to the bottom of your Card. The Card Content component\n      contains the main content of the card (cardIcon, cardTitle, cardLink, cardInfo). Card Status displays the\n      current status of the application (RUNNING, NOT_RUNNING, STOPPED). Finally, create Card Actions\n      to add functional buttons with icons. The example below shows a Card component with info and an Overflow Menu in the\n      Card Content, plus Restart/Go To/Favorite actions in the Card Footer.\n    ", function () {
  return _react.default.createElement(ControlledCard, {
    status: _CardStatus.default.appStatus.RUNNING
  });
}).addWithInfo('basic card', "\n      Cards provide an at-a glance preview of the content they link to and frequently contain\n      easily-consumable content. The example below shows an empty card. Create Card Content, Card Footer,\n      Card Status and Card Actions components to add content to your card.\n    ", function () {
  return _react.default.createElement(_Card.default, null);
});