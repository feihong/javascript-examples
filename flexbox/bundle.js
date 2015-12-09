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
      'Banana'
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
    ),
    _react2.default.createElement(
      _box.VBox,
      null,
      _react2.default.createElement(
        'div',
        null,
        'Aardvark'
      ),
      _react2.default.createElement(
        'div',
        null,
        'Baboon'
      ),
      _react2.default.createElement(
        'div',
        null,
        'Canary'
      )
    ),
    _react2.default.createElement(
      'div',
      null,
      'Six'
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

var _util = require('../lib/util');

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

function renderBox(isHorizontal, props) {
  var className = isHorizontal ? 'hbox' : 'vbox';
  var newStyle = (0, _util.extend)(props.style, {
    display: 'flex',
    flexDirection: isHorizontal ? 'row' : 'column'
  });

  return _react2.default.createElement(
    'div',
    _extends({}, props, { className: className, style: newStyle }),
    props.children
  );
}

},{"../lib/util":3,"react":undefined}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extend = extend;
exports.cloneElementMergeStyle = cloneElementMergeStyle;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function extend(a, b) {
  var newObj = Object.assign({}, a);
  Object.assign(newObj, b);
  return newObj;
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

// function cloneElementMergeClassName(elem, className, key) {
//   let cfg = {}
//   if (typeof elem.props.className === 'undefined') {
//     cfg.className = className
//   } else {
//     cfg.className = `${elem.props.className} ${className}`
//   }
//   if (key) {
//     cfg.key = key
//   }
//   return React.cloneElement(elem, cfg)
// }
//

},{"react":undefined}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsInNpdGUvZmxleGJveC9hcHAuYmFiZWwiLCJzaXRlL2xpYi9ib3guYmFiZWwiLCJzaXRlL2xpYi91dGlsLmJhYmVsIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7QUNJQSxtQkFBUyxNQUFNLENBQ2I7T0FITSxJQUFJO0lBR0osS0FBSyxFQUFFLEVBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUUsT0FBTyxFQUFDLEFBQUM7RUFDdkQ7Ozs7R0FBZ0I7RUFDaEI7Ozs7R0FBZTtFQUNmO1NBTlUsSUFBSTtNQU1SLFNBQVMsRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFFLEVBQUMsS0FBSyxFQUFFLFdBQVcsRUFBRSxlQUFlLEVBQUUsVUFBVSxFQUFDLEFBQUM7SUFDOUU7Ozs7S0FBYztJQUNkOzs7O0tBQWM7SUFDZDs7OztLQUFnQjtHQUNYO0VBQ1A7Ozs7R0FBZ0I7Q0FDWCxFQUNQLFFBQVEsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQ3JDLENBQUE7O0FBRUQsbUJBQVMsTUFBTSxDQUNiO09BakJZLElBQUk7SUFpQlYsS0FBSyxFQUFFLEVBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsaUJBQWlCLEVBQUMsQUFBQztFQUN0RDs7OztHQUFjO0VBQ2Q7U0FuQkksSUFBSTtNQW1CRixLQUFLLEVBQUUsRUFBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxnQkFBZ0IsRUFBQyxBQUFDO0lBQ3ZEOzs7O0tBQWdCO0lBQ2hCOzs7O0tBQWlCO0lBQ2pCOzs7O0tBQXNCO0dBQ2pCO0VBQ1A7Ozs7R0FBYztFQUNkOzs7O0dBQWdCO0VBQ2hCO1NBMUJJLElBQUk7TUEwQkYsS0FBSyxFQUFFLEVBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFDLEFBQUM7SUFDMUQ7Ozs7S0FBZTtJQUNmOzs7O0tBQWU7SUFDZjtXQTdCUSxJQUFJOztNQThCVjs7OztPQUFtQjtNQUNuQjs7OztPQUFpQjtNQUNqQjs7OztPQUFpQjtLQUNaO0lBQ1A7Ozs7S0FBYztHQUNUO0NBQ0YsRUFDUCxRQUFRLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUNyQyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDcENZLElBQUksV0FBSixJQUFJO1lBQUosSUFBSTs7V0FBSixJQUFJOzBCQUFKLElBQUk7O2tFQUFKLElBQUk7OztlQUFKLElBQUk7OzZCQUNOO0FBQ1AsYUFBTyxTQUFTLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtLQUNwQzs7O1NBSFUsSUFBSTtHQUFTLGdCQUFNLFNBQVM7O0lBTzVCLElBQUksV0FBSixJQUFJO1lBQUosSUFBSTs7V0FBSixJQUFJOzBCQUFKLElBQUk7O2tFQUFKLElBQUk7OztlQUFKLElBQUk7OzZCQUNOO0FBQ1AsYUFBTyxTQUFTLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtLQUNuQzs7O1NBSFUsSUFBSTtHQUFTLGdCQUFNLFNBQVM7O0FBT3pDLFNBQVMsU0FBUyxDQUFDLFlBQVksRUFBRSxLQUFLLEVBQUU7QUFDdEMsTUFBSSxTQUFTLEdBQUcsWUFBWSxHQUFHLE1BQU0sR0FBRyxNQUFNLENBQUE7QUFDOUMsTUFBSSxRQUFRLEdBQUcsVUFuQlQsTUFBTSxFQW1CVSxLQUFLLENBQUMsS0FBSyxFQUFFO0FBQ2pDLFdBQU8sRUFBRSxNQUFNO0FBQ2YsaUJBQWEsRUFBRSxZQUFZLEdBQUcsS0FBSyxHQUFHLFFBQVE7R0FDL0MsQ0FBQyxDQUFBOztBQUVGLFNBQU87O2lCQUFTLEtBQUssSUFBRSxTQUFTLEVBQUUsU0FBUyxBQUFDLEVBQUMsS0FBSyxFQUFFLFFBQVEsQUFBQztJQUMxRCxLQUFLLENBQUMsUUFBUTtHQUNYLENBQUE7Q0FDUDs7Ozs7Ozs7UUN6QmUsTUFBTSxHQUFOLE1BQU07UUFNTixzQkFBc0IsR0FBdEIsc0JBQXNCOzs7Ozs7OztBQU4vQixTQUFTLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQzNCLE1BQUksTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFBO0FBQ2pDLFFBQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFBO0FBQ3hCLFNBQU8sTUFBTSxDQUFBO0NBQ2Q7O0FBRU0sU0FBUyxzQkFBc0IsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFO0FBQ2xELE1BQUksUUFBUSxHQUFHLElBQUksQ0FBQTtBQUNuQixNQUFJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEtBQUssV0FBVyxFQUFFO0FBQzNDLFlBQVEsR0FBRyxLQUFLLENBQUE7R0FDakIsTUFBTTtBQUNMLFlBQVEsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFBO0FBQzlDLFVBQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFBO0dBQy9CO0FBQ0QsU0FBTyxnQkFBTSxZQUFZLENBQUMsSUFBSSxFQUFFLEVBQUMsS0FBSyxFQUFFLFFBQVEsRUFBQyxDQUFDLENBQUE7Q0FDbkQ7Ozs7Ozs7Ozs7Ozs7OztBQUFBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQge0hCb3gsIFZCb3h9IGZyb20gJy4uL2xpYi9ib3gnXG5cblJlYWN0RE9NLnJlbmRlcihcbiAgPEhCb3ggc3R5bGU9e3tjb2xvcjogJ3llbGxvdycsIGJhY2tncm91bmRDb2xvcjogJ2dyZWVuJ319PlxuICAgIDxkaXY+QWxwaGE8L2Rpdj5cbiAgICA8ZGl2PkJldGE8L2Rpdj5cbiAgICA8VkJveCBjbGFzc05hbWU9J3ZlcnQnIHN0eWxlPXt7Y29sb3I6ICdzdGVlbGJsdWUnLCBiYWNrZ3JvdW5kQ29sb3I6ICdsYXZlbmRlcid9fT5cbiAgICAgIDxkaXY+T25lPC9kaXY+XG4gICAgICA8ZGl2PlR3bzwvZGl2PlxuICAgICAgPGRpdj5UaHJlZTwvZGl2PlxuICAgIDwvVkJveD5cbiAgICA8ZGl2PkdhbW1hPC9kaXY+XG4gIDwvSEJveD4sXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdleGFtcGxlLTEnKVxuKVxuXG5SZWFjdERPTS5yZW5kZXIoXG4gIDxWQm94IHN0eWxlPXt7Y29sb3I6ICdibHVlJywgYm9yZGVyOiAnMXB4IGRhc2hlZCBncmF5J319PlxuICAgIDxkaXY+T25lPC9kaXY+XG4gICAgPEhCb3ggc3R5bGU9e3tjb2xvcjogJ3B1cnBsZScsIGJvcmRlcjogJzJweCBkb3R0ZWQgcmVkJ319PlxuICAgICAgPGRpdj5BcHBsZTwvZGl2PlxuICAgICAgPGRpdj5CYW5hbmE8L2Rpdj5cbiAgICAgIDxkaXY+Q2F1bGlmbG93ZXI8L2Rpdj5cbiAgICA8L0hCb3g+XG4gICAgPGRpdj5Ud288L2Rpdj5cbiAgICA8ZGl2PlRocmVlPC9kaXY+XG4gICAgPEhCb3ggc3R5bGU9e3tjb2xvcjogJ2Jyb3duJywgYmFja2dyb3VuZENvbG9yOiAnbGlnaHRncmF5J319PlxuICAgICAgPGRpdj5Gb3VyPC9kaXY+XG4gICAgICA8ZGl2PkZpdmU8L2Rpdj5cbiAgICAgIDxWQm94PlxuICAgICAgICA8ZGl2PkFhcmR2YXJrPC9kaXY+XG4gICAgICAgIDxkaXY+QmFib29uPC9kaXY+XG4gICAgICAgIDxkaXY+Q2FuYXJ5PC9kaXY+XG4gICAgICA8L1ZCb3g+XG4gICAgICA8ZGl2PlNpeDwvZGl2PlxuICAgIDwvSEJveD5cbiAgPC9WQm94PixcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V4YW1wbGUtMicpXG4pXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2V4dGVuZH0gZnJvbSAnLi4vbGliL3V0aWwnXG5cblxuZXhwb3J0IGNsYXNzIFZCb3ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIHJlbmRlckJveChmYWxzZSwgdGhpcy5wcm9wcylcbiAgfVxufVxuXG5cbmV4cG9ydCBjbGFzcyBIQm94IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiByZW5kZXJCb3godHJ1ZSwgdGhpcy5wcm9wcylcbiAgfVxufVxuXG5cbmZ1bmN0aW9uIHJlbmRlckJveChpc0hvcml6b250YWwsIHByb3BzKSB7XG4gIGxldCBjbGFzc05hbWUgPSBpc0hvcml6b250YWwgPyAnaGJveCcgOiAndmJveCdcbiAgbGV0IG5ld1N0eWxlID0gZXh0ZW5kKHByb3BzLnN0eWxlLCB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246IGlzSG9yaXpvbnRhbCA/ICdyb3cnIDogJ2NvbHVtbidcbiAgfSlcblxuICByZXR1cm4gPGRpdiB7Li4ucHJvcHN9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBzdHlsZT17bmV3U3R5bGV9PlxuICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgPC9kaXY+XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cblxuZXhwb3J0IGZ1bmN0aW9uIGV4dGVuZChhLCBiKSB7XG4gIGxldCBuZXdPYmogPSBPYmplY3QuYXNzaWduKHt9LCBhKVxuICBPYmplY3QuYXNzaWduKG5ld09iaiwgYilcbiAgcmV0dXJuIG5ld09ialxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xvbmVFbGVtZW50TWVyZ2VTdHlsZShlbGVtLCBzdHlsZSkge1xuICBsZXQgbmV3U3R5bGUgPSBudWxsXG4gIGlmICh0eXBlb2YgZWxlbS5wcm9wcy5zdHlsZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBuZXdTdHlsZSA9IHN0eWxlXG4gIH0gZWxzZSB7XG4gICAgbmV3U3R5bGUgPSBPYmplY3QuYXNzaWduKHt9LCBlbGVtLnByb3BzLnN0eWxlKVxuICAgIE9iamVjdC5hc3NpZ24obmV3U3R5bGUsIHN0eWxlKVxuICB9XG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoZWxlbSwge3N0eWxlOiBuZXdTdHlsZX0pXG59XG5cbi8vIGZ1bmN0aW9uIGNsb25lRWxlbWVudE1lcmdlQ2xhc3NOYW1lKGVsZW0sIGNsYXNzTmFtZSwga2V5KSB7XG4vLyAgIGxldCBjZmcgPSB7fVxuLy8gICBpZiAodHlwZW9mIGVsZW0ucHJvcHMuY2xhc3NOYW1lID09PSAndW5kZWZpbmVkJykge1xuLy8gICAgIGNmZy5jbGFzc05hbWUgPSBjbGFzc05hbWVcbi8vICAgfSBlbHNlIHtcbi8vICAgICBjZmcuY2xhc3NOYW1lID0gYCR7ZWxlbS5wcm9wcy5jbGFzc05hbWV9ICR7Y2xhc3NOYW1lfWBcbi8vICAgfVxuLy8gICBpZiAoa2V5KSB7XG4vLyAgICAgY2ZnLmtleSA9IGtleVxuLy8gICB9XG4vLyAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoZWxlbSwgY2ZnKVxuLy8gfVxuLy9cbiJdfQ==
