webpackJsonp([7],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(158);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _lodash = __webpack_require__(237);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _helper = __webpack_require__(161);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var shortnames = emojione.shortnames.split('|');

	function getRandomShortname() {
	  var index = _lodash2.default.random(0, shortnames.length - 1);
	  return shortnames[index];
	}

	function shortnameToUrl(shortname) {
	  var item = emojione.emojioneList[shortname];
	  var unicode = item[item.length - 1];
	  return emojione.imagePathSVGSprites + '#emoji-' + unicode;
	}

	var RandomEmoji = (function (_BaseComponent) {
	  _inherits(RandomEmoji, _BaseComponent);

	  function RandomEmoji(props) {
	    _classCallCheck(this, RandomEmoji);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(RandomEmoji).call(this, props));

	    _this.state = {
	      shortname: getRandomShortname()
	    };
	    _this._bind('handleClick');
	    return _this;
	  }

	  _createClass(RandomEmoji, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'button',
	          { onClick: this.handleClick },
	          'Random emoji'
	        ),
	        _react2.default.createElement('br', null),
	        'Total # of emojis: ',
	        shortnames.length,
	        _react2.default.createElement('br', null),
	        'Shortname: ',
	        _react2.default.createElement(
	          'code',
	          null,
	          this.state.shortname
	        ),
	        _react2.default.createElement('br', null),
	        _react2.default.createElement('br', null),
	        'Unicode:',
	        _react2.default.createElement(
	          'span',
	          { style: { fontSize: '8em' } },
	          emojione.shortnameToUnicode(this.state.shortname)
	        ),
	        _react2.default.createElement('br', null),
	        'SVG:',
	        _react2.default.createElement(SVG, { width: '130px', shortname: this.state.shortname })
	      );
	    }
	  }, {
	    key: 'handleClick',
	    value: function handleClick() {
	      this.setState({ shortname: getRandomShortname() });
	    }
	  }]);

	  return RandomEmoji;
	})(_helper.BaseComponent);

	var SVG = (function (_React$Component) {
	  _inherits(SVG, _React$Component);

	  function SVG() {
	    _classCallCheck(this, SVG);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(SVG).apply(this, arguments));
	  }

	  _createClass(SVG, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement('svg', _extends({}, this.props, { dangerouslySetInnerHTML: this.getSvgHtml() }));
	    }

	    // You have to use raw HTML here because JSX does not support namespaces.

	  }, {
	    key: 'getSvgHtml',
	    value: function getSvgHtml() {
	      var shortname = this.props.shortname;
	      return { __html: '<use xlink:href=' + shortnameToUrl(shortname) + '></use>' };
	    }
	  }]);

	  return SVG;
	})(_react2.default.Component);

	function getUniqueShortnames() {
	  return emojione.shortnames.split('|').filter(function (sn) {
	    var key = sn.substring(1, sn.length - 1);
	    return key in emojimeta;
	  });
	}

	_reactDom2.default.render(_react2.default.createElement(RandomEmoji, null), document.getElementById('content'));

/***/ },

/***/ 161:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.BaseComponent = undefined;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var BaseComponent = exports.BaseComponent = (function (_React$Component) {
	  _inherits(BaseComponent, _React$Component);

	  function BaseComponent() {
	    _classCallCheck(this, BaseComponent);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(BaseComponent).apply(this, arguments));
	  }

	  _createClass(BaseComponent, [{
	    key: '_bind',
	    value: function _bind() {
	      var _this2 = this;

	      for (var _len = arguments.length, methods = Array(_len), _key = 0; _key < _len; _key++) {
	        methods[_key] = arguments[_key];
	      }

	      methods.forEach(function (method) {
	        _this2[method] = _this2[method].bind(_this2);
	      });
	    }
	  }]);

	  return BaseComponent;
	})(_react2.default.Component);

/***/ }

});