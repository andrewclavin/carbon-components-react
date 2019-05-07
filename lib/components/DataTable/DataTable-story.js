"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _DataTable = _interopRequireWildcard(require("../DataTable"));

var _Button = _interopRequireDefault(require("../Button"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var initialRows = [{
  id: 'a',
  name: 'Load Balancer 3',
  protocol: 'HTTP',
  port: 3000,
  rule: 'Round robin',
  attached_groups: 'Kevins VM Groups',
  status: 'Disabled'
}, {
  id: 'b',
  name: 'Load Balancer 1',
  protocol: 'HTTP',
  port: 443,
  rule: 'Round robin',
  attached_groups: 'Maureens VM Groups',
  status: 'Starting'
}, {
  id: 'c',
  name: 'Load Balancer 2',
  protocol: 'HTTP',
  port: 80,
  rule: 'DNS delegation',
  attached_groups: 'Andrews VM Groups',
  status: 'Active'
}];
var headers = [{
  key: 'name',
  header: 'Name'
}, {
  key: 'protocol',
  header: 'Protocol'
}, {
  key: 'port',
  header: 'Port'
}, {
  key: 'rule',
  header: 'Rule'
}, {
  key: 'attached_groups',
  header: 'Attached Groups'
}, {
  key: 'status',
  header: 'Status'
}];
var readmeURL = 'https://goo.gl/dq6CEK';

var batchActionClick = function batchActionClick(selectedRows) {
  return function () {
    return (0, _addonActions.action)('batch action click')(selectedRows);
  };
};

(0, _react2.storiesOf)('DataTable', module).addWithInfo('default',
/* eslint-disable no-useless-escape */
"\n      Data Tables are used to represent a collection of resources, displaying a\n      subset of their fields in columns, or headers. The `DataTable` component\n      that we export from Carbon requires two props to be passed in: `rows`\n      and `headers`.\n\n      You can find more detailed information surrounding usage of this component\n      at the following url: ".concat(readmeURL, "\n    "),
/* eslint-enable no-useless-escape */
function () {
  return _react.default.createElement(_DataTable.default, {
    rows: initialRows,
    headers: headers,
    render: function render(_ref) {
      var rows = _ref.rows,
          headers = _ref.headers,
          getHeaderProps = _ref.getHeaderProps,
          getSelectionProps = _ref.getSelectionProps,
          getBatchActionProps = _ref.getBatchActionProps,
          onInputChange = _ref.onInputChange,
          selectedRows = _ref.selectedRows;
      return _react.default.createElement(_DataTable.TableContainer, {
        title: "DataTable"
      }, _react.default.createElement(_DataTable.TableToolbar, null, _react.default.createElement(_DataTable.TableBatchActions, getBatchActionProps(), _react.default.createElement(_DataTable.TableBatchAction, {
        onClick: batchActionClick(selectedRows)
      }, "Ghost"), _react.default.createElement(_DataTable.TableBatchAction, {
        onClick: batchActionClick(selectedRows)
      }, "Ghost"), _react.default.createElement(_DataTable.TableBatchAction, {
        onClick: batchActionClick(selectedRows)
      }, "Ghost")), _react.default.createElement(_DataTable.TableToolbarSearch, {
        onChange: onInputChange
      }), _react.default.createElement(_DataTable.TableToolbarContent, null, _react.default.createElement(_DataTable.TableToolbarAction, {
        iconName: "download",
        iconDescription: "Download",
        onClick: (0, _addonActions.action)('TableToolbarAction - Download')
      }), _react.default.createElement(_DataTable.TableToolbarAction, {
        iconName: "edit",
        iconDescription: "Edit",
        onClick: (0, _addonActions.action)('TableToolbarAction - Edit')
      }), _react.default.createElement(_DataTable.TableToolbarAction, {
        iconName: "settings",
        iconDescription: "Settings",
        onClick: (0, _addonActions.action)('TableToolbarAction - Settings')
      }), _react.default.createElement(_Button.default, {
        onClick: (0, _addonActions.action)('Add new row'),
        small: true,
        kind: "primary"
      }, "Add new"))), _react.default.createElement(_DataTable.Table, null, _react.default.createElement(_DataTable.TableHead, null, _react.default.createElement(_DataTable.TableRow, null, _react.default.createElement(_DataTable.TableSelectAll, getSelectionProps()), headers.map(function (header) {
        return _react.default.createElement(_DataTable.TableHeader, getHeaderProps({
          header: header
        }), header.header);
      }))), _react.default.createElement(_DataTable.TableBody, null, rows.map(function (row) {
        return _react.default.createElement(_DataTable.TableRow, {
          key: row.id
        }, _react.default.createElement(_DataTable.TableSelectRow, getSelectionProps({
          row: row
        })), row.cells.map(function (cell) {
          return _react.default.createElement(_DataTable.TableCell, {
            key: cell.id
          }, cell.value);
        }));
      }))));
    }
  });
}).addWithInfo('with toolbar', "\n      DataTable with toolbar and filtering.\n\n      You can find more detailed information surrounding usage of this component\n      at the following url: ".concat(readmeURL, "\n    "), function () {
  return _react.default.createElement(_DataTable.default, {
    rows: initialRows,
    headers: headers,
    render: function render(_ref2) {
      var rows = _ref2.rows,
          headers = _ref2.headers,
          getHeaderProps = _ref2.getHeaderProps,
          onInputChange = _ref2.onInputChange;
      return _react.default.createElement(_DataTable.TableContainer, {
        title: "DataTable with toolbar"
      }, _react.default.createElement(_DataTable.TableToolbar, null, _react.default.createElement(_DataTable.TableToolbarSearch, {
        onChange: onInputChange
      }), _react.default.createElement(_DataTable.TableToolbarContent, null, _react.default.createElement(_DataTable.TableToolbarAction, {
        iconName: "download",
        iconDescription: "Download",
        onClick: (0, _addonActions.action)('TableToolbarAction - Download')
      }), _react.default.createElement(_DataTable.TableToolbarAction, {
        iconName: "edit",
        iconDescription: "Edit",
        onClick: (0, _addonActions.action)('TableToolbarAction - Edit')
      }), _react.default.createElement(_DataTable.TableToolbarAction, {
        iconName: "settings",
        iconDescription: "Settings",
        onClick: (0, _addonActions.action)('TableToolbarAction - Settings')
      }), _react.default.createElement(_Button.default, {
        onClick: (0, _addonActions.action)('Add new row'),
        small: true,
        kind: "primary"
      }, "Add new"))), _react.default.createElement(_DataTable.Table, null, _react.default.createElement(_DataTable.TableHead, null, _react.default.createElement(_DataTable.TableRow, null, headers.map(function (header) {
        return _react.default.createElement(_DataTable.TableHeader, getHeaderProps({
          header: header
        }), header.header);
      }))), _react.default.createElement(_DataTable.TableBody, null, rows.map(function (row) {
        return _react.default.createElement(_DataTable.TableRow, {
          key: row.id
        }, row.cells.map(function (cell) {
          return _react.default.createElement(_DataTable.TableCell, {
            key: cell.id
          }, cell.value);
        }));
      }))));
    }
  });
}).addWithInfo('with sorting', "\n      DataTable with sorting\n\n      You can find more detailed information surrounding usage of this component\n      at the following url: ".concat(readmeURL, "\n    "), function () {
  return _react.default.createElement(_DataTable.default, {
    rows: initialRows,
    headers: headers,
    render: function render(_ref3) {
      var rows = _ref3.rows,
          headers = _ref3.headers,
          getHeaderProps = _ref3.getHeaderProps;
      return _react.default.createElement(_DataTable.TableContainer, {
        title: "DataTable with sorting"
      }, _react.default.createElement(_DataTable.Table, null, _react.default.createElement(_DataTable.TableHead, null, _react.default.createElement(_DataTable.TableRow, null, headers.map(function (header) {
        return _react.default.createElement(_DataTable.TableHeader, getHeaderProps({
          header: header
        }), header.header);
      }))), _react.default.createElement(_DataTable.TableBody, null, rows.map(function (row) {
        return _react.default.createElement(_DataTable.TableRow, {
          key: row.id
        }, row.cells.map(function (cell) {
          return _react.default.createElement(_DataTable.TableCell, {
            key: cell.id
          }, cell.value);
        }));
      }))));
    }
  });
}).addWithInfo('with selection', "\n      DataTable with selection\n\n      You can find more detailed information surrounding usage of this component\n      at the following url: ".concat(readmeURL, "\n    "), function () {
  return _react.default.createElement(_DataTable.default, {
    rows: initialRows,
    headers: headers,
    render: function render(_ref4) {
      var rows = _ref4.rows,
          headers = _ref4.headers,
          getHeaderProps = _ref4.getHeaderProps,
          getSelectionProps = _ref4.getSelectionProps;
      return _react.default.createElement(_DataTable.TableContainer, {
        title: "DataTable"
      }, _react.default.createElement(_DataTable.Table, null, _react.default.createElement(_DataTable.TableHead, null, _react.default.createElement(_DataTable.TableRow, null, _react.default.createElement(_DataTable.TableSelectAll, getSelectionProps()), headers.map(function (header) {
        return _react.default.createElement(_DataTable.TableHeader, getHeaderProps({
          header: header
        }), header.header);
      }))), _react.default.createElement(_DataTable.TableBody, null, rows.map(function (row) {
        return _react.default.createElement(_DataTable.TableRow, {
          key: row.id
        }, _react.default.createElement(_DataTable.TableSelectRow, getSelectionProps({
          row: row
        })), row.cells.map(function (cell) {
          return _react.default.createElement(_DataTable.TableCell, {
            key: cell.id
          }, cell.value);
        }));
      }))));
    }
  });
}).addWithInfo('with expansion', "\n      DataTable with expansion\n\n      You can find more detailed information surrounding usage of this component\n      at the following url: ".concat(readmeURL, "\n    "), function () {
  return _react.default.createElement(_DataTable.default, {
    rows: initialRows,
    headers: headers,
    render: function render(_ref5) {
      var rows = _ref5.rows,
          headers = _ref5.headers,
          getHeaderProps = _ref5.getHeaderProps,
          getRowProps = _ref5.getRowProps;
      return _react.default.createElement(_DataTable.TableContainer, {
        title: "DataTable with expansion"
      }, _react.default.createElement(_DataTable.Table, null, _react.default.createElement(_DataTable.TableHead, null, _react.default.createElement(_DataTable.TableRow, null, _react.default.createElement(_DataTable.TableExpandHeader, null), headers.map(function (header) {
        return _react.default.createElement(_DataTable.TableHeader, getHeaderProps({
          header: header
        }), header.header);
      }))), _react.default.createElement(_DataTable.TableBody, null, rows.map(function (row) {
        return _react.default.createElement(_react.default.Fragment, {
          key: row.id
        }, _react.default.createElement(_DataTable.TableExpandRow, getRowProps({
          row: row
        }), row.cells.map(function (cell) {
          return _react.default.createElement(_DataTable.TableCell, {
            key: cell.id
          }, cell.value);
        })), row.isExpanded && _react.default.createElement(_DataTable.TableExpandedRow, null, _react.default.createElement(_DataTable.TableCell, {
          colSpan: headers.length + 1
        }, _react.default.createElement("h1", null, "Expandable row content"), _react.default.createElement("p", null, "Description here"))));
      }))));
    }
  });
}).addWithInfo('with batch actions', "\n      Uses <TableToolbar> alongside <TableBatchActions> and <TableBatchAction>\n      to create the toolbar and placeholder for where the batch action menu will\n      be displayed.\n\n      You can use the `getBatchActionProps` prop getter on the\n      <TableBatchActions> component to have it wire up the ghost menu for you.\n\n      Individual <TableBatchAction> components take in any kind of event handler\n      prop that you would expect to use, like `onClick`. You can use these\n      alongside the `selectedRows` property in your `render` prop function\n      to pass along this info to your batch action handler.\n\n      You can find more detailed information surrounding usage of this component\n      at the following url: ".concat(readmeURL, "\n    "), function () {
  return _react.default.createElement(_DataTable.default, {
    rows: initialRows,
    headers: headers,
    render: function render(_ref6) {
      var rows = _ref6.rows,
          headers = _ref6.headers,
          getHeaderProps = _ref6.getHeaderProps,
          getSelectionProps = _ref6.getSelectionProps,
          getBatchActionProps = _ref6.getBatchActionProps,
          onInputChange = _ref6.onInputChange,
          selectedRows = _ref6.selectedRows;
      return _react.default.createElement(_DataTable.TableContainer, {
        title: "DataTable with batch actions"
      }, _react.default.createElement(_DataTable.TableToolbar, null, _react.default.createElement(_DataTable.TableBatchActions, getBatchActionProps(), _react.default.createElement(_DataTable.TableBatchAction, {
        onClick: batchActionClick(selectedRows)
      }, "Ghost"), _react.default.createElement(_DataTable.TableBatchAction, {
        onClick: batchActionClick(selectedRows)
      }, "Ghost"), _react.default.createElement(_DataTable.TableBatchAction, {
        onClick: batchActionClick(selectedRows)
      }, "Ghost")), _react.default.createElement(_DataTable.TableToolbarSearch, {
        onChange: onInputChange
      }), _react.default.createElement(_DataTable.TableToolbarContent, null, _react.default.createElement(_DataTable.TableToolbarAction, {
        iconName: "download",
        iconDescription: "Download",
        onClick: (0, _addonActions.action)('TableToolbarAction - Download')
      }), _react.default.createElement(_DataTable.TableToolbarAction, {
        iconName: "edit",
        iconDescription: "Edit",
        onClick: (0, _addonActions.action)('TableToolbarAction - Edit')
      }), _react.default.createElement(_DataTable.TableToolbarAction, {
        iconName: "settings",
        iconDescription: "Settings",
        onClick: (0, _addonActions.action)('TableToolbarAction - Settings')
      }), _react.default.createElement(_Button.default, {
        onClick: (0, _addonActions.action)('Add new row'),
        small: true,
        kind: "primary"
      }, "Add new"))), _react.default.createElement(_DataTable.Table, null, _react.default.createElement(_DataTable.TableHead, null, _react.default.createElement(_DataTable.TableRow, null, _react.default.createElement(_DataTable.TableSelectAll, getSelectionProps()), headers.map(function (header) {
        return _react.default.createElement(_DataTable.TableHeader, getHeaderProps({
          header: header
        }), header.header);
      }))), _react.default.createElement(_DataTable.TableBody, null, rows.map(function (row) {
        return _react.default.createElement(_DataTable.TableRow, {
          key: row.id
        }, _react.default.createElement(_DataTable.TableSelectRow, getSelectionProps({
          row: row
        })), row.cells.map(function (cell) {
          return _react.default.createElement(_DataTable.TableCell, {
            key: cell.id
          }, cell.value);
        }));
      }))));
    }
  });
}).addWithInfo('with dynamic content', "\n      Showcases DataTable behavior when rows are added to the component,\n      and when cell data changes dynamically.\n    ", function () {
  var insertInRandomPosition = function insertInRandomPosition(array, element) {
    var index = Math.floor(Math.random() * (array.length + 1));
    return [].concat(_toConsumableArray(array.slice(0, index)), [element], _toConsumableArray(array.slice(index)));
  };

  var DynamicRows =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(DynamicRows, _React$Component);

    function DynamicRows() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, DynamicRows);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DynamicRows)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_this), "state", {
        rows: initialRows,
        headers: headers,
        id: 0
      });

      _defineProperty(_assertThisInitialized(_this), "handleOnHeaderAdd", function () {
        var length = _this.state.headers.length;
        var header = {
          key: "header_".concat(length),
          header: "Header ".concat(length)
        };

        _this.setState(function (state) {
          var rows = state.rows.map(function (row) {
            return _objectSpread({}, row, _defineProperty({}, header.key, header.header));
          });
          return {
            rows: rows,
            headers: state.headers.concat(header)
          };
        });
      });

      _defineProperty(_assertThisInitialized(_this), "handleOnRowAdd", function () {
        _this.setState(function (state) {
          var _id = state.id,
              rows = state.rows;
          var id = _id + 1;
          var row = {
            id: '' + id,
            name: "New Row ".concat(id),
            protocol: 'HTTP',
            port: id * 100,
            rule: id % 2 === 0 ? 'Round robin' : 'DNS delegation',
            attached_groups: "Row ".concat(id, "'s VM Groups"),
            status: 'Starting'
          };
          state.headers.filter(function (header) {
            return row[header.key] === undefined;
          }).forEach(function (header) {
            row[header.key] = header.header;
          });
          return {
            id: id,
            rows: insertInRandomPosition(rows, row)
          };
        });
      });

      _defineProperty(_assertThisInitialized(_this), "handleOnCellChange", function () {
        _this.setState(function (state) {
          var rows = state.rows.map(function (row) {
            return _objectSpread({}, row, {
              port: row.port + 1
            });
          });
          return {
            rows: rows
          };
        });
      });

      return _this;
    }

    _createClass(DynamicRows, [{
      key: "render",
      value: function render() {
        var _this2 = this;

        return _react.default.createElement(_DataTable.default, {
          rows: this.state.rows,
          headers: this.state.headers,
          render: function render(_ref7) {
            var rows = _ref7.rows,
                headers = _ref7.headers,
                getHeaderProps = _ref7.getHeaderProps,
                getSelectionProps = _ref7.getSelectionProps,
                getBatchActionProps = _ref7.getBatchActionProps,
                getRowProps = _ref7.getRowProps,
                onInputChange = _ref7.onInputChange,
                selectedRows = _ref7.selectedRows;
            return _react.default.createElement(_DataTable.TableContainer, {
              title: "DataTable with dynamic content"
            }, _react.default.createElement(_Button.default, {
              small: true,
              onClick: _this2.handleOnRowAdd
            }, "Add new row"), _react.default.createElement(_Button.default, {
              small: true,
              onClick: _this2.handleOnHeaderAdd
            }, "Add new header"), _react.default.createElement(_Button.default, {
              small: true,
              onClick: _this2.handleOnCellChange
            }, "Change cell contents"), _react.default.createElement(_DataTable.TableToolbar, null, _react.default.createElement(_DataTable.TableBatchActions, getBatchActionProps(), _react.default.createElement(_DataTable.TableBatchAction, {
              onClick: batchActionClick(selectedRows)
            }, "Ghost"), _react.default.createElement(_DataTable.TableBatchAction, {
              onClick: batchActionClick(selectedRows)
            }, "Ghost"), _react.default.createElement(_DataTable.TableBatchAction, {
              onClick: batchActionClick(selectedRows)
            }, "Ghost")), _react.default.createElement(_DataTable.TableToolbarSearch, {
              onChange: onInputChange
            }), _react.default.createElement(_DataTable.TableToolbarContent, null, _react.default.createElement(_DataTable.TableToolbarAction, {
              iconName: "download",
              iconDescription: "Download",
              onClick: (0, _addonActions.action)('TableToolbarAction - Download')
            }), _react.default.createElement(_DataTable.TableToolbarAction, {
              iconName: "edit",
              iconDescription: "Edit",
              onClick: (0, _addonActions.action)('TableToolbarAction - Edit')
            }), _react.default.createElement(_DataTable.TableToolbarAction, {
              iconName: "settings",
              iconDescription: "Settings",
              onClick: (0, _addonActions.action)('TableToolbarAction - Settings')
            }))), _react.default.createElement(_DataTable.Table, null, _react.default.createElement(_DataTable.TableHead, null, _react.default.createElement(_DataTable.TableRow, null, _react.default.createElement(_DataTable.TableExpandHeader, null), _react.default.createElement(_DataTable.TableSelectAll, getSelectionProps()), headers.map(function (header) {
              return _react.default.createElement(_DataTable.TableHeader, getHeaderProps({
                header: header
              }), header.header);
            }))), _react.default.createElement(_DataTable.TableBody, null, rows.map(function (row) {
              return _react.default.createElement(_react.default.Fragment, {
                key: row.id
              }, _react.default.createElement(_DataTable.TableExpandRow, getRowProps({
                row: row
              }), _react.default.createElement(_DataTable.TableSelectRow, getSelectionProps({
                row: row
              })), row.cells.map(function (cell) {
                return _react.default.createElement(_DataTable.TableCell, {
                  key: cell.id
                }, cell.value);
              })), row.isExpanded && _react.default.createElement(_DataTable.TableExpandedRow, null, _react.default.createElement(_DataTable.TableCell, {
                colSpan: headers.length + 3
              }, _react.default.createElement("h1", null, "Expandable row content"), _react.default.createElement("p", null, "Description here"))));
            }))));
          }
        });
      }
    }]);

    return DynamicRows;
  }(_react.default.Component);

  return _react.default.createElement(DynamicRows, null);
});