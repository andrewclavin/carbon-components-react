import React from 'react';
import { Tile, ClickableTile, SelectableTile, ExpandableTile, TileAboveTheFoldContent, TileBelowTheFoldContent } from '../Tile';
import { shallow, mount } from 'enzyme';
describe('Tile', function () {
  describe('Renders default tile as expected', function () {
    var wrapper = shallow(React.createElement(Tile, {
      className: "extra-class"
    }, React.createElement("div", {
      className: "child"
    }, "Test")));
    it('renders children as expected', function () {
      expect(wrapper.find('.child').length).toBe(1);
    });
    it('has the expected classes', function () {
      expect(wrapper.hasClass('bx--tile')).toEqual(true);
    });
    it('renders extra classes passed in via className', function () {
      expect(wrapper.hasClass('extra-class')).toEqual(true);
    });
  });
  describe('Renders clickable tile as expected', function () {
    var wrapper = shallow(React.createElement(ClickableTile, {
      className: "extra-class"
    }, React.createElement("div", {
      className: "child"
    }, "Test")));
    beforeEach(function () {
      wrapper.state().clicked = false;
    });
    it('renders children as expected', function () {
      expect(wrapper.find('.child').length).toBe(1);
    });
    it('has the expected classes', function () {
      expect(wrapper.hasClass('bx--tile--clickable')).toEqual(true);
    });
    it('renders extra classes passed in via className', function () {
      expect(wrapper.hasClass('extra-class')).toEqual(true);
    });
    it('toggles the clickable class on click', function () {
      expect(wrapper.hasClass('bx--tile--is-clicked')).toEqual(false);
      wrapper.simulate('click');
      expect(wrapper.hasClass('bx--tile--is-clicked')).toEqual(true);
    });
    it('toggles the clickable state on click', function () {
      expect(wrapper.state().clicked).toEqual(false);
      wrapper.simulate('click');
      expect(wrapper.state().clicked).toEqual(true);
    });
    it('toggles the clicked state when using enter or space', function () {
      expect(wrapper.state().clicked).toEqual(false);
      wrapper.simulate('keydown', {
        which: 32
      });
      expect(wrapper.state().clicked).toEqual(true);
      wrapper.simulate('keydown', {
        which: 13
      });
      expect(wrapper.state().clicked).toEqual(false);
    });
  });
  describe('Renders selectable tile as expected', function () {
    var wrapper = mount(React.createElement(SelectableTile, {
      className: "extra-class"
    }, React.createElement("div", {
      className: "child"
    }, "Test")));
    beforeEach(function () {
      wrapper.state().selected = false;
    });
    it('renders children as expected', function () {
      expect(wrapper.find('.child').length).toBe(1);
    });
    it('has the expected classes', function () {
      expect(wrapper.children().hasClass('bx--tile--selectable')).toEqual(true);
    });
    it('renders extra classes passed in via className', function () {
      expect(wrapper.hasClass('extra-class')).toEqual(true);
    });
    it('toggles the selectable state on click', function () {
      expect(wrapper.state().selected).toEqual(false);
      wrapper.simulate('click');
      expect(wrapper.state().selected).toEqual(true);
    });
    it('toggles the selectable state when using enter or space', function () {
      expect(wrapper.state().selected).toEqual(false);
      wrapper.simulate('keydown', {
        which: 32
      });
      expect(wrapper.state().selected).toEqual(true);
      wrapper.simulate('keydown', {
        which: 13
      });
      expect(wrapper.state().selected).toEqual(false);
    });
    it('the input should be checked when state is selected', function () {
      wrapper.setState({
        selected: true
      });
      expect(wrapper.find('input').props().checked).toEqual(true);
    });
  });
  describe('Renders expandable tile as expected', function () {
    var wrapper = mount(React.createElement(ExpandableTile, {
      className: "extra-class"
    }, React.createElement(TileAboveTheFoldContent, {
      className: "child"
    }, React.createElement("div", {
      style: {
        height: '200px'
      }
    }, "Test")), React.createElement(TileBelowTheFoldContent, {
      className: "child"
    }, React.createElement("div", {
      style: {
        height: '500px'
      }
    }, "Test"))));
    beforeEach(function () {
      wrapper.state().expanded = false;
    });
    it('renders children as expected', function () {
      expect(wrapper.props().children.length).toBe(2);
    });
    it('has the expected classes', function () {
      expect(wrapper.children().hasClass('bx--tile--expandable')).toEqual(true);
    });
    it('renders extra classes passed in via className', function () {
      expect(wrapper.hasClass('extra-class')).toEqual(true);
    });
    it('toggles the expandable class on click', function () {
      expect(wrapper.children().hasClass('bx--tile--is-expanded')).toEqual(false);
      wrapper.simulate('click');
      expect(wrapper.children().hasClass('bx--tile--is-expanded')).toEqual(true);
    });
    it('toggles the expandable state on click', function () {
      expect(wrapper.state().expanded).toEqual(false);
      wrapper.simulate('click');
      expect(wrapper.state().expanded).toEqual(true);
    });
    it('displays the default tooltip for the chevron depending on state', function () {
      var defaultExpandedIconText = 'Collapse';
      var defaultCollapsedIconText = 'Expand'; // Force the expanded tile to be collapsed.

      wrapper.setState({
        expanded: false
      });
      var collapsedDescription = wrapper.find('[name="chevron--down"]').getElements()[0].props.description;
      expect(collapsedDescription).toEqual(defaultCollapsedIconText); // click on the item to expand it.

      wrapper.simulate('click'); // Validate the description change

      var expandedDescription = wrapper.find('[name="chevron--down"]').getElements()[0].props.description;
      expect(expandedDescription).toEqual(defaultExpandedIconText);
    });
    it('displays the custom tooltips for the chevron depending on state', function () {
      var tileExpandedIconText = 'Click To Collapse';
      var tileCollapsedIconText = 'Click To Expand'; // Force the custom icon text

      wrapper.setProps({
        tileExpandedIconText: tileExpandedIconText,
        tileCollapsedIconText: tileCollapsedIconText
      }); // Force the expanded tile to be collapsed.

      wrapper.setState({
        expanded: false
      });
      var collapsedDescription = wrapper.find('[name="chevron--down"]').getElements()[0].props.description;
      expect(collapsedDescription).toEqual(tileCollapsedIconText); // click on the item to expand it.

      wrapper.simulate('click'); // Validate the description change

      var expandedDescription = wrapper.find('[name="chevron--down"]').getElements()[0].props.description;
      expect(expandedDescription).toEqual(tileExpandedIconText);
    });
  });
});