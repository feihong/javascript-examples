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

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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

_reactDom2.default.render(_react2.default.createElement(RandomEmoji, null), document.getElementById('content'));

},{"../lib/helper":1,"lodash":undefined,"react":undefined,"react-dom":undefined}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzaXRlL2xpYi9oZWxwZXIuYmFiZWwiLCJzaXRlL3JhbmRvbS1lbW9qaS9hcHAuYmFiZWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNHYSxhQUFhLFdBQWIsYUFBYTtZQUFiLGFBQWE7O1dBQWIsYUFBYTswQkFBYixhQUFhOztrRUFBYixhQUFhOzs7ZUFBYixhQUFhOzs0QkFDTjs7O3dDQUFULE9BQU87QUFBUCxlQUFPOzs7QUFDZCxhQUFPLENBQUMsT0FBTyxDQUFDLFVBQUMsTUFBTSxFQUFLO0FBQzFCLGVBQUssTUFBTSxDQUFDLEdBQUcsT0FBSyxNQUFNLENBQUMsQ0FBQyxJQUFJLFFBQU0sQ0FBQTtPQUN2QyxDQUFDLENBQUE7S0FDSDs7O1NBTFUsYUFBYTtHQUFTLGdCQUFNLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNHbEQsSUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7O0FBR2pELFNBQVMsa0JBQWtCLEdBQUc7QUFDNUIsTUFBSSxLQUFLLEdBQUcsaUJBQUUsTUFBTSxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFBO0FBQzlDLFNBQU8sVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFBO0NBQ3pCOztBQUVELFNBQVMsY0FBYyxDQUFDLFNBQVMsRUFBRTtBQUNqQyxNQUFJLElBQUksR0FBRyxRQUFRLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFBO0FBQzNDLE1BQUksT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFBO0FBQ25DLFNBQU8sUUFBUSxDQUFDLG1CQUFtQixHQUFHLFNBQVMsR0FBRyxPQUFPLENBQUE7Q0FDMUQ7O0lBR0ssV0FBVztZQUFYLFdBQVc7O0FBQ2YsV0FESSxXQUFXLENBQ0gsS0FBSyxFQUFFOzBCQURmLFdBQVc7O3VFQUFYLFdBQVcsYUFFUCxLQUFLOztBQUNYLFVBQUssS0FBSyxHQUFHO0FBQ1gsZUFBUyxFQUFFLGtCQUFrQixFQUFFO0tBQ2hDLENBQUE7QUFDRCxVQUFLLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQTs7R0FDMUI7O2VBUEcsV0FBVzs7NkJBU047QUFDUCxhQUFPOzs7UUFDTDs7WUFBUSxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsQUFBQzs7U0FBc0I7UUFDeEQseUNBQU07O1FBQ2MsVUFBVSxDQUFDLE1BQU07UUFDckMseUNBQU07O1FBQ0s7OztVQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUztTQUFRO1FBQzlDLHlDQUFNO1FBRU4seUNBQU07O1FBRU47O1lBQU0sS0FBSyxFQUFFLEVBQUMsUUFBUSxFQUFFLEtBQUssRUFBQyxBQUFDO1VBQzFCLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQztTQUMvQztRQUNQLHlDQUFNOztRQUVOLDhCQUFDLEdBQUcsSUFBQyxLQUFLLEVBQUMsT0FBTyxFQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQUFBQyxHQUFHO09BQ2xELENBQUE7S0FDUDs7O2tDQUVhO0FBQ1osVUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFDLFNBQVMsRUFBRSxrQkFBa0IsRUFBRSxFQUFDLENBQUMsQ0FBQTtLQUNqRDs7O1NBL0JHLFdBQVc7V0FsQlQsYUFBYTs7SUFxRGYsR0FBRztZQUFILEdBQUc7O1dBQUgsR0FBRzswQkFBSCxHQUFHOztrRUFBSCxHQUFHOzs7ZUFBSCxHQUFHOzs2QkFDRTtBQUNQLGFBQU8sa0RBQVMsSUFBSSxDQUFDLEtBQUssSUFBRSx1QkFBdUIsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLEFBQUMsSUFBRyxDQUFBO0tBQzNFOzs7Ozs7aUNBR1k7QUFDWCxVQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQTtBQUNwQyxhQUFPLEVBQUMsTUFBTSx1QkFBcUIsY0FBYyxDQUFDLFNBQVMsQ0FBQyxZQUFTLEVBQUMsQ0FBQTtLQUN2RTs7O1NBVEcsR0FBRztHQUFTLGdCQUFNLFNBQVM7O0FBYWpDLG1CQUFTLE1BQU0sQ0FDYiw4QkFBQyxXQUFXLE9BQUcsRUFDZixRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUNuQyxDQUFBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuXG5leHBvcnQgY2xhc3MgQmFzZUNvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIF9iaW5kKC4uLm1ldGhvZHMpIHtcbiAgICBtZXRob2RzLmZvckVhY2goKG1ldGhvZCkgPT4ge1xuICAgICAgdGhpc1ttZXRob2RdID0gdGhpc1ttZXRob2RdLmJpbmQodGhpcylcbiAgICB9KVxuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IHtCYXNlQ29tcG9uZW50fSBmcm9tICcuLi9saWIvaGVscGVyJ1xuXG5cbmNvbnN0IHNob3J0bmFtZXMgPSBlbW9qaW9uZS5zaG9ydG5hbWVzLnNwbGl0KCd8JylcblxuXG5mdW5jdGlvbiBnZXRSYW5kb21TaG9ydG5hbWUoKSB7XG4gIGxldCBpbmRleCA9IF8ucmFuZG9tKDAsIHNob3J0bmFtZXMubGVuZ3RoIC0gMSlcbiAgcmV0dXJuIHNob3J0bmFtZXNbaW5kZXhdXG59XG5cbmZ1bmN0aW9uIHNob3J0bmFtZVRvVXJsKHNob3J0bmFtZSkge1xuICBsZXQgaXRlbSA9IGVtb2ppb25lLmVtb2ppb25lTGlzdFtzaG9ydG5hbWVdXG4gIGxldCB1bmljb2RlID0gaXRlbVtpdGVtLmxlbmd0aCAtIDFdXG4gIHJldHVybiBlbW9qaW9uZS5pbWFnZVBhdGhTVkdTcHJpdGVzICsgJyNlbW9qaS0nICsgdW5pY29kZVxufVxuXG5cbmNsYXNzIFJhbmRvbUVtb2ppIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNob3J0bmFtZTogZ2V0UmFuZG9tU2hvcnRuYW1lKCksXG4gICAgfVxuICAgIHRoaXMuX2JpbmQoJ2hhbmRsZUNsaWNrJylcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPGRpdj5cbiAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30+UmFuZG9tIGVtb2ppPC9idXR0b24+XG4gICAgICA8YnIgLz5cbiAgICAgIFRvdGFsICMgb2YgZW1vamlzOiB7c2hvcnRuYW1lcy5sZW5ndGh9XG4gICAgICA8YnIgLz5cbiAgICAgIFNob3J0bmFtZTogPGNvZGU+e3RoaXMuc3RhdGUuc2hvcnRuYW1lfTwvY29kZT5cbiAgICAgIDxiciAvPlxuXG4gICAgICA8YnIgLz5cbiAgICAgIFVuaWNvZGU6XG4gICAgICA8c3BhbiBzdHlsZT17e2ZvbnRTaXplOiAnOGVtJ319PlxuICAgICAgICAgIHtlbW9qaW9uZS5zaG9ydG5hbWVUb1VuaWNvZGUodGhpcy5zdGF0ZS5zaG9ydG5hbWUpfVxuICAgICAgPC9zcGFuPlxuICAgICAgPGJyIC8+XG4gICAgICBTVkc6XG4gICAgICA8U1ZHIHdpZHRoPScxMzBweCcgc2hvcnRuYW1lPXt0aGlzLnN0YXRlLnNob3J0bmFtZX0gLz5cbiAgICA8L2Rpdj5cbiAgfVxuXG4gIGhhbmRsZUNsaWNrKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe3Nob3J0bmFtZTogZ2V0UmFuZG9tU2hvcnRuYW1lKCl9KVxuICB9XG59XG5cblxuY2xhc3MgU1ZHIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8c3ZnIHsuLi50aGlzLnByb3BzfSBkYW5nZXJvdXNseVNldElubmVySFRNTD17dGhpcy5nZXRTdmdIdG1sKCl9IC8+XG4gIH1cblxuICAvLyBZb3UgaGF2ZSB0byB1c2UgcmF3IEhUTUwgaGVyZSBiZWNhdXNlIEpTWCBkb2VzIG5vdCBzdXBwb3J0IG5hbWVzcGFjZXMuXG4gIGdldFN2Z0h0bWwoKSB7XG4gICAgbGV0IHNob3J0bmFtZSA9IHRoaXMucHJvcHMuc2hvcnRuYW1lXG4gICAgcmV0dXJuIHtfX2h0bWw6IGA8dXNlIHhsaW5rOmhyZWY9JHtzaG9ydG5hbWVUb1VybChzaG9ydG5hbWUpfT48L3VzZT5gfVxuICB9XG59XG5cblxuUmVhY3RET00ucmVuZGVyKFxuICA8UmFuZG9tRW1vamkgLz4sXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JylcbilcbiJdfQ==
