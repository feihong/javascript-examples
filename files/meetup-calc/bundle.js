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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DEFAULT_VALUES = {
  tax: 9.75,
  tip: 20,
  serviceFee: 1
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
          'Tax percentage: ',
          _react2.default.createElement('input', { defaultValue: '9.75',
            onChange: this.changeHandler('tax') }),
          'Tip percentage: ',
          _react2.default.createElement('input', { defaultValue: '20', type: 'number',
            onChange: this.changeHandler('tip') }),
          'Service fee: ',
          _react2.default.createElement('input', { defaultValue: '1', type: 'number',
            onChange: this.changeHandler('serviceFee') }),
          'Order details: ',
          _react2.default.createElement('textarea', { cols: '50', rows: '8', onChange: this.handleDetailChange })
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
        results.set('Subtotal', subtotal);
        results.set('Tax', state.tax * subtotal * 0.01);

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
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.props.results[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _step$value = _slicedToArray(_step.value, 2);

          var key = _step$value[0];
          var val = _step$value[1];

          children.push(_react2.default.createElement(
            'p',
            { key: key, style: { display: 'table-row' } },
            _react2.default.createElement(
              'label',
              { style: { display: 'table-cell', paddingRight: 20 } },
              key
            ),
            _react2.default.createElement(
              'label',
              { style: { display: 'table-cell' } },
              val
            )
          ));
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

      return children;
    }
  }]);

  return ResultTable;
})(_react2.default.Component);

