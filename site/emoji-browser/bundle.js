(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

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
// Number of items on each page:
var pageSize = 100;

var EmojiBrowser = (function (_BaseComponent) {
  _inherits(EmojiBrowser, _BaseComponent);

  function EmojiBrowser(props) {
    _classCallCheck(this, EmojiBrowser);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(EmojiBrowser).call(this, props));

    _this.state = {
      page: 0
    };
    _this._bind('handleSelectChange');
    return _this;
  }

  _createClass(EmojiBrowser, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          null,
          'Number of emojis: ',
          shortnames.length
        ),
        _react2.default.createElement(
          'select',
          { onChange: this.handleSelectChange },
          this.renderOptions()
        ),
        _react2.default.createElement(
          'div',
          null,
          this.renderSvgs()
        )
      );
    }
  }, {
    key: 'renderOptions',
    value: function renderOptions() {
      var pageCount = Math.ceil(shortnames.length / 100.0);
      var results = [];

      for (var i = 0; i < pageCount; i++) {
        var _getPageRange = getPageRange(i);

        var _getPageRange2 = _slicedToArray(_getPageRange, 2);

        var start = _getPageRange2[0];
        var end = _getPageRange2[1];

        if (i < pageCount - 1) {
          end = end - 1;
        }
        results.push(_react2.default.createElement(
          'option',
          { key: i, value: i },
          start + 1,
          ' - ',
          end
        ));
      }
      return results;
    }
  }, {
    key: 'renderSvgs',
    value: function renderSvgs() {
      return getShortnamesForPage(this.state.page).map(function (shortname) {
        return _react2.default.createElement(SVG, { shortname: shortname });
      });
    }
  }, {
    key: 'handleSelectChange',
    value: function handleSelectChange(evt) {
      this.setState({ page: parseInt(evt.target.value) });
    }
  }]);

  return EmojiBrowser;
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
      return _react2.default.createElement('svg', _extends({}, this.props, {
        className: 'emojione',
        title: this.props.shortname,
        style: { fontSize: '30px' },
        dangerouslySetInnerHTML: this.getSvgHtml() }));
    }
    // You have to use raw HTML here because JSX does not support namespaces.

  }, {
    key: 'getSvgHtml',
    value: function getSvgHtml() {
      var shortname = this.props.shortname;
      return { __html: '<use xlink:href=' + this.shortnameToUrl(shortname) + '></use>' };
    }
  }, {
    key: 'shortnameToUrl',
    value: function shortnameToUrl(shortname) {
      var item = emojione.emojioneList[shortname];
      var unicode = item[item.length - 1];
      return emojione.imagePathSVGSprites + '#emoji-' + unicode;
    }
  }]);

  return SVG;
})(_react2.default.Component);

function getPageRange(pageIndex) {
  var start = pageIndex * pageSize;
  var end = (pageIndex + 1) * pageSize;
  if (end > shortnames.length) {
    end = shortnames.length;
  }
  return [start, end];
}

function getShortnamesForPage(pageIndex) {
  var _getPageRange3 = getPageRange(pageIndex);

  var _getPageRange4 = _slicedToArray(_getPageRange3, 2);

  var start = _getPageRange4[0];
  var end = _getPageRange4[1];

  return shortnames.slice(start, end);
}

