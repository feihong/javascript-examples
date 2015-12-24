webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(158);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _form = __webpack_require__(165);

	var _form2 = _interopRequireDefault(_form);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_reactDom2.default.render(_react2.default.createElement(
	  _form2.default,
	  null,
	  'Name: ',
	  _react2.default.createElement('input', { name: 'name' }),
	  'Template: ',
	  _react2.default.createElement(
	    'select',
	    { name: 'template' },
	    _react2.default.createElement(
	      'option',
	      { value: '1' },
	      'Guest'
	    ),
	    _react2.default.createElement(
	      'option',
	      { value: '2' },
	      'Host'
	    )
	  ),
	  'URL: ',
	  _react2.default.createElement('input', { name: 'date', type: 'url' })
	), document.getElementById('content'));

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

/***/ }

});