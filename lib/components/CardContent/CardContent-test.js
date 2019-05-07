"use strict";

var _warning = _interopRequireDefault(require("warning"));

var _react = _interopRequireDefault(require("react"));

var _CardContent = _interopRequireDefault(require("../CardContent"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

jest.mock('warning', function () {
  return jest.fn();
});
describe('CardContent', function () {
  describe('Renders as expected', function () {
    var props = {
      className: 'extra-class',
      cardIcon: 'testIcon',
      cardTitle: 'testTitle',
      cardLink: ['http://test-card-link.mybluemix.net'],
      cardInfo: ['testInfo1', 'testInfo2']
    };
    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_CardContent.default, props, _react.default.createElement("div", {
      className: "child"
    }, "Test")));
    it('renders children as expected', function () {
      expect(wrapper.find('.child').length).toBe(1);
    });
    it('has the expected classes', function () {
      expect(wrapper.hasClass('bx--card__card-overview')).toBe(true);
    });
    it('renders extra classes passed in via className', function () {
      expect(wrapper.hasClass('extra-class')).toBe(true);
    });
    describe('renders an "About" div', function () {
      var about = wrapper.childAt(1);
      it('has expected classes', function () {
        expect(about.hasClass('bx--card-overview__about')).toBe(true);
      });
      it('renders a child div with an Icon', function () {
        var aboutIcon = about.childAt(0);
        expect(aboutIcon.hasClass('bx--about__icon')).toBe(true);
        var icon = wrapper.find(_Icon.default);
        expect(icon.hasClass('bx--about__icon--img')).toBe(true);
        expect(icon.props().name).toBe('testIcon');
        expect(icon.props().description).toBe('card icon');
      });
      describe('renders a title div', function () {
        var title = about.childAt(1);
        it('has expected classes', function () {
          expect(title.hasClass('bx--about__title')).toBe(true);
        });
        it('has expected paragraph', function () {
          var paragraph = title.childAt(0);
          expect(paragraph.props().id).toBe('card-app-title');
          expect(paragraph.props().className).toBe('bx--about__title--name');
          expect(paragraph.props().children).toBe('testTitle');
        });
        it('has expected links', function () {
          var links = title.childAt(1);
          expect(links.length).toBe(1);
          expect(links.getElement().type).toBe('a');
          expect(links.hasClass('bx--about__title--link')).toBe(true);
          expect(links.props().href).toBe('http://test-card-link.mybluemix.net');
          expect(links.props().children).toBe('http://test-card-link.mybluemix.net');
        });
        it('has expected info paragraphs', function () {
          var info1 = title.childAt(2);
          expect(info1.length).toBe(1);
          expect(info1.getElement().type).toBe('h4');
          expect(info1.hasClass('bx--about__title--additional-info')).toBe(true);
          expect(info1.props().children).toBe('testInfo1');
          var info2 = title.childAt(3);
          expect(info2.length).toBe(1);
          expect(info2.getElement().type).toBe('h4');
          expect(info2.hasClass('bx--about__title--additional-info')).toBe(true);
          expect(info2.props().children).toBe('testInfo2');
        });
      });
    });
  });
  describe('Supporting custom icon', function () {
    it('supports rendering the given icon as-is', function () {
      var props = {
        cardIcon: _react.default.createElement("svg", null, _react.default.createElement("title", null, "foo"))
      };
      var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_CardContent.default, props));
      expect(wrapper.contains(_react.default.createElement("svg", null, _react.default.createElement("title", null, "foo")))).toBe(true);
    });
    it('warns if icon description is given along with a custom icon', function () {
      var props = {
        cardIcon: _react.default.createElement("svg", null, _react.default.createElement("title", null, "foo")),
        iconDescription: 'icon-desc-foo'
      };
      var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_CardContent.default, props));
      expect(wrapper.contains(_react.default.createElement("svg", null, _react.default.createElement("title", null, "foo")))).toBe(true);
      var message = ['Specified a custom icon while the icon description is provided.', "It'll be ignored as an icon description is only used for carbon-icons sprite."].join('\n');
      expect(_warning.default.mock.calls[1]).toEqual([false, message]);
    });
  });
  afterEach(function () {
    _warning.default.mockReset();
  });
});