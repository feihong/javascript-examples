webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(158);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _box = __webpack_require__(163);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_reactDom2.default.render(_react2.default.createElement(
	  _box.HBox,
	  { style: { color: 'yellow', backgroundColor: 'green' } },
	  _react2.default.createElement(
	    'div',
	    null,
	    'Alpha'
	  ),
	  _react2.default.createElement(
	    'div',
	    null,
	    'Beta'
	  ),
	  _react2.default.createElement(
	    _box.VBox,
	    { className: 'vert', style: { color: 'steelblue', backgroundColor: 'lavender' } },
	    _react2.default.createElement(
	      'div',
	      null,
	      'One'
	    ),
	    _react2.default.createElement(
	      'div',
	      null,
	      'Two'
	    ),
	    _react2.default.createElement(
	      'div',
	      null,
	      'Three'
	    )
	  ),
	  _react2.default.createElement(
	    'div',
	    null,
	    'Gamma'
	  )
	), document.getElementById('example-1'));

	_reactDom2.default.render(_react2.default.createElement(
	  _box.VBox,
	  { style: { color: 'blue', border: '1px dashed gray' } },
	  _react2.default.createElement(
	    'div',
	    null,
	    'One'
	  ),
	  _react2.default.createElement(
	    _box.HBox,
	    { style: { color: 'purple', border: '2px dotted red' } },
	    _react2.default.createElement(
	      'div',
	      null,
	      'Apple'
	    ),
	    _react2.default.createElement(
	      'div',
	      null,
	      'Banana'
	    ),
	    _react2.default.createElement(
	      'div',
	      null,
	      'Cauliflower'
	    )
	  ),
	  _react2.default.createElement(
	    'div',
	    null,
	    'Two'
	  ),
	  _react2.default.createElement(
	    'div',
	    null,
	    'Three'
	  ),
	  _react2.default.createElement(
	    _box.HBox,
	    { style: { color: 'brown', backgroundColor: 'lightgray' } },
	    _react2.default.createElement(
	      'div',
	      null,
	      'Four'
	    ),
	    _react2.default.createElement(
	      'div',
	      null,
	      'Five'
	    ),
	    _react2.default.createElement(
	      _box.VBox,
	      null,
	      _react2.default.createElement(
	        'div',
	        null,
	        'Aardvark'
	      ),
	      _react2.default.createElement(
	        'div',
	        null,
	        'Baboon'
	      ),
	      _react2.default.createElement(
	        'div',
	        null,
	        'Canary'
	      )
	    ),
	    _react2.default.createElement(
	      'div',
	      null,
	      'Six'
	    )
	  )
	), document.getElementById('example-2'));

/***/ },

/***/ 163:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.HBox = exports.VBox = undefined;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _util = __webpack_require__(164);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var VBox = exports.VBox = (function (_React$Component) {
	  _inherits(VBox, _React$Component);

	  function VBox() {
	    _classCallCheck(this, VBox);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(VBox).apply(this, arguments));
	  }

	  _createClass(VBox, [{
	    key: 'render',
	    value: function render() {
	      return renderBox(false, this.props);
	    }
	  }]);

	  return VBox;
	})(_react2.default.Component);

	var HBox = exports.HBox = (function (_React$Component2) {
	  _inherits(HBox, _React$Component2);

	  function HBox() {
	    _classCallCheck(this, HBox);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(HBox).apply(this, arguments));
	  }

	  _createClass(HBox, [{
	    key: 'render',
	    value: function render() {
	      return renderBox(true, this.props);
	    }
	  }]);

	  return HBox;
	})(_react2.default.Component);

	function renderBox(isHorizontal, props) {
	  var className = isHorizontal ? 'hbox' : 'vbox';
	  var newStyle = (0, _util.extend)(props.style, {
	    display: 'flex',
	    flexDirection: isHorizontal ? 'row' : 'column'
	  });

	  return _react2.default.createElement(
	    'div',
	    _extends({}, props, { className: className, style: newStyle }),
	    props.children
	  );
	}

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

/***/ }

});