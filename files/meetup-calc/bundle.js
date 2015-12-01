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
        var value = evt.target.value;
        _this2.setState(_defineProperty({}, field, parseFloat(value)));
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

      var val = Math.ceil(multiplier * (sums.get(name) + each));
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
  var everyoneElse = Math.ceil(multiplier * each);
  totalPay += everyoneElse * everyoneElseCount;
  calcValues.set(groupLabel, (0, _underscore.numberFormat)(everyoneElse, 2) + ' × ' + everyoneElseCount);

  return { calcValues: calcValues, totalPay: totalPay };
}

},{"underscore.string":undefined}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJsaWIvZm9ybS5qcyIsImxpYi91dGlsLmpzIiwibWVldHVwLWNhbGMvYXBwLmpzIiwibWVldHVwLWNhbGMvZHNsLmpzIiwibWVldHVwLWNhbGMvdXRpbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNLcUIsSUFBSTtZQUFKLElBQUk7O1dBQUosSUFBSTswQkFBSixJQUFJOztrRUFBSixJQUFJOzs7ZUFBSixJQUFJOzs2QkFDZDs7QUFFUCxVQUFJLFFBQVEsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7O0FBRWxFLGFBQU87O3FCQUFVLElBQUksQ0FBQyxLQUFLLElBQUUsS0FBSyxFQUFFLFFBQVEsQUFBQztRQUMxQyxJQUFJLENBQUMsY0FBYyxFQUFFO09BQ2pCLENBQUE7S0FDUjs7O3FDQUVnQjtBQUNmLFVBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQTtBQUNmLFVBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFBO0FBQ2xDLFdBQUssSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBRSxDQUFDLEVBQUU7QUFDdkMsWUFBSSxLQUFLLEdBQUc7O1lBQU8sS0FBSyxFQUFFLEVBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsRUFBRSxFQUFDLEFBQUM7VUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFO1NBQVMsQ0FBQTtBQUNqRyxZQUFJLEtBQUssR0FBRyxVQWxCVCxzQkFBc0IsRUFrQlUsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUMsQ0FBQyxDQUFBO0FBQzVFLGNBQU0sQ0FBQyxJQUFJLENBQUM7O1lBQUcsS0FBSyxFQUFFLEVBQUMsT0FBTyxFQUFFLFdBQVcsRUFBQyxBQUFDLEVBQUMsR0FBRyxFQUFFLENBQUMsQUFBQztVQUFFLEtBQUs7VUFBRSxLQUFLO1NBQUssQ0FBQyxDQUFBO09BQzFFO0FBQ0QsYUFBTyxNQUFNLENBQUE7S0FDZDs7O1NBbkJrQixJQUFJO0dBQVMsZ0JBQU0sU0FBUzs7a0JBQTVCLElBQUk7O0FBcUJ6QixJQUFJLEdBQUcsc0JBQU8sSUFBSSxDQUFDLENBQUE7Ozs7Ozs7O1FDdkJILE1BQU0sR0FBTixNQUFNO1FBTU4sc0JBQXNCLEdBQXRCLHNCQUFzQjs7Ozs7Ozs7QUFOL0IsU0FBUyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUMzQixNQUFJLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQTtBQUNqQyxRQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQTtBQUN4QixTQUFPLE1BQU0sQ0FBQTtDQUNkOztBQUVNLFNBQVMsc0JBQXNCLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRTtBQUNsRCxNQUFJLFFBQVEsR0FBRyxJQUFJLENBQUE7QUFDbkIsTUFBSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxLQUFLLFdBQVcsRUFBRTtBQUMzQyxZQUFRLEdBQUcsS0FBSyxDQUFBO0dBQ2pCLE1BQU07QUFDTCxZQUFRLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQTtBQUM5QyxVQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQTtHQUMvQjtBQUNELFNBQU8sZ0JBQU0sWUFBWSxDQUFDLElBQUksRUFBRSxFQUFDLEtBQUssRUFBRSxRQUFRLEVBQUMsQ0FBQyxDQUFBO0NBQ25EOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RELElBQU0sY0FBYyxHQUFHO0FBQ3JCLFdBQVMsRUFBRSxDQUFDO0FBQ1osS0FBRyxFQUFFLElBQUk7QUFDVCxLQUFHLEVBQUUsRUFBRTtBQUNQLFlBQVUsRUFBRSxDQUFDO0NBQ2QsQ0FBQTs7QUFFRCxJQUFNLGFBQWEsR0FBRyxDQUNwQixVQUFVLEVBQ1YsS0FBSyxFQUNMLEtBQUssRUFDTCxPQUFPLENBQ1IsQ0FBQTs7SUFHSyxVQUFVO1lBQVYsVUFBVTs7QUFDZCxXQURJLFVBQVUsQ0FDRixLQUFLLEVBQUU7MEJBRGYsVUFBVTs7dUVBQVYsVUFBVSxhQUVOLEtBQUs7O0FBQ1gsUUFBSSxDQUFDLEdBQUc7QUFDTixhQUFPLEVBQUUsSUFBSTtBQUNiLGtCQUFZLEVBQUUsSUFBSTtLQUNuQixDQUFBO0FBQ0QsVUFBSyxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsY0FBYyxDQUFDLENBQUE7O0FBRTdDLFVBQUssa0JBQWtCLEdBQUcsTUFBSyxrQkFBa0IsQ0FBQyxJQUFJLE9BQU0sQ0FBQTs7R0FDN0Q7O2VBVkcsVUFBVTs7NkJBWUw7QUFDUCxhQUFPOzs7UUFDTDs7OztTQUFlO1FBQ2Y7Ozs7VUFDeUIseUNBQU8sWUFBWSxFQUFDLEdBQUcsRUFBQyxJQUFJLEVBQUMsUUFBUTtBQUM5QixvQkFBUSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLEFBQUMsR0FBRzs7VUFDM0QseUNBQU8sWUFBWSxFQUFDLE1BQU07QUFDbkIsb0JBQVEsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxBQUFDLEdBQUc7O1VBQzlDLHlDQUFPLFlBQVksRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLFFBQVE7QUFDL0Isb0JBQVEsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxBQUFDLEdBQUc7O1VBQ2pELHlDQUFPLFlBQVksRUFBQyxHQUFHLEVBQUMsSUFBSSxFQUFDLFFBQVE7QUFDOUIsb0JBQVEsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxBQUFDLEdBQUc7O1VBQ25ELDRDQUFVLElBQUksRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLEdBQUc7QUFDbEIsb0JBQVEsRUFBRSxJQUFJLENBQUMsa0JBQWtCLEFBQUMsR0FBRztTQUN6RDtRQUVQOzs7O1NBQWdCO1FBQ2hCLDhCQUFDLFdBQVcsSUFBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEFBQUMsR0FBRztPQUN4QyxDQUFBO0tBQ1A7OztrQ0FFYSxLQUFLLEVBQUU7OztBQUNuQixhQUFPLFVBQUMsR0FBRyxFQUFLO0FBQ2QsWUFBSSxLQUFLLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUE7QUFDNUIsZUFBSyxRQUFRLHFCQUFHLEtBQUssRUFBRyxVQUFVLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQTtBQUMzQyxlQUFLLFNBQVMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUE7T0FDN0IsQ0FBQTtLQUNGOzs7dUNBRWtCLEdBQUcsRUFBRTtBQUN0QixVQUFJLFlBQVksR0FBRyxtQkFBTSxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFBO0FBQzFDLFVBQUksQ0FBQyxRQUFRLENBQUMsRUFBQyxZQUFZLEVBQUUsWUFBWSxFQUFDLENBQUMsQ0FBQTtBQUMzQyxVQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsRUFBRSxZQUFZLENBQUMsQ0FBQTtLQUM3Qzs7OzhCQUVTLEdBQUcsRUFBRSxLQUFLLEVBQUU7QUFDcEIsVUFBSSxPQUFPLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQTtBQUN2QixVQUFJLEtBQUssR0FBRyxXQXBFUCxNQUFNLEVBb0VRLElBQUksQ0FBQyxLQUFLLHNCQUFJLEdBQUcsRUFBRyxLQUFLLEVBQUUsQ0FBQTtBQUM5QyxVQUFJLEtBQUssQ0FBQyxZQUFZLEtBQUssSUFBSSxFQUFFO0FBQy9CLFlBQUksQ0FBQyxRQUFRLENBQUMsRUFBQyxPQUFPLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQTtPQUMvQixNQUFNO0FBQ0wsWUFBSSxRQUFRLEdBQUcsVUF6RVAsTUFBTSxFQXlFUSxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUE7QUFDekMsWUFBSSxNQUFNLEdBQUcsS0FBSyxDQUFDLEdBQUcsR0FBRyxRQUFRLEdBQUcsSUFBSSxDQUFBO0FBQ3hDLFlBQUksTUFBTSxHQUFHLEtBQUssQ0FBQyxHQUFHLEdBQUcsUUFBUSxHQUFHLElBQUksQ0FBQTtBQUN4QyxZQUFJLEtBQUssR0FBRyxRQUFRLEdBQUcsTUFBTSxHQUFHLE1BQU0sQ0FBQTs7QUFFdEMsZUFBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUE7QUFDakMsZUFBTyxDQUFDLEdBQUcsV0FBUyxLQUFLLENBQUMsR0FBRyxxQkFBa0IsTUFBTSxDQUFDLENBQUE7QUFDdEQsZUFBTyxDQUFDLEdBQUcsV0FBUyxLQUFLLENBQUMsR0FBRyxxQkFBa0IsTUFBTSxDQUFDLENBQUE7QUFDdEQsZUFBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUE7OzZCQUVFLFVBbkZiLGFBQWEsRUFtRmMsS0FBSyxDQUFDOztZQUE1QyxVQUFVLGtCQUFWLFVBQVU7WUFBRSxRQUFRLGtCQUFSLFFBQVE7Ozs7OztBQUN6QiwrQkFBMkIsVUFBVSw4SEFBRTs7O2dCQUE3QixLQUFLO2dCQUFFLE1BQUs7O0FBQ3BCLG1CQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxNQUFLLENBQUMsQ0FBQTtXQUMxQjs7Ozs7Ozs7Ozs7Ozs7OztBQUVELGVBQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsUUFBUSxDQUFDLENBQUE7QUFDekMsZUFBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsRUFBRSxRQUFRLEdBQUcsS0FBSyxDQUFDLENBQUE7O0FBRXZELFlBQUksQ0FBQyxRQUFRLENBQUMsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFDLENBQUMsQ0FBQTtPQUNsQztLQUNGOzs7U0F6RUcsVUFBVTtHQUFTLGdCQUFNLFNBQVM7O0lBNkVsQyxXQUFXO1lBQVgsV0FBVzs7V0FBWCxXQUFXOzBCQUFYLFdBQVc7O2tFQUFYLFdBQVc7OztlQUFYLFdBQVc7OzZCQUNOO0FBQ1AsYUFBTzs7VUFBSyxLQUFLLEVBQUUsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFDLEFBQUM7UUFDbkMsSUFBSSxDQUFDLGNBQWMsRUFBRTtPQUNsQixDQUFBO0tBQ1A7OztxQ0FFZ0I7QUFDZixVQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxLQUFLLElBQUksRUFBRTtBQUMvQixlQUFNO09BQ1A7QUFDRCxVQUFJLFFBQVEsR0FBRyxFQUFFLENBQUE7Ozs7OztBQUNqQiw4QkFBdUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLG1JQUFFOzs7Y0FBakMsR0FBRztjQUFFLEdBQUc7OztBQUVoQixjQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsRUFBRTtBQUMzQixlQUFHLEdBQUcsZ0JBOUdMLFlBQVksRUE4R00sR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFBO1dBQzNCO0FBQ0Qsa0JBQVEsQ0FBQyxJQUFJLENBQ1g7O2NBQUcsR0FBRyxFQUFFLEdBQUcsQUFBQyxFQUFDLEtBQUssRUFBRSxFQUFDLE9BQU8sRUFBRSxXQUFXLEVBQUMsQUFBQztZQUN6Qzs7Z0JBQU8sS0FBSyxFQUFFLEVBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsRUFBRSxFQUFDLEFBQUM7Y0FBRSxHQUFHOzthQUFVO1lBQ3ZFOztnQkFBTyxLQUFLLEVBQUUsRUFBQyxPQUFPLEVBQUUsWUFBWSxFQUFDLEFBQUM7Y0FBRSxHQUFHO2FBQVM7V0FDbEQsQ0FDTCxDQUFBO1NBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDRCxhQUFPLFFBQVEsQ0FBQTtLQUNoQjs7O1NBekJHLFdBQVc7R0FBUyxnQkFBTSxTQUFTOztBQTRCekMsbUJBQVMsTUFBTSxDQUNiLDhCQUFDLFVBQVUsT0FBRyxFQUNkLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQ25DLENBQUE7Ozs7Ozs7O2tCQ3BIdUIsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZCxTQUFTLEtBQUssQ0FBQyxJQUFJLEVBQUU7QUFDbEMsTUFBSSxNQUFNLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQTtBQUN0QixNQUFJLFlBQVksR0FBRyxPQUFPLENBQUE7QUFDMUIsTUFBSSxTQUFTLEdBQUcsQ0FBQyxDQUFBOztBQUVqQixlQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSSxFQUFLO0FBQ3BDLFFBQUksSUFBSSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQTtBQUMxQixRQUFJLENBQUMsSUFBSSxFQUFFO0FBQ1QsYUFBTTtLQUNQO0FBQ0QsYUFBUyxFQUFFLENBQUE7QUFDWCxRQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7QUFDZCxrQkFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUE7S0FDMUI7QUFDRCxRQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7QUFDYixVQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsRUFBRTtBQUM3QixjQUFNLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxFQUFFLENBQUMsQ0FBQTtPQUM3QjtBQUNELFlBQU0sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUMsQ0FBQyxDQUFBO0tBQ3BFO0dBQ0YsQ0FBQyxDQUFBOztBQUVGLFNBQU8sU0FBUyxLQUFLLENBQUMsR0FBRyxJQUFJLEdBQUcsTUFBTSxDQUFBO0NBQ3ZDOztBQUVELFNBQVMsU0FBUyxDQUFDLElBQUksRUFBRTtBQUN2QixNQUFJLEtBQUssR0FBRyxJQUFJLENBQUE7QUFDaEIsTUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxFQUFFO0FBQ3ZCLFFBQUksTUFBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7QUFDM0IsU0FBSyxHQUFHLE1BQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtBQUN2QixRQUFJLEdBQUcsTUFBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFBO0dBQ3ZCO0FBQ0QsTUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQyxDQUFBO0FBQ3JELE1BQUksSUFBSSxHQUFHLElBQUksQ0FBQTtBQUNmLE1BQUksS0FBSyxHQUFHLElBQUksQ0FBQTtBQUNoQixNQUFJLEtBQUssRUFBRTtBQUNULFFBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUE7QUFDZixTQUFLLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO0dBQzdCO0FBQ0QsTUFBSSxLQUFLLEtBQUssSUFBSSxJQUFJLElBQUksS0FBSyxJQUFJLEVBQUU7QUFDbkMsV0FBTyxJQUFJLENBQUE7R0FDWixNQUFNO0FBQ0wsV0FBTztBQUNMLFdBQUssRUFBRSxLQUFLO0FBQ1osVUFBSSxFQUFFLElBQUk7QUFDVixXQUFLLEVBQUUsS0FBSztLQUNiLENBQUE7R0FDRjtDQUNGOztBQUVELFNBQVMsUUFBUSxDQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUU7QUFDbkMsU0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFBO0NBQ3hDOztBQUVELFNBQVMsYUFBYSxDQUFDLElBQUksRUFBRTtBQUMzQixTQUFPLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQUEsSUFBSTtXQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7R0FBQSxDQUFDLENBQUM7Q0FDNUQ7Ozs7Ozs7Ozs7UUNyRWUsR0FBRyxHQUFILEdBQUc7UUFLSCxNQUFNLEdBQU4sTUFBTTtRQU9OLGFBQWEsR0FBYixhQUFhOzs7Ozs7QUFadEIsU0FBUyxHQUFHLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRTtBQUM3QixJQUFFLEdBQUcsRUFBRSxJQUFLLFVBQUEsQ0FBQztXQUFJLENBQUM7R0FBQSxBQUFDLENBQUE7QUFDbkIsU0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQUMsUUFBUSxFQUFFLE9BQU87V0FBSyxRQUFRLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQztHQUFBLEVBQUUsQ0FBQyxDQUFDLENBQUE7Q0FDdEU7O0FBRU0sU0FBUyxNQUFNLENBQUMsR0FBRyxFQUFFO0FBQzFCLE1BQUksTUFBTSxnQ0FBTyxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUMsQ0FBQTtBQUM5QixTQUFPLEdBQUcsQ0FBQyxNQUFNLEVBQUUsVUFBQSxLQUFLLEVBQUk7QUFDMUIsV0FBTyxHQUFHLENBQUMsS0FBSyxFQUFFLFVBQUEsQ0FBQzthQUFJLENBQUMsQ0FBQyxLQUFLO0tBQUEsQ0FBQyxDQUFBO0dBQ2hDLENBQUMsQ0FBQTtDQUNIOztBQUVNLFNBQVMsYUFBYSxDQUFDLEtBQUssRUFBRTtBQUNuQyxNQUFJLElBQUksR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFBOzs7Ozs7QUFDcEIseUJBQXVCLEtBQUssQ0FBQyxZQUFZLDhIQUFFOzs7VUFBakMsR0FBRztVQUFFLEdBQUc7O0FBQ2hCLFVBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsVUFBQSxDQUFDO2VBQUksQ0FBQyxDQUFDLEtBQUs7T0FBQSxDQUFDLENBQUMsQ0FBQTtLQUN0Qzs7Ozs7Ozs7Ozs7Ozs7OztBQUVELE1BQUksSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQTtBQUM5QyxNQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFBOztBQUVwQixNQUFJLEtBQUssZ0NBQU8sSUFBSSxDQUFDLElBQUksRUFBRSxFQUFDLENBQUE7QUFDNUIsT0FBSyxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUM7V0FBSSxDQUFDLENBQUMsV0FBVyxFQUFFO0dBQUEsQ0FBQzs7O0FBQUEsQUFHaEMsTUFBSSxVQUFVLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFBLEdBQUksR0FBRyxDQUFBOztBQUVsRCxNQUFJLFVBQVUsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFBO0FBQzFCLE1BQUksUUFBUSxHQUFHLENBQUMsQ0FBQTs7Ozs7OztBQUVoQiwwQkFBaUIsS0FBSyxtSUFBRTtVQUFmLElBQUk7O0FBQ1gsVUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUEsQUFBQyxDQUFDLENBQUE7QUFDekQsY0FBUSxJQUFJLEdBQUcsQ0FBQTtBQUNmLGdCQUFVLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUE7S0FDcEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxNQUFJLFVBQVUsa0JBQWUsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLEdBQUcsRUFBRSxDQUFBLFNBQU0sQ0FBQTtBQUMzRCxNQUFJLGlCQUFpQixHQUFHLEtBQUssQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQTtBQUN0RCxNQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsQ0FBQTtBQUMvQyxVQUFRLElBQUksWUFBWSxHQUFHLGlCQUFpQixDQUFBO0FBQzVDLFlBQVUsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFLLGdCQTNDeEIsWUFBWSxFQTJDeUIsWUFBWSxFQUFFLENBQUMsQ0FBQyxXQUFNLGlCQUFpQixDQUFHLENBQUE7O0FBRXJGLFNBQU8sRUFBQyxVQUFVLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUMsQ0FBQTtDQUNwRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmFkaXVtIGZyb20gJ3JhZGl1bSdcbmltcG9ydCB7IGNsb25lRWxlbWVudE1lcmdlU3R5bGUgfSBmcm9tICcuLi9saWIvdXRpbCdcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIC8vIE1lcmdlIHN0eWxlLlxuICAgIGxldCBuZXdTdHlsZSA9IE9iamVjdC5hc3NpZ24oe2Rpc3BsYXk6ICd0YWJsZSd9LCB0aGlzLnByb3BzLnN0eWxlKVxuXG4gICAgcmV0dXJuIDxmb3JtIHsuLi50aGlzLnByb3BzfSBzdHlsZT17bmV3U3R5bGV9PlxuICAgICAge3RoaXMucmVuZGVyQ2hpbGRyZW4oKX1cbiAgICA8L2Zvcm0+XG4gIH1cblxuICByZW5kZXJDaGlsZHJlbigpIHtcbiAgICBsZXQgcmVzdWx0ID0gW11cbiAgICBsZXQgY2hpbGRyZW4gPSB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgZm9yIChsZXQgaT0wOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKz0yKSB7XG4gICAgICBsZXQgbGFiZWwgPSA8bGFiZWwgc3R5bGU9e3tkaXNwbGF5OiAndGFibGUtY2VsbCcsIHBhZGRpbmdSaWdodDogMTB9fT57Y2hpbGRyZW5baV0udHJpbSgpfTwvbGFiZWw+XG4gICAgICBsZXQgZmllbGQgPSBjbG9uZUVsZW1lbnRNZXJnZVN0eWxlKGNoaWxkcmVuW2kgKyAxXSwge2Rpc3BsYXk6ICd0YWJsZS1jZWxsJ30pXG4gICAgICByZXN1bHQucHVzaCg8cCBzdHlsZT17e2Rpc3BsYXk6ICd0YWJsZS1yb3cnfX0ga2V5PXtpfT57bGFiZWx9e2ZpZWxkfTwvcD4pXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfVxufVxuRm9ybSA9IFJhZGl1bShGb3JtKVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBleHRlbmQoYSwgYikge1xuICBsZXQgbmV3T2JqID0gT2JqZWN0LmFzc2lnbih7fSwgYSlcbiAgT2JqZWN0LmFzc2lnbihuZXdPYmosIGIpXG4gIHJldHVybiBuZXdPYmpcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb25lRWxlbWVudE1lcmdlU3R5bGUoZWxlbSwgc3R5bGUpIHtcbiAgbGV0IG5ld1N0eWxlID0gbnVsbFxuICBpZiAodHlwZW9mIGVsZW0ucHJvcHMuc3R5bGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbmV3U3R5bGUgPSBzdHlsZVxuICB9IGVsc2Uge1xuICAgIG5ld1N0eWxlID0gT2JqZWN0LmFzc2lnbih7fSwgZWxlbS5wcm9wcy5zdHlsZSlcbiAgICBPYmplY3QuYXNzaWduKG5ld1N0eWxlLCBzdHlsZSlcbiAgfVxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGVsZW0sIHtzdHlsZTogbmV3U3R5bGV9KVxufVxuXG4vLyBmdW5jdGlvbiBjbG9uZUVsZW1lbnRNZXJnZUNsYXNzTmFtZShlbGVtLCBjbGFzc05hbWUsIGtleSkge1xuLy8gICBsZXQgY2ZnID0ge31cbi8vICAgaWYgKHR5cGVvZiBlbGVtLnByb3BzLmNsYXNzTmFtZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbi8vICAgICBjZmcuY2xhc3NOYW1lID0gY2xhc3NOYW1lXG4vLyAgIH0gZWxzZSB7XG4vLyAgICAgY2ZnLmNsYXNzTmFtZSA9IGAke2VsZW0ucHJvcHMuY2xhc3NOYW1lfSAke2NsYXNzTmFtZX1gXG4vLyAgIH1cbi8vICAgaWYgKGtleSkge1xuLy8gICAgIGNmZy5rZXkgPSBrZXlcbi8vICAgfVxuLy8gICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGVsZW0sIGNmZylcbi8vIH1cbi8vXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IEZvcm0gZnJvbSAnLi4vbGliL2Zvcm0nXG5pbXBvcnQgcGFyc2UgZnJvbSAnLi9kc2wnXG5pbXBvcnQgeyBzdW0sIHN1bUFsbCwgY2FsY3VsYXRlRWFjaCB9IGZyb20gJy4vdXRpbCdcbmltcG9ydCB7IGV4dGVuZCB9IGZyb20gJy4uL2xpYi91dGlsJ1xuaW1wb3J0IHsgbnVtYmVyRm9ybWF0IH0gZnJvbSAndW5kZXJzY29yZS5zdHJpbmcnXG5cblxuY29uc3QgREVGQVVMVF9WQUxVRVMgPSB7XG4gIGF0dGVuZGVlczogNixcbiAgdGF4OiA5Ljc1LFxuICB0aXA6IDIwLFxuICBzZXJ2aWNlRmVlOiAwLFxufVxuXG5jb25zdCBSRVNVTFRfRklFTERTID0gW1xuICAnU3VidG90YWwnLFxuICAnVGF4JyxcbiAgJ1RpcCcsXG4gICdUb3RhbCcsXG5dXG5cblxuY2xhc3MgQ2FsY3VsYXRvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgbGV0IGQgPSB7XG4gICAgICByZXN1bHRzOiBudWxsLFxuICAgICAgZGV0YWlsVmFsdWVzOiBudWxsLFxuICAgIH1cbiAgICB0aGlzLnN0YXRlID0gT2JqZWN0LmFzc2lnbihkLCBERUZBVUxUX1ZBTFVFUylcblxuICAgIHRoaXMuaGFuZGxlRGV0YWlsQ2hhbmdlID0gdGhpcy5oYW5kbGVEZXRhaWxDaGFuZ2UuYmluZCh0aGlzKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8ZGl2PlxuICAgICAgPGgyPklucHV0czwvaDI+XG4gICAgICA8Rm9ybT5cbiAgICAgICAgIyBvZiBwYXlpbmcgYXR0ZW5kZWVzOiA8aW5wdXQgZGVmYXVsdFZhbHVlPSc2JyB0eXBlPSdudW1iZXInXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmNoYW5nZUhhbmRsZXIoJ2F0dGVuZGVlcycpfSAvPlxuICAgICAgICBUYXggcGVyY2VudGFnZTogPGlucHV0IGRlZmF1bHRWYWx1ZT0nOS43NSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5jaGFuZ2VIYW5kbGVyKCd0YXgnKX0gLz5cbiAgICAgICAgVGlwIHBlcmNlbnRhZ2U6IDxpbnB1dCBkZWZhdWx0VmFsdWU9JzIwJyB0eXBlPSdudW1iZXInXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuY2hhbmdlSGFuZGxlcigndGlwJyl9IC8+XG4gICAgICAgIFNlcnZpY2UgZmVlOiA8aW5wdXQgZGVmYXVsdFZhbHVlPScwJyB0eXBlPSdudW1iZXInXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuY2hhbmdlSGFuZGxlcignc2VydmljZUZlZScpfSAvPlxuICAgICAgICBPcmRlciBkZXRhaWxzOiA8dGV4dGFyZWEgY29scz0nNTAnIHJvd3M9JzgnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVEZXRhaWxDaGFuZ2V9IC8+XG4gICAgICA8L0Zvcm0+XG5cbiAgICAgIDxoMj5SZXN1bHRzPC9oMj5cbiAgICAgIDxSZXN1bHRUYWJsZSByZXN1bHRzPXt0aGlzLnN0YXRlLnJlc3VsdHN9IC8+XG4gICAgPC9kaXY+XG4gIH1cblxuICBjaGFuZ2VIYW5kbGVyKGZpZWxkKSB7XG4gICAgcmV0dXJuIChldnQpID0+IHtcbiAgICAgIGxldCB2YWx1ZSA9IGV2dC50YXJnZXQudmFsdWVcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1tmaWVsZF06IHBhcnNlRmxvYXQodmFsdWUpfSlcbiAgICAgIHRoaXMuY2FsY3VsYXRlKGZpZWxkLCB2YWx1ZSlcbiAgICB9XG4gIH1cblxuICBoYW5kbGVEZXRhaWxDaGFuZ2UoZXZ0KSB7XG4gICAgbGV0IGRldGFpbFZhbHVlcyA9IHBhcnNlKGV2dC50YXJnZXQudmFsdWUpXG4gICAgdGhpcy5zZXRTdGF0ZSh7ZGV0YWlsVmFsdWVzOiBkZXRhaWxWYWx1ZXN9KVxuICAgIHRoaXMuY2FsY3VsYXRlKCdkZXRhaWxWYWx1ZXMnLCBkZXRhaWxWYWx1ZXMpXG4gIH1cblxuICBjYWxjdWxhdGUoa2V5LCB2YWx1ZSkge1xuICAgIGxldCByZXN1bHRzID0gbmV3IE1hcCgpXG4gICAgbGV0IHN0YXRlID0gZXh0ZW5kKHRoaXMuc3RhdGUsIHtba2V5XTogdmFsdWV9KVxuICAgIGlmIChzdGF0ZS5kZXRhaWxWYWx1ZXMgPT09IG51bGwpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3Jlc3VsdHM6IG51bGx9KVxuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgc3VidG90YWwgPSBzdW1BbGwoc3RhdGUuZGV0YWlsVmFsdWVzKVxuICAgICAgbGV0IHRheEFtdCA9IHN0YXRlLnRheCAqIHN1YnRvdGFsICogMC4wMVxuICAgICAgbGV0IHRpcEFtdCA9IHN0YXRlLnRpcCAqIHN1YnRvdGFsICogMC4wMVxuICAgICAgbGV0IHRvdGFsID0gc3VidG90YWwgKyB0YXhBbXQgKyB0aXBBbXRcblxuICAgICAgcmVzdWx0cy5zZXQoJ1N1YnRvdGFsJywgc3VidG90YWwpXG4gICAgICByZXN1bHRzLnNldChgVGF4ICgke3N0YXRlLnRheH0lIG9mIHN1YnRvdGFsKWAsIHRheEFtdClcbiAgICAgIHJlc3VsdHMuc2V0KGBUaXAgKCR7c3RhdGUudGlwfSUgb2Ygc3VidG90YWwpYCwgdGlwQW10KVxuICAgICAgcmVzdWx0cy5zZXQoJ1RvdGFsJywgdG90YWwpXG5cbiAgICAgIGxldCB7Y2FsY1ZhbHVlcywgdG90YWxQYXl9ID0gY2FsY3VsYXRlRWFjaChzdGF0ZSlcbiAgICAgIGZvciAobGV0IFtsYWJlbCwgdmFsdWVdIG9mIGNhbGNWYWx1ZXMpIHtcbiAgICAgICAgcmVzdWx0cy5zZXQobGFiZWwsIHZhbHVlKVxuICAgICAgfVxuXG4gICAgICByZXN1bHRzLnNldCgnVG90YWwgdG8gYmUgcGFpZCcsIHRvdGFsUGF5KVxuICAgICAgcmVzdWx0cy5zZXQoJ1NlcnZpY2UgZmVlcyBjb2xsZWN0ZWQnLCB0b3RhbFBheSAtIHRvdGFsKVxuXG4gICAgICB0aGlzLnNldFN0YXRlKHtyZXN1bHRzOiByZXN1bHRzfSlcbiAgICB9XG4gIH1cbn1cblxuXG5jbGFzcyBSZXN1bHRUYWJsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPGRpdiBzdHlsZT17e2Rpc3BsYXk6ICd0YWJsZSd9fT5cbiAgICAgIHt0aGlzLnJlbmRlckNoaWxkcmVuKCl9XG4gICAgPC9kaXY+XG4gIH1cblxuICByZW5kZXJDaGlsZHJlbigpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5yZXN1bHRzID09PSBudWxsKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgbGV0IGNoaWxkcmVuID0gW11cbiAgICBmb3IgKGxldCBba2V5LCB2YWxdIG9mIHRoaXMucHJvcHMucmVzdWx0cykge1xuICAgICAgLy8gSWYgdmFsIGlzIGEgbnVtYmVyLCBjb252ZXJ0IGl0IHRvIGEgc3RyaW5nXG4gICAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgdmFsID0gbnVtYmVyRm9ybWF0KHZhbCwgMilcbiAgICAgIH1cbiAgICAgIGNoaWxkcmVuLnB1c2goXG4gICAgICAgIDxwIGtleT17a2V5fSBzdHlsZT17e2Rpc3BsYXk6ICd0YWJsZS1yb3cnfX0+XG4gICAgICAgICAgPGxhYmVsIHN0eWxlPXt7ZGlzcGxheTogJ3RhYmxlLWNlbGwnLCBwYWRkaW5nUmlnaHQ6IDIwfX0+e2tleX06PC9sYWJlbD5cbiAgICAgICAgICA8bGFiZWwgc3R5bGU9e3tkaXNwbGF5OiAndGFibGUtY2VsbCd9fT57dmFsfTwvbGFiZWw+XG4gICAgICAgIDwvcD5cbiAgICAgIClcbiAgICB9XG4gICAgcmV0dXJuIGNoaWxkcmVuXG4gIH1cbn1cblxuUmVhY3RET00ucmVuZGVyKFxuICA8Q2FsY3VsYXRvciAvPixcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKVxuKVxuIiwiLypcblNhbXBsZSBpbnB1dDpcblxuc3RlYWsgZnJpdGVzIDM0LjVcbmJha2VkIHNhbG1vbiAyNS42XG5jaGlja2VuIHBvdCBwaWUgMTEuODJcblxuQmlsbDogaG9yY2hhdGEgNFxuVGVkOiBNYW5oYXR0YW4gNS4xXG5Ub2Z1cmtleSBzbGlkZXJzIDdcbktpbTpcbkJvcnNjaHQgNS40OVxuU3R1ZmZlZCBjYWJiYWdlIDcuOTlcblxuKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFyc2UodGV4dCkge1xuICBsZXQgcmVzdWx0ID0gbmV3IE1hcCgpXG4gIGxldCBjdXJyZW50R3JvdXAgPSAnZ3JvdXAnXG4gIGxldCBpdGVtQ291bnQgPSAwXG5cbiAgZ2V0Q2xlYW5MaW5lcyh0ZXh0KS5mb3JFYWNoKChsaW5lKSA9PiB7XG4gICAgbGV0IGl0ZW0gPSBwYXJzZUxpbmUobGluZSlcbiAgICBpZiAoIWl0ZW0pIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBpdGVtQ291bnQrK1xuICAgIGlmIChpdGVtLmdyb3VwKSB7XG4gICAgICBjdXJyZW50R3JvdXAgPSBpdGVtLmdyb3VwXG4gICAgfVxuICAgIGlmIChpdGVtLm5hbWUpIHtcbiAgICAgIGlmICghcmVzdWx0LmdldChjdXJyZW50R3JvdXApKSB7XG4gICAgICAgIHJlc3VsdC5zZXQoY3VycmVudEdyb3VwLCBbXSlcbiAgICAgIH1cbiAgICAgIHJlc3VsdC5nZXQoY3VycmVudEdyb3VwKS5wdXNoKHtuYW1lOiBpdGVtLm5hbWUsIHByaWNlOiBpdGVtLnByaWNlfSlcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGl0ZW1Db3VudCA9PT0gMCA/IG51bGwgOiByZXN1bHRcbn1cblxuZnVuY3Rpb24gcGFyc2VMaW5lKGxpbmUpIHtcbiAgbGV0IGdyb3VwID0gbnVsbFxuICBpZiAoY29udGFpbnMobGluZSwgJzonKSkge1xuICAgIGxldCBwYXJ0cyA9IGxpbmUuc3BsaXQoJzonKVxuICAgIGdyb3VwID0gcGFydHNbMF0udHJpbSgpXG4gICAgbGluZSA9IHBhcnRzWzFdLnRyaW0oKVxuICB9XG4gIGxldCBwYXJ0cyA9IGxpbmUubWF0Y2goLyguKj8pXFxzKyhcXGQrKD86XFwuXFxkezEsMn0pPykvKVxuICBsZXQgbmFtZSA9IG51bGxcbiAgbGV0IHByaWNlID0gbnVsbFxuICBpZiAocGFydHMpIHtcbiAgICBuYW1lID0gcGFydHNbMV1cbiAgICBwcmljZSA9IHBhcnNlRmxvYXQocGFydHNbMl0pXG4gIH1cbiAgaWYgKGdyb3VwID09PSBudWxsICYmIG5hbWUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9IGVsc2Uge1xuICAgIHJldHVybiB7XG4gICAgICBncm91cDogZ3JvdXAsXG4gICAgICBuYW1lOiBuYW1lLFxuICAgICAgcHJpY2U6IHByaWNlLFxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjb250YWlucyhzdHJpbmcsIHN1YlN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLmluZGV4T2Yoc3ViU3RyaW5nKSAhPT0gLTFcbn1cblxuZnVuY3Rpb24gZ2V0Q2xlYW5MaW5lcyh0ZXh0KSB7XG4gIHJldHVybiB0ZXh0LnRyaW0oKS5zcGxpdCgnXFxuJykuZmlsdGVyKGxpbmUgPT4gbGluZS50cmltKCkpO1xufVxuIiwiaW1wb3J0IHtudW1iZXJGb3JtYXR9IGZyb20gJ3VuZGVyc2NvcmUuc3RyaW5nJ1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBzdW0oYXJyYXksIGZuKSB7XG4gIGZuID0gZm4gfHwgKHggPT4geClcbiAgcmV0dXJuIGFycmF5LnJlZHVjZSgocHJldmlvdXMsIGN1cnJlbnQpID0+IHByZXZpb3VzICsgZm4oY3VycmVudCksIDApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdW1BbGwobWFwKSB7XG4gIGxldCBhcnJheXMgPSBbLi4ubWFwLnZhbHVlcygpXVxuICByZXR1cm4gc3VtKGFycmF5cywgYXJyYXkgPT4ge1xuICAgIHJldHVybiBzdW0oYXJyYXksIHggPT4geC5wcmljZSlcbiAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZUVhY2goc3RhdGUpIHtcbiAgbGV0IHN1bXMgPSBuZXcgTWFwKClcbiAgZm9yIChsZXQgW2tleSwgdmFsXSBvZiBzdGF0ZS5kZXRhaWxWYWx1ZXMpIHtcbiAgICBzdW1zLnNldChrZXksIHN1bSh2YWwsIHggPT4geC5wcmljZSkpXG4gIH1cblxuICBsZXQgZWFjaCA9IHN1bXMuZ2V0KCdncm91cCcpIC8gc3RhdGUuYXR0ZW5kZWVzXG4gIHN1bXMuZGVsZXRlKCdncm91cCcpXG5cbiAgbGV0IG5hbWVzID0gWy4uLnN1bXMua2V5cygpXVxuICBuYW1lcy5zb3J0KHggPT4geC50b0xvd2VyQ2FzZSgpKVxuXG4gIC8vIE11bHRpcGxpZXIgdGhhdCBpbmNvcnBvcmF0ZXMgYm90aCB0YXggYW5kIHRpcFxuICBsZXQgbXVsdGlwbGllciA9IDEgKyAoc3RhdGUudGF4ICsgc3RhdGUudGlwKSAqIC4wMVxuXG4gIGxldCBjYWxjVmFsdWVzID0gbmV3IE1hcCgpXG4gIGxldCB0b3RhbFBheSA9IDBcblxuICBmb3IgKGxldCBuYW1lIG9mIG5hbWVzKSB7XG4gICAgbGV0IHZhbCA9IE1hdGguY2VpbChtdWx0aXBsaWVyICogKHN1bXMuZ2V0KG5hbWUpICsgZWFjaCkpXG4gICAgdG90YWxQYXkgKz0gdmFsXG4gICAgY2FsY1ZhbHVlcy5zZXQobmFtZSArICcgcGF5cycsIHZhbClcbiAgfVxuXG4gIGxldCBncm91cExhYmVsID0gYEV2ZXJ5b25lICR7c3Vtcy5zaXplID8gJ2Vsc2UgJyA6ICcnfXBheXNgXG4gIGxldCBldmVyeW9uZUVsc2VDb3VudCA9IHN0YXRlLmF0dGVuZGVlcyAtIG5hbWVzLmxlbmd0aFxuICBsZXQgZXZlcnlvbmVFbHNlID0gTWF0aC5jZWlsKG11bHRpcGxpZXIgKiBlYWNoKVxuICB0b3RhbFBheSArPSBldmVyeW9uZUVsc2UgKiBldmVyeW9uZUVsc2VDb3VudFxuICBjYWxjVmFsdWVzLnNldChncm91cExhYmVsLCBgJHtudW1iZXJGb3JtYXQoZXZlcnlvbmVFbHNlLCAyKX0gw5cgJHtldmVyeW9uZUVsc2VDb3VudH1gKVxuXG4gIHJldHVybiB7Y2FsY1ZhbHVlczogY2FsY1ZhbHVlcywgdG90YWxQYXk6IHRvdGFsUGF5fVxufVxuIl19
