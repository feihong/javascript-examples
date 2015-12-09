(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _util = require('../lib/util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Form = (function (_React$Component) {
  _inherits(Form, _React$Component);

  function Form() {
    _classCallCheck(this, Form);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Form).apply(this, arguments));
  }

  _createClass(Form, [{
    key: 'render',
    value: function render() {
      var newStyle = (0, _util.extend)(this.props.style, { display: 'table' });

      return _react2.default.createElement(
        'form',
        _extends({}, this.props, { style: newStyle }),
        this.renderChildren()
      );
    }
  }, {
    key: 'renderChildren',
    value: function renderChildren() {
      var result = [];
      var children = this.props.children;
      for (var i = 0; i < children.length; i += 2) {
        var label = _react2.default.createElement(
          'label',
          { style: { display: 'table-cell', paddingRight: 10 } },
          children[i].trim()
        );
        var field = (0, _util.cloneElementMergeStyle)(children[i + 1], { display: 'table-cell' });
        result.push(_react2.default.createElement(
          'p',
          { style: { display: 'table-row' }, key: i },
          label,
          field
        ));
      }
      return result;
    }
  }]);

  return Form;
})(_react2.default.Component);

exports.default = Form;

},{"../lib/util":2,"react":undefined}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extend = extend;
exports.cloneElementMergeStyle = cloneElementMergeStyle;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function extend(a, b) {
  var newObj = Object.assign({}, a);
  Object.assign(newObj, b);
  return newObj;
}

function cloneElementMergeStyle(elem, style) {
  var newStyle = null;
  if (typeof elem.props.style === 'undefined') {
    newStyle = style;
  } else {
    newStyle = Object.assign({}, elem.props.style);
    Object.assign(newStyle, style);
  }
  return _react2.default.cloneElement(elem, { style: newStyle });
}

// function cloneElementMergeClassName(elem, className, key) {
//   let cfg = {}
//   if (typeof elem.props.className === 'undefined') {
//     cfg.className = className
//   } else {
//     cfg.className = `${elem.props.className} ${className}`
//   }
//   if (key) {
//     cfg.key = key
//   }
//   return React.cloneElement(elem, cfg)
// }
//

},{"react":undefined}],3:[function(require,module,exports){
'use strict';

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _form = require('../lib/form');

var _form2 = _interopRequireDefault(_form);

var _dsl = require('./dsl');

var _dsl2 = _interopRequireDefault(_dsl);

var _calc = require('./calc');

var _util = require('../lib/util');

var _underscore = require('underscore.string');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DEFAULT_VALUES = {
  attendees: 6,
  tax: 9.75,
  tip: 20,
  serviceFee: 0
};

var RESULT_FIELDS = ['Subtotal', 'Tax', 'Tip', 'Total'];

var Calculator = (function (_React$Component) {
  _inherits(Calculator, _React$Component);

  function Calculator(props) {
    _classCallCheck(this, Calculator);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Calculator).call(this, props));

    var d = {
      results: null,
      detailValues: null
    };
    _this.state = Object.assign(d, DEFAULT_VALUES);

    _this.handleDetailChange = _this.handleDetailChange.bind(_this);
    return _this;
  }

  _createClass(Calculator, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'Inputs'
        ),
        _react2.default.createElement(
          _form2.default,
          null,
          '# of paying attendees: ',
          _react2.default.createElement('input', { defaultValue: '6', type: 'number',
            onChange: this.changeHandler('attendees') }),
          'Tax percentage: ',
          _react2.default.createElement('input', { defaultValue: '9.75',
            onChange: this.changeHandler('tax') }),
          'Tip percentage: ',
          _react2.default.createElement('input', { defaultValue: '20', type: 'number',
            onChange: this.changeHandler('tip') }),
          'Service fee: ',
          _react2.default.createElement('input', { defaultValue: '0', type: 'number',
            onChange: this.changeHandler('serviceFee') }),
          'Order details: ',
          _react2.default.createElement('textarea', { cols: '50', rows: '8',
            onChange: this.handleDetailChange })
        ),
        _react2.default.createElement(
          'h2',
          null,
          'Results'
        ),
        _react2.default.createElement(ResultTable, { results: this.state.results })
      );
    }
  }, {
    key: 'changeHandler',
    value: function changeHandler(field) {
      var _this2 = this;

      return function (evt) {
        var value = parseFloat(evt.target.value);
        _this2.setState(_defineProperty({}, field, value));
        _this2.calculate(field, value);
      };
    }
  }, {
    key: 'handleDetailChange',
    value: function handleDetailChange(evt) {
      var detailValues = (0, _dsl2.default)(evt.target.value);
      this.setState({ detailValues: detailValues });
      this.calculate('detailValues', detailValues);
    }
  }, {
    key: 'calculate',
    value: function calculate(key, value) {
      var results = new Map();
      var state = (0, _util.extend)(this.state, _defineProperty({}, key, value));
      if (state.detailValues === null) {
        this.setState({ results: null });
      } else {
        var subtotal = (0, _calc.sumAll)(state.detailValues);
        var taxAmt = state.tax * subtotal * 0.01;
        var tipAmt = state.tip * subtotal * 0.01;
        var total = subtotal + taxAmt + tipAmt;

        results.set('Subtotal', subtotal);
        results.set('Tax (' + state.tax + '% of subtotal)', taxAmt);
        results.set('Tip (' + state.tip + '% of subtotal)', tipAmt);
        results.set('Total', total);

        var _calculateEach = (0, _calc.calculateEach)(state);

        var calcValues = _calculateEach.calcValues;
        var totalPay = _calculateEach.totalPay;
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = calcValues[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _step$value = _slicedToArray(_step.value, 2);

            var label = _step$value[0];
            var _value = _step$value[1];

            results.set(label, _value);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        results.set('Total to be paid', totalPay);
        results.set('Service fees collected', totalPay - total);

        this.setState({ results: results });
      }
    }
  }]);

  return Calculator;
})(_react2.default.Component);

