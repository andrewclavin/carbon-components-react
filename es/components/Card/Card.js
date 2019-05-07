function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import warning from 'warning';
var didWarnAboutDeprecation = false;

var Card = function Card(_ref) {
  var children = _ref.children,
      className = _ref.className,
      tabIndex = _ref.tabIndex,
      other = _objectWithoutProperties(_ref, ["children", "className", "tabIndex"]);

  if (process.env.NODE_ENV !== "production") {
    process.env.NODE_ENV !== "production" ? warning(didWarnAboutDeprecation, 'Accessing the `Card` component from the `carbon-components-react` ' + 'package is deprecated. Use the `carbon-addons-cloud-react` package ' + 'instead.') : void 0;
    didWarnAboutDeprecation = true;
  }

  var cardClasses = classNames(_defineProperty({
    'bx--card': true
  }, className, className));
  return React.createElement("div", _extends({}, other, {
    className: cardClasses,
    tabIndex: tabIndex
  }), children);
};

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  tabIndex: PropTypes.number,
  onBlur: PropTypes.func,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyDown: PropTypes.func,
  onKeyUp: PropTypes.func,
  onMouseDown: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  onMouseUp: PropTypes.func
};
Card.defaultProps = {
  tabIndex: 0
};
export default Card;