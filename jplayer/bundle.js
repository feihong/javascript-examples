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

$(function () {
  initPlayer({
    playerId: 'jquery_jplayer_1',
    containerId: 'jp_container_1',
    title: '每个人都是颗流星',
    file: 'liuxing.m4a'
  });
});

function initPlayer(config) {
  $('#' + config.playerId).jPlayer({
    ready: function ready() {
      $(this).jPlayer('setMedia', {
        title: config.title,
        m4a: window.site + 'audio/' + config.file
      });
    },
    timeupdate: function timeupdate(evt) {
      console.log('Current time: ' + evt.jPlayer.status.currentTime);
    },
    cssSelectorAncestor: '#' + config.containerId,
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

    return _possibleConstructorReturn(this, Object.getPrototypeOf(JPlayer).call(this, props));
  }

  _createClass(JPlayer, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'button',
        { onClick: this.handleClick },
        'Play'
      );
    }
  }, {
    key: 'handleClick',
    value: function handleClick() {
      $('#jquery_jplayer_1').jPlayer('play', 122);
    }
  }]);

  return JPlayer;
})(_helper.BaseComponent);

_reactDom2.default.render(_react2.default.createElement(JPlayer, null), document.getElementById('content'));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzaXRlL2pwbGF5ZXIvYXBwLmJhYmVsIiwic2l0ZS9saWIvaGVscGVyLmJhYmVsIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0tBLENBQUMsQ0FBQyxZQUFNO0FBQ04sWUFBVSxDQUFDO0FBQ1QsWUFBUSxFQUFFLGtCQUFrQjtBQUM1QixlQUFXLEVBQUUsZ0JBQWdCO0FBQzdCLFNBQUssRUFBRSxVQUFVO0FBQ2pCLFFBQUksRUFBRSxhQUFhO0dBQ3BCLENBQUMsQ0FBQTtDQUNILENBQUMsQ0FBQTs7QUFFRixTQUFTLFVBQVUsQ0FBQyxNQUFNLEVBQUU7QUFDMUIsR0FBQyxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDO0FBQy9CLFNBQUssRUFBRSxpQkFBVztBQUNoQixPQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRTtBQUMxQixhQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7QUFDbkIsV0FBRyxFQUFLLE1BQU0sQ0FBQyxJQUFJLGNBQVMsTUFBTSxDQUFDLElBQUksQUFBRTtPQUMxQyxDQUFDLENBQUE7S0FDSDtBQUNELGNBQVUsRUFBRSxvQkFBUyxHQUFHLEVBQUU7QUFDeEIsYUFBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztLQUNoRTtBQUNELHVCQUFtQixFQUFFLEdBQUcsR0FBRyxNQUFNLENBQUMsV0FBVztBQUM3QyxXQUFPLEVBQUUsK0RBQStEO0FBQ3hFLFlBQVEsRUFBRSxLQUFLO0FBQ2YscUJBQWlCLEVBQUUsSUFBSTtBQUN2QixZQUFRLEVBQUUsS0FBSztBQUNmLGlCQUFhLEVBQUUsSUFBSTtBQUNuQixjQUFVLEVBQUUsSUFBSTtBQUNoQixxQkFBaUIsRUFBRSxJQUFJO0FBQ3ZCLGtCQUFjLEVBQUUsSUFBSTtHQUNyQixDQUFDLENBQUE7Q0FDSDs7SUFHSyxPQUFPO1lBQVAsT0FBTzs7QUFDWCxXQURJLE9BQU8sQ0FDQyxLQUFLLEVBQUU7MEJBRGYsT0FBTzs7a0VBQVAsT0FBTyxhQUVILEtBQUs7R0FDWjs7ZUFIRyxPQUFPOzs2QkFLRjtBQUNQLGFBQU87O1VBQVEsT0FBTyxFQUFFLElBQUksQ0FBQyxXQUFXLEFBQUM7O09BQWMsQ0FBQTtLQUN4RDs7O2tDQUVhO0FBQ1osT0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQTtLQUM1Qzs7O1NBWEcsT0FBTztXQXBDTCxhQUFhOztBQWtEckIsbUJBQVMsTUFBTSxDQUNiLDhCQUFDLE9BQU8sT0FBRyxFQUNYLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQ25DLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ3BEWSxhQUFhLFdBQWIsYUFBYTtZQUFiLGFBQWE7O1dBQWIsYUFBYTswQkFBYixhQUFhOztrRUFBYixhQUFhOzs7ZUFBYixhQUFhOzs0QkFDTjs7O3dDQUFULE9BQU87QUFBUCxlQUFPOzs7QUFDZCxhQUFPLENBQUMsT0FBTyxDQUFDLFVBQUMsTUFBTSxFQUFLO0FBQzFCLGVBQUssTUFBTSxDQUFDLEdBQUcsT0FBSyxNQUFNLENBQUMsQ0FBQyxJQUFJLFFBQU0sQ0FBQTtPQUN2QyxDQUFDLENBQUE7S0FDSDs7O1NBTFUsYUFBYTtHQUFTLGdCQUFNLFNBQVMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCB7QmFzZUNvbXBvbmVudH0gZnJvbSAnLi4vbGliL2hlbHBlcidcblxuXG4kKCgpID0+IHtcbiAgaW5pdFBsYXllcih7XG4gICAgcGxheWVySWQ6ICdqcXVlcnlfanBsYXllcl8xJyxcbiAgICBjb250YWluZXJJZDogJ2pwX2NvbnRhaW5lcl8xJyxcbiAgICB0aXRsZTogJ+avj+S4quS6uumDveaYr+mil+a1geaYnycsXG4gICAgZmlsZTogJ2xpdXhpbmcubTRhJyxcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGluaXRQbGF5ZXIoY29uZmlnKSB7XG4gICQoJyMnICsgY29uZmlnLnBsYXllcklkKS5qUGxheWVyKHtcbiAgICByZWFkeTogZnVuY3Rpb24oKSB7XG4gICAgICAkKHRoaXMpLmpQbGF5ZXIoJ3NldE1lZGlhJywge1xuICAgICAgICB0aXRsZTogY29uZmlnLnRpdGxlLFxuICAgICAgICBtNGE6IGAke3dpbmRvdy5zaXRlfWF1ZGlvLyR7Y29uZmlnLmZpbGV9YFxuICAgICAgfSlcbiAgICB9LFxuICAgIHRpbWV1cGRhdGU6IGZ1bmN0aW9uKGV2dCkge1xuICAgICAgY29uc29sZS5sb2coJ0N1cnJlbnQgdGltZTogJyArIGV2dC5qUGxheWVyLnN0YXR1cy5jdXJyZW50VGltZSk7XG4gICAgfSxcbiAgICBjc3NTZWxlY3RvckFuY2VzdG9yOiAnIycgKyBjb25maWcuY29udGFpbmVySWQsXG4gICAgc3dmUGF0aDogJ2h0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2pwbGF5ZXIvMi45LjIvanBsYXllci8nLFxuICAgIHN1cHBsaWVkOiAnbTRhJyxcbiAgICB1c2VTdGF0ZUNsYXNzU2tpbjogdHJ1ZSxcbiAgICBhdXRvQmx1cjogZmFsc2UsXG4gICAgc21vb3RoUGxheUJhcjogdHJ1ZSxcbiAgICBrZXlFbmFibGVkOiB0cnVlLFxuICAgIHJlbWFpbmluZ0R1cmF0aW9uOiB0cnVlLFxuICAgIHRvZ2dsZUR1cmF0aW9uOiB0cnVlXG4gIH0pXG59XG5cblxuY2xhc3MgSlBsYXllciBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9PlBsYXk8L2J1dHRvbj5cbiAgfVxuXG4gIGhhbmRsZUNsaWNrKCkge1xuICAgICQoJyNqcXVlcnlfanBsYXllcl8xJykualBsYXllcigncGxheScsIDEyMilcbiAgfVxufVxuXG5SZWFjdERPTS5yZW5kZXIoXG4gIDxKUGxheWVyIC8+LFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpXG4pXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cblxuZXhwb3J0IGNsYXNzIEJhc2VDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBfYmluZCguLi5tZXRob2RzKSB7XG4gICAgbWV0aG9kcy5mb3JFYWNoKChtZXRob2QpID0+IHtcbiAgICAgIHRoaXNbbWV0aG9kXSA9IHRoaXNbbWV0aG9kXS5iaW5kKHRoaXMpXG4gICAgfSlcbiAgfVxufVxuIl19
