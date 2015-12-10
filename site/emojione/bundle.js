(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _helper = require('../lib/helper');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

emojione.imageType = 'svg';
var shortnames = emojione.shortnames.split('|');

function getRandomShortname() {
  var index = _lodash2.default.random(0, shortnames.length - 1);
  return shortnames[index];
}

function shortnameToUrl(shortname) {
  var item = emojione.emojioneList[shortname];
  var unicode = item[item.length - 1].toUpperCase();
  return emojione.imagePathSVG + unicode + '.svg' + emojione.cacheBustParam;
}

var EmojiOne = (function (_BaseComponent) {
  _inherits(EmojiOne, _BaseComponent);

  function EmojiOne(props) {
    _classCallCheck(this, EmojiOne);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(EmojiOne).call(this, props));

    _this.state = {
      shortname: getRandomShortname()
    };
    _this._bind('handleClick');
    return _this;
  }

  _createClass(EmojiOne, [{
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
        _react2.default.createElement('img', { width: '150px', src: shortnameToUrl(this.state.shortname) })
      );
    }
  }, {
    key: 'handleClick',
    value: function handleClick() {
      this.setState({ shortname: getRandomShortname() });
    }
  }]);

  return EmojiOne;
})(_helper.BaseComponent);

_reactDom2.default.render(_react2.default.createElement(EmojiOne, null), document.getElementById('content'));

},{"../lib/helper":2,"lodash":undefined,"react":undefined,"react-dom":undefined}],2:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzaXRlL2Vtb2ppb25lL2FwcC5iYWJlbCIsInNpdGUvbGliL2hlbHBlci5iYWJlbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTUEsUUFBUSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUE7QUFDMUIsSUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7O0FBR2pELFNBQVMsa0JBQWtCLEdBQUc7QUFDNUIsTUFBSSxLQUFLLEdBQUcsaUJBQUUsTUFBTSxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFBO0FBQzlDLFNBQU8sVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFBO0NBQ3pCOztBQUVELFNBQVMsY0FBYyxDQUFDLFNBQVMsRUFBRTtBQUNqQyxNQUFJLElBQUksR0FBRyxRQUFRLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFBO0FBQzNDLE1BQUksT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFBO0FBQ2pELFNBQU8sUUFBUSxDQUFDLFlBQVksR0FBRyxPQUFPLEdBQUcsTUFBTSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUE7Q0FDMUU7O0lBR0ssUUFBUTtZQUFSLFFBQVE7O0FBQ1osV0FESSxRQUFRLENBQ0EsS0FBSyxFQUFFOzBCQURmLFFBQVE7O3VFQUFSLFFBQVEsYUFFSixLQUFLOztBQUNYLFVBQUssS0FBSyxHQUFHO0FBQ1gsZUFBUyxFQUFFLGtCQUFrQixFQUFFO0tBQ2hDLENBQUE7QUFDRCxVQUFLLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQTs7R0FDMUI7O2VBUEcsUUFBUTs7NkJBU0g7QUFDUCxhQUFPOzs7UUFDTDs7WUFBUSxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsQUFBQzs7U0FBc0I7UUFDeEQseUNBQU07O1FBQ0s7OztVQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUztTQUFRO1FBQzlDLHlDQUFNO1FBRU4seUNBQU07O1FBRU47O1lBQU0sS0FBSyxFQUFFLEVBQUMsUUFBUSxFQUFFLEtBQUssRUFBQyxBQUFDO1VBQzFCLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQztTQUMvQztRQUNQLHlDQUFNOztRQUVOLHVDQUFLLEtBQUssRUFBQyxPQUFPLEVBQUMsR0FBRyxFQUFFLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxBQUFDLEdBQUc7T0FDNUQsQ0FBQTtLQUNQOzs7a0NBRWE7QUFDWixVQUFJLENBQUMsUUFBUSxDQUFDLEVBQUMsU0FBUyxFQUFFLGtCQUFrQixFQUFFLEVBQUMsQ0FBQyxDQUFBO0tBQ2pEOzs7U0E3QkcsUUFBUTtXQW5CTixhQUFhOztBQW9EckIsbUJBQVMsTUFBTSxDQUNiLDhCQUFDLFFBQVEsT0FBRyxFQUNaLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQ25DLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ3ZEWSxhQUFhLFdBQWIsYUFBYTtZQUFiLGFBQWE7O1dBQWIsYUFBYTswQkFBYixhQUFhOztrRUFBYixhQUFhOzs7ZUFBYixhQUFhOzs0QkFDTjs7O3dDQUFULE9BQU87QUFBUCxlQUFPOzs7QUFDZCxhQUFPLENBQUMsT0FBTyxDQUFDLFVBQUMsTUFBTSxFQUFLO0FBQzFCLGVBQUssTUFBTSxDQUFDLEdBQUcsT0FBSyxNQUFNLENBQUMsQ0FBQyxJQUFJLFFBQU0sQ0FBQTtPQUN2QyxDQUFDLENBQUE7S0FDSDs7O1NBTFUsYUFBYTtHQUFTLGdCQUFNLFNBQVMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcbmltcG9ydCB7QmFzZUNvbXBvbmVudH0gZnJvbSAnLi4vbGliL2hlbHBlcidcblxuXG5lbW9qaW9uZS5pbWFnZVR5cGUgPSAnc3ZnJ1xuY29uc3Qgc2hvcnRuYW1lcyA9IGVtb2ppb25lLnNob3J0bmFtZXMuc3BsaXQoJ3wnKVxuXG5cbmZ1bmN0aW9uIGdldFJhbmRvbVNob3J0bmFtZSgpIHtcbiAgbGV0IGluZGV4ID0gXy5yYW5kb20oMCwgc2hvcnRuYW1lcy5sZW5ndGggLSAxKVxuICByZXR1cm4gc2hvcnRuYW1lc1tpbmRleF1cbn1cblxuZnVuY3Rpb24gc2hvcnRuYW1lVG9Vcmwoc2hvcnRuYW1lKSB7XG4gIGxldCBpdGVtID0gZW1vamlvbmUuZW1vamlvbmVMaXN0W3Nob3J0bmFtZV1cbiAgbGV0IHVuaWNvZGUgPSBpdGVtW2l0ZW0ubGVuZ3RoIC0gMV0udG9VcHBlckNhc2UoKVxuICByZXR1cm4gZW1vamlvbmUuaW1hZ2VQYXRoU1ZHICsgdW5pY29kZSArICcuc3ZnJyArIGVtb2ppb25lLmNhY2hlQnVzdFBhcmFtXG59XG5cblxuY2xhc3MgRW1vamlPbmUgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2hvcnRuYW1lOiBnZXRSYW5kb21TaG9ydG5hbWUoKSxcbiAgICB9XG4gICAgdGhpcy5fYmluZCgnaGFuZGxlQ2xpY2snKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8ZGl2PlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfT5SYW5kb20gZW1vamk8L2J1dHRvbj5cbiAgICAgIDxiciAvPlxuICAgICAgU2hvcnRuYW1lOiA8Y29kZT57dGhpcy5zdGF0ZS5zaG9ydG5hbWV9PC9jb2RlPlxuICAgICAgPGJyIC8+XG5cbiAgICAgIDxiciAvPlxuICAgICAgVW5pY29kZTpcbiAgICAgIDxzcGFuIHN0eWxlPXt7Zm9udFNpemU6ICc4ZW0nfX0+XG4gICAgICAgICAge2Vtb2ppb25lLnNob3J0bmFtZVRvVW5pY29kZSh0aGlzLnN0YXRlLnNob3J0bmFtZSl9XG4gICAgICA8L3NwYW4+XG4gICAgICA8YnIgLz5cbiAgICAgIFNWRzpcbiAgICAgIDxpbWcgd2lkdGg9XCIxNTBweFwiIHNyYz17c2hvcnRuYW1lVG9VcmwodGhpcy5zdGF0ZS5zaG9ydG5hbWUpfSAvPlxuICAgIDwvZGl2PlxuICB9XG5cbiAgaGFuZGxlQ2xpY2soKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7c2hvcnRuYW1lOiBnZXRSYW5kb21TaG9ydG5hbWUoKX0pXG4gIH1cbn1cblxuXG5SZWFjdERPTS5yZW5kZXIoXG4gIDxFbW9qaU9uZSAvPixcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKVxuKVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5cbmV4cG9ydCBjbGFzcyBCYXNlQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgX2JpbmQoLi4ubWV0aG9kcykge1xuICAgIG1ldGhvZHMuZm9yRWFjaCgobWV0aG9kKSA9PiB7XG4gICAgICB0aGlzW21ldGhvZF0gPSB0aGlzW21ldGhvZF0uYmluZCh0aGlzKVxuICAgIH0pXG4gIH1cbn1cbiJdfQ==