_reactDom2.default.render(_react2.default.createElement(Calculator, null), document.getElementById('content'));

},{"../lib/form":1,"../lib/util":2,"./dsl":4,"./util":5,"react":undefined,"react-dom":undefined}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = parse;
function parse(text) {
  var result = {};
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
      result[currentGroup] = result[currentGroup] || [];
      result[currentGroup].push({ name: item.name, price: item.price });
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
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sum = sum;
exports.sumAll = sumAll;
function sum(list, fn) {
  fn = fn || function (x) {
    return x;
  };
  return list.reduce(function (previous, current) {
    return previous + fn(current);
  }, 0);
}

function sumAll(obj) {
  var result = 0;
  for (var k in obj) {
    result += sum(obj[k], function (x) {
      return x.price;
    });
  }
  return result;
}

},{}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJsaWIvZm9ybS5qcyIsImxpYi91dGlsLmpzIiwibWVldHVwLWNhbGMvYXBwLmpzIiwibWVldHVwLWNhbGMvZHNsLmpzIiwibWVldHVwLWNhbGMvdXRpbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNLcUIsSUFBSTtZQUFKLElBQUk7O1dBQUosSUFBSTswQkFBSixJQUFJOztrRUFBSixJQUFJOzs7ZUFBSixJQUFJOzs2QkFDZDs7QUFFUCxVQUFJLFFBQVEsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7O0FBRWxFLGFBQU87O3FCQUFVLElBQUksQ0FBQyxLQUFLLElBQUUsS0FBSyxFQUFFLFFBQVEsQUFBQztRQUMxQyxJQUFJLENBQUMsY0FBYyxFQUFFO09BQ2pCLENBQUE7S0FDUjs7O3FDQUVnQjtBQUNmLFVBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQTtBQUNmLFVBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFBO0FBQ2xDLFdBQUssSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBRSxDQUFDLEVBQUU7QUFDdkMsWUFBSSxLQUFLLEdBQUc7O1lBQU8sS0FBSyxFQUFFLEVBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsRUFBRSxFQUFDLEFBQUM7VUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFO1NBQVMsQ0FBQTtBQUNqRyxZQUFJLEtBQUssR0FBRyxVQWxCVCxzQkFBc0IsRUFrQlUsUUFB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S0gsTUFBTSxHQUFOLE1BQU07QUFMZixTQUFTLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFFO0FBQzVCLElBQUUsR0FBRyxFQUFFLElBQUssVUFBQSxDQUFDO1dBQUksQ0FBQztHQUFBLEFBQUMsQ0FBQTtBQUNuQixTQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBQyxRQUFRLEVBQUUsT0FBTztXQUFLLFFBQVEsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDO0dBQUEsRUFBRSxDQUFDLENBQUMsQ0FBQTtDQUNyRTs7QUFFTSxTQUFTLE1BQU0sQ0FBQyxHQUFHLEVBQUU7QUFDMUIsTUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFBO0FBQ2QsT0FBSyxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUU7QUFDakIsVUFBTSxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBQSxDQUFDO2FBQUksQ0FBQyxDQUFDLEtBQUs7S0FBQSxDQUFDLENBQUE7R0FDcEM7QUFDRCxTQUFPLE1BQU0sQ0FBQTtDQUNkIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSYWRpdW0gZnJvbSAncmFkaXVtJ1xuaW1wb3J0IHsgY2xvbmVFbGVtZW50TWVyZ2VTdHlsZSB9IGZyb20gJy4uL2xpYi91dGlsJ1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgLy8gTWVyZ2Ugc3R5bGUuXG4gICAgbGV0IG5ld1N0eWxlID0gT2JqZWN0LmFzc2lnbih7ZGlzcGxheTogJ3RhYmxlJ30sIHRoaXMucHJvcHMuc3R5bGUpXG5cbiAgICByZXR1cm4gPGZvcm0gey4uLnRoaXMucHJvcHN9IHN0eWxlPXtuZXdTdHlsZX0+XG4gICAgICB7dGhpcy5yZW5kZXJDaGlsZHJlbigpfVxuICAgIDwvZm9ybT5cbiAgfVxuXG4gIHJlbmRlckNoaWxkcmVuKCkge1xuICAgIGxldCByZXN1bHQgPSBbXVxuICAgIGxldCBjaGlsZHJlbiA9IHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICBmb3IgKGxldCBpPTA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrPTIpIHtcbiAgICAgIGxldCBsYWJlbCA9IDxsYWJlbCBzdHlsZT17e2Rpc3BsYXk6ICd0YWJsZS1jZWxsJywgcGFkZGluZ1JpZ2h0OiAxMH19PntjaGlsZHJlbltpXS50cmltKCl9PC9sYWJlbD5cbiAgICAgIGxldCBmaWVsZCA9IGNsb25lRWxlbWVudE1lcmdlU3R5bGUoY2hpbGRyZW5baSArIDFdLCB7ZGlzcGxheTogJ3RhYmxlLWNlbGwnfSlcbiAgICAgIHJlc3VsdC5wdXNoKDxwIHN0eWxlPXt7ZGlzcGxheTogJ3RhYmxlLXJvdyd9fSBrZXk9e2l9PntsYWJlbH17ZmllbGR9PC9wPilcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG59XG5Gb3JtID0gUmFkaXVtKEZvcm0pXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cblxuZXhwb3J0IGZ1bmN0aW9uIGV4dGVuZChhLCBiKSB7XG4gIGxldCBuZXdPYmogPSBPYmplY3QuYXNzaWduKHt9LCBhKVxuICBPYmplY3QuYXNzaWduKG5ld09iaiwgYilcbiAgcmV0dXJuIG5ld09ialxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xvbmVFbGVtZW50TWVyZ2VTdHlsZShlbGVtLCBzdHlsZSkge1xuICBsZXQgbmV3U3R5bGUgPSBudWxsXG4gIGlmICh0eXBlb2YgZWxlbS5wcm9wcy5zdHlsZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBuZXdTdHlsZSA9IHN0eWxlXG4gIH0gZWxzZSB7XG4gICAgbmV3U3R5bGUgPSBPYmplY3QuYXNzaWduKHt9LCBlbGVtLnByb3BzLnN0eWxlKVxuICAgIE9iamVjdC5hc3NpZ24obmV3U3R5bGUsIHN0eWxlKVxuICB9XG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoZWxlbSwge3N0eWxlOiBuZXdTdHlsZX0pXG59XG5cbi8vIGZ1bmN0aW9uIGNsb25lRWxlbWVudE1lcmdlQ2xhc3NOYW1lKGVsZW0sIGNsYXNzTmFtZSwga2V5KSB7XG4vLyAgIGxldCBjZmcgPSB7fVxuLy8gICBpZiAodHlwZW9mIGVsZW0ucHJvcHMuY2xhc3NOYW1lID09PSAndW5kZWZpbmVkJykge1xuLy8gICAgIGNmZy5jbGFzc05hbWUgPSBjbGFzc05hbWVcbi8vICAgfSBlbHNlIHtcbi8vICAgICBjZmcuY2xhc3NOYW1lID0gYCR7ZWxlbS5wcm9wcy5jbGFzc05hbWV9ICR7Y2xhc3NOYW1lfWBcbi8vICAgfVxuLy8gICBpZiAoa2V5KSB7XG4vLyAgICAgY2ZnLmtleSA9IGtleVxuLy8gICB9XG4vLyAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoZWxlbSwgY2ZnKVxuLy8gfVxuLy9cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQgRm9ybSBmcm9tICcuLi9saWIvZm9ybSdcbmltcG9ydCBwYXJzZSBmcm9tICcuL2RzbCdcbmltcG9ydCB7IHN1bSwgc3VtQWxsIH0gZnJvbSAnLi91dGlsJ1xuaW1wb3J0IHsgZXh0ZW5kIH0gZnJvbSAnLi4vbGliL3V0aWwnXG5cblxuY29uc3QgREVGQVVMVF9WQUxVRVMgPSB7XG4gIHRheDogOS43NSxcbiAgdGlwOiAyMCxcbiAgc2VydmljZUZlZTogMSxcbn1cblxuY29uc3QgUkVTVUxUX0ZJRUxEUyA9IFtcbiAgJ1N1YnRvdGFsJyxcbiAgJ1RheCcsXG4gICdUaXAnLFxuICAnVG90YWwnLFxuXVxuXG5cbmNsYXNzIENhbGN1bGF0b3IgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIGxldCBkID0ge1xuICAgICAgcmVzdWx0czogbnVsbCxcbiAgICAgIGRldGFpbFZhbHVlczogbnVsbCxcbiAgICB9XG4gICAgdGhpcy5zdGF0ZSA9IE9iamVjdC5hc3NpZ24oZCwgREVGQVVMVF9WQUxVRVMpXG5cbiAgICB0aGlzLmhhbmRsZURldGFpbENoYW5nZSA9IHRoaXMuaGFuZGxlRGV0YWlsQ2hhbmdlLmJpbmQodGhpcylcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPGRpdj5cbiAgICAgIDxoMj5JbnB1dHM8L2gyPlxuICAgICAgPEZvcm0+XG4gICAgICAgIFRheCBwZXJjZW50YWdlOiA8aW5wdXQgZGVmYXVsdFZhbHVlPSc5Ljc1J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmNoYW5nZUhhbmRsZXIoJ3RheCcpfSAvPlxuICAgICAgICBUaXAgcGVyY2VudGFnZTogPGlucHV0IGRlZmF1bHRWYWx1ZT0nMjAnIHR5cGU9J251bWJlcidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5jaGFuZ2VIYW5kbGVyKCd0aXAnKX0gLz5cbiAgICAgICAgU2VydmljZSBmZWU6IDxpbnB1dCBkZWZhdWx0VmFsdWU9JzEnIHR5cGU9J251bWJlcidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5jaGFuZ2VIYW5kbGVyKCdzZXJ2aWNlRmVlJyl9IC8+XG4gICAgICAgIE9yZGVyIGRldGFpbHM6IDx0ZXh0YXJlYSBjb2xzPSc1MCcgcm93cz0nOCcgb25DaGFuZ2U9e3RoaXMuaGFuZGxlRGV0YWlsQ2hhbmdlfSAvPlxuICAgICAgPC9Gb3JtPlxuXG4gICAgICA8aDI+UmVzdWx0czwvaDI+XG4gICAgICA8UmVzdWx0VGFibGUgcmVzdWx0cz17dGhpcy5zdGF0ZS5yZXN1bHRzfSAvPlxuICAgIDwvZGl2PlxuICB9XG5cbiAgY2hhbmdlSGFuZGxlcihmaWVsZCkge1xuICAgIHJldHVybiAoZXZ0KSA9PiB7XG4gICAgICBsZXQgdmFsdWUgPSBldnQudGFyZ2V0LnZhbHVlXG4gICAgICB0aGlzLnNldFN0YXRlKHtbZmllbGRdOiBwYXJzZUZsb2F0KHZhbHVlKX0pXG4gICAgICB0aGlzLmNhbGN1bGF0ZShmaWVsZCwgdmFsdWUpXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlRGV0YWlsQ2hhbmdlKGV2dCkge1xuICAgIGxldCBkZXRhaWxWYWx1ZXMgPSBwYXJzZShldnQudGFyZ2V0LnZhbHVlKVxuICAgIHRoaXMuc2V0U3RhdGUoe2RldGFpbFZhbHVlczogZGV0YWlsVmFsdWVzfSlcbiAgICB0aGlzLmNhbGN1bGF0ZSgnZGV0YWlsVmFsdWVzJywgZGV0YWlsVmFsdWVzKVxuICB9XG5cbiAgY2FsY3VsYXRlKGtleSwgdmFsdWUpIHtcbiAgICBsZXQgcmVzdWx0cyA9IG5ldyBNYXAoKVxuICAgIGxldCBzdGF0ZSA9IGV4dGVuZCh0aGlzLnN0YXRlLCB7W2tleV06IHZhbHVlfSlcbiAgICBpZiAoc3RhdGUuZGV0YWlsVmFsdWVzID09PSBudWxsKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtyZXN1bHRzOiBudWxsfSlcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHN1YnRvdGFsID0gc3VtQWxsKHN0YXRlLmRldGFpbFZhbHVlcylcbiAgICAgIHJlc3VsdHMuc2V0KCdTdWJ0b3RhbCcsIHN1YnRvdGFsKVxuICAgICAgcmVzdWx0cy5zZXQoJ1RheCcsIHN0YXRlLnRheCAqIHN1YnRvdGFsICogMC4wMSlcblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7cmVzdWx0czogcmVzdWx0c30pXG4gICAgfVxuICB9XG59XG5cblxuY2xhc3MgUmVzdWx0VGFibGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiAndGFibGUnfX0+XG4gICAgICB7dGhpcy5yZW5kZXJDaGlsZHJlbigpfVxuICAgIDwvZGl2PlxuICB9XG5cbiAgcmVuZGVyQ2hpbGRyZW4oKSB7XG4gICAgaWYgKHRoaXMucHJvcHMucmVzdWx0cyA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGxldCBjaGlsZHJlbiA9IFtdXG4gICAgZm9yIChsZXQgW2tleSwgdmFsXSBvZiB0aGlzLnByb3BzLnJlc3VsdHMpIHtcbiAgICAgIGNoaWxkcmVuLnB1c2goXG4gICAgICAgIDxwIGtleT17a2V5fSBzdHlsZT17e2Rpc3BsYXk6ICd0YWJsZS1yb3cnfX0+XG4gICAgICAgICAgPGxhYmVsIHN0eWxlPXt7ZGlzcGxheTogJ3RhYmxlLWNlbGwnLCBwYWRkaW5nUmlnaHQ6IDIwfX0+e2tleX08L2xhYmVsPlxuICAgICAgICAgIDxsYWJlbCBzdHlsZT17e2Rpc3BsYXk6ICd0YWJsZS1jZWxsJ319Pnt2YWx9PC9sYWJlbD5cbiAgICAgICAgPC9wPlxuICAgICAgKVxuICAgIH1cbiAgICByZXR1cm4gY2hpbGRyZW5cbiAgfVxufVxuXG5SZWFjdERPTS5yZW5kZXIoXG4gIDxDYWxjdWxhdG9yIC8+LFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpXG4pXG4iLCJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhcnNlKHRleHQpIHtcbiAgbGV0IHJlc3VsdCA9IHt9XG4gIGxldCBjdXJyZW50R3JvdXAgPSAnZ3JvdXAnXG4gIGxldCBpdGVtQ291bnQgPSAwXG5cbiAgZ2V0Q2xlYW5MaW5lcyh0ZXh0KS5mb3JFYWNoKChsaW5lKSA9PiB7XG4gICAgbGV0IGl0ZW0gPSBwYXJzZUxpbmUobGluZSlcbiAgICBpZiAoIWl0ZW0pIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBpdGVtQ291bnQrK1xuICAgIGlmIChpdGVtLmdyb3VwKSB7XG4gICAgICBjdXJyZW50R3JvdXAgPSBpdGVtLmdyb3VwXG4gICAgfVxuICAgIGlmIChpdGVtLm5hbWUpIHtcbiAgICAgIHJlc3VsdFtjdXJyZW50R3JvdXBdID0gcmVzdWx0W2N1cnJlbnRHcm91cF0gfHwgW11cbiAgICAgIHJlc3VsdFtjdXJyZW50R3JvdXBdLnB1c2goe25hbWU6IGl0ZW0ubmFtZSwgcHJpY2U6IGl0ZW0ucHJpY2V9KVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaXRlbUNvdW50ID09PSAwID8gbnVsbCA6IHJlc3VsdFxufVxuXG5mdW5jdGlvbiBwYXJzZUxpbmUobGluZSkge1xuICBsZXQgZ3JvdXAgPSBudWxsXG4gIGlmIChjb250YWlucyhsaW5lLCAnOicpKSB7XG4gICAgbGV0IHBhcnRzID0gbGluZS5zcGxpdCgnOicpXG4gICAgZ3JvdXAgPSBwYXJ0c1swXS50cmltKClcbiAgICBsaW5lID0gcGFydHNbMV0udHJpbSgpXG4gIH1cbiAgbGV0IHBhcnRzID0gbGluZS5tYXRjaCgvKC4qPylcXHMrKFxcZCsoPzpcXC5cXGR7MSwyfSk/KS8pXG4gIGxldCBuYW1lID0gbnVsbFxuICBsZXQgcHJpY2UgPSBudWxsXG4gIGlmIChwYXJ0cykge1xuICAgIG5hbWUgPSBwYXJ0c1sxXVxuICAgIHByaWNlID0gcGFyc2VGbG9hdChwYXJ0c1syXSlcbiAgfVxuICBpZiAoZ3JvdXAgPT09IG51bGwgJiYgbmFtZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBudWxsXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGdyb3VwOiBncm91cCxcbiAgICAgIG5hbWU6IG5hbWUsXG4gICAgICBwcmljZTogcHJpY2UsXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNvbnRhaW5zKHN0cmluZywgc3ViU3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcuaW5kZXhPZihzdWJTdHJpbmcpICE9PSAtMVxufVxuXG5mdW5jdGlvbiBnZXRDbGVhbkxpbmVzKHRleHQpIHtcbiAgcmV0dXJuIHRleHQudHJpbSgpLnNwbGl0KCdcXG4nKS5maWx0ZXIobGluZSA9PiBsaW5lLnRyaW0oKSk7XG59XG4iLCJcbmV4cG9ydCBmdW5jdGlvbiBzdW0obGlzdCwgZm4pIHtcbiAgZm4gPSBmbiB8fCAoeCA9PiB4KVxuICByZXR1cm4gbGlzdC5yZWR1Y2UoKHByZXZpb3VzLCBjdXJyZW50KSA9PiBwcmV2aW91cyArIGZuKGN1cnJlbnQpLCAwKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VtQWxsKG9iaikge1xuICBsZXQgcmVzdWx0ID0gMFxuICBmb3IgKGxldCBrIGluIG9iaikge1xuICAgIHJlc3VsdCArPSBzdW0ob2JqW2tdLCB4ID0+IHgucHJpY2UpXG4gIH1cbiAgcmV0dXJuIHJlc3VsdFxufVxuIl19
