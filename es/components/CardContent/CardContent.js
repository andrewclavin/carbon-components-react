function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { isValidElement } from 'react';
import warning from 'warning';
import Icon from '../Icon';
var didWarnAboutDeprecation = false;

var CardContent = function CardContent(_ref) {
  var className = _ref.className,
      children = _ref.children,
      cardIcon = _ref.cardIcon,
      cardTitle = _ref.cardTitle,
      cardLink = _ref.cardLink,
      cardInfo = _ref.cardInfo,
      iconDescription = _ref.iconDescription,
      other = _objectWithoutProperties(_ref, ["className", "children", "cardIcon", "cardTitle", "cardLink", "cardInfo", "iconDescription"]);

  if (process.env.NODE_ENV !== "production") {
    process.env.NODE_ENV !== "production" ? warning(didWarnAboutDeprecation, 'Accessing the `CardContent` component from the ' + '`carbon-components-react` package is deprecated. Use the ' + '`carbon-addons-cloud-react` package instead.') : void 0;
    didWarnAboutDeprecation = true;
  }

  var cardContentClasses = classNames(_defineProperty({
    'bx--card__card-overview': true
  }, className, className));
  var cardLinkContent = cardLink ? cardLink.map(function (link, key) {
    return React.createElement("a", {
      key: key,
      href: link,
      className: "bx--about__title--link"
    }, link);
  }) : '';
  var cardInfoContent = cardInfo ? cardInfo.map(function (info, key) {
    return React.createElement("h4", {
      key: key,
      className: "bx--about__title--additional-info"
    }, info);
  }) : '';
  var cardLinkContentArray = Object.keys(cardLinkContent);
  var cardInfoContentArray = Object.keys(cardInfoContent);
  process.env.NODE_ENV !== "production" ? warning(!isValidElement(cardIcon) || iconDescription === CardContent.defaultProps.iconDescription, "Specified a custom icon while the icon description is provided.\nIt'll be ignored as an icon description is only used for carbon-icons sprite.") : void 0;
  return React.createElement("div", _extends({}, other, {
    className: cardContentClasses
  }), children, React.createElement("div", {
    className: "bx--card-overview__about"
  }, cardIcon && React.createElement("div", {
    className: "bx--about__icon"
  }, isValidElement(cardIcon) ? cardIcon : React.createElement(Icon, {
    className: "bx--about__icon--img",
    name: cardIcon,
    description: iconDescription
  })), React.createElement("div", {
    className: "bx--about__title"
  }, React.createElement("p", {
    id: "card-app-title",
    className: "bx--about__title--name"
  }, cardTitle), cardLinkContentArray.map(function (info, key) {
    return cardLinkContent[key];
  }), cardInfoContentArray.map(function (info, key) {
    return cardInfoContent[key];
  }))));
};

CardContent.propTypes = {
  /**
   * The child nodes.
   */
  children: PropTypes.node,

  /**
   * The name of icon sprite, or icon itself.
   */
  cardIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

  /**
   * The title of the card.
   */
  cardTitle: PropTypes.string,

  /**
   * A link to put in the card.
   */
  cardLink: PropTypes.node,

  /**
   * Additional info to put in the card.
   */
  cardInfo: PropTypes.array,

  /**
   * The CSS class names.
   */
  className: PropTypes.string,

  /**
   * The description of the icon.
   */
  iconDescription: PropTypes.string
};
CardContent.defaultProps = {
  iconDescription: 'card icon',
  cardIcon: 'app-services',
  cardTitle: 'card title'
};
export default CardContent;