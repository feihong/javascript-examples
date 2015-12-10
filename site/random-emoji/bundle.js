(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"react":undefined}],2:[function(require,module,exports){
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
  return emojione.imagePathSVGSprites + '#emoji-' + unicode;
}

// You have to use raw HTML here because JSX does not support namespaces.
function getSvgHtml(shortname) {
  return '<use xlink:href=' + shortnameToUrl(shortname) + '></use>';
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
        _react2.default.createElement('svg', { width: '130px', dangerouslySetInnerHTML: { __html: getSvgHtml(this.state.shortname) } })
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

},{"../lib/helper":1,"lodash":undefined,"react":undefined,"react-dom":undefined}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzaXRlL2xpYi9oZWxwZXIuYmFiZWwiLCJzaXRlL3JhbmRvbS1lbW9qaS9hcHAuYmFiZWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNHYSxhQUFhLFdBQWIsYUFBYTtZQUFiLGFBQWE7O1dBQWIsYUFBYTswQkFBYixhQUFhOztrRUFBYixhQUFhOzs7ZUFBYixhQUFhOzs0QkFDTjs7O3dDQUFULE9BQU87QUFBUCxlQUFPOzs7QUFDZCxhQUFPLENBQUMsT0FBTyxDQUFDLFVBQUMsTUFBTSxFQUFLO0FBQzFCLGVBQUssTUFBTSxDQUFDLEdBQUcsT0FBSyxNQUFNLENBQUMsQ0FBQyxJQUFJLFFBQU0sQ0FBQTtPQUN2QyxDQUFDLENBQUE7S0FDSDs7O1NBTFUsYUFBYTtHQUFTLGdCQUFNLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDR2xELFFBQVEsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFBO0FBQzFCLElBQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBOztBQUdqRCxTQUFTLGtCQUFrQixHQUFHO0FBQzVCLE1BQUksS0FBSyxHQUFHLGlCQUFFLE1BQU0sQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQTtBQUM5QyxTQUFPLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQTtDQUN6Qjs7QUFFRCxTQUFTLGNBQWMsQ0FBQyxTQUFTLEVBQUU7QUFDakMsTUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQTtBQUMzQyxNQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQTtBQUNqRCxTQUFPLFFBQVEsQ0FBQyxtQkFBbUIsR0FBRyxTQUFTLEdBQUcsT0FBTyxDQUFBO0NBQzFEOzs7QUFBQSxBQUdELFNBQVMsVUFBVSxDQUFDLFNBQVMsRUFBRTtBQUM3Qiw4QkFBMEIsY0FBYyxDQUFDLFNBQVMsQ0FBQyxhQUFTO0NBQzdEOztJQUdLLFFBQVE7WUFBUixRQUFROztBQUNaLFdBREksUUFBUSxDQUNBLEtBQUssRUFBRTswQkFEZixRQUFROzt1RUFBUixRQUFRLGFBRUosS0FBSzs7QUFDWCxVQUFLLEtBQUssR0FBRztBQUNYLGVBQVMsRUFBRSxrQkFBa0IsRUFBRTtLQUNoQyxDQUFBO0FBQ0QsVUFBSyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUE7O0dBQzFCOztlQVBHLFFBQVE7OzZCQVNIO0FBQ1AsYUFBTzs7O1FBQ0w7O1lBQVEsT0FBTyxFQUFFLElBQUksQ0FBQyxXQUFXLEFBQUM7O1NBQXNCO1FBQ3hELHlDQUFNOztRQUNjLFVBQVUsQ0FBQyxNQUFNO1FBQ3JDLHlDQUFNOztRQUNLOzs7VUFBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVM7U0FBUTtRQUM5Qyx5Q0FBTTtRQUVOLHlDQUFNOztRQUVOOztZQUFNLEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUMsQUFBQztVQUMxQixRQUFRLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUM7U0FDL0M7UUFDUCx5Q0FBTTs7UUFFTix1Q0FBSyxLQUFLLEVBQUMsT0FBTyxFQUFDLHVCQUF1QixFQUFFLEVBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFDLEFBQUMsR0FBRztPQUN0RixDQUFBO0tBQ1A7OztrQ0FFYTtBQUNaLFVBQUksQ0FBQyxRQUFRLENBQUMsRUFBQyxTQUFTLEVBQUUsa0JBQWtCLEVBQUUsRUFBQyxDQUFDLENBQUE7S0FDakQ7OztTQS9CRyxRQUFRO1dBeEJOLGFBQWE7O0FBMkRyQixtQkFBUyxNQUFNLENBQ2IsOEJBQUMsUUFBUSxPQUFHLEVBQ1osUUFBUSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FDbkMsQ0FBQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cblxuZXhwb3J0IGNsYXNzIEJhc2VDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBfYmluZCguLi5tZXRob2RzKSB7XG4gICAgbWV0aG9kcy5mb3JFYWNoKChtZXRob2QpID0+IHtcbiAgICAgIHRoaXNbbWV0aG9kXSA9IHRoaXNbbWV0aG9kXS5iaW5kKHRoaXMpXG4gICAgfSlcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcbmltcG9ydCB7QmFzZUNvbXBvbmVudH0gZnJvbSAnLi4vbGliL2hlbHBlcidcblxuXG5lbW9qaW9uZS5pbWFnZVR5cGUgPSAnc3ZnJ1xuY29uc3Qgc2hvcnRuYW1lcyA9IGVtb2ppb25lLnNob3J0bmFtZXMuc3BsaXQoJ3wnKVxuXG5cbmZ1bmN0aW9uIGdldFJhbmRvbVNob3J0bmFtZSgpIHtcbiAgbGV0IGluZGV4ID0gXy5yYW5kb20oMCwgc2hvcnRuYW1lcy5sZW5ndGggLSAxKVxuICByZXR1cm4gc2hvcnRuYW1lc1tpbmRleF1cbn1cblxuZnVuY3Rpb24gc2hvcnRuYW1lVG9Vcmwoc2hvcnRuYW1lKSB7XG4gIGxldCBpdGVtID0gZW1vamlvbmUuZW1vamlvbmVMaXN0W3Nob3J0bmFtZV1cbiAgbGV0IHVuaWNvZGUgPSBpdGVtW2l0ZW0ubGVuZ3RoIC0gMV0udG9VcHBlckNhc2UoKVxuICByZXR1cm4gZW1vamlvbmUuaW1hZ2VQYXRoU1ZHU3ByaXRlcyArICcjZW1vamktJyArIHVuaWNvZGVcbn1cblxuLy8gWW91IGhhdmUgdG8gdXNlIHJhdyBIVE1MIGhlcmUgYmVjYXVzZSBKU1ggZG9lcyBub3Qgc3VwcG9ydCBuYW1lc3BhY2VzLlxuZnVuY3Rpb24gZ2V0U3ZnSHRtbChzaG9ydG5hbWUpIHtcbiAgcmV0dXJuIGA8dXNlIHhsaW5rOmhyZWY9JHtzaG9ydG5hbWVUb1VybChzaG9ydG5hbWUpfT48L3VzZT5gXG59XG5cblxuY2xhc3MgRW1vamlPbmUgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2hvcnRuYW1lOiBnZXRSYW5kb21TaG9ydG5hbWUoKSxcbiAgICB9XG4gICAgdGhpcy5fYmluZCgnaGFuZGxlQ2xpY2snKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8ZGl2PlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfT5SYW5kb20gZW1vamk8L2J1dHRvbj5cbiAgICAgIDxiciAvPlxuICAgICAgVG90YWwgIyBvZiBlbW9qaXM6IHtzaG9ydG5hbWVzLmxlbmd0aH1cbiAgICAgIDxiciAvPlxuICAgICAgU2hvcnRuYW1lOiA8Y29kZT57dGhpcy5zdGF0ZS5zaG9ydG5hbWV9PC9jb2RlPlxuICAgICAgPGJyIC8+XG5cbiAgICAgIDxiciAvPlxuICAgICAgVW5pY29kZTpcbiAgICAgIDxzcGFuIHN0eWxlPXt7Zm9udFNpemU6ICc4ZW0nfX0+XG4gICAgICAgICAge2Vtb2ppb25lLnNob3J0bmFtZVRvVW5pY29kZSh0aGlzLnN0YXRlLnNob3J0bmFtZSl9XG4gICAgICA8L3NwYW4+XG4gICAgICA8YnIgLz5cbiAgICAgIFNWRzpcbiAgICAgIDxzdmcgd2lkdGg9XCIxMzBweFwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBnZXRTdmdIdG1sKHRoaXMuc3RhdGUuc2hvcnRuYW1lKX19IC8+XG4gICAgPC9kaXY+XG4gIH1cblxuICBoYW5kbGVDbGljaygpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtzaG9ydG5hbWU6IGdldFJhbmRvbVNob3J0bmFtZSgpfSlcbiAgfVxufVxuXG5cblJlYWN0RE9NLnJlbmRlcihcbiAgPEVtb2ppT25lIC8+LFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpXG4pXG4iXX0=
