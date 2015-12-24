webpackJsonp([9],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(158);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var HINTS = ['我很喜欢咖啡', '我会帮人做咖啡', '我帮助做的咖啡特别好喝（也特别贵）！'];

	var ANSWERS = {
	  correct: '椰子猫',
	  partial: {
	    '麝香猫': '是什么样的麝香猫？',
	    '哺乳动物': '是，但请你具体一点',
	    '动物': '拜托，你认真一点好不好？'
	  }
	};

	var WhatAmI = (function (_React$Component) {
	  _inherits(WhatAmI, _React$Component);

	  function WhatAmI(props) {
	    _classCallCheck(this, WhatAmI);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(WhatAmI).call(this, props));

	    _this.state = {
	      answer: '',
	      charHint: ''
	    };

	    _this.handleSubmit = _this.handleSubmit.bind(_this);
	    _this.handleAnswerChange = _this.handleAnswerChange.bind(_this);
	    return _this;
	  }

	  _createClass(WhatAmI, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'h1',
	          null,
	          '我是什么？'
	        ),
	        _react2.default.createElement('img', { src: 'thing.jpg' }),
	        _react2.default.createElement(
	          'form',
	          { onSubmit: this.handleSubmit },
	          _react2.default.createElement('input', {
	            placeholder: '在这里输入你的答案',
	            value: this.state.answer,
	            onChange: this.handleAnswerChange }),
	          _react2.default.createElement('input', { type: 'submit', value: 'Submit' }),
	          _react2.default.createElement(
	            'div',
	            null,
	            this.state.charHint
	          )
	        ),
	        this.renderHints()
	      );
	    }
	  }, {
	    key: 'renderHints',
	    value: function renderHints() {
	      return this.props.hints.map(function (hint, index) {
	        return _react2.default.createElement(Hint, { key: index, text: '提示' + (index + 1), hint: hint });
	      });
	    }
	  }, {
	    key: 'handleSubmit',
	    value: function handleSubmit(evt) {
	      evt.preventDefault();
	      var answer = this.state.answer;
	      if (answer === '') {
	        return;
	      }

	      var answers = this.props.answers;
	      if (answer === answers.correct) {
	        alert('哇，你太棒了！');
	      } else if (answer in answers.partial) {
	        alert(answers.partial[answer]);
	      } else {
	        alert('不对，但请你再次答题！');
	      }
	    }
	  }, {
	    key: 'handleAnswerChange',
	    value: function handleAnswerChange(evt) {
	      var answer = evt.target.value.trim();
	      this.setState({ answer: answer });

	      var count = countChars(this.props.answers.correct, answer);
	      if (count > 0) {
	        this.setState({ charHint: '你的答案有' + count + '个正确的汉子' });
	      } else {
	        this.setState({ charHint: '' });
	      }
	    }
	  }]);

	  return WhatAmI;
	})(_react2.default.Component);

	var Hint = (function (_React$Component2) {
	  _inherits(Hint, _React$Component2);

	  function Hint(props) {
	    _classCallCheck(this, Hint);

	    var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(Hint).call(this, props));

	    _this2.state = { open: false };

	    _this2.toggleOpen = _this2.toggleOpen.bind(_this2);
	    return _this2;
	  }

	  _createClass(Hint, [{
	    key: 'render',
	    value: function render() {
	      var hintSpan = this.state.open ? _react2.default.createElement(
	        'span',
	        { className: 'hint' },
	        this.props.hint
	      ) : null;

	      return _react2.default.createElement(
	        'div',
	        { className: this.state.open ? 'openHint' : null },
	        _react2.default.createElement(
	          'button',
	          { onClick: this.toggleOpen },
	          this.props.text
	        ),
	        hintSpan
	      );
	    }
	  }, {
	    key: 'toggleOpen',
	    value: function toggleOpen() {
	      this.setState({ open: !this.state.open });
	    }
	  }]);

	  return Hint;
	})(_react2.default.Component);

	Hint.propTypes = {
	  text: _react2.default.PropTypes.string,
	  hint: _react2.default.PropTypes.string
	};

	// Count the number of chars from the given answer that are also in the correct
	// answer.
	function countChars(correctAnswer, givenAnswer) {
	  var chars = givenAnswer.split('');

	  return chars.reduce(function (prev, current) {
	    if (correctAnswer.indexOf(current) === -1) {
	      return prev;
	    } else {
	      return prev + 1;
	    }
	  }, 0);
	}

	_reactDom2.default.render(_react2.default.createElement(WhatAmI, { hints: HINTS, answers: ANSWERS }), document.getElementById('content'));

/***/ }
]);