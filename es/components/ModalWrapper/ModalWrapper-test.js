import React from 'react';
import { mount } from 'enzyme';
import ModalWrapper from '../ModalWrapper';
describe('ModalWrapper', function () {
  var mockProps = {};
  beforeEach(function () {
    mockProps = {
      id: 'modal',
      buttonTriggerText: 'Test Modal',
      modalHeading: 'Transactional Modal',
      modalLabel: 'Test Modal Label',
      primaryButtonText: 'Save',
      secondaryButtonText: 'Cancel',
      handleSubmit: jest.fn(function () {
        return true;
      }),
      shouldCloseAfterSubmit: true
    };
  });
  it('should render', function () {
    var wrapper = mount(React.createElement(ModalWrapper, mockProps, React.createElement("p", {
      className: "bx--modal-content__text"
    }, "Text")));
    expect(wrapper).toMatchSnapshot();
  });
  it('should close after a successful submit action', function () {
    var wrapper = mount(React.createElement(ModalWrapper, mockProps, React.createElement("p", {
      className: "bx--modal-content__text"
    }, "Text")));
    wrapper.find({
      children: mockProps.buttonTriggerText
    }).simulate('click');
    expect(wrapper.state('isOpen')).toBe(true);
    wrapper.find({
      children: mockProps.primaryButtonText
    }).simulate('click');
    expect(wrapper.state('isOpen')).toBe(false);
  });
  it('should not close after an unsuccessful submit action', function () {
    mockProps.handleSubmit = jest.fn(function () {
      return false;
    });
    var wrapper = mount(React.createElement(ModalWrapper, mockProps, React.createElement("p", {
      className: "bx--modal-content__text"
    }, "Text")));
    wrapper.find({
      children: mockProps.buttonTriggerText
    }).simulate('click');
    expect(wrapper.state('isOpen')).toBe(true);
    wrapper.find({
      children: mockProps.primaryButtonText
    }).simulate('click');
    expect(wrapper.state('isOpen')).toBe(true);
  });
});