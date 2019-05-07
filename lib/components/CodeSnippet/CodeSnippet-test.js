"use strict";

var _react = _interopRequireDefault(require("react"));

var _CodeSnippet = _interopRequireDefault(require("../CodeSnippet"));

var _CodeSnippet2 = _interopRequireDefault(require("../CodeSnippet/CodeSnippet.Skeleton"));

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Code Snippet', function () {
  describe('Renders as expected', function () {
    var snippet = (0, _enzyme.shallow)(_react.default.createElement(_CodeSnippet.default, {
      className: "some-class",
      type: "terminal"
    }, 'node -v'));
    it('should use the appropriate snippet class', function () {
      expect(snippet.hasClass('bx--snippet')).toEqual(true);
      expect(snippet.hasClass('bx--snippet--terminal')).toEqual(true);
    });
    it('should render children as expected', function () {
      expect(snippet.find('.bx--snippet-container').length).toBe(1);
    });
    it('should all for custom classes to be applied', function () {
      expect(snippet.hasClass('some-class')).toEqual(true);
    });
  });
  it('should expose a `ref` to the content through `wrappedContentRef`', function () {
    var mockRef;
    var wrappedContentRef = jest.fn(function (el) {
      return mockRef = el;
    });
    var content = 'node -v';
    (0, _enzyme.mount)(_react.default.createElement(_CodeSnippet.default, {
      type: "terminal",
      wrappedContentRef: wrappedContentRef
    }, content));
    expect(mockRef.textContent).toBe(content);
    expect(wrappedContentRef).toHaveBeenCalledTimes(1);
  });
});
describe('CodeSnippetSkeleton', function () {
  describe('Renders as expected', function () {
    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_CodeSnippet2.default, {
      type: "terminal"
    }));
    it('Has the expected classes', function () {
      expect(wrapper.hasClass('bx--skeleton')).toEqual(true);
      expect(wrapper.hasClass('bx--snippet')).toEqual(true);
      expect(wrapper.hasClass('bx--snippet--terminal')).toEqual(true);
    });
  });
});