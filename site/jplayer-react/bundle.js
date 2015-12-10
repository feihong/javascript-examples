(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _helper = require('../lib/helper');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// $(() => {
//   initPlayer({
//     player: document.getElementById('jquery_jplayer_1'),
//     container: document.getElementById('jp_container_1'),
//     title: '每个人都是颗流星',
//     file: 'liuxing.m4a',
//     ready: () => console.log('ready'),
//     timeupdate: (e) => console.log(e.jPlayer.status.currentTime),
//   })
// })

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

},{"../lib/helper":2,"react":undefined,"react-dom":undefined}],2:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseComponent = undefined;

var _react = require('react');

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

},{"react":undefined}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzaXRlL2pwbGF5ZXIvYXBwLmJhYmVsIiwic2l0ZS9saWIvaGVscGVyLmJhYmVsIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZ0JBLFNBQVMsVUFBVSxDQUFDLE1BQU0sRUFBRTtBQUMxQixHQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQztBQUN2QixTQUFLLEVBQUUsaUJBQVc7QUFDaEIsT0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUU7QUFDMUIsYUFBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLO0FBQ25CLFdBQUcsRUFBSyxNQUFNLENBQUMsSUFBSSxjQUFTLE1BQU0sQ0FBQyxJQUFJLEFBQUU7T0FDMUMsQ0FBQyxDQUFBO0FBQ0YsWUFBTSxDQUFDLEtBQUssRUFBRSxDQUFBO0tBQ2Y7QUFDRCxjQUFVLEVBQUUsTUFBTSxDQUFDLFVBQVU7QUFDN0IsdUJBQW1CLEVBQUUsTUFBTSxDQUFDLFNBQVM7QUFDckMsV0FBTyxFQUFFLCtEQUErRDtBQUN4RSxZQUFRLEVBQUUsS0FBSztBQUNmLHFCQUFpQixFQUFFLElBQUk7QUFDdkIsWUFBUSxFQUFFLEtBQUs7QUFDZixpQkFBYSxFQUFFLElBQUk7QUFDbkIsY0FBVSxFQUFFLElBQUk7QUFDaEIscUJBQWlCLEVBQUUsSUFBSTtBQUN2QixrQkFBYyxFQUFFLElBQUk7R0FDckIsQ0FBQyxDQUFBO0NBQ0g7O0lBR0ssT0FBTztZQUFQLE9BQU87O0FBQ1gsV0FESSxPQUFPLENBQ0MsS0FBSyxFQUFFOzBCQURmLE9BQU87O3VFQUFQLE9BQU8sYUFFSCxLQUFLOztBQUNYLFVBQUssS0FBSyxHQUFHO0FBQ1gsaUJBQVcsRUFBRSxDQUFD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b24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQge0Jhc2VDb21wb25lbnR9IGZyb20gJy4uL2xpYi9oZWxwZXInXG5cblxuLy8gJCgoKSA9PiB7XG4vLyAgIGluaXRQbGF5ZXIoe1xuLy8gICAgIHBsYXllcjogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pxdWVyeV9qcGxheWVyXzEnKSxcbi8vICAgICBjb250YWluZXI6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqcF9jb250YWluZXJfMScpLFxuLy8gICAgIHRpdGxlOiAn5q+P5Liq5Lq66YO95piv6aKX5rWB5pifJyxcbi8vICAgICBmaWxlOiAnbGl1eGluZy5tNGEnLFxuLy8gICAgIHJlYWR5OiAoKSA9PiBjb25zb2xlLmxvZygncmVhZHknKSxcbi8vICAgICB0aW1ldXBkYXRlOiAoZSkgPT4gY29uc29sZS5sb2coZS5qUGxheWVyLnN0YXR1cy5jdXJyZW50VGltZSksXG4vLyAgIH0pXG4vLyB9KVxuXG5mdW5jdGlvbiBpbml0UGxheWVyKGNvbmZpZykge1xuICAkKGNvbmZpZy5wbGF5ZXIpLmpQbGF5ZXIoe1xuICAgIHJlYWR5OiBmdW5jdGlvbigpIHtcbiAgICAgICQodGhpcykualBsYXllcignc2V0TWVkaWEnLCB7XG4gICAgICAgIHRpdGxlOiBjb25maWcudGl0bGUsXG4gICAgICAgIG00YTogYCR7d2luZG93LnNpdGV9YXVkaW8vJHtjb25maWcuZmlsZX1gXG4gICAgICB9KVxuICAgICAgY29uZmlnLnJlYWR5KClcbiAgICB9LFxuICAgIHRpbWV1cGRhdGU6IGNvbmZpZy50aW1ldXBkYXRlLFxuICAgIGNzc1NlbGVjdG9yQW5jZXN0b3I6IGNvbmZpZy5jb250YWluZXIsXG4gICAgc3dmUGF0aDogJ2h0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2pwbGF5ZXIvMi45LjIvanBsYXllci8nLFxuICAgIHN1cHBsaWVkOiAnbTRhJyxcbiAgICB1c2VTdGF0ZUNsYXNzU2tpbjogdHJ1ZSxcbiAgICBhdXRvQmx1cjogZmFsc2UsXG4gICAgc21vb3RoUGxheUJhcjogdHJ1ZSxcbiAgICBrZXlFbmFibGVkOiB0cnVlLFxuICAgIHJlbWFpbmluZ0R1cmF0aW9uOiB0cnVlLFxuICAgIHRvZ2dsZUR1cmF0aW9uOiB0cnVlXG4gIH0pXG59XG5cblxuY2xhc3MgSlBsYXllciBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjdXJyZW50VGltZTogMCxcbiAgICAgIHBsYXllclJlYWR5OiBmYWxzZSxcbiAgICB9XG5cbiAgICB0aGlzLl9iaW5kKCdoYW5kbGVDbGljaycpXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpbml0UGxheWVyKHtcbiAgICAgIHBsYXllcjogJyMnICsgdGhpcy5wcm9wcy5wbGF5ZXIsXG4gICAgICBjb250YWluZXI6ICcjJyArIHRoaXMucHJvcHMuY29udGFpbmVyLFxuICAgICAgdGl0bGU6IHRoaXMucHJvcHMudGl0bGUsXG4gICAgICBmaWxlOiB0aGlzLnByb3BzLmZpbGUsXG4gICAgICByZWFkeTogKCkgPT4gdGhpcy5zZXRTdGF0ZSh7cGxheWVyUmVhZHk6IHRydWV9KSxcbiAgICAgIHRpbWV1cGRhdGU6IChldnQpID0+IHRoaXMuc2V0U3RhdGUoe2N1cnJlbnRUaW1lOiBldnQualBsYXllci5zdGF0dXMuY3VycmVudFRpbWV9KVxuICAgIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxkaXY+XG4gICAgICA8ZGl2IGlkPXt0aGlzLnByb3BzLnBsYXllcn0gY2xhc3NOYW1lPVwianAtanBsYXllclwiPjwvZGl2PlxuICAgICAge3JlbmRlclBsYXllckNvbnRhaW5lcih0aGlzKX1cbiAgICAgIHt0aGlzLnJlbmRlclBhbmVsKCl9XG4gICAgPC9kaXY+XG4gIH1cblxuICByZW5kZXJQYW5lbCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5wbGF5ZXJSZWFkeSAmJiA8ZGl2PlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfT5QbGF5IGF0IHNwZWNpZmljIHRpbWU8L2J1dHRvbj5cbiAgICAgIDxzcGFuPnt0aGlzLnN0YXRlLmN1cnJlbnRUaW1lfTwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgfVxuXG4gIGhhbmRsZUNsaWNrKCkge1xuICAgICQoJyMnICsgdGhpcy5wcm9wcy5wbGF5ZXIpLmpQbGF5ZXIoJ3BsYXknLCAxMjIpXG4gIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVyUGxheWVyQ29udGFpbmVyKGNvbXApIHtcbiAgcmV0dXJuIDxkaXYgaWQ9e2NvbXAucHJvcHMuY29udGFpbmVyfSBjbGFzc05hbWU9XCJqcC1hdWRpb1wiIHJvbGU9XCJhcHBsaWNhdGlvblwiIGFyaWEtbGFiZWw9XCJtZWRpYSBwbGF5ZXJcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImpwLXR5cGUtc2luZ2xlXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImpwLWd1aSBqcC1pbnRlcmZhY2VcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJqcC12b2x1bWUtY29udHJvbHNcIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImpwLW11dGVcIiByb2xlPVwiYnV0dG9uXCIgdGFiSW5kZXg9XCIwXCI+bXV0ZTwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwianAtdm9sdW1lLW1heFwiIHJvbGU9XCJidXR0b25cIiB0YWJJbmRleD1cIjBcIj5tYXggdm9sdW1lPC9idXR0b24+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJqcC12b2x1bWUtYmFyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImpwLXZvbHVtZS1iYXItdmFsdWVcIj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwianAtY29udHJvbHMtaG9sZGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJqcC1jb250cm9sc1wiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJqcC1wbGF5XCIgcm9sZT1cImJ1dHRvblwiIHRhYkluZGV4PVwiMFwiPnBsYXk8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwianAtc3RvcFwiIHJvbGU9XCJidXR0b25cIiB0YWJJbmRleD1cIjBcIj5zdG9wPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJqcC1wcm9ncmVzc1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJqcC1zZWVrLWJhclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImpwLXBsYXktYmFyXCI+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImpwLWN1cnJlbnQtdGltZVwiIHJvbGU9XCJ0aW1lclwiIGFyaWEtbGFiZWw9XCJ0aW1lXCI+Jm5ic3A7PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJqcC1kdXJhdGlvblwiIHJvbGU9XCJ0aW1lclwiIGFyaWEtbGFiZWw9XCJkdXJhdGlvblwiPiZuYnNwOzwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwianAtdG9nZ2xlc1wiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJqcC1yZXBlYXRcIiByb2xlPVwiYnV0dG9uXCIgdGFiSW5kZXg9XCIwXCI+cmVwZWF0PC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImpwLWRldGFpbHNcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJqcC10aXRsZVwiIGFyaWEtbGFiZWw9XCJ0aXRsZVwiPiZuYnNwOzwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImpwLW5vLXNvbHV0aW9uXCI+XG4gICAgICAgIDxzcGFuPlVwZGF0ZSBSZXF1aXJlZDwvc3Bhbj5cbiAgICAgICAgVG8gcGxheSB0aGUgbWVkaWEgeW91IHdpbGwgbmVlZCB0byBlaXRoZXIgdXBkYXRlIHlvdXIgYnJvd3NlciB0byBhIHJlY2VudCB2ZXJzaW9uIG9yIHVwZGF0ZSB5b3VyIDxhIGhyZWY9XCJodHRwOi8vZ2V0LmFkb2JlLmNvbS9mbGFzaHBsYXllci9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5GbGFzaCBwbHVnaW48L2E+LlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxufVxuXG5cblJlYWN0RE9NLnJlbmRlcihcbiAgPEpQbGF5ZXJcbiAgICBwbGF5ZXI9J2pwX2NvbnRhaW5lcl8xJ1xuICAgIGNvbnRhaW5lcj0nanBfY29udGFpbmVyXzEnXG4gICAgdGl0bGU9J+avj+S4quS6uumDveaYr+mil+a1geaYnydcbiAgICBmaWxlPSdsaXV4aW5nLm00YScgLz4sXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JylcbilcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuXG5leHBvcnQgY2xhc3MgQmFzZUNvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIF9iaW5kKC4uLm1ldGhvZHMpIHtcbiAgICBtZXRob2RzLmZvckVhY2goKG1ldGhvZCkgPT4ge1xuICAgICAgdGhpc1ttZXRob2RdID0gdGhpc1ttZXRob2RdLmJpbmQodGhpcylcbiAgICB9KVxuICB9XG59XG4iXX0=
