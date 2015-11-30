(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _box = require('../lib/box');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(
  _box.HBox,
  { style: { color: 'yellow', backgroundColor: 'green' } },
  _react2.default.createElement(
    'div',
    null,
    'Alpha'
  ),
  _react2.default.createElement(
    'div',
    null,
    'Beta'
  ),
  _react2.default.createElement(
    _box.VBox,
    { className: 'vert', style: { color: 'steelblue', backgroundColor: 'lavender' } },
    _react2.default.createElement(
      'div',
      null,
      'One'
    ),
    _react2.default.createElement(
      'div',
      null,
      'Two'
    ),
    _react2.default.createElement(
      'div',
      null,
      'Three'
    )
  ),
  _react2.default.createElement(
    'div',
    null,
    'Gamma'
  )
), document.getElementById('example-1'));

_reactDom2.default.render(_react2.default.createElement(
  _box.VBox,
  { style: { color: 'blue', border: '1px dashed gray' } },
  _react2.default.createElement(
    'div',
    null,
    'One'
  ),
  _react2.default.createElement(
    _box.HBox,
    { style: { color: 'purple', border: '2px dotted red' } },
    _react2.default.createElement(
      'div',
      null,
      'Apple'
    ),
    _react2.default.createElement(
      'div',
      null,
      'Banana pepper'
    ),
    _react2.default.createElement(
      'div',
      null,
      'Cauliflower'
    )
  ),
  _react2.default.createElement(
    'div',
    null,
    'Two'
  ),
  _react2.default.createElement(
    'div',
    null,
    'Three'
  ),
  _react2.default.createElement(
    _box.HBox,
    { style: { color: 'brown', backgroundColor: 'lightgray' } },
    _react2.default.createElement(
      'div',
      null,
      'Four'
    ),
    _react2.default.createElement(
      'div',
      null,
      'Five'
    )
  )
), document.getElementById('example-2'));

},{"../lib/box":2,"react":undefined,"react-dom":undefined}],2:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HBox = exports.VBox = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VBox = exports.VBox = (function (_React$Component) {
  _inherits(VBox, _React$Component);

  function VBox() {
    _classCallCheck(this, VBox);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(VBox).apply(this, arguments));
  }

  _createClass(VBox, [{
    key: 'render',
    value: function render() {
      return renderBox(false, this.props);
    }
  }]);

  return VBox;
})(_react2.default.Component);

exports.VBox = VBox = (0, _radium2.default)(VBox);

var HBox = exports.HBox = (function (_React$Component2) {
  _inherits(HBox, _React$Component2);

  function HBox() {
    _classCallCheck(this, HBox);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(HBox).apply(this, arguments));
  }

  _createClass(HBox, [{
    key: 'render',
    value: function render() {
      return renderBox(true, this.props);
    }
  }]);

  return HBox;
})(_react2.default.Component);

exports.HBox = HBox = (0, _radium2.default)(HBox);

function renderBox(isHorizontal, props) {
  var style = { display: 'flex', flexDirection: isHorizontal ? 'row' : 'column' };
  return _react2.default.createElement(
    'div',
    _extends({}, props, { style: [style, props.style] }),
    renderChildren(isHorizontal, props.children)
  );
}

function renderChildren(isHorizontal, children) {
  var result = [];
  var count = _react2.default.Children.count(children);
  _react2.default.Children.forEach(children, function (child, index) {
    if (index < count - 1) {
      var marginStyle = isHorizontal ? { marginRight: 10 } : { marginBottom: 10 };
      var clone = cloneElementMergeStyle(child, marginStyle);
      result.push(clone);
    } else {
      result.push(child);
    }
  });
  return result;
}

