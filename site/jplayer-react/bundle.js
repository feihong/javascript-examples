webpackJsonp([4],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(158);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _helper = __webpack_require__(161);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function initPlayer(config) {
	  $(config.player).jPlayer({
	    ready: function ready() {
	      $(this).jPlayer('setMedia', {
	        title: config.title,
	        m4a: window.site + 'audio/' + config.file
	      });
	      config.ready();
	    },
	    timeupdate: config.timeupdate,
	    cssSelectorAncestor: config.container,
	    swfPath: 'https://cdnjs.cloudflare.com/ajax/libs/jplayer/2.9.2/jplayer/',
	    supplied: 'm4a',
	    useStateClassSkin: true,
	    autoBlur: false,
	    smoothPlayBar: true,
	    keyEnabled: true,
	    remainingDuration: true,
	    toggleDuration: true
	  });
	}

	var JPlayer = (function (_BaseComponent) {
	  _inherits(JPlayer, _BaseComponent);

	  function JPlayer(props) {
	    _classCallCheck(this, JPlayer);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(JPlayer).call(this, props));

	    _this.state = {
	      currentTime: 0,
	      playerReady: false
	    };

	    _this._bind('handleClick');
	    return _this;
	  }

	  _createClass(JPlayer, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;

	      initPlayer({
	        player: '#' + this.props.player,
	        container: '#' + this.props.container,
	        title: this.props.title,
	        file: this.props.file,
	        ready: function ready() {
	          return _this2.setState({ playerReady: true });
	        },
	        timeupdate: function timeupdate(evt) {
	          return _this2.setState({ currentTime: evt.jPlayer.status.currentTime });
	        }
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement('div', { id: this.props.player, className: 'jp-jplayer' }),
	        renderPlayerContainer(this),
	        this.renderPanel()
	      );
	    }
	  }, {
	    key: 'renderPanel',
	    value: function renderPanel() {
	      return this.state.playerReady && _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'button',
	          { onClick: this.handleClick },
	          'Play at specific time'
	        ),
	        _react2.default.createElement(
	          'span',
	          null,
	          this.state.currentTime
	        )
	      );
	    }
	  }, {
	    key: 'handleClick',
	    value: function handleClick() {
	      $('#' + this.props.player).jPlayer('play', 122);
	    }
	  }]);

	  return JPlayer;
	})(_helper.BaseComponent);

	function renderPlayerContainer(comp) {
	  return _react2.default.createElement(
	    'div',
	    { id: comp.props.container, className: 'jp-audio', role: 'application', 'aria-label': 'media player' },
	    _react2.default.createElement(
	      'div',
	      { className: 'jp-type-single' },
	      _react2.default.createElement(
	        'div',
	        { className: 'jp-gui jp-interface' },
	        _react2.default.createElement(
	          'div',
	          { className: 'jp-volume-controls' },
	          _react2.default.createElement(
	            'button',
	            { className: 'jp-mute', role: 'button', tabIndex: '0' },
	            'mute'
	          ),
	          _react2.default.createElement(
	            'button',
	            { className: 'jp-volume-max', role: 'button', tabIndex: '0' },
	            'max volume'
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'jp-volume-bar' },
	            _react2.default.createElement('div', { className: 'jp-volume-bar-value' })
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'jp-controls-holder' },
	          _react2.default.createElement(
	            'div',
	            { className: 'jp-controls' },
	            _react2.default.createElement(
	              'button',
	              { className: 'jp-play', role: 'button', tabIndex: '0' },
	              'play'
	            ),
	            _react2.default.createElement(
	              'button',
	              { className: 'jp-stop', role: 'button', tabIndex: '0' },
	              'stop'
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'jp-progress' },
	            _react2.default.createElement(
	              'div',
	              { className: 'jp-seek-bar' },
	              _react2.default.createElement('div', { className: 'jp-play-bar' })
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'jp-current-time', role: 'timer', 'aria-label': 'time' },
	            ' '
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'jp-duration', role: 'timer', 'aria-label': 'duration' },
	            ' '
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'jp-toggles' },
	            _react2.default.createElement(
	              'button',
	              { className: 'jp-repeat', role: 'button', tabIndex: '0' },
	              'repeat'
	            )
	          )
	        )
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: 'jp-details' },
	        _react2.default.createElement(
	          'div',
	          { className: 'jp-title', 'aria-label': 'title' },
	          ' '
	        )
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: 'jp-no-solution' },
	        _react2.default.createElement(
	          'span',
	          null,
	          'Update Required'
	        ),
	        'To play the media you will need to either update your browser to a recent version or update your ',
	        _react2.default.createElement(
	          'a',
	          { href: 'http://get.adobe.com/flashplayer/', target: '_blank' },
	          'Flash plugin'
	        ),
	        '.'
	      )
	    )
	  );
	}

	_reactDom2.default.render(_react2.default.createElement(JPlayer, {
	  player: 'jp_container_1',
	  container: 'jp_container_1',
	  title: '每个人都是颗流星',
	  file: 'liuxing.m4a' }), document.getElementById('content'));

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