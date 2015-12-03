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
  var className = isHorizontal ? 'hbox' : 'vbox';

  // Merge style.
  var style = { display: 'flex', flexDirection: isHorizontal ? 'row' : 'column' };
  var newStyle = Object.assign(style, props.style);

  return _react2.default.createElement(
    'div',
    _extends({}, props, { className: className, style: newStyle }),
    props.children
  );
}

},{"radium":undefined,"react":undefined}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJmbGV4Ym94L2FwcC5qcyIsImxpYi9ib3guanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7OztBQ0lBLG1CQUFTLE1BQU0sQ0FDYjtPQUhNLElBQUk7SUFHSixLQUFLLEVBQUUsRUFBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLGVBQWUsRUFBRSxPQUFPLEVBQUMsQUFBQztFQUN2RDs7OztHQUFnQjtFQUNoQjs7OztHQUFlO0VBQ2Y7U0FOVSxJQUFJO01BTVIsU0FBUyxFQUFDLE1BQU0sRUFBQyxLQUFLLEVBQUUsRUFBQyxLQUFLLEVBQUUsV0FBVyxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUMsQUFBQztJQUM5RTs7OztLQUFjO0lBQ2Q7Ozs7S0FBYztJQUNkOzs7O0tBQWdCO0dBQ1g7RUFDUDs7OztHQUFnQjtDQUNYLEVBQ1AsUUFBUSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FDckMsQ0FBQTs7QUFFRCxtQkFBUyxNQUFNLENBQ2I7T0FqQlksSUFBSTtJQWlCVixLQUFLLEVBQUUsRUFBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBQyxBQUFDO0VBQ3REOzs7O0dBQWM7RUFDZDtTQW5CSSxJQUFJO01BbUJGLEtBQUssRUFBRSxFQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLGdCQUFnQixFQUFDLEFBQUM7SUFDdkQ7Ozs7S0FBZ0I7SUFDaEI7Ozs7S0FBaUI7SUFDakI7Ozs7S0FBc0I7R0FDakI7RUFDUDs7OztHQUFjO0VBQ2Q7Ozs7R0FBZ0I7RUFDaEI7U0ExQkksSUFBSTtNQTBCRixLQUFLLEVBQUUsRUFBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxXQUFXLEVBQUMsQUFBQztJQUMxRDs7OztLQUFlO0lBQ2Y7Ozs7S0FBZTtJQUNmO1dBN0JRLElBQUk7O01BOEJWOzs7O09BQW1CO01BQ25COzs7O09BQWlCO01BQ2pCOzs7O09BQWlCO0tBQ1o7SUFDUDs7OztLQUFjO0dBQ1Q7Q0FDRixFQUNQLFFBQVEsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQ3JDLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ3BDWSxJQUFJLFdBQUosSUFBSTtZQUFKLElBQUk7O1dBQUosSUFBSTswQkFBSixJQUFJOztrRUFBSixJQUFJOzs7ZUFBSixJQUFJOzs2QkFDTjtBQUNQLGFBQU8sU0FBUyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7S0FDcEM7OztTQUhVLElBQUk7R0FBUyxnQkFBTSxTQUFTOztBQUt6QyxRQUxhLElBQUksR0FLakIsSUFBSSxHQUFHLHNCQUFPLElBQUksQ0FBQyxDQUFBOztJQUdOLElBQUksV0FBSixJQUFJO1lBQUosSUFBSTs7V0FBSixJQUFJOzBCQUFKLElBQUk7O2tFQUFKLElBQUk7OztlQUFKLElBQUk7OzZCQUNOO0FBQ1AsYUFBTyxTQUFTLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtLQUNuQzs7O1NBSFUsSUFBSTtHQUFTLGdCQUFNLFNBQVM7O0FBS3pDLFFBTGEsSUFBSSxHQUtqQixJQUFJLEdBQUcsc0JBQU8sSUFBSSxDQUFDLENBQUE7O0FBR25CLFNBQVMsU0FBUyxDQUFDLFlBQVksRUFBRSxLQUFLLEVBQUU7QUFDdEMsTUFBSSxTQUFTLEdBQUcsWUFBWSxHQUFHLE1BQU0sR0FBRyxNQUFNOzs7QUFBQSxBQUc5QyxNQUFJLEtBQUssR0FBRyxFQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLFlBQVksR0FBRyxLQUFLLEdBQUcsUUFBUSxFQUFDLENBQUE7QUFDN0UsTUFBSSxRQUFRLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFBOztBQUVoRCxTQUFPOztpQkFBUyxLQUFLLElBQUUsU0FBUyxFQUFFLFNBQVMsQUFBQyxFQUFDLEtBQUssRUFBRSxRQUFRLEFBQUM7SUFDMUQsS0FBSyxDQUFDLFFBQVE7R0FDWCxDQUFBO0NBQ1AiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCB7SEJveCwgVkJveH0gZnJvbSAnLi4vbGliL2JveCdcblxuUmVhY3RET00ucmVuZGVyKFxuICA8SEJveCBzdHlsZT17e2NvbG9yOiAneWVsbG93JywgYmFja2dyb3VuZENvbG9yOiAnZ3JlZW4nfX0+XG4gICAgPGRpdj5BbHBoYTwvZGl2PlxuICAgIDxkaXY+QmV0YTwvZGl2PlxuICAgIDxWQm94IGNsYXNzTmFtZT0ndmVydCcgc3R5bGU9e3tjb2xvcjogJ3N0ZWVsYmx1ZScsIGJhY2tncm91bmRDb2xvcjogJ2xhdmVuZGVyJ319PlxuICAgICAgPGRpdj5PbmU8L2Rpdj5cbiAgICAgIDxkaXY+VHdvPC9kaXY+XG4gICAgICA8ZGl2PlRocmVlPC9kaXY+XG4gICAgPC9WQm94PlxuICAgIDxkaXY+R2FtbWE8L2Rpdj5cbiAgPC9IQm94PixcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V4YW1wbGUtMScpXG4pXG5cblJlYWN0RE9NLnJlbmRlcihcbiAgPFZCb3ggc3R5bGU9e3tjb2xvcjogJ2JsdWUnLCBib3JkZXI6ICcxcHggZGFzaGVkIGdyYXknfX0+XG4gICAgPGRpdj5PbmU8L2Rpdj5cbiAgICA8SEJveCBzdHlsZT17e2NvbG9yOiAncHVycGxlJywgYm9yZGVyOiAnMnB4IGRvdHRlZCByZWQnfX0+XG4gICAgICA8ZGl2PkFwcGxlPC9kaXY+XG4gICAgICA8ZGl2PkJhbmFuYTwvZGl2PlxuICAgICAgPGRpdj5DYXVsaWZsb3dlcjwvZGl2PlxuICAgIDwvSEJveD5cbiAgICA8ZGl2PlR3bzwvZGl2PlxuICAgIDxkaXY+VGhyZWU8L2Rpdj5cbiAgICA8SEJveCBzdHlsZT17e2NvbG9yOiAnYnJvd24nLCBiYWNrZ3JvdW5kQ29sb3I6ICdsaWdodGdyYXknfX0+XG4gICAgICA8ZGl2PkZvdXI8L2Rpdj5cbiAgICAgIDxkaXY+Rml2ZTwvZGl2PlxuICAgICAgPFZCb3g+XG4gICAgICAgIDxkaXY+QWFyZHZhcms8L2Rpdj5cbiAgICAgICAgPGRpdj5CYWJvb248L2Rpdj5cbiAgICAgICAgPGRpdj5DYW5hcnk8L2Rpdj5cbiAgICAgIDwvVkJveD5cbiAgICAgIDxkaXY+U2l4PC9kaXY+XG4gICAgPC9IQm94PlxuICA8L1ZCb3g+LFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXhhbXBsZS0yJylcbilcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSYWRpdW0gZnJvbSAncmFkaXVtJ1xuXG5cbmV4cG9ydCBjbGFzcyBWQm94IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiByZW5kZXJCb3goZmFsc2UsIHRoaXMucHJvcHMpXG4gIH1cbn1cblZCb3ggPSBSYWRpdW0oVkJveClcblxuXG5leHBvcnQgY2xhc3MgSEJveCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gcmVuZGVyQm94KHRydWUsIHRoaXMucHJvcHMpXG4gIH1cbn1cbkhCb3ggPSBSYWRpdW0oSEJveClcblxuXG5mdW5jdGlvbiByZW5kZXJCb3goaXNIb3Jpem9udGFsLCBwcm9wcykge1xuICBsZXQgY2xhc3NOYW1lID0gaXNIb3Jpem9udGFsID8gJ2hib3gnIDogJ3Zib3gnXG5cbiAgLy8gTWVyZ2Ugc3R5bGUuXG4gIGxldCBzdHlsZSA9IHtkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246IGlzSG9yaXpvbnRhbCA/ICdyb3cnIDogJ2NvbHVtbid9XG4gIGxldCBuZXdTdHlsZSA9IE9iamVjdC5hc3NpZ24oc3R5bGUsIHByb3BzLnN0eWxlKVxuXG4gIHJldHVybiA8ZGl2IHsuLi5wcm9wc30gY2xhc3NOYW1lPXtjbGFzc05hbWV9IHN0eWxlPXtuZXdTdHlsZX0+XG4gICAge3Byb3BzLmNoaWxkcmVufVxuICA8L2Rpdj5cbn1cbiJdfQ==