var ResultTable = (function (_React$Component2) {
  _inherits(ResultTable, _React$Component2);

  function ResultTable() {
    _classCallCheck(this, ResultTable);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ResultTable).apply(this, arguments));
  }

  _createClass(ResultTable, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { style: { display: 'table' } },
        this.renderChildren()
      );
    }
  }, {
    key: 'renderChildren',
    value: function renderChildren() {
      if (this.props.results === null) {
        return;
      }
      var children = [];
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.props.results[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var _step2$value = _slicedToArray(_step2.value, 2);

          var key = _step2$value[0];
          var val = _step2$value[1];

          // If val is a number, convert it to a string
          if (typeof val === 'number') {
            val = (0, _underscore.numberFormat)(val, 2);
          }
          children.push(_react2.default.createElement(
            'p',
            { key: key, style: { display: 'table-row' } },
            _react2.default.createElement(
              'label',
              { style: { display: 'table-cell', paddingRight: 20 } },
              key,
              ':'
            ),
            _react2.default.createElement(
              'label',
              { style: { display: 'table-cell' } },
              val
            )
          ));
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return children;
    }
  }]);

  return ResultTable;
})(_react2.default.Component);

_reactDom2.default.render(_react2.default.createElement(Calculator, null), document.getElementById('content'));

},{"../lib/form":1,"../lib/util":2,"./calc":4,"./dsl":5,"react":undefined,"react-dom":undefined,"underscore.string":undefined}],4:[function(require,module,exports){
'use strict';

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sum = sum;
exports.sumAll = sumAll;
exports.calculateEach = calculateEach;

var _underscore = require('underscore.string');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function sum(array, fn) {
  fn = fn || function (x) {
    return x;
  };
  return array.reduce(function (previous, current) {
    return previous + fn(current);
  }, 0);
}

function sumAll(map) {
  var arrays = [].concat(_toConsumableArray(map.values()));
  return sum(arrays, function (array) {
    return sum(array, function (x) {
      return x.price;
    });
  });
}

function calculateEach(state) {
  var sums = new Map();
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = state.detailValues[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _step$value = _slicedToArray(_step.value, 2);

      var key = _step$value[0];
      var val = _step$value[1];

      sums.set(key, sum(val, function (x) {
        return x.price;
      }));
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  var each = sums.get('group') / state.attendees;
  sums.delete('group');

  var names = [].concat(_toConsumableArray(sums.keys()));
  names.sort(function (x) {
    return x.toLowerCase();
  });

  // Multiplier that incorporates both tax and tip
  var multiplier = 1 + (state.tax + state.tip) * .01;

  var calcValues = new Map();
  var totalPay = 0;

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = names[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var name = _step2.value;

      var val = Math.ceil(multiplier * (sums.get(name) + each)) + state.serviceFee;
      totalPay += val;
      calcValues.set(name + ' pays', val);
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  var everyoneElseCount = state.attendees - names.length;
  var everyoneElse = Math.ceil(multiplier * each) + state.serviceFee;
  totalPay += everyoneElse * everyoneElseCount;

  var groupLabel = 'Everyone pays';
  if (sums.size) {
    groupLabel = 'Remaining ' + everyoneElseCount + ' attendees pay';
  }

  calcValues.set(groupLabel, (0, _underscore.numberFormat)(everyoneElse, 2));

  return { calcValues: calcValues, totalPay: totalPay };
}

},{"underscore.string":undefined}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = parse;
/*
Sample input:

steak frites 34.5
baked salmon 25.6
chicken pot pie 11.82

Bill: horchata 4
Ted: Manhattan 5.1
Tofurkey sliders 7
Kim:
Borscht 5.49
Stuffed cabbage 7.99

*/

function parse(text) {
  var result = new Map();
  var currentGroup = 'group';
  var itemCount = 0;

  getCleanLines(text).forEach(function (line) {
    var item = parseLine(line);
    if (!item) {
      return;
    }
    itemCount++;
    if (item.group) {
      currentGroup = item.group;
    }
    if (item.name) {
      if (!result.get(currentGroup)) {
        result.set(currentGroup, []);
      }
      result.get(currentGroup).push({ name: item.name, price: item.price });
    }
  });

  return itemCount === 0 ? null : result;
}

function parseLine(line) {
  var group = null;
  if (contains(line, ':')) {
    var _parts = line.split(':');
    group = _parts[0].trim();
    line = _parts[1].trim();
  }
  var parts = line.match(/(.*?)\s+(\d+(?:\.\d{1,2})?)/);
  var name = null;
  var price = null;
  if (parts) {
    name = parts[1];
    price = parseFloat(parts[2]);
  }
  if (group === null && name === null) {
    return null;
  } else {
    return {
      group: group,
      name: name,
      price: price
    };
  }
}

function contains(string, subString) {
  return string.indexOf(subString) !== -1;
}

function getCleanLines(text) {
  return text.trim().split('\n').filter(function (line) {
    return line.trim();
  });
}

},{}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsInNpdGUvbGliL2Zvcm0uYmFiZWwiLCJzaXRlL2xpYi91dGlsLmJhYmVsIiwic2l0ZS9tZWV0dXAtY2FsYy9hcHAuYmFiZWwiLCJzaXRlL21lZXR1cC1jYWxjL2NhbGMuYmFiZWwiLCJzaXRlL21lZXR1cC1jYWxjL2RzbC5iYWJlbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0lxQixJQUFJO1lBQUosSUFBSTs7V0FBSixJQUFJOzBCQUFKLElBQUk7O2tFQUFKLElBQUk7OztlQUFKLElBQUk7OzZCQUNkO0FBQ1AsVUFBSSxRQUFRLEdBQUcsVUFMWCxNQUFNLEVBS1ksSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFDLENBQUMsQ0FBQTs7QUFFM0QsYUFBTzs7cUJBQVUsSUFBSSxDQUFDLEtBQUssSUFBRSxLQUFLLEVBQUUsUUFBUSxBQUFDO1FBQzFDLElBQUksQ0FBQyxjQUFjLEVBQUU7T0FDakIsQ0FBQTtLQUNSOzs7cUNBRWdCO0FBQ2YsVUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFBO0FBQ2YsVUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUE7QUFDbEMsV0FBSyxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFFLENBQUMsRUFBRTtBQUN2QyxZQUFJLEtBQUssR0FBRzs7WUFBTyxLQUFLLEVBQUUsRUFBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxFQUFFLEVBQUMsQUFBQztVQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUU7U0FBUyxDQUFBO0FBQ2pHLFlBQUksS0FBSyxHQUFHLFVBakJGLHNCQUFzQixFQWlCRyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUMsT0FBTyxFQUFFLFlBQVksRUFBQyxDQUFDLENBQUE7QUFDNUUsY0FBTSxDQUFDLElBQUksQ0FBQzs7WUFBRyxLQUFLLEVBQUUsRUFBQyxPQUFPLEVBQUUsV0FBVyxFQUFDLEFBQUMsRUFBQyxHQUFHLEVBQUUsQ0FBQyxBQUFDO1VBQUUsS0FBSztVQUFFLEtBQUs7U0FBSyxDQUFDLENBQUE7T0FDMUU7QUFDRCxhQUFPLE1BQU0sQ0FBQTtLQUNkOzs7U0FsQmtCLElBQUk7R0FBUyxnQkFBTSxTQUFTOztrQkFBNUIsSUFBSTs7Ozs7Ozs7UUNEVCxNQUFNLEdBQU4sTUFBTTtRQU1OLHNCQUFzQixHQUF0QixzQkFBc0I7Ozs7Ozs7O0FBTi9CLFNBQVMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDM0IsTUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUE7QUFDakMsUUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUE7QUFDeEIsU0FBTyxNQUFNLENBQUE7Q0FDZDs7QUFFTSxTQUFTLHNCQUFzQixDQUFDLElBQUksRUFBRSxLQUFLLEVBQUU7QUFDbEQsTUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFBO0FBQ25CLE1BQUksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssS0FBSyxXQUFXLEVBQUU7QUFDM0MsWUFBUSxHQUFHLEtBQUssQ0FBQTtHQUNqQixNQUFNO0FBQ0wsWUFBUSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7QUFDOUMsVUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUE7R0FDL0I7QUFDRCxTQUFPLGdCQUFNLFlBQVksQ0FBQyxJQUFJLEVBQUUsRUFBQyxLQUFLLEVBQUUsUUFBUSxFQUFDLENBQUMsQ0FBQTtDQUNuRDs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNURCxJQUFNLGNBQWMsR0FBRztBQUNyQixXQUFTLEVBQUUsQ0FBQztBQUNaLEtBQUcsRUFBRSxJQUFJO0FBQ1QsS0FBRyxFQUFFLEVBQUU7QUFDUCxZQUFVLEVBQUUsQ0FBQztDQUNkLENBQUE7O0FBRUQsSUFBTSxhQUFhLEdBQUcsQ0FDcEIsVUFBVSxFQUNWLEtBQUssRUFDTCxLQUFLLEVBQ0wsT0FBTyxDQUNSLENBQUE7O0lBR0ssVUFBVTtZQUFWLFVBQVU7O0FBQ2QsV0FESSxVQUFVLENBQ0YsS0FBSyxFQUFFOzBCQURmLFVBQVU7O3VFQUFWLFVBQVUsYUFFTixLQUFLOztBQUNYLFFBQUksQ0FBQyxHQUFHO0FBQ04sYUFBTyxFQUFFLElBQUk7QUFDYixrQkFBWSxFQUFFLElBQUk7S0FDbkIsQ0FBQTtBQUNELFVBQUssS0FBSyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLGNBQWMsQ0FBQyxDQUFBOztBQUU3QyxVQUFLLGtCQUFrQixHQUFHLE1BQUssa0JBQWtCLENBQUMsSUFBSSxPQUFNLENBQUE7O0dBQzdEOztlQVZHLFVBQVU7OzZCQVlMO0FBQ1AsYUFBTzs7O1FBQ0w7Ozs7U0FBZTtRQUNmOzs7O1VBQ3lCLHlDQUFPLFlBQVksRUFBQyxHQUFHLEVBQUMsSUFBSSxFQUFDLFFBQVE7QUFDOUIsb0JBQVEsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxBQUFDLEdBQUc7O1VBQzNELHlDQUFPLFlBQVksRUFBQyxNQUFNO0FBQ25CLG9CQUFRLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQUFBQyxHQUFHOztVQUM5Qyx5Q0FBTyxZQUFZLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxRQUFRO0FBQy9CLG9CQUFRLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQUFBQyxHQUFHOztVQUNqRCx5Q0FBTyxZQUFZLEVBQUMsR0FBRyxFQUFDLElBQUksRUFBQyxRQUFRO0FBQzlCLG9CQUFRLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQUFBQyxHQUFHOztVQUNuRCw0Q0FBVSxJQUFJLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxHQUFHO0FBQ2xCLG9CQUFRLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixBQUFDLEdBQUc7U0FDekQ7UUFFUDs7OztTQUFnQjtRQUNoQiw4QkFBQyxXQUFXLElBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxBQUFDLEdBQUc7T0FDeEMsQ0FBQTtLQUNQOzs7a0NBRWEsS0FBSyxFQUFFOzs7QUFDbkIsYUFBTyxVQUFDLEdBQUcsRUFBSztBQUNkLFlBQUksS0FBSyxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFBO0FBQ3hDLGVBQUssUUFBUSxxQkFBRyxLQUFLLEVBQUcsS0FBSyxFQUFFLENBQUE7QUFDL0IsZUFBSyxTQUFTLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFBO09BQzdCLENBQUE7S0FDRjs7O3VDQUVrQixHQUFHLEVBQUU7QUFDdEIsVUFBSSxZQUFZLEdBQUcsbUJBQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQTtBQUMxQyxVQUFJLENBQUMsUUFBUSxDQUFDLEVBQUMsWUFBWSxFQUFFLFlBQVksRUFBQyxDQUFDLENBQUE7QUFDM0MsVUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsWUFBWSxDQUFDLENBQUE7S0FDN0M7Ozs4QkFFUyxHQUFHLEVBQUUsS0FBSyxFQUFFO0FBQ3BCLFVBQUksT0FBTyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUE7QUFDdkIsVUFBSSxLQUFLLEdBQUcsVUFwRVIsTUFBTSxFQW9FUyxJQUFJLENBQUMsS0FBSyxzQkFBSSxHQUFHLEVBQUcsS0FBSyxFQUFFLENBQUE7QUFDOUMsVUFBSSxLQUFLLENBQUMsWUFBWSxLQUFLLElBQUksRUFBRTtBQUMvQixZQUFJLENBQUMsUUFBUSxDQUFDLEVBQUMsT0FBTyxFQUFFLElBQUksRUFBQyxDQUFDLENBQUE7T0FDL0IsTUFBTTtBQUNMLFlBQUksUUFBUSxHQUFHLFVBekVSLE1BQU0sRUF5RVMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFBO0FBQ3pDLFlBQUksTUFBTSxHQUFHLEtBQUssQ0FBQyxHQUFHLEdBQUcsUUFBUSxHQUFHLElBQUksQ0FBQTtBQUN4QyxZQUFJLE1BQU0sR0FBRyxLQUFLLENBQUMsR0FBRyxHQUFHLFFBQVEsR0FBRyxJQUFJLENBQUE7QUFDeEMsWUFBSSxLQUFLLEdBQUcsUUFBUSxHQUFHLE1BQU0sR0FBRyxNQUFNLENBQUE7O0FBRXRDLGVBQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFBO0FBQ2pDLGVBQU8sQ0FBQyxHQUFHLFdBQVMsS0FBSyxDQUFDLEdBQUcscUJBQWtCLE1BQU0sQ0FBQyxDQUFBO0FBQ3RELGVBQU8sQ0FBQyxHQUFHLFdBQVMsS0FBSyxDQUFDLEdBQUcscUJBQWtCLE1BQU0sQ0FBQyxDQUFBO0FBQ3RELGVBQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFBOzs2QkFFRSxVQW5GZCxhQUFhLEVBbUZlLEtBQUssQ0FBQzs7WUFBNUMsVUFBVSxrQkFBVixVQUFVO1lBQUUsUUFBUSxrQkFBUixRQUFROzs7Ozs7QUFDekIsK0JBQTJCLFVBQVUsOEhBQUU7OztnQkFBN0IsS0FBSztnQkFBRSxNQUFLOztBQUNwQixtQkFBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsTUFBSyxDQUFDLENBQUE7V0FDMUI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxlQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLFFBQVEsQ0FBQyxDQUFBO0FBQ3pDLGVBQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLEVBQUUsUUFBUSxHQUFHLEtBQUssQ0FBQyxDQUFBOztBQUV2RCxZQUFJLENBQUMsUUFBUSxDQUFDLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBQyxDQUFDLENBQUE7T0FDbEM7S0FDRjs7O1NBekVHLFVBQVU7R0FBUyxnQkFBTSxTQUFTOztJQTZFbEMsV0FBVztZQUFYLFdBQVc7O1dBQVgsV0FBVzswQkFBWCxXQUFXOztrRUFBWCxXQUFXOzs7ZUFBWCxXQUFXOzs2QkFDTjtBQUNQLGFBQU87O1VBQUssS0FBSyxFQUFFLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBQyxBQUFDO1FBQ25DLElBQUksQ0FBQyxjQUFjLEVBQUU7T0FDbEIsQ0FBQTtLQUNQOzs7cUNBRWdCO0FBQ2YsVUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sS0FBSyxJQUFJLEVBQUU7QUFDL0IsZUFBTTtPQUNQO0FBQ0QsVUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFBOzs7Ozs7QUFDakIsOEJBQXVCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxtSUFBRTs7O2NBQWpDLEdBQUc7Y0FBRSxHQUFHOzs7QUFFaEIsY0FBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLEVBQUU7QUFDM0IsZUFBRyxHQUFHLGdCQTlHTixZQUFZLEVBOEdPLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQTtXQUMzQjtBQUNELGtCQUFRLENBQUMsSUFBSSxDQUNYOztjQUFHLEdBQUcsRUFBRSxHQUFHLEFBQUMsRUFBQyxLQUFLLEVBQUUsRUFBQyxPQUFPLEVBQUUsV0FBVyxFQUFDLEFBQUM7WUFDekM7O2dCQUFPLEtBQUssRUFBRSxFQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLEVBQUUsRUFBQyxBQUFDO2NBQUUsR0FBRzs7YUFBVTtZQUN2RTs7Z0JBQU8sS0FBSyxFQUFFLEVBQUMsT0FBTyxFQUFFLFlBQVksRUFBQyxBQUFDO2NBQUUsR0FBRzthQUFTO1dBQ2xELENBQ0wsQ0FBQTtTQUNGOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0QsYUFBTyxRQUFRLENBQUE7S0FDaEI7OztTQXpCRyxXQUFXO0dBQVMsZ0JBQU0sU0FBUzs7QUE0QnpDLG1CQUFTLE1BQU0sQ0FDYiw4QkFBQyxVQUFVLE9BQUcsRUFDZCxRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUNuQyxDQUFBOzs7Ozs7Ozs7O1FDakllLEdBQUcsR0FBSCxHQUFHO1FBS0gsTUFBTSxHQUFOLE1BQU07UUFPTixhQUFhLEdBQWIsYUFBYTs7Ozs7O0FBWnRCLFNBQVMsR0FBRyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUU7QUFDN0IsSUFBRSxHQUFHLEVBQUUsSUFBSyxVQUFBLENBQUM7V0FBSSxDQUFDO0dBQUEsQUFBQyxDQUFBO0FBQ25CLFNBQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFDLFFBQVEsRUFBRSxPQUFPO1dBQUssUUFBUSxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUM7R0FBQSxFQUFFLENBQUMsQ0FBQyxDQUFBO0NBQ3RFOztBQUVNLFNBQVMsTUFBTSxDQUFDLEdBQUcsRUFBRTtBQUMxQixNQUFJLE1BQU0sZ0NBQU8sR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFDLENBQUE7QUFDOUIsU0FBTyxHQUFHLENBQUMsTUFBTSxFQUFFLFVBQUEsS0FBSyxFQUFJO0FBQzFCLFdBQU8sR0FBRyxDQUFDLEtBQUssRUFBRSxVQUFBLENBQUM7YUFBSSxDQUFDLENBQUMsS0FBSztLQUFBLENBQUMsQ0FBQTtHQUNoQyxDQUFDLENBQUE7Q0FDSDs7QUFFTSxTQUFTLGFBQWEsQ0FBQyxLQUFLLEVBQUU7QUFDbkMsTUFBSSxJQUFJLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQTs7Ozs7O0FBQ3BCLHlCQUF1QixLQUFLLENBQUMsWUFBWSw4SEFBRTs7O1VBQWpDLEdBQUc7VUFBRSxHQUFHOztBQUNoQixVQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLFVBQUEsQ0FBQztlQUFJLENBQUMsQ0FBQyxLQUFLO09BQUEsQ0FBQyxDQUFDLENBQUE7S0FDdEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxNQUFJLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUE7QUFDOUMsTUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQTs7QUFFcEIsTUFBSSxLQUFLLGdDQUFPLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBQyxDQUFBO0FBQzVCLE9BQUssQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDO1dBQUksQ0FBQyxDQUFDLFdBQVcsRUFBRTtHQUFBLENBQUM7OztBQUFBLEFBR2hDLE1BQUksVUFBVSxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQSxHQUFJLEdBQUcsQ0FBQTs7QUFFbEQsTUFBSSxVQUFVLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQTtBQUMxQixNQUFJLFFBQVEsR0FBRyxDQUFDLENBQUE7Ozs7Ozs7QUFFaEIsMEJBQWlCLEtBQUssbUlBQUU7VUFBZixJQUFJOztBQUNYLFVBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFBLEFBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUE7QUFDNUUsY0FBUSxJQUFJLEdBQUcsQ0FBQTtBQUNmLGdCQUFVLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUE7S0FDcEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxNQUFJLGlCQUFpQixHQUFHLEtBQUssQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQTtBQUN0RCxNQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFBO0FBQ2xFLFVBQVEsSUFBSSxZQUFZLEdBQUcsaUJBQWlCLENBQUE7O0FBRTVDLE1BQUksVUFBVSxHQUFHLGVBQWUsQ0FBQTtBQUNoQyxNQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7QUFDYixjQUFVLGtCQUFnQixpQkFBaUIsbUJBQWdCLENBQUE7R0FDNUQ7O0FBRUQsWUFBVSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsZ0JBaERyQixZQUFZLEVBZ0RzQixZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQTs7QUFFekQsU0FBTyxFQUFDLFVBQVUsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBQyxDQUFBO0NBQ3BEOzs7Ozs7OztrQkNuQ3VCLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWQsU0FBUyxLQUFLLENBQUMsSUFBSSxFQUFFO0FBQ2xDLE1BQUksTUFBTSxHQUFHLElBQUksR0FBRyxFQUFFLENBQUE7QUFDdEIsTUFBSSxZQUFZLEdBQUcsT0FBTyxDQUFBO0FBQzFCLE1BQUksU0FBUyxHQUFHLENBQUMsQ0FBQTs7QUFFakIsZUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUksRUFBSztBQUNwQyxRQUFJLElBQUksR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUE7QUFDMUIsUUFBSSxDQUFDLElBQUksRUFBRTtBQUNULGFBQU07S0FDUDtBQUNELGFBQVMsRUFBRSxDQUFBO0FBQ1gsUUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO0FBQ2Qsa0JBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFBO0tBQzFCO0FBQ0QsUUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO0FBQ2IsVUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLEVBQUU7QUFDN0IsY0FBTSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsRUFBRSxDQUFDLENBQUE7T0FDN0I7QUFDRCxZQUFNLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQTtLQUNwRTtHQUNGLENBQUMsQ0FBQTs7QUFFRixTQUFPLFNBQVMsS0FBSyxDQUFDLEdBQUcsSUFBSSxHQUFHLE1BQU0sQ0FBQTtDQUN2Qzs7QUFFRCxTQUFTLFNBQVMsQ0FBQyxJQUFJLEVBQUU7QUFDdkIsTUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFBO0FBQ2hCLE1BQUksUUFBUSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsRUFBRTtBQUN2QixRQUFJLE1BQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0FBQzNCLFNBQUssR0FBRyxNQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUE7QUFDdkIsUUFBSSxHQUFHLE1BQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtHQUN2QjtBQUNELE1BQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsNkJBQTZCLENBQUMsQ0FBQTtBQUNyRCxNQUFJLElBQUksR0FBRyxJQUFJLENBQUE7QUFDZixNQUFJLEtBQUssR0FBRyxJQUFJLENBQUE7QUFDaEIsTUFBSSxLQUFLLEVBQUU7QUFDVCxRQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFBO0FBQ2YsU0FBSyxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtHQUM3QjtBQUNELE1BQUksS0FBSyxLQUFLLElBQUksSUFBSSxJQUFJLEtBQUssSUFBSSxFQUFFO0FBQ25DLFdBQU8sSUFBSSxDQUFBO0dBQ1osTUFBTTtBQUNMLFdBQU87QUFDTCxXQUFLLEVBQUUsS0FBSztBQUNaLFVBQUksRUFBRSxJQUFJO0FBQ1YsV0FBSyxFQUFFLEtBQUs7S0FDYixDQUFBO0dBQ0Y7Q0FDRjs7QUFFRCxTQUFTLFFBQVEsQ0FBQyxNQUFNLEVBQUUsU0FBUyxFQUFFO0FBQ25DLFNBQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQTtDQUN4Qzs7QUFFRCxTQUFTLGFBQWEsQ0FBQyxJQUFJLEVBQUU7QUFDM0IsU0FBTyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFBLElBQUk7V0FBSSxJQUFJLENBQUMsSUFBSSxFQUFFO0dBQUEsQ0FBQyxDQUFDO0NBQzVEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7ZXh0ZW5kLCBjbG9uZUVsZW1lbnRNZXJnZVN0eWxlfSBmcm9tICcuLi9saWIvdXRpbCdcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGxldCBuZXdTdHlsZSA9IGV4dGVuZCh0aGlzLnByb3BzLnN0eWxlLCB7ZGlzcGxheTogJ3RhYmxlJ30pXG5cbiAgICByZXR1cm4gPGZvcm0gey4uLnRoaXMucHJvcHN9IHN0eWxlPXtuZXdTdHlsZX0+XG4gICAgICB7dGhpcy5yZW5kZXJDaGlsZHJlbigpfVxuICAgIDwvZm9ybT5cbiAgfVxuXG4gIHJlbmRlckNoaWxkcmVuKCkge1xuICAgIGxldCByZXN1bHQgPSBbXVxuICAgIGxldCBjaGlsZHJlbiA9IHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICBmb3IgKGxldCBpPTA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrPTIpIHtcbiAgICAgIGxldCBsYWJlbCA9IDxsYWJlbCBzdHlsZT17e2Rpc3BsYXk6ICd0YWJsZS1jZWxsJywgcGFkZGluZ1JpZ2h0OiAxMH19PntjaGlsZHJlbltpXS50cmltKCl9PC9sYWJlbD5cbiAgICAgIGxldCBmaWVsZCA9IGNsb25lRWxlbWVudE1lcmdlU3R5bGUoY2hpbGRyZW5baSArIDFdLCB7ZGlzcGxheTogJ3RhYmxlLWNlbGwnfSlcbiAgICAgIHJlc3VsdC5wdXNoKDxwIHN0eWxlPXt7ZGlzcGxheTogJ3RhYmxlLXJvdyd9fSBrZXk9e2l9PntsYWJlbH17ZmllbGR9PC9wPilcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cblxuZXhwb3J0IGZ1bmN0aW9uIGV4dGVuZChhLCBiKSB7XG4gIGxldCBuZXdPYmogPSBPYmplY3QuYXNzaWduKHt9LCBhKVxuICBPYmplY3QuYXNzaWduKG5ld09iaiwgYilcbiAgcmV0dXJuIG5ld09ialxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xvbmVFbGVtZW50TWVyZ2VTdHlsZShlbGVtLCBzdHlsZSkge1xuICBsZXQgbmV3U3R5bGUgPSBudWxsXG4gIGlmICh0eXBlb2YgZWxlbS5wcm9wcy5zdHlsZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBuZXdTdHlsZSA9IHN0eWxlXG4gIH0gZWxzZSB7XG4gICAgbmV3U3R5bGUgPSBPYmplY3QuYXNzaWduKHt9LCBlbGVtLnByb3BzLnN0eWxlKVxuICAgIE9iamVjdC5hc3NpZ24obmV3U3R5bGUsIHN0eWxlKVxuICB9XG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoZWxlbSwge3N0eWxlOiBuZXdTdHlsZX0pXG59XG5cbi8vIGZ1bmN0aW9uIGNsb25lRWxlbWVudE1lcmdlQ2xhc3NOYW1lKGVsZW0sIGNsYXNzTmFtZSwga2V5KSB7XG4vLyAgIGxldCBjZmcgPSB7fVxuLy8gICBpZiAodHlwZW9mIGVsZW0ucHJvcHMuY2xhc3NOYW1lID09PSAndW5kZWZpbmVkJykge1xuLy8gICAgIGNmZy5jbGFzc05hbWUgPSBjbGFzc05hbWVcbi8vICAgfSBlbHNlIHtcbi8vICAgICBjZmcuY2xhc3NOYW1lID0gYCR7ZWxlbS5wcm9wcy5jbGFzc05hbWV9ICR7Y2xhc3NOYW1lfWBcbi8vICAgfVxuLy8gICBpZiAoa2V5KSB7XG4vLyAgICAgY2ZnLmtleSA9IGtleVxuLy8gICB9XG4vLyAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoZWxlbSwgY2ZnKVxuLy8gfVxuLy9cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQgRm9ybSBmcm9tICcuLi9saWIvZm9ybSdcbmltcG9ydCBwYXJzZSBmcm9tICcuL2RzbCdcbmltcG9ydCB7c3VtLCBzdW1BbGwsIGNhbGN1bGF0ZUVhY2h9IGZyb20gJy4vY2FsYydcbmltcG9ydCB7ZXh0ZW5kfSBmcm9tICcuLi9saWIvdXRpbCdcbmltcG9ydCB7bnVtYmVyRm9ybWF0fSBmcm9tICd1bmRlcnNjb3JlLnN0cmluZydcblxuXG5jb25zdCBERUZBVUxUX1ZBTFVFUyA9IHtcbiAgYXR0ZW5kZWVzOiA2LFxuICB0YXg6IDkuNzUsXG4gIHRpcDogMjAsXG4gIHNlcnZpY2VGZWU6IDAsXG59XG5cbmNvbnN0IFJFU1VMVF9GSUVMRFMgPSBbXG4gICdTdWJ0b3RhbCcsXG4gICdUYXgnLFxuICAnVGlwJyxcbiAgJ1RvdGFsJyxcbl1cblxuXG5jbGFzcyBDYWxjdWxhdG9yIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICBsZXQgZCA9IHtcbiAgICAgIHJlc3VsdHM6IG51bGwsXG4gICAgICBkZXRhaWxWYWx1ZXM6IG51bGwsXG4gICAgfVxuICAgIHRoaXMuc3RhdGUgPSBPYmplY3QuYXNzaWduKGQsIERFRkFVTFRfVkFMVUVTKVxuXG4gICAgdGhpcy5oYW5kbGVEZXRhaWxDaGFuZ2UgPSB0aGlzLmhhbmRsZURldGFpbENoYW5nZS5iaW5kKHRoaXMpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxkaXY+XG4gICAgICA8aDI+SW5wdXRzPC9oMj5cbiAgICAgIDxGb3JtPlxuICAgICAgICAjIG9mIHBheWluZyBhdHRlbmRlZXM6IDxpbnB1dCBkZWZhdWx0VmFsdWU9JzYnIHR5cGU9J251bWJlcidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuY2hhbmdlSGFuZGxlcignYXR0ZW5kZWVzJyl9IC8+XG4gICAgICAgIFRheCBwZXJjZW50YWdlOiA8aW5wdXQgZGVmYXVsdFZhbHVlPSc5Ljc1J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmNoYW5nZUhhbmRsZXIoJ3RheCcpfSAvPlxuICAgICAgICBUaXAgcGVyY2VudGFnZTogPGlucHV0IGRlZmF1bHRWYWx1ZT0nMjAnIHR5cGU9J251bWJlcidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5jaGFuZ2VIYW5kbGVyKCd0aXAnKX0gLz5cbiAgICAgICAgU2VydmljZSBmZWU6IDxpbnB1dCBkZWZhdWx0VmFsdWU9JzAnIHR5cGU9J251bWJlcidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5jaGFuZ2VIYW5kbGVyKCdzZXJ2aWNlRmVlJyl9IC8+XG4gICAgICAgIE9yZGVyIGRldGFpbHM6IDx0ZXh0YXJlYSBjb2xzPSc1MCcgcm93cz0nOCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZURldGFpbENoYW5nZX0gLz5cbiAgICAgIDwvRm9ybT5cblxuICAgICAgPGgyPlJlc3VsdHM8L2gyPlxuICAgICAgPFJlc3VsdFRhYmxlIHJlc3VsdHM9e3RoaXMuc3RhdGUucmVzdWx0c30gLz5cbiAgICA8L2Rpdj5cbiAgfVxuXG4gIGNoYW5nZUhhbmRsZXIoZmllbGQpIHtcbiAgICByZXR1cm4gKGV2dCkgPT4ge1xuICAgICAgbGV0IHZhbHVlID0gcGFyc2VGbG9hdChldnQudGFyZ2V0LnZhbHVlKVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7W2ZpZWxkXTogdmFsdWV9KVxuICAgICAgdGhpcy5jYWxjdWxhdGUoZmllbGQsIHZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZURldGFpbENoYW5nZShldnQpIHtcbiAgICBsZXQgZGV0YWlsVmFsdWVzID0gcGFyc2UoZXZ0LnRhcmdldC52YWx1ZSlcbiAgICB0aGlzLnNldFN0YXRlKHtkZXRhaWxWYWx1ZXM6IGRldGFpbFZhbHVlc30pXG4gICAgdGhpcy5jYWxjdWxhdGUoJ2RldGFpbFZhbHVlcycsIGRldGFpbFZhbHVlcylcbiAgfVxuXG4gIGNhbGN1bGF0ZShrZXksIHZhbHVlKSB7XG4gICAgbGV0IHJlc3VsdHMgPSBuZXcgTWFwKClcbiAgICBsZXQgc3RhdGUgPSBleHRlbmQodGhpcy5zdGF0ZSwge1trZXldOiB2YWx1ZX0pXG4gICAgaWYgKHN0YXRlLmRldGFpbFZhbHVlcyA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7cmVzdWx0czogbnVsbH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBzdWJ0b3RhbCA9IHN1bUFsbChzdGF0ZS5kZXRhaWxWYWx1ZXMpXG4gICAgICBsZXQgdGF4QW10ID0gc3RhdGUudGF4ICogc3VidG90YWwgKiAwLjAxXG4gICAgICBsZXQgdGlwQW10ID0gc3RhdGUudGlwICogc3VidG90YWwgKiAwLjAxXG4gICAgICBsZXQgdG90YWwgPSBzdWJ0b3RhbCArIHRheEFtdCArIHRpcEFtdFxuXG4gICAgICByZXN1bHRzLnNldCgnU3VidG90YWwnLCBzdWJ0b3RhbClcbiAgICAgIHJlc3VsdHMuc2V0KGBUYXggKCR7c3RhdGUudGF4fSUgb2Ygc3VidG90YWwpYCwgdGF4QW10KVxuICAgICAgcmVzdWx0cy5zZXQoYFRpcCAoJHtzdGF0ZS50aXB9JSBvZiBzdWJ0b3RhbClgLCB0aXBBbXQpXG4gICAgICByZXN1bHRzLnNldCgnVG90YWwnLCB0b3RhbClcblxuICAgICAgbGV0IHtjYWxjVmFsdWVzLCB0b3RhbFBheX0gPSBjYWxjdWxhdGVFYWNoKHN0YXRlKVxuICAgICAgZm9yIChsZXQgW2xhYmVsLCB2YWx1ZV0gb2YgY2FsY1ZhbHVlcykge1xuICAgICAgICByZXN1bHRzLnNldChsYWJlbCwgdmFsdWUpXG4gICAgICB9XG5cbiAgICAgIHJlc3VsdHMuc2V0KCdUb3RhbCB0byBiZSBwYWlkJywgdG90YWxQYXkpXG4gICAgICByZXN1bHRzLnNldCgnU2VydmljZSBmZWVzIGNvbGxlY3RlZCcsIHRvdGFsUGF5IC0gdG90YWwpXG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe3Jlc3VsdHM6IHJlc3VsdHN9KVxuICAgIH1cbiAgfVxufVxuXG5cbmNsYXNzIFJlc3VsdFRhYmxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogJ3RhYmxlJ319PlxuICAgICAge3RoaXMucmVuZGVyQ2hpbGRyZW4oKX1cbiAgICA8L2Rpdj5cbiAgfVxuXG4gIHJlbmRlckNoaWxkcmVuKCkge1xuICAgIGlmICh0aGlzLnByb3BzLnJlc3VsdHMgPT09IG51bGwpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBsZXQgY2hpbGRyZW4gPSBbXVxuICAgIGZvciAobGV0IFtrZXksIHZhbF0gb2YgdGhpcy5wcm9wcy5yZXN1bHRzKSB7XG4gICAgICAvLyBJZiB2YWwgaXMgYSBudW1iZXIsIGNvbnZlcnQgaXQgdG8gYSBzdHJpbmdcbiAgICAgIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgICAgICB2YWwgPSBudW1iZXJGb3JtYXQodmFsLCAyKVxuICAgICAgfVxuICAgICAgY2hpbGRyZW4ucHVzaChcbiAgICAgICAgPHAga2V5PXtrZXl9IHN0eWxlPXt7ZGlzcGxheTogJ3RhYmxlLXJvdyd9fT5cbiAgICAgICAgICA8bGFiZWwgc3R5bGU9e3tkaXNwbGF5OiAndGFibGUtY2VsbCcsIHBhZGRpbmdSaWdodDogMjB9fT57a2V5fTo8L2xhYmVsPlxuICAgICAgICAgIDxsYWJlbCBzdHlsZT17e2Rpc3BsYXk6ICd0YWJsZS1jZWxsJ319Pnt2YWx9PC9sYWJlbD5cbiAgICAgICAgPC9wPlxuICAgICAgKVxuICAgIH1cbiAgICByZXR1cm4gY2hpbGRyZW5cbiAgfVxufVxuXG5SZWFjdERPTS5yZW5kZXIoXG4gIDxDYWxjdWxhdG9yIC8+LFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpXG4pXG4iLCJpbXBvcnQge251bWJlckZvcm1hdH0gZnJvbSAndW5kZXJzY29yZS5zdHJpbmcnXG5cblxuZXhwb3J0IGZ1bmN0aW9uIHN1bShhcnJheSwgZm4pIHtcbiAgZm4gPSBmbiB8fCAoeCA9PiB4KVxuICByZXR1cm4gYXJyYXkucmVkdWNlKChwcmV2aW91cywgY3VycmVudCkgPT4gcHJldmlvdXMgKyBmbihjdXJyZW50KSwgMClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1bUFsbChtYXApIHtcbiAgbGV0IGFycmF5cyA9IFsuLi5tYXAudmFsdWVzKCldXG4gIHJldHVybiBzdW0oYXJyYXlzLCBhcnJheSA9PiB7XG4gICAgcmV0dXJuIHN1bShhcnJheSwgeCA9PiB4LnByaWNlKVxuICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlRWFjaChzdGF0ZSkge1xuICBsZXQgc3VtcyA9IG5ldyBNYXAoKVxuICBmb3IgKGxldCBba2V5LCB2YWxdIG9mIHN0YXRlLmRldGFpbFZhbHVlcykge1xuICAgIHN1bXMuc2V0KGtleSwgc3VtKHZhbCwgeCA9PiB4LnByaWNlKSlcbiAgfVxuXG4gIGxldCBlYWNoID0gc3Vtcy5nZXQoJ2dyb3VwJykgLyBzdGF0ZS5hdHRlbmRlZXNcbiAgc3Vtcy5kZWxldGUoJ2dyb3VwJylcblxuICBsZXQgbmFtZXMgPSBbLi4uc3Vtcy5rZXlzKCldXG4gIG5hbWVzLnNvcnQoeCA9PiB4LnRvTG93ZXJDYXNlKCkpXG5cbiAgLy8gTXVsdGlwbGllciB0aGF0IGluY29ycG9yYXRlcyBib3RoIHRheCBhbmQgdGlwXG4gIGxldCBtdWx0aXBsaWVyID0gMSArIChzdGF0ZS50YXggKyBzdGF0ZS50aXApICogLjAxXG5cbiAgbGV0IGNhbGNWYWx1ZXMgPSBuZXcgTWFwKClcbiAgbGV0IHRvdGFsUGF5ID0gMFxuXG4gIGZvciAobGV0IG5hbWUgb2YgbmFtZXMpIHtcbiAgICBsZXQgdmFsID0gTWF0aC5jZWlsKG11bHRpcGxpZXIgKiAoc3Vtcy5nZXQobmFtZSkgKyBlYWNoKSkgKyBzdGF0ZS5zZXJ2aWNlRmVlXG4gICAgdG90YWxQYXkgKz0gdmFsXG4gICAgY2FsY1ZhbHVlcy5zZXQobmFtZSArICcgcGF5cycsIHZhbClcbiAgfVxuXG4gIGxldCBldmVyeW9uZUVsc2VDb3VudCA9IHN0YXRlLmF0dGVuZGVlcyAtIG5hbWVzLmxlbmd0aFxuICBsZXQgZXZlcnlvbmVFbHNlID0gTWF0aC5jZWlsKG11bHRpcGxpZXIgKiBlYWNoKSArIHN0YXRlLnNlcnZpY2VGZWVcbiAgdG90YWxQYXkgKz0gZXZlcnlvbmVFbHNlICogZXZlcnlvbmVFbHNlQ291bnRcblxuICBsZXQgZ3JvdXBMYWJlbCA9ICdFdmVyeW9uZSBwYXlzJ1xuICBpZiAoc3Vtcy5zaXplKSB7XG4gICAgZ3JvdXBMYWJlbCA9IGBSZW1haW5pbmcgJHtldmVyeW9uZUVsc2VDb3VudH0gYXR0ZW5kZWVzIHBheWBcbiAgfVxuXG4gIGNhbGNWYWx1ZXMuc2V0KGdyb3VwTGFiZWwsIG51bWJlckZvcm1hdChldmVyeW9uZUVsc2UsIDIpKVxuXG4gIHJldHVybiB7Y2FsY1ZhbHVlczogY2FsY1ZhbHVlcywgdG90YWxQYXk6IHRvdGFsUGF5fVxufVxuIiwiLypcblNhbXBsZSBpbnB1dDpcblxuc3RlYWsgZnJpdGVzIDM0LjVcbmJha2VkIHNhbG1vbiAyNS42XG5jaGlja2VuIHBvdCBwaWUgMTEuODJcblxuQmlsbDogaG9yY2hhdGEgNFxuVGVkOiBNYW5oYXR0YW4gNS4xXG5Ub2Z1cmtleSBzbGlkZXJzIDdcbktpbTpcbkJvcnNjaHQgNS40OVxuU3R1ZmZlZCBjYWJiYWdlIDcuOTlcblxuKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFyc2UodGV4dCkge1xuICBsZXQgcmVzdWx0ID0gbmV3IE1hcCgpXG4gIGxldCBjdXJyZW50R3JvdXAgPSAnZ3JvdXAnXG4gIGxldCBpdGVtQ291bnQgPSAwXG5cbiAgZ2V0Q2xlYW5MaW5lcyh0ZXh0KS5mb3JFYWNoKChsaW5lKSA9PiB7XG4gICAgbGV0IGl0ZW0gPSBwYXJzZUxpbmUobGluZSlcbiAgICBpZiAoIWl0ZW0pIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBpdGVtQ291bnQrK1xuICAgIGlmIChpdGVtLmdyb3VwKSB7XG4gICAgICBjdXJyZW50R3JvdXAgPSBpdGVtLmdyb3VwXG4gICAgfVxuICAgIGlmIChpdGVtLm5hbWUpIHtcbiAgICAgIGlmICghcmVzdWx0LmdldChjdXJyZW50R3JvdXApKSB7XG4gICAgICAgIHJlc3VsdC5zZXQoY3VycmVudEdyb3VwLCBbXSlcbiAgICAgIH1cbiAgICAgIHJlc3VsdC5nZXQoY3VycmVudEdyb3VwKS5wdXNoKHtuYW1lOiBpdGVtLm5hbWUsIHByaWNlOiBpdGVtLnByaWNlfSlcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGl0ZW1Db3VudCA9PT0gMCA/IG51bGwgOiByZXN1bHRcbn1cblxuZnVuY3Rpb24gcGFyc2VMaW5lKGxpbmUpIHtcbiAgbGV0IGdyb3VwID0gbnVsbFxuICBpZiAoY29udGFpbnMobGluZSwgJzonKSkge1xuICAgIGxldCBwYXJ0cyA9IGxpbmUuc3BsaXQoJzonKVxuICAgIGdyb3VwID0gcGFydHNbMF0udHJpbSgpXG4gICAgbGluZSA9IHBhcnRzWzFdLnRyaW0oKVxuICB9XG4gIGxldCBwYXJ0cyA9IGxpbmUubWF0Y2goLyguKj8pXFxzKyhcXGQrKD86XFwuXFxkezEsMn0pPykvKVxuICBsZXQgbmFtZSA9IG51bGxcbiAgbGV0IHByaWNlID0gbnVsbFxuICBpZiAocGFydHMpIHtcbiAgICBuYW1lID0gcGFydHNbMV1cbiAgICBwcmljZSA9IHBhcnNlRmxvYXQocGFydHNbMl0pXG4gIH1cbiAgaWYgKGdyb3VwID09PSBudWxsICYmIG5hbWUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9IGVsc2Uge1xuICAgIHJldHVybiB7XG4gICAgICBncm91cDogZ3JvdXAsXG4gICAgICBuYW1lOiBuYW1lLFxuICAgICAgcHJpY2U6IHByaWNlLFxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjb250YWlucyhzdHJpbmcsIHN1YlN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLmluZGV4T2Yoc3ViU3RyaW5nKSAhPT0gLTFcbn1cblxuZnVuY3Rpb24gZ2V0Q2xlYW5MaW5lcyh0ZXh0KSB7XG4gIHJldHVybiB0ZXh0LnRyaW0oKS5zcGxpdCgnXFxuJykuZmlsdGVyKGxpbmUgPT4gbGluZS50cmltKCkpO1xufVxuIl19
