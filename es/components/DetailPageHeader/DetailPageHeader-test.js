import React from 'react';
import { mount, shallow } from 'enzyme';
import window from 'window-or-global';
import DetailPageHeader from '../DetailPageHeader';
import Icon from '../Icon';
import Breadcrumb from '../Breadcrumb';
import BreadcrumbItem from '../BreadcrumbItem';
import OverflowMenu from '../OverflowMenu';
import OverflowMenuItem from '../OverflowMenuItem';
import Tab from '../Tab';
import Tabs from '../Tabs';
describe('DetailPageHeader', function () {
  describe('component is rendered correctly without tabs', function () {
    var wrapper = mount(React.createElement(DetailPageHeader, {
      title: "test",
      statusText: "Stopped",
      statusColor: "#BADA55"
    }, React.createElement(Icon, {
      description: "watson",
      name: "watson"
    }), React.createElement(Breadcrumb, null, React.createElement(BreadcrumbItem, {
      href: "www.google.com"
    }, "Breadcrumb 1"), React.createElement(BreadcrumbItem, {
      href: "www.google.com"
    }, "Breadcrumb 2"), React.createElement(BreadcrumbItem, {
      href: "www.google.com"
    }, "Breadcrumb 3")), React.createElement(OverflowMenu, null, React.createElement(OverflowMenuItem, {
      itemText: "Stop App"
    }), React.createElement(OverflowMenuItem, {
      itemText: "Restart App"
    }), React.createElement(OverflowMenuItem, {
      itemText: "Rename App"
    }), React.createElement(OverflowMenuItem, {
      itemText: "Edit Routes and Access"
    }), React.createElement(OverflowMenuItem, {
      itemText: "Delete App",
      isDelete: true
    }))));
    it('should render wrapper with the correct class', function () {
      expect(wrapper.children().hasClass('bx--detail-page-header')).toEqual(true);
      expect(wrapper.children().hasClass('bx--detail-page-header--no-tabs')).toEqual(true);
    });
    it('should render an icon', function () {
      var container = wrapper.find('.bx--detail-page-header-icon-container');
      var icon = container.find(Icon);
      var hasIcon = icon.length === 1;
      expect(hasIcon).toEqual(true);
    });
    it('should render an icon, even without one passed in', function () {
      var noIcon = shallow(React.createElement(DetailPageHeader, {
        title: "test"
      }));
      var container = noIcon.find('.bx--detail-page-header-icon-container');
      var icon = container.find('svg');
      var hasIcon = icon.length === 1;
      expect(hasIcon).toEqual(true);
    });
    it('should render correct icon', function () {
      expect(wrapper.find(Icon).at(0).props().name).toEqual('watson');
    });
    it('should render Breadcrumb', function () {
      var breadcrumb = wrapper.find(Breadcrumb).length === 1;
      expect(breadcrumb).toEqual(true);
    });
    it('should render BreadcrumbItem', function () {
      var breadcrumbItem = wrapper.find(BreadcrumbItem).length === 3;
      expect(breadcrumbItem).toEqual(true);
    });
    it('should render OverflowMenu', function () {
      var overflow = wrapper.find(OverflowMenu).length === 1;
      expect(overflow).toEqual(true);
    });
    it('should render an element with a title class', function () {
      var hasTitle = wrapper.find('.bx--detail-page-header-title').length === 1;
      expect(hasTitle).toEqual(true);
    });
    it('should render the correct title', function () {
      expect(wrapper.props().title).toEqual('test');
    });
    it('should render the correct status text', function () {
      expect(wrapper.props().statusText).toEqual('Stopped');
    });
    it('should render the correct status color', function () {
      expect(wrapper.props().statusColor).toEqual('#BADA55');
    });
  });
  describe('component is rendered correctly with tabs', function () {
    var wrapper = shallow(React.createElement(DetailPageHeader, {
      hasTabs: true,
      title: "test"
    }, React.createElement(Icon, {
      description: "watson",
      name: "watson"
    }), React.createElement(Breadcrumb, null, React.createElement(BreadcrumbItem, {
      href: "www.google.com"
    }, "Breadcrumb 1"), React.createElement(BreadcrumbItem, {
      href: "www.google.com"
    }, "Breadcrumb 2"), React.createElement(BreadcrumbItem, {
      href: "www.google.com"
    }, "Breadcrumb 3")), React.createElement(OverflowMenu, null, React.createElement(OverflowMenuItem, {
      itemText: "Stop App"
    }), React.createElement(OverflowMenuItem, {
      itemText: "Restart App"
    }), React.createElement(OverflowMenuItem, {
      itemText: "Rename App"
    }), React.createElement(OverflowMenuItem, {
      itemText: "Edit Routes and Access"
    }), React.createElement(OverflowMenuItem, {
      itemText: "Delete App",
      isDelete: true
    })), React.createElement(Tabs, null, React.createElement(Tab, {
      label: "Overview"
    }), React.createElement(Tab, {
      label: "Apple"
    }), React.createElement(Tab, {
      label: "Banana"
    }), React.createElement(Tab, {
      label: "Orange"
    }))));
    it('should render a wrapper with the correct class', function () {
      expect(wrapper.hasClass('bx--detail-page-header--with-tabs')).toEqual(true);
    });
    it('should render Tabs', function () {
      var tabs = wrapper.find(Tabs).length === 1;
      expect(tabs).toEqual(true);
    });
    it('should render 4 Tab', function () {
      var tabs = wrapper.find(Tab).length === 4;
      expect(tabs).toEqual(true);
    });
  });
  describe('scroll event listener', function () {
    var addEvent;
    var removeEvent;
    var spyAddEventListener = jest.fn();
    var spyRemoveEventListener = jest.fn();
    beforeEach(function () {
      addEvent = jest.spyOn(window, 'addEventListener').mockImplementation(function (type) {
        if (type === 'scroll') {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          spyAddEventListener.apply(void 0, [type].concat(args));
        }
      });
      removeEvent = jest.spyOn(window, 'removeEventListener').mockImplementation(function (type) {
        if (type === 'scroll') {
          for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
          }

          spyRemoveEventListener.apply(void 0, [type].concat(args));
        }
      });
    });
    afterEach(function () {
      addEvent.mockRestore();
      removeEvent.mockRestore();
    });
    it('should pass in the same method when adding and removing the scroll event listener', function () {
      var wrapper = mount(React.createElement(DetailPageHeader, {
        title: "test"
      }));
      wrapper.unmount();
      expect(spyAddEventListener.mock.calls.length).toBe(1);
      expect(spyRemoveEventListener.mock.calls.length).toBe(1);
      var addArgs = spyAddEventListener.mock.calls[0];
      var removeArgs = spyRemoveEventListener.mock.calls[0];
      expect(addArgs[1]).toBe(removeArgs[1]); // the scroll handler function
    });
  });
});