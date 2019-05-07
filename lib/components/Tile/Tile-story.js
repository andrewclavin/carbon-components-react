"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _Tile = require("../Tile");

var _TileGroup = _interopRequireDefault(require("../TileGroup"));

var _RadioTile = _interopRequireDefault(require("../RadioTile"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Tile', module).addWithInfo('Default', "\n      Default tile without any interactions\n    ", function () {
  return _react.default.createElement(_Tile.Tile, null, "Default tile");
}).addWithInfo('Clickable', "\n      Clickable tile\n    ", function () {
  return _react.default.createElement(_Tile.ClickableTile, null, "Clickable Tile");
}).addWithInfo('Multi-select', "\n      Selectable tile\n\n      Use this to select multiple tiles.\n    ", function () {
  return _react.default.createElement("div", null, _react.default.createElement(_Tile.SelectableTile, {
    id: "tile-1",
    name: "tiles"
  }, "Multi-select Tile"), _react.default.createElement(_Tile.SelectableTile, {
    id: "tile-1",
    name: "tiles"
  }, "Multi-select Tile"), _react.default.createElement(_Tile.SelectableTile, {
    id: "tile-1",
    name: "tiles"
  }, "Multi-select Tile"));
}).addWithInfo('Selectable', "\n         The example below shows a Tile Group component with a default selected Tile.\n         Although you can set the checked prop on the Tile, when using the RadioTile component\n         as a child of the Tile Group, either set the defaultSelected or valueSelected which will\n         automatically set the selected prop on the corresponding RadioTile component.\n\n         Use defaultSelected when you want a tile to be selected initially, but don't need to set it\n         at a later time. If you do need to set it dynamically at a later time, then use the valueSelected property instead.\n\n         Use this to select one tile at a time.\n      ", function () {
  return _react.default.createElement(_TileGroup.default, {
    onChange: (0, _addonActions.action)('onChange'),
    name: "tile-group",
    defaultSelected: "default-selected",
    legend: "Selectable Tile Group"
  }, _react.default.createElement(_RadioTile.default, {
    value: "standard",
    id: "tile-1",
    labelText: "Selectable Tile"
  }, "Selectable Tile"), _react.default.createElement(_RadioTile.default, {
    value: "default-selected",
    labelText: "Default selected tile",
    id: "tile-2"
  }, "Selectable Tile"), _react.default.createElement(_RadioTile.default, {
    value: "selected",
    labelText: "Selectable Tile",
    id: "tile-3"
  }, "Selectable Tile"));
}).addWithInfo('Expandable', "\n      Expandable tile\n    ", function () {
  return _react.default.createElement(_Tile.ExpandableTile, null, _react.default.createElement(_Tile.TileAboveTheFoldContent, null, _react.default.createElement("div", {
    style: {
      height: '200px'
    }
  }, "Above the fold content here")), _react.default.createElement(_Tile.TileBelowTheFoldContent, null, _react.default.createElement("div", {
    style: {
      height: '400px'
    }
  }, "Below the fold content here")));
});