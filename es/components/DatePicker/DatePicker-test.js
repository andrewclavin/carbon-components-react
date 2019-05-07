import React from 'react';
import DatePicker from '../DatePicker';
import DatePickerSkeleton from '../DatePicker/DatePicker.Skeleton';
import { mount, shallow } from 'enzyme';
describe('DatePicker', function () {
  describe('Renders as expected', function () {
    var wrapper = mount(React.createElement(DatePicker, {
      onChange: function onChange() {},
      className: "extra-class"
    }, React.createElement("div", {
      className: "test-child"
    }), React.createElement("div", {
      className: "test-child"
    })));
    var datepicker = wrapper.childAt(0);
    it('has the expected classes', function () {
      expect(datepicker.children().hasClass('bx--date-picker')).toBe(true);
    });
    it('should add extra classes that are passed via className', function () {
      expect(datepicker.children().hasClass('extra-class')).toBe(true);
    });
    it('should add the date picker type as expected', function () {
      expect(wrapper.props().datePickerType).toEqual(undefined);
      wrapper.setProps({
        datePickerType: 'simple'
      });
      expect(wrapper.props().datePickerType).toEqual('simple');
    });
    it('should specify short date picker as expected', function () {
      expect(wrapper.props().short).toEqual(false);
      wrapper.setProps({
        short: true
      });
      expect(wrapper.props().short).toEqual(true);
    });
    it('should add the date format as expected', function () {
      expect(wrapper.props().dateFormat).toEqual('m/d/Y');
      wrapper.setProps({
        dateFormat: 'd/m/Y'
      });
      expect(wrapper.props().dateFormat).toEqual('d/m/Y');
    });
    it('has the value as expected', function () {
      expect(wrapper.props().value).toEqual(undefined);
      wrapper.setProps({
        value: '11/08/2017'
      });
      expect(wrapper.props().value).toEqual('11/08/2017');
    });
    it('should render the children as expected', function () {
      expect(wrapper.props().children.length).toEqual(2);
    });
  });
  describe('Simple date picker', function () {
    var wrapper = mount(React.createElement(DatePicker, {
      datePickerType: "simple",
      className: "extra-class"
    }, React.createElement("div", {
      className: "test-child"
    })));
    var datepicker = wrapper.childAt(0);
    it('has the simple date picker class', function () {
      expect(datepicker.children().hasClass('bx--date-picker--simple')).toBe(true);
    });
    it('has the value as expected', function () {
      expect(wrapper.props().value).toEqual(undefined);
      wrapper.setProps({
        value: '11/08/2017'
      });
      expect(wrapper.props().value).toEqual('11/08/2017');
    });
    it('should not initalize a calendar', function () {
      expect(wrapper.cal).toEqual(undefined);
    });
  });
  describe('Single date picker', function () {
    var wrapper = mount(React.createElement(DatePicker, {
      onChange: function onChange() {},
      datePickerType: "single",
      className: "extra-class"
    }, React.createElement("div", {
      className: "test-child"
    }, React.createElement("input", {
      type: "text",
      className: "bx--date-picker__input"
    }))));
    var datepicker = wrapper.childAt(0);
    var input = wrapper.find('.bx--date-picker__input');
    var icon = wrapper.find('svg');
    it('has the single date picker class', function () {
      expect(datepicker.children().hasClass('bx--date-picker--single')).toBe(true);
    });
    it('should initalize a calendar', function () {
      expect(wrapper.instance().cal).toBeDefined();
    });
    it('should update the classnames', function () {
      expect(wrapper.instance().cal.calendarContainer.classList.contains('bx--date-picker__calendar')).toBe(true);
    });
    it('has the value as expected', function () {
      expect(wrapper.props().value).toEqual(undefined);
      wrapper.setProps({
        value: '11/08/2017'
      });
      expect(wrapper.props().value).toEqual('11/08/2017');
    });
    it('should not render an icon', function () {
      expect(icon.length).toEqual(0);
    });
  });
  describe('Range date picker', function () {
    var wrapper = mount(React.createElement(DatePicker, {
      onChange: function onChange() {},
      datePickerType: "range",
      className: "extra-class"
    }, React.createElement("div", {
      className: "test-child"
    }, React.createElement("input", {
      type: "text",
      className: "bx--date-picker__input",
      id: "input-from"
    })), React.createElement("div", {
      className: "test-child"
    }, React.createElement("input", {
      type: "text",
      className: "bx--date-picker__input",
      id: "input-to"
    }))));
    var datepicker = wrapper.childAt(0);
    var icon = wrapper.find('svg');
    it('has the range date picker class', function () {
      expect(datepicker.children().hasClass('bx--date-picker--range')).toBe(true);
    });
    it('should initalize a calendar', function () {
      expect(wrapper.instance().cal).toBeDefined();
    });
    it('should update the classnames', function () {
      expect(wrapper.instance().cal.calendarContainer.classList.contains('bx--date-picker__calendar')).toBe(true);
    });
    it('has the value as expected', function () {
      expect(wrapper.props().value).toEqual(undefined);
      wrapper.setProps({
        value: '11/08/2017'
      });
      expect(wrapper.props().value).toEqual('11/08/2017');
    });
    it('should render an icon', function () {
      expect(icon.length).toEqual(1);
    });
  });
  describe('Date picker with locale', function () {
    var wrapper = mount(React.createElement(DatePicker, {
      onChange: function onChange() {},
      datePickerType: "range",
      className: "extra-class",
      locale: "es"
    }, React.createElement("div", {
      className: "test-child"
    }, React.createElement("input", {
      type: "text",
      className: "bx--date-picker__input",
      id: "input-from"
    })), React.createElement("div", {
      className: "test-child"
    }, React.createElement("input", {
      type: "text",
      className: "bx--date-picker__input",
      id: "input-to"
    }))));
    var wrapperNoLocale = mount(React.createElement(DatePicker, {
      onChange: function onChange() {},
      datePickerType: "range",
      className: "extra-class"
    }, React.createElement("div", {
      className: "test-child"
    }, React.createElement("input", {
      type: "text",
      className: "bx--date-picker__input",
      id: "input-from"
    })), React.createElement("div", {
      className: "test-child"
    }, React.createElement("input", {
      type: "text",
      className: "bx--date-picker__input",
      id: "input-to"
    }))));
    it('has the range date picker locale', function () {
      var datepicker = wrapper.find('DatePicker');
      expect(datepicker.props().locale).toBe('es');
    });
    it('has the range date picker without locale defined', function () {
      var datepicker = wrapperNoLocale.find('DatePicker');
      expect(datepicker.props().locale).toBe('en');
    });
  });
  describe('Date picker with minDate and maxDate', function () {
    console.error = jest.genMockFn(); // eslint-disable-line no-console

    var wrapper = mount(React.createElement(DatePicker, {
      onChange: function onChange() {},
      datePickerType: "range",
      className: "extra-class",
      minDate: "01/01/2018",
      maxDate: "01/30/2018"
    }, React.createElement("div", {
      className: "test-child"
    }, React.createElement("input", {
      type: "text",
      className: "bx--date-picker__input",
      id: "input-from"
    })), React.createElement("div", {
      className: "test-child"
    }, React.createElement("input", {
      type: "text",
      className: "bx--date-picker__input",
      id: "input-to"
    }))));
    it('has the range date picker with min and max dates', function () {
      var datepicker = wrapper.find('DatePicker');
      expect(datepicker.props().minDate).toBe('01/01/2018');
      expect(datepicker.props().maxDate).toBe('01/30/2018');
    });
    it('should not have "console.error" being created', function () {
      expect(console.error).not.toBeCalled(); // eslint-disable-line no-console
    });
  });
});
describe('DatePickerSkeleton', function () {
  describe('Renders as expected', function () {
    var wrapper = shallow(React.createElement(DatePickerSkeleton, {
      range: true
    }));
    it('Has the expected classes', function () {
      expect(wrapper.children().hasClass('bx--skeleton')).toEqual(true);
      expect(wrapper.children().hasClass('bx--date-picker')).toEqual(true);
      expect(wrapper.children().hasClass('bx--date-picker--range')).toEqual(true);
    });
  });
});