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
        _react2.default.createElement('img', { width: '130px', src: shortnameToUrl(this.state.shortname) })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzaXRlL2xpYi9oZWxwZXIuYmFiZWwiLCJzaXRlL3JhbmRvbS1lbW9qaS9hcHAuYmFiZWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNHYSxhQUFhLFdBQWIsYUFBYTtZQUFiLGFBQWE7O1dBQWIsYUFBYTswQkFBYixhQUFhOztrRUFBYixhQUFhOzs7ZUFBYixhQUFhOzs0QkFDTjs7O3dDQUFULE9BQU87QUFBUCxlQUFPOzs7QUFDZCxhQUFPLENBQUMsT0FBTyxDQUFDLFVBQUMsTUFBTSxFQUFLO0FBQzFCLGVBQUssTUFBTSxDQUFDLEdBQUcsT0FBSyxNQUFNLENBQUMsQ0FBQyxJQUFJLFFBQU0sQ0FBQTtPQUN2QyxDQUFDLENBQUE7S0FDSDs7O1NBTFUsYUFBYTtHQUFTLGdCQUFNLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDR2xELFFBQVEsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFBO0FBQzFCLElBQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBOztBQUdqRCxTQUFTLGtCQUFrQixHQUFHO0FBQzVCLE1BQUksS0FBSyxHQUFHLGlCQUFFLE1BQU0sQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQTtBQUM5QyxTQUFPLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQTtDQUN6Qjs7QUFFRCxTQUFTLGNBQWMsQ0FBQyxTQUFTLEVBQUU7QUFDakMsTUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQTtBQUMzQyxNQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQTtBQUNqRCxTQUFPLFFBQVEsQ0FBQyxZQUFZLEdBQUcsT0FBTyxHQUFHLE1BQU0sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFBO0NBQzFFOztJQUdLLFFBQVE7WUFBUixRQUFROztBQUNaLFdBREksUUFBUSxDQUNBLEtBQUssRUFBRTswQkFEZixRQUFROzt1RUFBUixRQUFRLGFBRUosS0FBSzs7QUFDWCxVQUFLLEtBQUssR0FBRztBQUNYLGVBQVMsRUFBRSxrQkFBa0IsRUFBRTtLQUNoQyxDQUFBO0FBQ0QsVUFBSyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUE7O0dBQzFCOztlQVBHLFFBQVE7OzZCQVNIO0FBQ1AsYUFBTzs7O1FBQ0w7O1lBQVEsT0FBTyxFQUFFLElBQUksQ0FBQyxXQUFXLEFBQUM7O1NBQXNCO1FBQ3hELHlDQUFNOztRQUNjLFVBQVUsQ0FBQyxNQUFNO1FBQ3JDLHlDQUFNOztRQUNLOzs7VUFBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVM7U0FBUTtRQUM5Qyx5Q0FBTTtRQUVOLHlDQUFNOztRQUVOOztZQUFNLEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUMsQUFBQztVQUMxQixRQUFRLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUM7U0FDL0M7UUFDUCx5Q0FBTTs7UUFFTix1Q0FBSyxLQUFLLEVBQUMsT0FBTyxFQUFDLEdBQUcsRUFBRSxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQUFBQyxHQUFHO09BQzVELENBQUE7S0FDUDs7O2tDQUVhO0FBQ1osVUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFDLFNBQVMsRUFBRSxrQkFBa0IsRUFBRSxFQUFDLENBQUMsQ0FBQTtLQUNqRDs7O1NBL0JHLFFBQVE7V0FuQk4sYUFBYTs7QUFzRHJCLG1CQUFTLE1BQU0sQ0FDYiw4QkFBQyxRQUFRLE9BQUcsRUFDWixRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUNuQyxDQUFBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuXG5leHBvcnQgY2xhc3MgQmFzZUNvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIF9iaW5kKC4uLm1ldGhvZHMpIHtcbiAgICBtZXRob2RzLmZvckVhY2goKG1ldGhvZCkgPT4ge1xuICAgICAgdGhpc1ttZXRob2RdID0gdGhpc1ttZXRob2RdLmJpbmQodGhpcylcbiAgICB9KVxuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IHtCYXNlQ29tcG9uZW50fSBmcm9tICcuLi9saWIvaGVscGVyJ1xuXG5cbmVtb2ppb25lLmltYWdlVHlwZSA9ICdzdmcnXG5jb25zdCBzaG9ydG5hbWVzID0gZW1vamlvbmUuc2hvcnRuYW1lcy5zcGxpdCgnfCcpXG5cblxuZnVuY3Rpb24gZ2V0UmFuZG9tU2hvcnRuYW1lKCkge1xuICBsZXQgaW5kZXggPSBfLnJhbmRvbSgwLCBzaG9ydG5hbWVzLmxlbmd0aCAtIDEpXG4gIHJldHVybiBzaG9ydG5hbWVzW2luZGV4XVxufVxuXG5mdW5jdGlvbiBzaG9ydG5hbWVUb1VybChzaG9ydG5hbWUpIHtcbiAgbGV0IGl0ZW0gPSBlbW9qaW9uZS5lbW9qaW9uZUxpc3Rbc2hvcnRuYW1lXVxuICBsZXQgdW5pY29kZSA9IGl0ZW1baXRlbS5sZW5ndGggLSAxXS50b1VwcGVyQ2FzZSgpXG4gIHJldHVybiBlbW9qaW9uZS5pbWFnZVBhdGhTVkcgKyB1bmljb2RlICsgJy5zdmcnICsgZW1vamlvbmUuY2FjaGVCdXN0UGFyYW1cbn1cblxuXG5jbGFzcyBFbW9qaU9uZSBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzaG9ydG5hbWU6IGdldFJhbmRvbVNob3J0bmFtZSgpLFxuICAgIH1cbiAgICB0aGlzLl9iaW5kKCdoYW5kbGVDbGljaycpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxkaXY+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9PlJhbmRvbSBlbW9qaTwvYnV0dG9uPlxuICAgICAgPGJyIC8+XG4gICAgICBUb3RhbCAjIG9mIGVtb2ppczoge3Nob3J0bmFtZXMubGVuZ3RofVxuICAgICAgPGJyIC8+XG4gICAgICBTaG9ydG5hbWU6IDxjb2RlPnt0aGlzLnN0YXRlLnNob3J0bmFtZX08L2NvZGU+XG4gICAgICA8YnIgLz5cblxuICAgICAgPGJyIC8+XG4gICAgICBVbmljb2RlOlxuICAgICAgPHNwYW4gc3R5bGU9e3tmb250U2l6ZTogJzhlbSd9fT5cbiAgICAgICAgICB7ZW1vamlvbmUuc2hvcnRuYW1lVG9Vbmljb2RlKHRoaXMuc3RhdGUuc2hvcnRuYW1lKX1cbiAgICAgIDwvc3Bhbj5cbiAgICAgIDxiciAvPlxuICAgICAgU1ZHOlxuICAgICAgPGltZyB3aWR0aD1cIjEzMHB4XCIgc3JjPXtzaG9ydG5hbWVUb1VybCh0aGlzLnN0YXRlLnNob3J0bmFtZSl9IC8+XG4gICAgPC9kaXY+XG4gIH1cblxuICBoYW5kbGVDbGljaygpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtzaG9ydG5hbWU6IGdldFJhbmRvbVNob3J0bmFtZSgpfSlcbiAgfVxufVxuXG5cblJlYWN0RE9NLnJlbmRlcihcbiAgPEVtb2ppT25lIC8+LFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpXG4pXG4iXX0=
