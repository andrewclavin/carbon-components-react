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

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import DataTable, { Table, TableBatchAction, TableBatchActions, TableBody, TableCell, TableContainer, TableExpandHeader, TableExpandRow, TableExpandedRow, TableHead, TableHeader, TableRow, TableSelectAll, TableSelectRow, TableToolbar, TableToolbarAction, TableToolbarContent, TableToolbarSearch } from '../DataTable';
import Button from '../Button';
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
    return action('batch action click')(selectedRows);
  };
};

storiesOf('DataTable', module).addWithInfo('default',
/* eslint-disable no-useless-escape */
"\n      Data Tables are used to represent a collection of resources, displaying a\n      subset of their fields in columns, or headers. The `DataTable` component\n      that we export from Carbon requires two props to be passed in: `rows`\n      and `headers`.\n\n      You can find more detailed information surrounding usage of this component\n      at the following url: ".concat(readmeURL, "\n    "),
/* eslint-enable no-useless-escape */
function () {
  return React.createElement(DataTable, {
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
      return React.createElement(TableContainer, {
        title: "DataTable"
      }, React.createElement(TableToolbar, null, React.createElement(TableBatchActions, getBatchActionProps(), React.createElement(TableBatchAction, {
        onClick: batchActionClick(selectedRows)
      }, "Ghost"), React.createElement(TableBatchAction, {
        onClick: batchActionClick(selectedRows)
      }, "Ghost"), React.createElement(TableBatchAction, {
        onClick: batchActionClick(selectedRows)
      }, "Ghost")), React.createElement(TableToolbarSearch, {
        onChange: onInputChange
      }), React.createElement(TableToolbarContent, null, React.createElement(TableToolbarAction, {
        iconName: "download",
        iconDescription: "Download",
        onClick: action('TableToolbarAction - Download')
      }), React.createElement(TableToolbarAction, {
        iconName: "edit",
        iconDescription: "Edit",
        onClick: action('TableToolbarAction - Edit')
      }), React.createElement(TableToolbarAction, {
        iconName: "settings",
        iconDescription: "Settings",
        onClick: action('TableToolbarAction - Settings')
      }), React.createElement(Button, {
        onClick: action('Add new row'),
        small: true,
        kind: "primary"
      }, "Add new"))), React.createElement(Table, null, React.createElement(TableHead, null, React.createElement(TableRow, null, React.createElement(TableSelectAll, getSelectionProps()), headers.map(function (header) {
        return React.createElement(TableHeader, getHeaderProps({
          header: header
        }), header.header);
      }))), React.createElement(TableBody, null, rows.map(function (row) {
        return React.createElement(TableRow, {
          key: row.id
        }, React.createElement(TableSelectRow, getSelectionProps({
          row: row
        })), row.cells.map(function (cell) {
          return React.createElement(TableCell, {
            key: cell.id
          }, cell.value);
        }));
      }))));
    }
  });
}).addWithInfo('with toolbar', "\n      DataTable with toolbar and filtering.\n\n      You can find more detailed information surrounding usage of this component\n      at the following url: ".concat(readmeURL, "\n    "), function () {
  return React.createElement(DataTable, {
    rows: initialRows,
    headers: headers,
    render: function render(_ref2) {
      var rows = _ref2.rows,
          headers = _ref2.headers,
          getHeaderProps = _ref2.getHeaderProps,
          onInputChange = _ref2.onInputChange;
      return React.createElement(TableContainer, {
        title: "DataTable with toolbar"
      }, React.createElement(TableToolbar, null, React.createElement(TableToolbarSearch, {
        onChange: onInputChange
      }), React.createElement(TableToolbarContent, null, React.createElement(TableToolbarAction, {
        iconName: "download",
        iconDescription: "Download",
        onClick: action('TableToolbarAction - Download')
      }), React.createElement(TableToolbarAction, {
        iconName: "edit",
        iconDescription: "Edit",
        onClick: action('TableToolbarAction - Edit')
      }), React.createElement(TableToolbarAction, {
        iconName: "settings",
        iconDescription: "Settings",
        onClick: action('TableToolbarAction - Settings')
      }), React.createElement(Button, {
        onClick: action('Add new row'),
        small: true,
        kind: "primary"
      }, "Add new"))), React.createElement(Table, null, React.createElement(TableHead, null, React.createElement(TableRow, null, headers.map(function (header) {
        return React.createElement(TableHeader, getHeaderProps({
          header: header
        }), header.header);
      }))), React.createElement(TableBody, null, rows.map(function (row) {
        return React.createElement(TableRow, {
          key: row.id
        }, row.cells.map(function (cell) {
          return React.createElement(TableCell, {
            key: cell.id
          }, cell.value);
        }));
      }))));
    }
  });
}).addWithInfo('with sorting', "\n      DataTable with sorting\n\n      You can find more detailed information surrounding usage of this component\n      at the following url: ".concat(readmeURL, "\n    "), function () {
  return React.createElement(DataTable, {
    rows: initialRows,
    headers: headers,
    render: function render(_ref3) {
      var rows = _ref3.rows,
          headers = _ref3.headers,
          getHeaderProps = _ref3.getHeaderProps;
      return React.createElement(TableContainer, {
        title: "DataTable with sorting"
      }, React.createElement(Table, null, React.createElement(TableHead, null, React.createElement(TableRow, null, headers.map(function (header) {
        return React.createElement(TableHeader, getHeaderProps({
          header: header
        }), header.header);
      }))), React.createElement(TableBody, null, rows.map(function (row) {
        return React.createElement(TableRow, {
          key: row.id
        }, row.cells.map(function (cell) {
          return React.createElement(TableCell, {
            key: cell.id
          }, cell.value);
        }));
      }))));
    }
  });
}).addWithInfo('with selection', "\n      DataTable with selection\n\n      You can find more detailed information surrounding usage of this component\n      at the following url: ".concat(readmeURL, "\n    "), function () {
  return React.createElement(DataTable, {
    rows: initialRows,
    headers: headers,
    render: function render(_ref4) {
      var rows = _ref4.rows,
          headers = _ref4.headers,
          getHeaderProps = _ref4.getHeaderProps,
          getSelectionProps = _ref4.getSelectionProps;
      return React.createElement(TableContainer, {
        title: "DataTable"
      }, React.createElement(Table, null, React.createElement(TableHead, null, React.createElement(TableRow, null, React.createElement(TableSelectAll, getSelectionProps()), headers.map(function (header) {
        return React.createElement(TableHeader, getHeaderProps({
          header: header
        }), header.header);
      }))), React.createElement(TableBody, null, rows.map(function (row) {
        return React.createElement(TableRow, {
          key: row.id
        }, React.createElement(TableSelectRow, getSelectionProps({
          row: row
        })), row.cells.map(function (cell) {
          return React.createElement(TableCell, {
            key: cell.id
          }, cell.value);
        }));
      }))));
    }
  });
}).addWithInfo('with expansion', "\n      DataTable with expansion\n\n      You can find more detailed information surrounding usage of this component\n      at the following url: ".concat(readmeURL, "\n    "), function () {
  return React.createElement(DataTable, {
    rows: initialRows,
    headers: headers,
    render: function render(_ref5) {
      var rows = _ref5.rows,
          headers = _ref5.headers,
          getHeaderProps = _ref5.getHeaderProps,
          getRowProps = _ref5.getRowProps;
      return React.createElement(TableContainer, {
        title: "DataTable with expansion"
      }, React.createElement(Table, null, React.createElement(TableHead, null, React.createElement(TableRow, null, React.createElement(TableExpandHeader, null), headers.map(function (header) {
        return React.createElement(TableHeader, getHeaderProps({
          header: header
        }), header.header);
      }))), React.createElement(TableBody, null, rows.map(function (row) {
        return React.createElement(React.Fragment, {
          key: row.id
        }, React.createElement(TableExpandRow, getRowProps({
          row: row
        }), row.cells.map(function (cell) {
          return React.createElement(TableCell, {
            key: cell.id
          }, cell.value);
        })), row.isExpanded && React.createElement(TableExpandedRow, null, React.createElement(TableCell, {
          colSpan: headers.length + 1
        }, React.createElement("h1", null, "Expandable row content"), React.createElement("p", null, "Description here"))));
      }))));
    }
  });
}).addWithInfo('with batch actions', "\n      Uses <TableToolbar> alongside <TableBatchActions> and <TableBatchAction>\n      to create the toolbar and placeholder for where the batch action menu will\n      be displayed.\n\n      You can use the `getBatchActionProps` prop getter on the\n      <TableBatchActions> component to have it wire up the ghost menu for you.\n\n      Individual <TableBatchAction> components take in any kind of event handler\n      prop that you would expect to use, like `onClick`. You can use these\n      alongside the `selectedRows` property in your `render` prop function\n      to pass along this info to your batch action handler.\n\n      You can find more detailed information surrounding usage of this component\n      at the following url: ".concat(readmeURL, "\n    "), function () {
  return React.createElement(DataTable, {
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
      return React.createElement(TableContainer, {
        title: "DataTable with batch actions"
      }, React.createElement(TableToolbar, null, React.createElement(TableBatchActions, getBatchActionProps(), React.createElement(TableBatchAction, {
        onClick: batchActionClick(selectedRows)
      }, "Ghost"), React.createElement(TableBatchAction, {
        onClick: batchActionClick(selectedRows)
      }, "Ghost"), React.createElement(TableBatchAction, {
        onClick: batchActionClick(selectedRows)
      }, "Ghost")), React.createElement(TableToolbarSearch, {
        onChange: onInputChange
      }), React.createElement(TableToolbarContent, null, React.createElement(TableToolbarAction, {
        iconName: "download",
        iconDescription: "Download",
        onClick: action('TableToolbarAction - Download')
      }), React.createElement(TableToolbarAction, {
        iconName: "edit",
        iconDescription: "Edit",
        onClick: action('TableToolbarAction - Edit')
      }), React.createElement(TableToolbarAction, {
        iconName: "settings",
        iconDescription: "Settings",
        onClick: action('TableToolbarAction - Settings')
      }), React.createElement(Button, {
        onClick: action('Add new row'),
        small: true,
        kind: "primary"
      }, "Add new"))), React.createElement(Table, null, React.createElement(TableHead, null, React.createElement(TableRow, null, React.createElement(TableSelectAll, getSelectionProps()), headers.map(function (header) {
        return React.createElement(TableHeader, getHeaderProps({
          header: header
        }), header.header);
      }))), React.createElement(TableBody, null, rows.map(function (row) {
        return React.createElement(TableRow, {
          key: row.id
        }, React.createElement(TableSelectRow, getSelectionProps({
          row: row
        })), row.cells.map(function (cell) {
          return React.createElement(TableCell, {
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

        return React.createElement(DataTable, {
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
            return React.createElement(TableContainer, {
              title: "DataTable with dynamic content"
            }, React.createElement(Button, {
              small: true,
              onClick: _this2.handleOnRowAdd
            }, "Add new row"), React.createElement(Button, {
              small: true,
              onClick: _this2.handleOnHeaderAdd
            }, "Add new header"), React.createElement(Button, {
              small: true,
              onClick: _this2.handleOnCellChange
            }, "Change cell contents"), React.createElement(TableToolbar, null, React.createElement(TableBatchActions, getBatchActionProps(), React.createElement(TableBatchAction, {
              onClick: batchActionClick(selectedRows)
            }, "Ghost"), React.createElement(TableBatchAction, {
              onClick: batchActionClick(selectedRows)
            }, "Ghost"), React.createElement(TableBatchAction, {
              onClick: batchActionClick(selectedRows)
            }, "Ghost")), React.createElement(TableToolbarSearch, {
              onChange: onInputChange
            }), React.createElement(TableToolbarContent, null, React.createElement(TableToolbarAction, {
              iconName: "download",
              iconDescription: "Download",
              onClick: action('TableToolbarAction - Download')
            }), React.createElement(TableToolbarAction, {
              iconName: "edit",
              iconDescription: "Edit",
              onClick: action('TableToolbarAction - Edit')
            }), React.createElement(TableToolbarAction, {
              iconName: "settings",
              iconDescription: "Settings",
              onClick: action('TableToolbarAction - Settings')
            }))), React.createElement(Table, null, React.createElement(TableHead, null, React.createElement(TableRow, null, React.createElement(TableExpandHeader, null), React.createElement(TableSelectAll, getSelectionProps()), headers.map(function (header) {
              return React.createElement(TableHeader, getHeaderProps({
                header: header
              }), header.header);
            }))), React.createElement(TableBody, null, rows.map(function (row) {
              return React.createElement(React.Fragment, {
                key: row.id
              }, React.createElement(TableExpandRow, getRowProps({
                row: row
              }), React.createElement(TableSelectRow, getSelectionProps({
                row: row
              })), row.cells.map(function (cell) {
                return React.createElement(TableCell, {
                  key: cell.id
                }, cell.value);
              })), row.isExpanded && React.createElement(TableExpandedRow, null, React.createElement(TableCell, {
                colSpan: headers.length + 3
              }, React.createElement("h1", null, "Expandable row content"), React.createElement("p", null, "Description here"))));
            }))));
          }
        });
      }
    }]);

    return DynamicRows;
  }(React.Component);

  return React.createElement(DynamicRows, null);
});