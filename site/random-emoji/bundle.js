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
  var unicode = item[item.length - 1].toUpperCase();
  return emojione.imagePathSVGSprites + '#emoji-' + unicode;
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
        _react2.default.createElement(SVG, { width: '130px', shortname: this.state.shortname })
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

_reactDom2.default.render(_react2.default.createElement(EmojiOne, null), document.getElementById('content'));

},{"../lib/helper":1,"lodash":undefined,"react":undefined,"react-dom":undefined}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzaXRlL2xpYi9oZWxwZXIuYmFiZWwiLCJzaXRlL3JhbmRvbS1lbW9qaS9hcHAuYmFiZWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNHYSxhQUFhLFdBQWIsYUFBYTtZQUFiLGFBQWE7O1dBQWIsYUFBYTswQkFBYixhQUFhOztrRUFBYixhQUFhOzs7ZUFBYixhQUFhOzs0QkFDTjs7O3dDQUFULE9BQU87QUFBUCxlQUFPOzs7QUFDZCxhQUFPLENBQUMsT0FBTyxDQUFDLFVBQUMsTUFBTSxFQUFLO0FBQzFCLGVBQUssTUFBTSxDQUFDLEdBQUcsT0FBSyxNQUFNLENBQUMsQ0FBQyxJQUFJLFFBQU0sQ0FBQTtPQUN2QyxDQUFDLENBQUE7S0FDSDs7O1NBTFUsYUFBYTtHQUFTLGdCQUFNLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNHbEQsSUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7O0FBR2pELFNBQVMsa0JBQWtCLEdBQUc7QUFDNUIsTUFBSSxLQUFLLEdBQUcsaUJBQUUsTUFBTSxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFBO0FBQzlDLFNBQU8sVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFBO0NBQ3pCOztBQUVELFNBQVMsY0FBYyxDQUFDLFNBQVMsRUFBRTtBQUNqQyxNQUFJLElBQUksR0FBRyxRQUFRLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFBO0FBQzNDLE1BQUksT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFBO0FBQ2pELFNBQU8sUUFBUSxDQUFDLG1CQUFtQixHQUFHLFNBQVMsR0FBRyxPQUFPLENBQUE7Q0FDMUQ7O0lBR0ssUUFBUTtZQUFSLFFBQVE7O0FBQ1osV0FESSxRQUFRLENBQ0EsS0FBSyxFQUFFOzBCQURmLFFBQVE7O3VFQUFSLFFBQVEsYUFFSixLQUFLOztBQUNYLFVBQUssS0FBSyxHQUFHO0FBQ1gsZUFBUyxFQUFFLGtCQUFrQixFQUFFO0tBQ2hDLENBQUE7QUFDRCxVQUFLLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQTs7R0FDMUI7O2VBUEcsUUFBUTs7NkJBU0g7QUFDUCxhQUFPOzs7UUFDTDs7WUFBUSxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsQUFBQzs7U0FBc0I7UUFDeEQseUNBQU07O1FBQ2MsVUFBVSxDQUFDLE1BQU07UUFDckMseUNBQU07O1FBQ0s7OztVQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUztTQUFRO1FBQzlDLHlDQUFNO1FBRU4seUNBQU07O1FBRU47O1lBQU0sS0FBSyxFQUFFLEVBQUMsUUFBUSxFQUFFLEtBQUssRUFBQyxBQUFDO1VBQzFCLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQztTQUMvQztRQUNQLHlDQUFNOztRQUVOLDhCQUFDLEdBQUcsSUFBQyxLQUFLLEVBQUMsT0FBTyxFQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQUFBQyxHQUFHO09BQ2xELENBQUE7S0FDUDs7O2tDQUVhO0FBQ1osVUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFDLFNBQVMsRUFBRSxrQkFBa0IsRUFBRSxFQUFDLENBQUMsQ0FBQTtLQUNqRDs7O1NBL0JHLFFBQVE7V0FsQk4sYUFBYTs7SUFxRGYsR0FBRztZQUFILEdBQUc7O1dBQUgsR0FBRzswQkFBSCxHQUFHOztrRUFBSCxHQUFHOzs7ZUFBSCxHQUFHOzs2QkFDRTtBQUNQLGFBQU8sa0RBQVMsSUFBSSxDQUFDLEtBQUssSUFBRSx1QkFBdUIsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLEFBQUMsSUFBRyxDQUFBO0tBQzNFOzs7Ozs7aUNBR1k7QUFDWCxVQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQTtBQUNwQyxhQUFPLEVBQUMsTUFBTSx1QkFBcUIsY0FBYyxDQUFDLFNBQVMsQ0FBQyxZQUFTLEVBQUMsQ0FBQTtLQUN2RTs7O1NBVEcsR0FBRztHQUFTLGdCQUFNLFNBQVM7O0FBYWpDLG1CQUFTLE1BQU0sQ0FDYiw4QkFBQyxRQUFRLE9BQUcsRUFDWixRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUNuQyxDQUFBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuXG5leHBvcnQgY2xhc3MgQmFzZUNvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIF9iaW5kKC4uLm1ldGhvZHMpIHtcbiAgICBtZXRob2RzLmZvckVhY2goKG1ldGhvZCkgPT4ge1xuICAgICAgdGhpc1ttZXRob2RdID0gdGhpc1ttZXRob2RdLmJpbmQodGhpcylcbiAgICB9KVxuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IHtCYXNlQ29tcG9uZW50fSBmcm9tICcuLi9saWIvaGVscGVyJ1xuXG5cbmNvbnN0IHNob3J0bmFtZXMgPSBlbW9qaW9uZS5zaG9ydG5hbWVzLnNwbGl0KCd8JylcblxuXG5mdW5jdGlvbiBnZXRSYW5kb21TaG9ydG5hbWUoKSB7XG4gIGxldCBpbmRleCA9IF8ucmFuZG9tKDAsIHNob3J0bmFtZXMubGVuZ3RoIC0gMSlcbiAgcmV0dXJuIHNob3J0bmFtZXNbaW5kZXhdXG59XG5cbmZ1bmN0aW9uIHNob3J0bmFtZVRvVXJsKHNob3J0bmFtZSkge1xuICBsZXQgaXRlbSA9IGVtb2ppb25lLmVtb2ppb25lTGlzdFtzaG9ydG5hbWVdXG4gIGxldCB1bmljb2RlID0gaXRlbVtpdGVtLmxlbmd0aCAtIDFdLnRvVXBwZXJDYXNlKClcbiAgcmV0dXJuIGVtb2ppb25lLmltYWdlUGF0aFNWR1Nwcml0ZXMgKyAnI2Vtb2ppLScgKyB1bmljb2RlXG59XG5cblxuY2xhc3MgRW1vamlPbmUgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2hvcnRuYW1lOiBnZXRSYW5kb21TaG9ydG5hbWUoKSxcbiAgICB9XG4gICAgdGhpcy5fYmluZCgnaGFuZGxlQ2xpY2snKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8ZGl2PlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfT5SYW5kb20gZW1vamk8L2J1dHRvbj5cbiAgICAgIDxiciAvPlxuICAgICAgVG90YWwgIyBvZiBlbW9qaXM6IHtzaG9ydG5hbWVzLmxlbmd0aH1cbiAgICAgIDxiciAvPlxuICAgICAgU2hvcnRuYW1lOiA8Y29kZT57dGhpcy5zdGF0ZS5zaG9ydG5hbWV9PC9jb2RlPlxuICAgICAgPGJyIC8+XG5cbiAgICAgIDxiciAvPlxuICAgICAgVW5pY29kZTpcbiAgICAgIDxzcGFuIHN0eWxlPXt7Zm9udFNpemU6ICc4ZW0nfX0+XG4gICAgICAgICAge2Vtb2ppb25lLnNob3J0bmFtZVRvVW5pY29kZSh0aGlzLnN0YXRlLnNob3J0bmFtZSl9XG4gICAgICA8L3NwYW4+XG4gICAgICA8YnIgLz5cbiAgICAgIFNWRzpcbiAgICAgIDxTVkcgd2lkdGg9JzEzMHB4JyBzaG9ydG5hbWU9e3RoaXMuc3RhdGUuc2hvcnRuYW1lfSAvPlxuICAgIDwvZGl2PlxuICB9XG5cbiAgaGFuZGxlQ2xpY2soKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7c2hvcnRuYW1lOiBnZXRSYW5kb21TaG9ydG5hbWUoKX0pXG4gIH1cbn1cblxuXG5jbGFzcyBTVkcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxzdmcgey4uLnRoaXMucHJvcHN9IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt0aGlzLmdldFN2Z0h0bWwoKX0gLz5cbiAgfVxuXG4gIC8vIFlvdSBoYXZlIHRvIHVzZSByYXcgSFRNTCBoZXJlIGJlY2F1c2UgSlNYIGRvZXMgbm90IHN1cHBvcnQgbmFtZXNwYWNlcy5cbiAgZ2V0U3ZnSHRtbCgpIHtcbiAgICBsZXQgc2hvcnRuYW1lID0gdGhpcy5wcm9wcy5zaG9ydG5hbWVcbiAgICByZXR1cm4ge19faHRtbDogYDx1c2UgeGxpbms6aHJlZj0ke3Nob3J0bmFtZVRvVXJsKHNob3J0bmFtZSl9PjwvdXNlPmB9XG4gIH1cbn1cblxuXG5SZWFjdERPTS5yZW5kZXIoXG4gIDxFbW9qaU9uZSAvPixcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKVxuKVxuIl19
