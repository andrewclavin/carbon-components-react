import React from 'react';
import Icon from '../Icon';
import SearchLayoutButton from '../SearchLayoutButton';
import { mount } from 'enzyme';
describe('SearchLayoutButton', function () {
  var wrapper = mount(React.createElement(SearchLayoutButton, {
    labelText: "testlabel"
  }));
  describe('buttons', function () {
    var btn = wrapper.find('button');
    it('should have type="button"', function () {
      var type = btn.instance().getAttribute('type');
      expect(type).toEqual('button');
    });
    it('has expected class for sort button', function () {
      expect(btn.hasClass('bx--search-button')).toEqual(true);
    });
  });
  describe('icons', function () {
    it('should use "list" icon for toggle button', function () {
      var icon = wrapper.find(Icon);
      expect(icon.props().name).toEqual('list');
    });
    it('should use "grid" icon when format state is not "list"', function () {
      wrapper.setState({
        format: 'not-list'
      });
      var icon = wrapper.find(Icon);
      expect(icon.props().name).toEqual('grid');
    });
    it('should support specifying the layout via props', function () {
      var wrapperWithFormatProps = mount(React.createElement(SearchLayoutButton, {
        format: "grid"
      }));
      expect(wrapperWithFormatProps.find(Icon).props().name).toEqual('grid');
      wrapperWithFormatProps.setProps({
        format: 'list'
      });
      expect(wrapperWithFormatProps.find(Icon).props().name).toEqual('list');
    });
    it('should support being notified of change in layout', function () {
      var onChangeFormat = jest.fn();
      var wrapperWithFormatProps = mount(React.createElement(SearchLayoutButton, {
        format: "grid",
        onChangeFormat: onChangeFormat
      }));
      wrapperWithFormatProps.find('button').simulate('click');
      wrapperWithFormatProps.find('button').simulate('click');
      expect(onChangeFormat.mock.calls).toEqual([[{
        format: 'list'
      }], [{
        format: 'grid'
      }]]);
    });
  });
});