function cloneElementMergeStyle(elem, style) {
  var newStyle = null;
  if (typeof elem.props.style === 'undefined') {
    newStyle = style;
  } else {
    newStyle = Object.assign({}, elem.props.style);
    Object.assign(newStyle, style);
  }
  return _react2.default.cloneElement(elem, { style: newStyle });
}

},{"radium":undefined,"react":undefined}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsImZsZXhib3gvYXBwLmpzIiwibGliL2JveC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7O0FDSUEsbUJBQVMsTUFBTSxDQUNiO09BSE0sSUFBSTtJQUdKLEtBQUssRUFBRSxFQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFFLE9BQU8sRUFBQyxBQUFDO0VBQ3ZEOzs7O0dBQWdCO0VBQ2hCOzs7O0dBQWU7RUFDZjtTQU5VLElBQUk7TUFNUixTQUFTLEVBQUMsTUFBTSxFQUFDLEtBQUssRUFBRSxFQUFDLEtBQUssRUFBRSxXQUFXLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBQyxBQUFDO0lBQzlFOzs7O0tBQWM7SUFDZDs7OztLQUFjO0lBQ2Q7Ozs7S0FBZ0I7R0FDWDtFQUNQOzs7O0dBQWdCO0NBQ1gsRUFDUCxRQUFRLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUNyQyxDQUFBOztBQUVELG1CQUFTLE1BQU0sQ0FDYjtPQWpCWSxJQUFJO0lBaUJWLEtBQUssRUFBRSxFQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFDLEFBQUM7RUFDdEQ7Ozs7R0FBYztFQUNkO1NBbkJJLElBQUk7TUFtQkYsS0FBSyxFQUFFLEVBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsZ0JBQWdCLEVBQUMsQUFBQztJQUN2RDs7OztLQUFnQjtJQUNoQjs7OztLQUF3QjtJQUN4Qjs7OztLQUFzQjtHQUNqQjtFQUNQOzs7O0dBQWM7RUFDZDs7OztHQUFnQjtFQUNoQjtTQTFCSSxJQUFJO01BMEJGLEtBQUssRUFBRSxFQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFdBQVcsRUFBQyxBQUFDO0lBQzFEOzs7O0tBQWU7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biBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCB7SEJveCwgVkJveH0gZnJvbSAnLi4vbGliL2JveCdcblxuUmVhY3RET00ucmVuZGVyKFxuICA8SEJveCBzdHlsZT17e2NvbG9yOiAneWVsbG93JywgYmFja2dyb3VuZENvbG9yOiAnZ3JlZW4nfX0+XG4gICAgPGRpdj5BbHBoYTwvZGl2PlxuICAgIDxkaXY+QmV0YTwvZGl2PlxuICAgIDxWQm94IGNsYXNzTmFtZT0ndmVydCcgc3R5bGU9e3tjb2xvcjogJ3N0ZWVsYmx1ZScsIGJhY2tncm91bmRDb2xvcjogJ2xhdmVuZGVyJ319PlxuICAgICAgPGRpdj5PbmU8L2Rpdj5cbiAgICAgIDxkaXY+VHdvPC9kaXY+XG4gICAgICA8ZGl2PlRocmVlPC9kaXY+XG4gICAgPC9WQm94PlxuICAgIDxkaXY+R2FtbWE8L2Rpdj5cbiAgPC9IQm94PixcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V4YW1wbGUtMScpXG4pXG5cblJlYWN0RE9NLnJlbmRlcihcbiAgPFZCb3ggc3R5bGU9e3tjb2xvcjogJ2JsdWUnLCBib3JkZXI6ICcxcHggZGFzaGVkIGdyYXknfX0+XG4gICAgPGRpdj5PbmU8L2Rpdj5cbiAgICA8SEJveCBzdHlsZT17e2NvbG9yOiAncHVycGxlJywgYm9yZGVyOiAnMnB4IGRvdHRlZCByZWQnfX0+XG4gICAgICA8ZGl2PkFwcGxlPC9kaXY+XG4gICAgICA8ZGl2PkJhbmFuYSBwZXBwZXI8L2Rpdj5cbiAgICAgIDxkaXY+Q2F1bGlmbG93ZXI8L2Rpdj5cbiAgICA8L0hCb3g+XG4gICAgPGRpdj5Ud288L2Rpdj5cbiAgICA8ZGl2PlRocmVlPC9kaXY+XG4gICAgPEhCb3ggc3R5bGU9e3tjb2xvcjogJ2Jyb3duJywgYmFja2dyb3VuZENvbG9yOiAnbGlnaHRncmF5J319PlxuICAgICAgPGRpdj5Gb3VyPC9kaXY+XG4gICAgICA8ZGl2PkZpdmU8L2Rpdj5cbiAgICA8L0hCb3g+XG4gIDwvVkJveD4sXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdleGFtcGxlLTInKVxuKVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJhZGl1bSBmcm9tICdyYWRpdW0nXG5cblxuZXhwb3J0IGNsYXNzIFZCb3ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIHJlbmRlckJveChmYWxzZSwgdGhpcy5wcm9wcylcbiAgfVxufVxuVkJveCA9IFJhZGl1bShWQm94KVxuXG5cbmV4cG9ydCBjbGFzcyBIQm94IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiByZW5kZXJCb3godHJ1ZSwgdGhpcy5wcm9wcylcbiAgfVxufVxuSEJveCA9IFJhZGl1bShIQm94KVxuXG5cbmZ1bmN0aW9uIHJlbmRlckJveChpc0hvcml6b250YWwsIHByb3BzKSB7XG4gIGxldCBzdHlsZSA9IHtkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246IGlzSG9yaXpvbnRhbCA/ICdyb3cnIDogJ2NvbHVtbid9XG4gIHJldHVybiA8ZGl2IHsuLi5wcm9wc30gc3R5bGU9e1tzdHlsZSwgcHJvcHMuc3R5bGVdfT5cbiAgICB7cmVuZGVyQ2hpbGRyZW4oaXNIb3Jpem9udGFsLCBwcm9wcy5jaGlsZHJlbil9XG4gIDwvZGl2PlxufVxuXG5mdW5jdGlvbiByZW5kZXJDaGlsZHJlbihpc0hvcml6b250YWwsIGNoaWxkcmVuKSB7XG4gIGxldCByZXN1bHQgPSBbXVxuICBsZXQgY291bnQgPSBSZWFjdC5DaGlsZHJlbi5jb3VudChjaGlsZHJlbilcbiAgUmVhY3QuQ2hpbGRyZW4uZm9yRWFjaChjaGlsZHJlbiwgKGNoaWxkLCBpbmRleCkgPT4ge1xuICAgIGlmIChpbmRleCA8IGNvdW50IC0gMSkge1xuICAgICAgbGV0IG1hcmdpblN0eWxlID0gaXNIb3Jpem9udGFsID8ge21hcmdpblJpZ2h0OiAxMH0gOiB7bWFyZ2luQm90dG9tOiAxMH07XG4gICAgICBsZXQgY2xvbmUgPSBjbG9uZUVsZW1lbnRNZXJnZVN0eWxlKGNoaWxkLCBtYXJnaW5TdHlsZSlcbiAgICAgIHJlc3VsdC5wdXNoKGNsb25lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0LnB1c2goY2hpbGQpO1xuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5mdW5jdGlvbiBjbG9uZUVsZW1lbnRNZXJnZVN0eWxlKGVsZW0sIHN0eWxlKSB7XG4gIGxldCBuZXdTdHlsZSA9IG51bGxcbiAgaWYgKHR5cGVvZiBlbGVtLnByb3BzLnN0eWxlID09PSAndW5kZWZpbmVkJykge1xuICAgIG5ld1N0eWxlID0gc3R5bGVcbiAgfSBlbHNlIHtcbiAgICBuZXdTdHlsZSA9IE9iamVjdC5hc3NpZ24oe30sIGVsZW0ucHJvcHMuc3R5bGUpXG4gICAgT2JqZWN0LmFzc2lnbihuZXdTdHlsZSwgc3R5bGUpXG4gIH1cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChlbGVtLCB7c3R5bGU6IG5ld1N0eWxlfSlcbn1cbiJdfQ==
