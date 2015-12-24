webpackJsonp([6],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(158);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _form = __webpack_require__(165);

	var _form2 = _interopRequireDefault(_form);

	var _dsl = __webpack_require__(166);

	var _dsl2 = _interopRequireDefault(_dsl);

	var _calc = __webpack_require__(167);

	var _util = __webpack_require__(164);

	var _underscore = __webpack_require__(168);

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

/***/ },

/***/ 164:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.extend = extend;
	exports.cloneElementMergeStyle = cloneElementMergeStyle;

	var _react = __webpack_require__(1);

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

/***/ },

/***/ 165:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _util = __webpack_require__(164);

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

/***/ },

/***/ 166:
/***/ function(module, exports) {

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

/***/ },

/***/ 167:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.sum = sum;
	exports.sumAll = sumAll;
	exports.calculateEach = calculateEach;

	var _underscore = __webpack_require__(168);

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

	  var groupLabel = 'All ' + state.attendees + ' attendees pay';
	  if (sums.size) {
	    groupLabel = 'Remaining ' + everyoneElseCount + ' attendees pay';
	  }

	  calcValues.set(groupLabel, (0, _underscore.numberFormat)(everyoneElse, 2));

	  return { calcValues: calcValues, totalPay: totalPay };
	}

/***/ }

});