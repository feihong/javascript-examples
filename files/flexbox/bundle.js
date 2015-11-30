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
    { className: 'vert', style: { color: 'blue', backgroundColor: 'orange' } },
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
    { style: { color: 'pink', border: '2px dotted red' } },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsImZsZXhib3gvYXBwLmpzIiwibGliL2JveC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7O0FDSUEsbUJBQVMsTUFBTSxDQUNiO09BSE0sSUFBSTtJQUdKLEtBQUssRUFBRSxFQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFFLE9BQU8sRUFBQyxBQUFDO0VBQ3ZEOzs7O0dBQWdCO0VBQ2hCOzs7O0dBQWU7RUFDZjtTQU5VLElBQUk7TUFNUixTQUFTLEVBQUMsTUFBTSxFQUFDLEtBQUssRUFBRSxFQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsZUFBZSxFQUFFLFFBQVEsRUFBQyxBQUFDO0lBQ3ZFOzs7O0tBQWM7SUFDZDs7OztLQUFjO0lBQ2Q7Ozs7S0FBZ0I7R0FDWDtFQUNQOzs7O0dBQWdCO0NBQ1gsRUFDUCxRQUFRLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUNyQyxDQUFBOztBQUVELG1CQUFTLE1BQU0sQ0FDYjtPQWpCWSxJQUFJO0lBaUJWLEtBQUssRUFBRSxFQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFDLEFBQUM7RUFDdEQ7Ozs7R0FBYztFQUNkO1NBbkJJLElBQUk7TUFtQkYsS0FBSyxFQUFFLEVBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsZ0JBQWdCLEVBQUMsQUFBQztJQUNyRDs7OztLQUFnQjtJQUNoQjs7OztLQUF3QjtJQUN4Qjs7OztLQUFzQjtHQUNqQjtFQUNQOzs7O0dBQWM7RUFDZDs7OztHQUFnQjtDQUNYLEVBQ1AsUUFBUSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FDckMsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDMUJZLElBQUksV0FBSixJQUFJO1lBQUosSUFBSTs7V0FBSixJQUFJOzBCQUFKLElBQUk7O2tFQUFKLElBQUk7OztlQUFKLElBQUk7OzZCQUNOO0FBQ1AsYUFBTyxTQUFTLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtLQUNwQzs7O1NBSFUsSUFBSTtHQUFTLGdCQUFNLFNBQVM7O0FBS3pDLFFBTGEsSUFBSSxHQUtqQixJQUFJLEdBQUcsc0JBQU8sSUFBSSxDQUFDLENBQUE7O0lBR04sSUFBSSxXQUFKLElBQUk7WUFBSixJQUFJOztXQUFKLElBQUk7MEJBQUosSUFBSTs7a0VBQUosSUFBSTs7O2VBQUosSUFBSTs7NkJBQ047QUFDUCxhQUFPLFNBQVMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO0tBQ25DOzs7U0FIVSxJQUFJO0dBQVMsZ0JBQU0sU0FBUzs7QUFLekMsUUFMYSxJQUFJLEdBS2pCLElBQUksR0FBRyxzQkFBTyxJQUFJLENBQUMsQ0FBQTs7QUFHbkIsU0FBUyxTQUFTLENBQUMsWUFBWSxFQUFFLEtBQUssRUFBRTtBQUN0QyxNQUFJLEtBQUssR0FBRyxFQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLFlBQVksR0FBRyxLQUFLLEdBQUcsUUFBUSxFQUFDLENBQUE7QUFDN0UsU0FBTzs7aUJBQVMsS0FBSyxJQUFFLEtBQUssRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLEFBQUM7SUFDaEQsY0FBYyxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDO0dBQ3pDLENBQUE7Q0FDUDs7QUFFRCxTQUFTLGNBQWMsQ0FBQyxZQUFZLEVBQUUsUUFBUSxFQUFFO0FBQzlDLE1BQUksTUFBTSxHQUFHLEVBQUUsQ0FBQTtBQUNmLE1BQUksS0FBSyxHQUFHLGdCQUFNLFFBQVEsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUE7QUFDMUMsa0JBQU0sUUFBUSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsVUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFLO0FBQ2pELFFBQUksS0FBSyxHQUFHLEtBQUssR0FBRyxDQUFDLEVBQUU7QUFDckIsVUFBSSxXQUFXLEdBQUcsWUFBWSxHQUFHLEVBQUMsV0FBVyxFQUFFLEVBQUUsRUFBQyxHQUFHLEVBQUMsWUFBWSxFQUFFLEVBQUUsRUFBQyxDQUFDO0FBQ3hFLFVBQUksS0FBSyxHQUFHLHNCQUFzQixDQUFDLEtBQUssRUFBRSxXQUFXLENBQUMsQ0FBQTtBQUN0RCxZQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3BCLE1BQU07QUFDTCxZQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3BCO0dBQ0YsQ0FBQyxDQUFBO0FBQ0YsU0FBTyxNQUFNLENBQUE7Q0FDZDs7QUFFRCxTQUFTLHNCQUFzQixDQUFDLElBQUksRUFBRSxLQUFLLEVBQUU7QUFDM0MsTUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFBO0FBQ25CLE1BQUksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssS0FBSyxXQUFXLEVBQUU7QUFDM0MsWUFBUSxHQUFHLEtBQUssQ0FBQTtHQUNqQixNQUFNO0FBQ0wsWUFBUSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7QUFDOUMsVUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUE7R0FDL0I7QUFDRCxTQUFPLGdCQUFNLFlBQVksQ0FBQyxJQUFJLEVBQUUsRUFBQyxLQUFLLEVBQUUsUUFBUSxFQUFDLENBQUMsQ0FBQTtDQUNuRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IHtIQm94LCBWQm94fSBmcm9tICcuLi9saWIvYm94J1xuXG5SZWFjdERPTS5yZW5kZXIoXG4gIDxIQm94IHN0eWxlPXt7Y29sb3I6ICd5ZWxsb3cnLCBiYWNrZ3JvdW5kQ29sb3I6ICdncmVlbid9fT5cbiAgICA8ZGl2PkFscGhhPC9kaXY+XG4gICAgPGRpdj5CZXRhPC9kaXY+XG4gICAgPFZCb3ggY2xhc3NOYW1lPSd2ZXJ0JyBzdHlsZT17e2NvbG9yOiAnYmx1ZScsIGJhY2tncm91bmRDb2xvcjogJ29yYW5nZSd9fT5cbiAgICAgIDxkaXY+T25lPC9kaXY+XG4gICAgICA8ZGl2PlR3bzwvZGl2PlxuICAgICAgPGRpdj5UaHJlZTwvZGl2PlxuICAgIDwvVkJveD5cbiAgICA8ZGl2PkdhbW1hPC9kaXY+XG4gIDwvSEJveD4sXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdleGFtcGxlLTEnKVxuKVxuXG5SZWFjdERPTS5yZW5kZXIoXG4gIDxWQm94IHN0eWxlPXt7Y29sb3I6ICdibHVlJywgYm9yZGVyOiAnMXB4IGRhc2hlZCBncmF5J319PlxuICAgIDxkaXY+T25lPC9kaXY+XG4gICAgPEhCb3ggc3R5bGU9e3tjb2xvcjogJ3BpbmsnLCBib3JkZXI6ICcycHggZG90dGVkIHJlZCd9fT5cbiAgICAgIDxkaXY+QXBwbGU8L2Rpdj5cbiAgICAgIDxkaXY+QmFuYW5hIHBlcHBlcjwvZGl2PlxuICAgICAgPGRpdj5DYXVsaWZsb3dlcjwvZGl2PlxuICAgIDwvSEJveD5cbiAgICA8ZGl2PlR3bzwvZGl2PlxuICAgIDxkaXY+VGhyZWU8L2Rpdj5cbiAgPC9WQm94PixcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V4YW1wbGUtMicpXG4pXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmFkaXVtIGZyb20gJ3JhZGl1bSdcblxuXG5leHBvcnQgY2xhc3MgVkJveCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gcmVuZGVyQm94KGZhbHNlLCB0aGlzLnByb3BzKVxuICB9XG59XG5WQm94ID0gUmFkaXVtKFZCb3gpXG5cblxuZXhwb3J0IGNsYXNzIEhCb3ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIHJlbmRlckJveCh0cnVlLCB0aGlzLnByb3BzKVxuICB9XG59XG5IQm94ID0gUmFkaXVtKEhCb3gpXG5cblxuZnVuY3Rpb24gcmVuZGVyQm94KGlzSG9yaXpvbnRhbCwgcHJvcHMpIHtcbiAgbGV0IHN0eWxlID0ge2Rpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogaXNIb3Jpem9udGFsID8gJ3JvdycgOiAnY29sdW1uJ31cbiAgcmV0dXJuIDxkaXYgey4uLnByb3BzfSBzdHlsZT17W3N0eWxlLCBwcm9wcy5zdHlsZV19PlxuICAgIHtyZW5kZXJDaGlsZHJlbihpc0hvcml6b250YWwsIHByb3BzLmNoaWxkcmVuKX1cbiAgPC9kaXY+XG59XG5cbmZ1bmN0aW9uIHJlbmRlckNoaWxkcmVuKGlzSG9yaXpvbnRhbCwgY2hpbGRyZW4pIHtcbiAgbGV0IHJlc3VsdCA9IFtdXG4gIGxldCBjb3VudCA9IFJlYWN0LkNoaWxkcmVuLmNvdW50KGNoaWxkcmVuKVxuICBSZWFjdC5DaGlsZHJlbi5mb3JFYWNoKGNoaWxkcmVuLCAoY2hpbGQsIGluZGV4KSA9PiB7XG4gICAgaWYgKGluZGV4IDwgY291bnQgLSAxKSB7XG4gICAgICBsZXQgbWFyZ2luU3R5bGUgPSBpc0hvcml6b250YWwgPyB7bWFyZ2luUmlnaHQ6IDEwfSA6IHttYXJnaW5Cb3R0b206IDEwfTtcbiAgICAgIGxldCBjbG9uZSA9IGNsb25lRWxlbWVudE1lcmdlU3R5bGUoY2hpbGQsIG1hcmdpblN0eWxlKVxuICAgICAgcmVzdWx0LnB1c2goY2xvbmUpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQucHVzaChjaGlsZCk7XG4gICAgfVxuICB9KVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmZ1bmN0aW9uIGNsb25lRWxlbWVudE1lcmdlU3R5bGUoZWxlbSwgc3R5bGUpIHtcbiAgbGV0IG5ld1N0eWxlID0gbnVsbFxuICBpZiAodHlwZW9mIGVsZW0ucHJvcHMuc3R5bGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbmV3U3R5bGUgPSBzdHlsZVxuICB9IGVsc2Uge1xuICAgIG5ld1N0eWxlID0gT2JqZWN0LmFzc2lnbih7fSwgZWxlbS5wcm9wcy5zdHlsZSlcbiAgICBPYmplY3QuYXNzaWduKG5ld1N0eWxlLCBzdHlsZSlcbiAgfVxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGVsZW0sIHtzdHlsZTogbmV3U3R5bGV9KVxufVxuIl19
