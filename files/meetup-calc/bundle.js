(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

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
      // Merge style.
      var newStyle = Object.assign({ display: 'table' }, this.props.style);

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

Form = (0, _radium2.default)(Form);

},{"../lib/util":2,"radium":undefined,"react":undefined}],2:[function(require,module,exports){
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

var _util = require('./util');

var _util2 = require('../lib/util');

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
      var state = (0, _util2.extend)(this.state, _defineProperty({}, key, value));
      if (state.detailValues === null) {
        this.setState({ results: null });
      } else {
        var subtotal = (0, _util.sumAll)(state.detailValues);
        var taxAmt = state.tax * subtotal * 0.01;
        var tipAmt = state.tip * subtotal * 0.01;
        var total = subtotal + taxAmt + tipAmt;

        results.set('Subtotal', subtotal);
        results.set('Tax (' + state.tax + '% of subtotal)', taxAmt);
        results.set('Tip (' + state.tip + '% of subtotal)', tipAmt);
        results.set('Total', total);

        var _calculateEach = (0, _util.calculateEach)(state);

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

},{"../lib/form":1,"../lib/util":2,"./dsl":4,"./util":5,"react":undefined,"react-dom":undefined,"underscore.string":undefined}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
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

  var groupLabel = 'Everyone ' + (sums.size ? 'else ' : '') + 'pays';
  var everyoneElseCount = state.attendees - names.length;
  var everyoneElse = Math.ceil(multiplier * each) + state.serviceFee;
  totalPay += everyoneElse * everyoneElseCount;
  calcValues.set(groupLabel, (0, _underscore.numberFormat)(everyoneElse, 2) + ' × ' + everyoneElseCount);

  return { calcValues: calcValues, totalPay: totalPay };
}

},{"underscore.string":undefined}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJsaWIvZm9ybS5qcyIsImxpYi91dGlsLmpzIiwibWVldHVwLWNhbGMvYXBwLmpzIiwibWVldHVwLWNhbGMvZHNsLmpzIiwibWVldHVwLWNhbGMvdXRpbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNLcUIsSUFBSTtZQUFKLElBQUk7O1dBQUosSUFBSTswQkFBSixJQUFJOztrRUFBSixJQUFJOzs7ZUFBSixJQUFJOzs2QkFDZDs7QUFFUCxVQUFJLFFBQVEsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7O0FBRWxFLGFBQU87O3FCQUFVLElBQUksQ0FBQyxLQUFLLElBQUUsS0FBSyxFQUFFLFFBQVEsQUFBQztRQUMxQyxJQUFJLENBQUMsY0FBYyxFQUFFO09BQ2pCLENBQUE7S0FDUjs7O3FDQUVnQjtBQUNmLFVBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQTtBQUNmLFVBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFBO0FBQ2xDLFdBQUssSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBRSxDQUFDLEVBQUU7QUFDdkMsWUFBSSxLQUFLLEdBQUc7O1lBQU8sS0FBSyxFQUFFLEVBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsRUFBRSxFQUFDLEFBQUM7VUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFO1NBQVMsQ0FBQTtBQUNqRyxZQUFJLEtBQUssR0FBRyxVQWxCVCxzQkFBc0IsRUFrQlUsUUFB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QUVyRixTQUFPLEVBQUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFDLENBQUE7Q0FDcEQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJhZGl1bSBmcm9tICdyYWRpdW0nXG5pbXBvcnQgeyBjbG9uZUVsZW1lbnRNZXJnZVN0eWxlIH0gZnJvbSAnLi4vbGliL3V0aWwnXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICAvLyBNZXJnZSBzdHlsZS5cbiAgICBsZXQgbmV3U3R5bGUgPSBPYmplY3QuYXNzaWduKHtkaXNwbGF5OiAndGFibGUnfSwgdGhpcy5wcm9wcy5zdHlsZSlcblxuICAgIHJldHVybiA8Zm9ybSB7Li4udGhpcy5wcm9wc30gc3R5bGU9e25ld1N0eWxlfT5cbiAgICAgIHt0aGlzLnJlbmRlckNoaWxkcmVuKCl9XG4gICAgPC9mb3JtPlxuICB9XG5cbiAgcmVuZGVyQ2hpbGRyZW4oKSB7XG4gICAgbGV0IHJlc3VsdCA9IFtdXG4gICAgbGV0IGNoaWxkcmVuID0gdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgIGZvciAobGV0IGk9MDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSs9Mikge1xuICAgICAgbGV0IGxhYmVsID0gPGxhYmVsIHN0eWxlPXt7ZGlzcGxheTogJ3RhYmxlLWNlbGwnLCBwYWRkaW5nUmlnaHQ6IDEwfX0+e2NoaWxkcmVuW2ldLnRyaW0oKX08L2xhYmVsPlxuICAgICAgbGV0IGZpZWxkID0gY2xvbmVFbGVtZW50TWVyZ2VTdHlsZShjaGlsZHJlbltpICsgMV0sIHtkaXNwbGF5OiAndGFibGUtY2VsbCd9KVxuICAgICAgcmVzdWx0LnB1c2goPHAgc3R5bGU9e3tkaXNwbGF5OiAndGFibGUtcm93J319IGtleT17aX0+e2xhYmVsfXtmaWVsZH08L3A+KVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cbkZvcm0gPSBSYWRpdW0oRm9ybSlcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuXG5leHBvcnQgZnVuY3Rpb24gZXh0ZW5kKGEsIGIpIHtcbiAgbGV0IG5ld09iaiA9IE9iamVjdC5hc3NpZ24oe30sIGEpXG4gIE9iamVjdC5hc3NpZ24obmV3T2JqLCBiKVxuICByZXR1cm4gbmV3T2JqXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZUVsZW1lbnRNZXJnZVN0eWxlKGVsZW0sIHN0eWxlKSB7XG4gIGxldCBuZXdTdHlsZSA9IG51bGxcbiAgaWYgKHR5cGVvZiBlbGVtLnByb3BzLnN0eWxlID09PSAndW5kZWZpbmVkJykge1xuICAgIG5ld1N0eWxlID0gc3R5bGVcbiAgfSBlbHNlIHtcbiAgICBuZXdTdHlsZSA9IE9iamVjdC5hc3NpZ24oe30sIGVsZW0ucHJvcHMuc3R5bGUpXG4gICAgT2JqZWN0LmFzc2lnbihuZXdTdHlsZSwgc3R5bGUpXG4gIH1cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChlbGVtLCB7c3R5bGU6IG5ld1N0eWxlfSlcbn1cblxuLy8gZnVuY3Rpb24gY2xvbmVFbGVtZW50TWVyZ2VDbGFzc05hbWUoZWxlbSwgY2xhc3NOYW1lLCBrZXkpIHtcbi8vICAgbGV0IGNmZyA9IHt9XG4vLyAgIGlmICh0eXBlb2YgZWxlbS5wcm9wcy5jbGFzc05hbWUgPT09ICd1bmRlZmluZWQnKSB7XG4vLyAgICAgY2ZnLmNsYXNzTmFtZSA9IGNsYXNzTmFtZVxuLy8gICB9IGVsc2Uge1xuLy8gICAgIGNmZy5jbGFzc05hbWUgPSBgJHtlbGVtLnByb3BzLmNsYXNzTmFtZX0gJHtjbGFzc05hbWV9YFxuLy8gICB9XG4vLyAgIGlmIChrZXkpIHtcbi8vICAgICBjZmcua2V5ID0ga2V5XG4vLyAgIH1cbi8vICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChlbGVtLCBjZmcpXG4vLyB9XG4vL1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCBGb3JtIGZyb20gJy4uL2xpYi9mb3JtJ1xuaW1wb3J0IHBhcnNlIGZyb20gJy4vZHNsJ1xuaW1wb3J0IHsgc3VtLCBzdW1BbGwsIGNhbGN1bGF0ZUVhY2ggfSBmcm9tICcuL3V0aWwnXG5pbXBvcnQgeyBleHRlbmQgfSBmcm9tICcuLi9saWIvdXRpbCdcbmltcG9ydCB7IG51bWJlckZvcm1hdCB9IGZyb20gJ3VuZGVyc2NvcmUuc3RyaW5nJ1xuXG5cbmNvbnN0IERFRkFVTFRfVkFMVUVTID0ge1xuICBhdHRlbmRlZXM6IDYsXG4gIHRheDogOS43NSxcbiAgdGlwOiAyMCxcbiAgc2VydmljZUZlZTogMCxcbn1cblxuY29uc3QgUkVTVUxUX0ZJRUxEUyA9IFtcbiAgJ1N1YnRvdGFsJyxcbiAgJ1RheCcsXG4gICdUaXAnLFxuICAnVG90YWwnLFxuXVxuXG5cbmNsYXNzIENhbGN1bGF0b3IgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIGxldCBkID0ge1xuICAgICAgcmVzdWx0czogbnVsbCxcbiAgICAgIGRldGFpbFZhbHVlczogbnVsbCxcbiAgICB9XG4gICAgdGhpcy5zdGF0ZSA9IE9iamVjdC5hc3NpZ24oZCwgREVGQVVMVF9WQUxVRVMpXG5cbiAgICB0aGlzLmhhbmRsZURldGFpbENoYW5nZSA9IHRoaXMuaGFuZGxlRGV0YWlsQ2hhbmdlLmJpbmQodGhpcylcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPGRpdj5cbiAgICAgIDxoMj5JbnB1dHM8L2gyPlxuICAgICAgPEZvcm0+XG4gICAgICAgICMgb2YgcGF5aW5nIGF0dGVuZGVlczogPGlucHV0IGRlZmF1bHRWYWx1ZT0nNicgdHlwZT0nbnVtYmVyJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5jaGFuZ2VIYW5kbGVyKCdhdHRlbmRlZXMnKX0gLz5cbiAgICAgICAgVGF4IHBlcmNlbnRhZ2U6IDxpbnB1dCBkZWZhdWx0VmFsdWU9JzkuNzUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuY2hhbmdlSGFuZGxlcigndGF4Jyl9IC8+XG4gICAgICAgIFRpcCBwZXJjZW50YWdlOiA8aW5wdXQgZGVmYXVsdFZhbHVlPScyMCcgdHlwZT0nbnVtYmVyJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmNoYW5nZUhhbmRsZXIoJ3RpcCcpfSAvPlxuICAgICAgICBTZXJ2aWNlIGZlZTogPGlucHV0IGRlZmF1bHRWYWx1ZT0nMCcgdHlwZT0nbnVtYmVyJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmNoYW5nZUhhbmRsZXIoJ3NlcnZpY2VGZWUnKX0gLz5cbiAgICAgICAgT3JkZXIgZGV0YWlsczogPHRleHRhcmVhIGNvbHM9JzUwJyByb3dzPSc4J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlRGV0YWlsQ2hhbmdlfSAvPlxuICAgICAgPC9Gb3JtPlxuXG4gICAgICA8aDI+UmVzdWx0czwvaDI+XG4gICAgICA8UmVzdWx0VGFibGUgcmVzdWx0cz17dGhpcy5zdGF0ZS5yZXN1bHRzfSAvPlxuICAgIDwvZGl2PlxuICB9XG5cbiAgY2hhbmdlSGFuZGxlcihmaWVsZCkge1xuICAgIHJldHVybiAoZXZ0KSA9PiB7XG4gICAgICBsZXQgdmFsdWUgPSBwYXJzZUZsb2F0KGV2dC50YXJnZXQudmFsdWUpXG4gICAgICB0aGlzLnNldFN0YXRlKHtbZmllbGRdOiB2YWx1ZX0pXG4gICAgICB0aGlzLmNhbGN1bGF0ZShmaWVsZCwgdmFsdWUpXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlRGV0YWlsQ2hhbmdlKGV2dCkge1xuICAgIGxldCBkZXRhaWxWYWx1ZXMgPSBwYXJzZShldnQudGFyZ2V0LnZhbHVlKVxuICAgIHRoaXMuc2V0U3RhdGUoe2RldGFpbFZhbHVlczogZGV0YWlsVmFsdWVzfSlcbiAgICB0aGlzLmNhbGN1bGF0ZSgnZGV0YWlsVmFsdWVzJywgZGV0YWlsVmFsdWVzKVxuICB9XG5cbiAgY2FsY3VsYXRlKGtleSwgdmFsdWUpIHtcbiAgICBsZXQgcmVzdWx0cyA9IG5ldyBNYXAoKVxuICAgIGxldCBzdGF0ZSA9IGV4dGVuZCh0aGlzLnN0YXRlLCB7W2tleV06IHZhbHVlfSlcbiAgICBpZiAoc3RhdGUuZGV0YWlsVmFsdWVzID09PSBudWxsKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtyZXN1bHRzOiBudWxsfSlcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHN1YnRvdGFsID0gc3VtQWxsKHN0YXRlLmRldGFpbFZhbHVlcylcbiAgICAgIGxldCB0YXhBbXQgPSBzdGF0ZS50YXggKiBzdWJ0b3RhbCAqIDAuMDFcbiAgICAgIGxldCB0aXBBbXQgPSBzdGF0ZS50aXAgKiBzdWJ0b3RhbCAqIDAuMDFcbiAgICAgIGxldCB0b3RhbCA9IHN1YnRvdGFsICsgdGF4QW10ICsgdGlwQW10XG5cbiAgICAgIHJlc3VsdHMuc2V0KCdTdWJ0b3RhbCcsIHN1YnRvdGFsKVxuICAgICAgcmVzdWx0cy5zZXQoYFRheCAoJHtzdGF0ZS50YXh9JSBvZiBzdWJ0b3RhbClgLCB0YXhBbXQpXG4gICAgICByZXN1bHRzLnNldChgVGlwICgke3N0YXRlLnRpcH0lIG9mIHN1YnRvdGFsKWAsIHRpcEFtdClcbiAgICAgIHJlc3VsdHMuc2V0KCdUb3RhbCcsIHRvdGFsKVxuXG4gICAgICBsZXQge2NhbGNWYWx1ZXMsIHRvdGFsUGF5fSA9IGNhbGN1bGF0ZUVhY2goc3RhdGUpXG4gICAgICBmb3IgKGxldCBbbGFiZWwsIHZhbHVlXSBvZiBjYWxjVmFsdWVzKSB7XG4gICAgICAgIHJlc3VsdHMuc2V0KGxhYmVsLCB2YWx1ZSlcbiAgICAgIH1cblxuICAgICAgcmVzdWx0cy5zZXQoJ1RvdGFsIHRvIGJlIHBhaWQnLCB0b3RhbFBheSlcbiAgICAgIHJlc3VsdHMuc2V0KCdTZXJ2aWNlIGZlZXMgY29sbGVjdGVkJywgdG90YWxQYXkgLSB0b3RhbClcblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7cmVzdWx0czogcmVzdWx0c30pXG4gICAgfVxuICB9XG59XG5cblxuY2xhc3MgUmVzdWx0VGFibGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiAndGFibGUnfX0+XG4gICAgICB7dGhpcy5yZW5kZXJDaGlsZHJlbigpfVxuICAgIDwvZGl2PlxuICB9XG5cbiAgcmVuZGVyQ2hpbGRyZW4oKSB7XG4gICAgaWYgKHRoaXMucHJvcHMucmVzdWx0cyA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGxldCBjaGlsZHJlbiA9IFtdXG4gICAgZm9yIChsZXQgW2tleSwgdmFsXSBvZiB0aGlzLnByb3BzLnJlc3VsdHMpIHtcbiAgICAgIC8vIElmIHZhbCBpcyBhIG51bWJlciwgY29udmVydCBpdCB0byBhIHN0cmluZ1xuICAgICAgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgICAgIHZhbCA9IG51bWJlckZvcm1hdCh2YWwsIDIpXG4gICAgICB9XG4gICAgICBjaGlsZHJlbi5wdXNoKFxuICAgICAgICA8cCBrZXk9e2tleX0gc3R5bGU9e3tkaXNwbGF5OiAndGFibGUtcm93J319PlxuICAgICAgICAgIDxsYWJlbCBzdHlsZT17e2Rpc3BsYXk6ICd0YWJsZS1jZWxsJywgcGFkZGluZ1JpZ2h0OiAyMH19PntrZXl9OjwvbGFiZWw+XG4gICAgICAgICAgPGxhYmVsIHN0eWxlPXt7ZGlzcGxheTogJ3RhYmxlLWNlbGwnfX0+e3ZhbH08L2xhYmVsPlxuICAgICAgICA8L3A+XG4gICAgICApXG4gICAgfVxuICAgIHJldHVybiBjaGlsZHJlblxuICB9XG59XG5cblJlYWN0RE9NLnJlbmRlcihcbiAgPENhbGN1bGF0b3IgLz4sXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JylcbilcbiIsIi8qXG5TYW1wbGUgaW5wdXQ6XG5cbnN0ZWFrIGZyaXRlcyAzNC41XG5iYWtlZCBzYWxtb24gMjUuNlxuY2hpY2tlbiBwb3QgcGllIDExLjgyXG5cbkJpbGw6IGhvcmNoYXRhIDRcblRlZDogTWFuaGF0dGFuIDUuMVxuVG9mdXJrZXkgc2xpZGVycyA3XG5LaW06XG5Cb3JzY2h0IDUuNDlcblN0dWZmZWQgY2FiYmFnZSA3Ljk5XG5cbiovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhcnNlKHRleHQpIHtcbiAgbGV0IHJlc3VsdCA9IG5ldyBNYXAoKVxuICBsZXQgY3VycmVudEdyb3VwID0gJ2dyb3VwJ1xuICBsZXQgaXRlbUNvdW50ID0gMFxuXG4gIGdldENsZWFuTGluZXModGV4dCkuZm9yRWFjaCgobGluZSkgPT4ge1xuICAgIGxldCBpdGVtID0gcGFyc2VMaW5lKGxpbmUpXG4gICAgaWYgKCFpdGVtKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgaXRlbUNvdW50KytcbiAgICBpZiAoaXRlbS5ncm91cCkge1xuICAgICAgY3VycmVudEdyb3VwID0gaXRlbS5ncm91cFxuICAgIH1cbiAgICBpZiAoaXRlbS5uYW1lKSB7XG4gICAgICBpZiAoIXJlc3VsdC5nZXQoY3VycmVudEdyb3VwKSkge1xuICAgICAgICByZXN1bHQuc2V0KGN1cnJlbnRHcm91cCwgW10pXG4gICAgICB9XG4gICAgICByZXN1bHQuZ2V0KGN1cnJlbnRHcm91cCkucHVzaCh7bmFtZTogaXRlbS5uYW1lLCBwcmljZTogaXRlbS5wcmljZX0pXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBpdGVtQ291bnQgPT09IDAgPyBudWxsIDogcmVzdWx0XG59XG5cbmZ1bmN0aW9uIHBhcnNlTGluZShsaW5lKSB7XG4gIGxldCBncm91cCA9IG51bGxcbiAgaWYgKGNvbnRhaW5zKGxpbmUsICc6JykpIHtcbiAgICBsZXQgcGFydHMgPSBsaW5lLnNwbGl0KCc6JylcbiAgICBncm91cCA9IHBhcnRzWzBdLnRyaW0oKVxuICAgIGxpbmUgPSBwYXJ0c1sxXS50cmltKClcbiAgfVxuICBsZXQgcGFydHMgPSBsaW5lLm1hdGNoKC8oLio/KVxccysoXFxkKyg/OlxcLlxcZHsxLDJ9KT8pLylcbiAgbGV0IG5hbWUgPSBudWxsXG4gIGxldCBwcmljZSA9IG51bGxcbiAgaWYgKHBhcnRzKSB7XG4gICAgbmFtZSA9IHBhcnRzWzFdXG4gICAgcHJpY2UgPSBwYXJzZUZsb2F0KHBhcnRzWzJdKVxuICB9XG4gIGlmIChncm91cCA9PT0gbnVsbCAmJiBuYW1lID09PSBudWxsKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4ge1xuICAgICAgZ3JvdXA6IGdyb3VwLFxuICAgICAgbmFtZTogbmFtZSxcbiAgICAgIHByaWNlOiBwcmljZSxcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY29udGFpbnMoc3RyaW5nLCBzdWJTdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy5pbmRleE9mKHN1YlN0cmluZykgIT09IC0xXG59XG5cbmZ1bmN0aW9uIGdldENsZWFuTGluZXModGV4dCkge1xuICByZXR1cm4gdGV4dC50cmltKCkuc3BsaXQoJ1xcbicpLmZpbHRlcihsaW5lID0+IGxpbmUudHJpbSgpKTtcbn1cbiIsImltcG9ydCB7bnVtYmVyRm9ybWF0fSBmcm9tICd1bmRlcnNjb3JlLnN0cmluZydcblxuXG5leHBvcnQgZnVuY3Rpb24gc3VtKGFycmF5LCBmbikge1xuICBmbiA9IGZuIHx8ICh4ID0+IHgpXG4gIHJldHVybiBhcnJheS5yZWR1Y2UoKHByZXZpb3VzLCBjdXJyZW50KSA9PiBwcmV2aW91cyArIGZuKGN1cnJlbnQpLCAwKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VtQWxsKG1hcCkge1xuICBsZXQgYXJyYXlzID0gWy4uLm1hcC52YWx1ZXMoKV1cbiAgcmV0dXJuIHN1bShhcnJheXMsIGFycmF5ID0+IHtcbiAgICByZXR1cm4gc3VtKGFycmF5LCB4ID0+IHgucHJpY2UpXG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVFYWNoKHN0YXRlKSB7XG4gIGxldCBzdW1zID0gbmV3IE1hcCgpXG4gIGZvciAobGV0IFtrZXksIHZhbF0gb2Ygc3RhdGUuZGV0YWlsVmFsdWVzKSB7XG4gICAgc3Vtcy5zZXQoa2V5LCBzdW0odmFsLCB4ID0+IHgucHJpY2UpKVxuICB9XG5cbiAgbGV0IGVhY2ggPSBzdW1zLmdldCgnZ3JvdXAnKSAvIHN0YXRlLmF0dGVuZGVlc1xuICBzdW1zLmRlbGV0ZSgnZ3JvdXAnKVxuXG4gIGxldCBuYW1lcyA9IFsuLi5zdW1zLmtleXMoKV1cbiAgbmFtZXMuc29ydCh4ID0+IHgudG9Mb3dlckNhc2UoKSlcblxuICAvLyBNdWx0aXBsaWVyIHRoYXQgaW5jb3Jwb3JhdGVzIGJvdGggdGF4IGFuZCB0aXBcbiAgbGV0IG11bHRpcGxpZXIgPSAxICsgKHN0YXRlLnRheCArIHN0YXRlLnRpcCkgKiAuMDFcblxuICBsZXQgY2FsY1ZhbHVlcyA9IG5ldyBNYXAoKVxuICBsZXQgdG90YWxQYXkgPSAwXG5cbiAgZm9yIChsZXQgbmFtZSBvZiBuYW1lcykge1xuICAgIGxldCB2YWwgPSBNYXRoLmNlaWwobXVsdGlwbGllciAqIChzdW1zLmdldChuYW1lKSArIGVhY2gpKSArIHN0YXRlLnNlcnZpY2VGZWVcbiAgICB0b3RhbFBheSArPSB2YWxcbiAgICBjYWxjVmFsdWVzLnNldChuYW1lICsgJyBwYXlzJywgdmFsKVxuICB9XG5cbiAgbGV0IGdyb3VwTGFiZWwgPSBgRXZlcnlvbmUgJHtzdW1zLnNpemUgPyAnZWxzZSAnIDogJyd9cGF5c2BcbiAgbGV0IGV2ZXJ5b25lRWxzZUNvdW50ID0gc3RhdGUuYXR0ZW5kZWVzIC0gbmFtZXMubGVuZ3RoXG4gIGxldCBldmVyeW9uZUVsc2UgPSBNYXRoLmNlaWwobXVsdGlwbGllciAqIGVhY2gpICsgc3RhdGUuc2VydmljZUZlZVxuICB0b3RhbFBheSArPSBldmVyeW9uZUVsc2UgKiBldmVyeW9uZUVsc2VDb3VudFxuICBjYWxjVmFsdWVzLnNldChncm91cExhYmVsLCBgJHtudW1iZXJGb3JtYXQoZXZlcnlvbmVFbHNlLCAyKX0gw5cgJHtldmVyeW9uZUVsc2VDb3VudH1gKVxuXG4gIHJldHVybiB7Y2FsY1ZhbHVlczogY2FsY1ZhbHVlcywgdG90YWxQYXk6IHRvdGFsUGF5fVxufVxuIl19