_reactDom2.default.render(_react2.default.createElement(EmojiBrowser, null), document.getElementById('content'));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzaXRlL2Vtb2ppLWJyb3dzZXIvYXBwLmJhYmVsIiwic2l0ZS9saWIvaGVscGVyLmJhYmVsIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTUEsSUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDOztBQUFBLEFBRWpELElBQU0sUUFBUSxHQUFHLEdBQUcsQ0FBQTs7SUFHZCxZQUFZO1lBQVosWUFBWTs7QUFDaEIsV0FESSxZQUFZLENBQ0osS0FBSyxFQUFFOzBCQURmLFlBQVk7O3VFQUFaLFlBQVksYUFFUixLQUFLOztBQUNYLFVBQUssS0FBSyxHQUFHO0FBQ1gsVUFBSSxFQUFFLENBQUM7S0FDUixDQUFBO0FBQ0QsVUFBSyxLQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQTs7R0FDakM7O2VBUEcsWUFBWTs7NkJBUVA7QUFDUCxhQUFPOzs7UUFDTDs7OztVQUF3QixVQUFVLENBQUMsTUFBTTtTQUFPO1FBQ2hEOztZQUFRLFFBQVEsRUFBRSxJQUFJLENBQUMsa0JBQWtCLEFBQUM7VUFDdkMsSUFBSSxDQUFDLGFBQWEsRUFBRTtTQUNkO1FBQ1Q7OztVQUNHLElBQUksQ0FBQyxVQUFVLEVBQUU7U0FDZDtPQUNGLENBQUE7S0FDUDs7O29DQUNlO0FBQ2QsVUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFBO0FBQ3BELFVBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQTs7QUFFaEIsV0FBSyxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsRUFBRSxDQUFDLEVBQUUsRUFBRTs0QkFDYixZQUFZLENBQUMsQ0FB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a0VBQWIsYUFBYTs7O2VBQWIsYUFBYTs7NEJBQ047Ozt3Q0FBVCxPQUFPO0FBQVAsZUFBTzs7O0FBQ2QsYUFBTyxDQUFDLE9BQU8sQ0FBQyxVQUFDLE1BQU0sRUFBSztBQUMxQixlQUFLLE1BQU0sQ0FBQyxHQUFHLE9BQUssTUFBTSxDQUFDLENBQUMsSUFBSSxRQUFNLENBQUE7T0FDdkMsQ0FBQyxDQUFBO0tBQ0g7OztTQUxVLGFBQWE7R0FBUyxnQkFBTSxTQUFTIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5pbXBvcnQge0Jhc2VDb21wb25lbnR9IGZyb20gJy4uL2xpYi9oZWxwZXInXG5cblxuY29uc3Qgc2hvcnRuYW1lcyA9IGVtb2ppb25lLnNob3J0bmFtZXMuc3BsaXQoJ3wnKVxuLy8gTnVtYmVyIG9mIGl0ZW1zIG9uIGVhY2ggcGFnZTpcbmNvbnN0IHBhZ2VTaXplID0gMTAwXG5cblxuY2xhc3MgRW1vamlCcm93c2VyIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHBhZ2U6IDAsXG4gICAgfVxuICAgIHRoaXMuX2JpbmQoJ2hhbmRsZVNlbGVjdENoYW5nZScpXG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8ZGl2PlxuICAgICAgPGRpdj5OdW1iZXIgb2YgZW1vamlzOiB7c2hvcnRuYW1lcy5sZW5ndGh9PC9kaXY+XG4gICAgICA8c2VsZWN0IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVNlbGVjdENoYW5nZX0+XG4gICAgICAgIHt0aGlzLnJlbmRlck9wdGlvbnMoKX1cbiAgICAgIDwvc2VsZWN0PlxuICAgICAgPGRpdj5cbiAgICAgICAge3RoaXMucmVuZGVyU3ZncygpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIH1cbiAgcmVuZGVyT3B0aW9ucygpIHtcbiAgICBsZXQgcGFnZUNvdW50ID0gTWF0aC5jZWlsKHNob3J0bmFtZXMubGVuZ3RoIC8gMTAwLjApXG4gICAgbGV0IHJlc3VsdHMgPSBbXVxuXG4gICAgZm9yIChsZXQgaT0wOyBpIDwgcGFnZUNvdW50OyBpKyspIHtcbiAgICAgIGxldCBbc3RhcnQsIGVuZF0gPSBnZXRQYWdlUmFuZ2UoaSlcbiAgICAgIGlmIChpIDwgKHBhZ2VDb3VudC0xKSkge1xuICAgICAgICBlbmQgPSBlbmQgLSAxXG4gICAgICB9XG4gICAgICByZXN1bHRzLnB1c2goPG9wdGlvbiBrZXk9e2l9IHZhbHVlPXtpfT57c3RhcnQrMX0gLSB7ZW5kfTwvb3B0aW9uPilcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHNcbiAgfVxuICByZW5kZXJTdmdzKCkge1xuICAgIHJldHVybiBnZXRTaG9ydG5hbWVzRm9yUGFnZSh0aGlzLnN0YXRlLnBhZ2UpLm1hcCgoc2hvcnRuYW1lKSA9PiB7XG4gICAgICByZXR1cm4gPFNWRyBzaG9ydG5hbWU9e3Nob3J0bmFtZX0gLz5cbiAgICB9KVxuICB9XG4gIGhhbmRsZVNlbGVjdENoYW5nZShldnQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtwYWdlOiBwYXJzZUludChldnQudGFyZ2V0LnZhbHVlKX0pXG4gIH1cbn1cblxuXG5jbGFzcyBTVkcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxzdmcgey4uLnRoaXMucHJvcHN9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZW1vamlvbmVcIlxuICAgICAgICAgICAgICAgIHRpdGxlPXt0aGlzLnByb3BzLnNob3J0bmFtZX1cbiAgICAgICAgICAgICAgICBzdHlsZT17e2ZvbnRTaXplOiAnMzBweCd9fVxuICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt0aGlzLmdldFN2Z0h0bWwoKX0gLz5cbiAgfVxuICAvLyBZb3UgaGF2ZSB0byB1c2UgcmF3IEhUTUwgaGVyZSBiZWNhdXNlIEpTWCBkb2VzIG5vdCBzdXBwb3J0IG5hbWVzcGFjZXMuXG4gIGdldFN2Z0h0bWwoKSB7XG4gICAgbGV0IHNob3J0bmFtZSA9IHRoaXMucHJvcHMuc2hvcnRuYW1lXG4gICAgcmV0dXJuIHtfX2h0bWw6IGA8dXNlIHhsaW5rOmhyZWY9JHt0aGlzLnNob3J0bmFtZVRvVXJsKHNob3J0bmFtZSl9PjwvdXNlPmB9XG4gIH1cbiAgc2hvcnRuYW1lVG9Vcmwoc2hvcnRuYW1lKSB7XG4gICAgbGV0IGl0ZW0gPSBlbW9qaW9uZS5lbW9qaW9uZUxpc3Rbc2hvcnRuYW1lXVxuICAgIGxldCB1bmljb2RlID0gaXRlbVtpdGVtLmxlbmd0aCAtIDFdXG4gICAgcmV0dXJuIGVtb2ppb25lLmltYWdlUGF0aFNWR1Nwcml0ZXMgKyAnI2Vtb2ppLScgKyB1bmljb2RlXG4gIH1cbn1cblxuXG5mdW5jdGlvbiBnZXRQYWdlUmFuZ2UocGFnZUluZGV4KSB7XG4gIGxldCBzdGFydCA9IHBhZ2VJbmRleCAqIHBhZ2VTaXplXG4gIGxldCBlbmQgPSAocGFnZUluZGV4ICsgMSkgKiBwYWdlU2l6ZVxuICBpZiAoZW5kID4gc2hvcnRuYW1lcy5sZW5ndGgpIHtcbiAgICBlbmQgPSBzaG9ydG5hbWVzLmxlbmd0aFxuICB9XG4gIHJldHVybiBbc3RhcnQsIGVuZF1cbn1cblxuZnVuY3Rpb24gZ2V0U2hvcnRuYW1lc0ZvclBhZ2UocGFnZUluZGV4KSB7XG4gIGxldCBbc3RhcnQsIGVuZF0gPSBnZXRQYWdlUmFuZ2UocGFnZUluZGV4KVxuICByZXR1cm4gc2hvcnRuYW1lcy5zbGljZShzdGFydCwgZW5kKVxufVxuXG5cblJlYWN0RE9NLnJlbmRlcihcbiAgPEVtb2ppQnJvd3NlciAvPixcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKVxuKVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5cbmV4cG9ydCBjbGFzcyBCYXNlQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgX2JpbmQoLi4ubWV0aG9kcykge1xuICAgIG1ldGhvZHMuZm9yRWFjaCgobWV0aG9kKSA9PiB7XG4gICAgICB0aGlzW21ldGhvZF0gPSB0aGlzW21ldGhvZF0uYmluZCh0aGlzKVxuICAgIH0pXG4gIH1cbn1cbiJdfQ==
