(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _form = require('../lib/form');

var _form2 = _interopRequireDefault(_form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(
  _form2.default,
  null,
  'Name: ',
  _react2.default.createElement('input', { name: 'name' }),
  'Template: ',
  _react2.default.createElement(
    'select',
    { name: 'template' },
    _react2.default.createElement(
      'option',
      { value: '1' },
      'Guest'
    ),
    _react2.default.createElement(
      'option',
      { value: '2' },
      'Host'
    )
  ),
  'URL: ',
  _react2.default.createElement('input', { name: 'date', type: 'url' })
), document.getElementById('example'));

},{"../lib/form":2,"react":undefined,"react-dom":undefined}],2:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _util = require('../lib/util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Form = (function (_React$Component) {
  _inherits(Form, _React$Component);

  function Form() {
    _classCallCheck(this, Form);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Form).apply(this, arguments));
  }

  _createClass(Form, [{
    key: 'render',
    value: function render() {
      // Merge style.
      var newStyle = Object.assign({ display: 'table' }, this.props.style);

      return _react2.default.createElement(
        'form',
        _extends({}, this.props, { style: newStyle }),
        this.renderChildren()
      );
    }
  }, {
    key: 'renderChildren',
    value: function renderChildren() {
      var result = [];
      var children = this.props.children;
      for (var i = 0; i < children.length; i += 2) {
        var label = _react2.default.createElement(
          'label',
          { style: { display: 'table-cell', paddingRight: 10 } },
          children[i].trim()
        );
        var field = (0, _util.cloneElementMergeStyle)(children[i + 1], { display: 'table-cell' });
        result.push(_react2.default.createElement(
          'p',
          { style: { display: 'table-row' }, key: i },
          label,
          field
        ));
      }
      return result;
    }
  }]);

  return Form;
})(_react2.default.Component);

exports.default = Form;

