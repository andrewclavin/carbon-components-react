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

/* eslint-disable no-console */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import Card from '../Card';
import OverflowMenu from '../OverflowMenu';
import OverflowMenuItem from '../OverflowMenuItem';
import CardFooter from '../CardFooter';
import CardContent from '../CardContent';
import CardStatus from '../CardStatus';
import CardActions from '../CardActions';
import CardActionItem from '../CardActionItem';
import Button from '../Button';
import Link from '../Link';
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
        status: CardStatus.appStatus.STOPPED
      });
    });

    _defineProperty(_assertThisInitialized(_this), "restartApp", function () {
      _this.setState({
        status: CardStatus.appStatus.RUNNING
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
      return this.props.simple ? React.createElement(Card, cardProps, React.createElement(CardContent, {
        cardTitle: "Card Name",
        cardIcon: "app-services",
        cardInfo: ['Secondary Information']
      }, React.createElement(OverflowMenu, overflowMenuProps, React.createElement(OverflowMenuItem, _extends({}, overflowMenuItemProps, {
        itemText: "Stop App"
      })), React.createElement(OverflowMenuItem, _extends({}, overflowMenuItemProps, {
        itemText: "Restart App"
      })), React.createElement(OverflowMenuItem, _extends({}, overflowMenuItemProps, {
        itemText: "Rename App"
      })), React.createElement(OverflowMenuItem, _extends({}, overflowMenuItemProps, {
        itemText: "Delete App",
        hasDivider: true
      })))), React.createElement(CardFooter, null, React.createElement(Button, {
        small: true,
        kind: "primary"
      }, "View credentials"), React.createElement(Link, {
        href: "#",
        className: "bx--card-footer__link"
      }, "Link"))) : React.createElement(Card, cardProps, React.createElement(CardContent, {
        cardTitle: "App Title 1",
        cardLink: cardLinks
      }, React.createElement(OverflowMenu, overflowMenuProps, React.createElement(OverflowMenuItem, _extends({}, overflowMenuItemProps, {
        itemText: "Stop App",
        onClick: this.stopApp
      })), React.createElement(OverflowMenuItem, _extends({}, overflowMenuItemProps, {
        itemText: "Restart App",
        onClick: this.restartApp
      })), React.createElement(OverflowMenuItem, _extends({}, overflowMenuItemProps, {
        itemText: "Rename App",
        onClick: this.renameApp
      })), React.createElement(OverflowMenuItem, _extends({}, overflowMenuItemProps, {
        itemText: "Delete App",
        hasDivider: true,
        onClick: this.deleteApp
      })))), React.createElement(CardFooter, null, React.createElement(CardStatus, {
        status: this.state.status
      }), React.createElement(CardActions, null, React.createElement(CardActionItem, {
        iconName: "restart--glyph",
        onClick: this.restartApp,
        description: "Restart App"
      }), React.createElement(CardActionItem, {
        iconName: "launch--glyph",
        onClick: this.goToApp,
        description: "Go To App"
      }), React.createElement(CardActionItem, {
        iconName: "favorite",
        onClick: this.favoriteApp,
        description: "Favorite App"
      }))));
    }
  }]);

  return ControlledCard;
}(Component);

_defineProperty(ControlledCard, "propTypes", {
  status: PropTypes.number,
  simple: PropTypes.bool
});

_defineProperty(ControlledCard, "defaultProps", {
  status: CardStatus.appStatus.RUNNING,
  simple: false
});

storiesOf('Card', module).addWithInfo('card', "\n      Cards provide an at-a glance preview of the content they link to and frequently contain\n      easily-consumable content. The example below shows an empty card. Create Card Content, Card Footer,\n      Card Status and Card Actions components to add content to your card.\n    ", function () {
  return React.createElement(ControlledCard, {
    simple: true
  });
}).addWithInfo('card with example functions', "\n      Cards provide an at-a glance preview of the content they link to and frequently contain\n      easily-consumable content. The Card component can be divided into seperate parts.\n      Use the Card Footer component to add a section to the bottom of your Card. The Card Content component\n      contains the main content of the card (cardIcon, cardTitle, cardLink, cardInfo). Card Status displays the\n      current status of the application (RUNNING, NOT_RUNNING, STOPPED). Finally, create Card Actions\n      to add functional buttons with icons. The example below shows a Card component with info and an Overflow Menu in the\n      Card Content, plus Restart/Go To/Favorite actions in the Card Footer.\n    ", function () {
  return React.createElement(ControlledCard, {
    status: CardStatus.appStatus.RUNNING
  });
}).addWithInfo('basic card', "\n      Cards provide an at-a glance preview of the content they link to and frequently contain\n      easily-consumable content. The example below shows an empty card. Create Card Content, Card Footer,\n      Card Status and Card Actions components to add content to your card.\n    ", function () {
  return React.createElement(Card, null);
});