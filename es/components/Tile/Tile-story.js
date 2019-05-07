import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Tile, ClickableTile, SelectableTile, ExpandableTile, TileAboveTheFoldContent, TileBelowTheFoldContent } from '../Tile';
import TileGroup from '../TileGroup';
import RadioTile from '../RadioTile';
storiesOf('Tile', module).addWithInfo('Default', "\n      Default tile without any interactions\n    ", function () {
  return React.createElement(Tile, null, "Default tile");
}).addWithInfo('Clickable', "\n      Clickable tile\n    ", function () {
  return React.createElement(ClickableTile, null, "Clickable Tile");
}).addWithInfo('Multi-select', "\n      Selectable tile\n\n      Use this to select multiple tiles.\n    ", function () {
  return React.createElement("div", null, React.createElement(SelectableTile, {
    id: "tile-1",
    name: "tiles"
  }, "Multi-select Tile"), React.createElement(SelectableTile, {
    id: "tile-1",
    name: "tiles"
  }, "Multi-select Tile"), React.createElement(SelectableTile, {
    id: "tile-1",
    name: "tiles"
  }, "Multi-select Tile"));
}).addWithInfo('Selectable', "\n         The example below shows a Tile Group component with a default selected Tile.\n         Although you can set the checked prop on the Tile, when using the RadioTile component\n         as a child of the Tile Group, either set the defaultSelected or valueSelected which will\n         automatically set the selected prop on the corresponding RadioTile component.\n\n         Use defaultSelected when you want a tile to be selected initially, but don't need to set it\n         at a later time. If you do need to set it dynamically at a later time, then use the valueSelected property instead.\n\n         Use this to select one tile at a time.\n      ", function () {
  return React.createElement(TileGroup, {
    onChange: action('onChange'),
    name: "tile-group",
    defaultSelected: "default-selected",
    legend: "Selectable Tile Group"
  }, React.createElement(RadioTile, {
    value: "standard",
    id: "tile-1",
    labelText: "Selectable Tile"
  }, "Selectable Tile"), React.createElement(RadioTile, {
    value: "default-selected",
    labelText: "Default selected tile",
    id: "tile-2"
  }, "Selectable Tile"), React.createElement(RadioTile, {
    value: "selected",
    labelText: "Selectable Tile",
    id: "tile-3"
  }, "Selectable Tile"));
}).addWithInfo('Expandable', "\n      Expandable tile\n    ", function () {
  return React.createElement(ExpandableTile, null, React.createElement(TileAboveTheFoldContent, null, React.createElement("div", {
    style: {
      height: '200px'
    }
  }, "Above the fold content here")), React.createElement(TileBelowTheFoldContent, null, React.createElement("div", {
    style: {
      height: '400px'
    }
  }, "Below the fold content here")));
});