Form = (0, _radium2.default)(Form);

},{"../lib/util":3,"radium":undefined,"react":undefined}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cloneElementMergeStyle = cloneElementMergeStyle;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJmb3JtL2FwcC5qcyIsImxpYi9mb3JtLmpzIiwibGliL3V0aWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDS0EsbUJBQVMsTUFBTSxDQUNiOzs7O0VBQ1EseUNBQU8sSUFBSSxFQUFDLE1BQU0sR0FBRzs7RUFDakI7O01BQVEsSUFBSSxFQUFDLFVBQVU7SUFDL0I7O1FBQVEsS0FBSyxFQUFDLEdBQUc7O0tBQWU7SUFDaEM7O1FBQVEsS0FBSyxFQUFDLEdBQUc7O0tBQWM7R0FDeEI7O0VBQ0oseUNBQU8sSUFBSSxFQUFDLE1BQU0sRUFBQyxJQUFJLEVBQUMsS0FBSyxHQUFHO0NBQ2hDLEVBQ1AsUUFBUSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FDbkMsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ1ZvQixJQUFJO1lBQUosSUFBSTs7V0FBSixJQUFJOzBCQUFKLElBQUk7O2tFQUFKLElBQUk7OztlQUFKLElBQUk7OzZCQUNkOztBQUVQLFVBQUksUUFBUSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQTs7QUFFbEUsYUFBTzs7cUJBQVUsSUFBSSxDQUFDLEtBQUssSUFBRSxLQUFLLEVBQUUsUUFBUSxBQUFDO1FBQzFDLElBQUksQ0FBQyxjQUFjLEVBQUU7T0FDakIsQ0FBQTtLQUNSOzs7cUNBRWdCO0FBQ2YsVUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFBO0FBQ2YsVUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUE7QUFDbEMsV0FBSyxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFFLENBQUMsRUFBRTtBQUN2QyxZQUFJLEtBQUssR0FBRzs7WUFBTyxLQUFLLEVBQUUsRUFBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxFQUFFLEVBQUMsQUFBQztVQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUU7U0FBUyxDQUFBO0FBQ2pHLFlBQUksS0FBSyxHQUFHLFVBbEJULHNCQUFzQixFQWtCVSxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUMsT0FBTyxFQUFFLFlBQVksRUFBQyxDQUFDLENBQUE7QUFDNUUsY0FBTSxDQUFDLElBQUksQ0FBQzs7WUFBRyxLQUFLLEVBQUUsRUFBQyxPQUFPLEVBQUUsV0FBVyxFQUFDLEFBQUMsRUFBQyxHQUFHLEVBQUUsQ0FBQyxBQUFDO1VBQUUsS0FBSztVQUFFLEtBQUs7U0FBSyxDQUFDLENBQUE7T0FDMUU7QUFDRCxhQUFPLE1BQU0sQ0FBQTtLQUNkOzs7U0FuQmtCLElBQUk7R0FBUyxnQkFBTSxTQUFTOztrQkFBNUIsSUFBSTs7QUFxQnpCLElBQUksR0FBRyxzQkFBTyxJQUFJLENBQUMsQ0FBQTs7Ozs7Ozs7UUN2Qkgsc0JBQXNCLEdBQXRCLHNCQUFzQjs7Ozs7Ozs7QUFBL0IsU0FBUyxzQkFBc0IsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFO0FBQ2xELE1BQUksUUFBUSxHQUFHLElBQUksQ0FBQTtBQUNuQixNQUFJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEtBQUssV0FBVyxFQUFFO0FBQzNDLFlBQVEsR0FBRyxLQUFLLENBQUE7R0FDakIsTUFBTTtBQUNMLFlBQVEsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFBO0FBQzlDLFVBQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFBO0dBQy9CO0FBQ0QsU0FBTyxnQkFBTSxZQUFZLENBQUMsSUFBSSxFQUFFLEVBQUMsS0FBSyxFQUFFLFFBQVEsRUFBQyxDQUFDLENBQUE7Q0FDbkQ7Ozs7Ozs7Ozs7Ozs7OztBQUFBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQgRm9ybSBmcm9tICcuLi9saWIvZm9ybSdcblxuXG5SZWFjdERPTS5yZW5kZXIoXG4gIDxGb3JtPlxuICAgIE5hbWU6IDxpbnB1dCBuYW1lPSduYW1lJyAvPlxuICAgIFRlbXBsYXRlOiA8c2VsZWN0IG5hbWU9J3RlbXBsYXRlJz5cbiAgICAgIDxvcHRpb24gdmFsdWU9JzEnPkd1ZXN0PC9vcHRpb24+XG4gICAgICA8b3B0aW9uIHZhbHVlPScyJz5Ib3N0PC9vcHRpb24+XG4gICAgPC9zZWxlY3Q+XG4gICAgVVJMOiA8aW5wdXQgbmFtZT0nZGF0ZScgdHlwZT0ndXJsJyAvPlxuICA8L0Zvcm0+LFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXhhbXBsZScpXG4pXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmFkaXVtIGZyb20gJ3JhZGl1bSdcbmltcG9ydCB7IGNsb25lRWxlbWVudE1lcmdlU3R5bGUgfSBmcm9tICcuLi9saWIvdXRpbCdcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIC8vIE1lcmdlIHN0eWxlLlxuICAgIGxldCBuZXdTdHlsZSA9IE9iamVjdC5hc3NpZ24oe2Rpc3BsYXk6ICd0YWJsZSd9LCB0aGlzLnByb3BzLnN0eWxlKVxuXG4gICAgcmV0dXJuIDxmb3JtIHsuLi50aGlzLnByb3BzfSBzdHlsZT17bmV3U3R5bGV9PlxuICAgICAge3RoaXMucmVuZGVyQ2hpbGRyZW4oKX1cbiAgICA8L2Zvcm0+XG4gIH1cblxuICByZW5kZXJDaGlsZHJlbigpIHtcbiAgICBsZXQgcmVzdWx0ID0gW11cbiAgICBsZXQgY2hpbGRyZW4gPSB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgZm9yIChsZXQgaT0wOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKz0yKSB7XG4gICAgICBsZXQgbGFiZWwgPSA8bGFiZWwgc3R5bGU9e3tkaXNwbGF5OiAndGFibGUtY2VsbCcsIHBhZGRpbmdSaWdodDogMTB9fT57Y2hpbGRyZW5baV0udHJpbSgpfTwvbGFiZWw+XG4gICAgICBsZXQgZmllbGQgPSBjbG9uZUVsZW1lbnRNZXJnZVN0eWxlKGNoaWxkcmVuW2kgKyAxXSwge2Rpc3BsYXk6ICd0YWJsZS1jZWxsJ30pXG4gICAgICByZXN1bHQucHVzaCg8cCBzdHlsZT17e2Rpc3BsYXk6ICd0YWJsZS1yb3cnfX0ga2V5PXtpfT57bGFiZWx9e2ZpZWxkfTwvcD4pXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfVxufVxuRm9ybSA9IFJhZGl1bShGb3JtKVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZUVsZW1lbnRNZXJnZVN0eWxlKGVsZW0sIHN0eWxlKSB7XG4gIGxldCBuZXdTdHlsZSA9IG51bGxcbiAgaWYgKHR5cGVvZiBlbGVtLnByb3BzLnN0eWxlID09PSAndW5kZWZpbmVkJykge1xuICAgIG5ld1N0eWxlID0gc3R5bGVcbiAgfSBlbHNlIHtcbiAgICBuZXdTdHlsZSA9IE9iamVjdC5hc3NpZ24oe30sIGVsZW0ucHJvcHMuc3R5bGUpXG4gICAgT2JqZWN0LmFzc2lnbihuZXdTdHlsZSwgc3R5bGUpXG4gIH1cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChlbGVtLCB7c3R5bGU6IG5ld1N0eWxlfSlcbn1cblxuLy8gZnVuY3Rpb24gY2xvbmVFbGVtZW50TWVyZ2VDbGFzc05hbWUoZWxlbSwgY2xhc3NOYW1lLCBrZXkpIHtcbi8vICAgbGV0IGNmZyA9IHt9XG4vLyAgIGlmICh0eXBlb2YgZWxlbS5wcm9wcy5jbGFzc05hbWUgPT09ICd1bmRlZmluZWQnKSB7XG4vLyAgICAgY2ZnLmNsYXNzTmFtZSA9IGNsYXNzTmFtZVxuLy8gICB9IGVsc2Uge1xuLy8gICAgIGNmZy5jbGFzc05hbWUgPSBgJHtlbGVtLnByb3BzLmNsYXNzTmFtZX0gJHtjbGFzc05hbWV9YFxuLy8gICB9XG4vLyAgIGlmIChrZXkpIHtcbi8vICAgICBjZmcua2V5ID0ga2V5XG4vLyAgIH1cbi8vICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChlbGVtLCBjZmcpXG4vLyB9XG4vL1xuIl19
