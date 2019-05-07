function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Search from '../Search';
import setupGetInstanceId from './tools/instanceId';
var getInstanceId = setupGetInstanceId();
var translationKeys = {
  'carbon.table.toolbar.search.label': 'Filter table',
  'carbon.table.toolbar.search.placeholder': 'Search'
};

var translateWithId = function translateWithId(id) {
  return translationKeys[id];
};

var TableToolbarSearch = function TableToolbarSearch(_ref) {
  var className = _ref.className,
      searchContainerClass = _ref.searchContainerClass,
      onChange = _ref.onChange,
      t = _ref.translateWithId,
      _ref$id = _ref.id,
      id = _ref$id === void 0 ? "data-table-search-".concat(getInstanceId()) : _ref$id,
      rest = _objectWithoutProperties(_ref, ["className", "searchContainerClass", "onChange", "translateWithId", "id"]);

  var searchContainerClasses = cx(searchContainerClass, 'bx--toolbar-search-container');
  return React.createElement("div", {
    className: searchContainerClasses
  }, React.createElement(Search, _extends({
    className: className
  }, rest, {
    small: true,
    id: id,
    labelText: t('carbon.table.toolbar.search.label'),
    placeHolderText: t('carbon.table.toolbar.search.placeholder'),
    onChange: onChange
  })));
};

TableToolbarSearch.propTypes = {
  children: PropTypes.node,

  /**
   * Provide an optional class name for the search container
   */
  className: PropTypes.string,

  /**
   * Provide an optional id for the search container
   */
  id: PropTypes.string,

  /**
   * Provide an optional className for the overal container of the Search
   */
  searchContainerClasses: PropTypes.string,

  /**
   * Provide an optional hook that is called each time the input is updated
   */
  onChange: PropTypes.func,

  /**
   * Provide custom text for the component for each translation id
   */
  translateWithId: PropTypes.func.isRequired
};
TableToolbarSearch.defaultProps = {
  translateWithId: translateWithId
};
export default TableToolbarSearch;