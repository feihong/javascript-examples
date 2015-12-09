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
), document.getElementById('content'));

},{"../lib/form":2,"react":undefined,"react-dom":undefined}],2:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

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
      var newStyle = (0, _util.extend)(this.props.style, { display: 'table' });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsInNpdGUvZm9ybS9hcHAuYmFiZWwiLCJzaXRlL2xpYi9mb3JtLmJhYmVsIiwic2l0ZS9saWIvdXRpbC5iYWJlbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNLQSxtQkFBUyxNQUFNLENBQ2I7Ozs7RUFDUSx5Q0FBTyxJQUFJLEVBQUMsTUFBTSxHQUFHOztFQUNqQjs7TUFBUSxJQUFJLEVBQUMsVUFBVTtJQUMvQjs7UUFBUSxLQUFLLEVBQUMsR0FBRzs7S0FBZTtJQUNoQzs7UUFBUSxLQUFLLEVBQUMsR0FBRzs7S0FBYztHQUN4Qjs7RUFDSix5Q0FBTyxJQUFJLEVBQUMsTUFBTSxFQUFDLElBQUksRUFBQyxLQUFLLEdBQUc7Q0FDaEMsRUFDUCxRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUNuQyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNYb0IsSUFBSTtZQUFKLElBQUk7O1dBQUosSUFBSTswQkFBSixJQUFJOztrRUFBSixJQUFJOzs7ZUFBSixJQUFJOzs2QkFDZDtBQUNQLFVBQUksUUFBUSxHQUFHLFVBTFgsTUFBTSxFQUtZLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBQyxDQUFDLENBQUE7O0FBRTNELGFBQU87O3FCQUFVLElBQUksQ0FBQyxLQUFLLElBQUUsS0FBSyxFQUFFLFFBQVEsQUFBQztRQUMxQyxJQUFJLENBQUMsY0FBYyxFQUFFO09BQ2pCLENBQUE7S0FDUjs7O3FDQUVnQjtBQUNmLFVBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQTtBQUNmLFVBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFBO0FBQ2xDLFdBQUssSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBRSxDQUFDLEVBQUU7QUFDdkMsWUFBSSxLQUFLLEdBQUc7O1lBQU8sS0FBSyxFQUFFLEVBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsRUFBRSxFQUFDLEFBQUM7VUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFO1NBQVMsQ0FBQTtBQUNqRyxZQUFJLEtBQUssR0FBRyxVQWpCRixzQkFBc0IsRUFpQkcsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUMsQ0FBQyxDQUFBO0FBQzVFLGNBQU0sQ0FBQyxJQUFJLENBQUM7O1lBQUcsS0FBSyxFQUFFLEVBQUMsT0FBTyxFQUFFLFdBQVcsRUFBQyxBQUFDLEVBQUMsR0FBRyxFQUFFLENBQUMsQUFBQztVQUFFLEtBQUs7VUFBRSxLQUFLO1NBQUssQ0FBQyxDQUFBO09BQzFFO0FBQ0QsYUFBTyxNQUFNLENBQUE7S0FDZDs7O1NBbEJrQixJQUFJO0dBQVMsZ0JBQU0sU0FBUzs7a0JBQTVCLElBQUk7Ozs7Ozs7O1FDRFQsTUFBTSxHQUFOLE1BQU07UUFNTixzQkFBc0IsR0FBdEIsc0JBQXNCOzs7Ozs7OztBQU4vQixTQUFTLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQzNCLE1BQUksTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFBO0FBQ2pDLFFBQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFBO0FBQ3hCLFNBQU8sTUFBTSxDQUFBO0NBQ2Q7O0FBRU0sU0FBUyxzQkFBc0IsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFO0FBQ2xELE1BQUksUUFBUSxHQUFHLElBQUksQ0FBQTtBQUNuQixNQUFJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEtBQUssV0FBVyxFQUFFO0FBQzNDLFlBQVEsR0FBRyxLQUFLLENBQUE7R0FDakIsTUFBTTtBQUNMLFlBQVEsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFBO0FBQzlDLFVBQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFBO0dBQy9CO0FBQ0QsU0FBTyxnQkFBTSxZQUFZLENBQUMsSUFBSSxFQUFFLEVBQUMsS0FBSyxFQUFFLFFBQVEsRUFBQyxDQUFDLENBQUE7Q0FDbkQ7Ozs7Ozs7Ozs7Ozs7OztBQUFBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQgRm9ybSBmcm9tICcuLi9saWIvZm9ybSdcblxuXG5SZWFjdERPTS5yZW5kZXIoXG4gIDxGb3JtPlxuICAgIE5hbWU6IDxpbnB1dCBuYW1lPSduYW1lJyAvPlxuICAgIFRlbXBsYXRlOiA8c2VsZWN0IG5hbWU9J3RlbXBsYXRlJz5cbiAgICAgIDxvcHRpb24gdmFsdWU9JzEnPkd1ZXN0PC9vcHRpb24+XG4gICAgICA8b3B0aW9uIHZhbHVlPScyJz5Ib3N0PC9vcHRpb24+XG4gICAgPC9zZWxlY3Q+XG4gICAgVVJMOiA8aW5wdXQgbmFtZT0nZGF0ZScgdHlwZT0ndXJsJyAvPlxuICA8L0Zvcm0+LFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpXG4pXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2V4dGVuZCwgY2xvbmVFbGVtZW50TWVyZ2VTdHlsZX0gZnJvbSAnLi4vbGliL3V0aWwnXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBsZXQgbmV3U3R5bGUgPSBleHRlbmQodGhpcy5wcm9wcy5zdHlsZSwge2Rpc3BsYXk6ICd0YWJsZSd9KVxuXG4gICAgcmV0dXJuIDxmb3JtIHsuLi50aGlzLnByb3BzfSBzdHlsZT17bmV3U3R5bGV9PlxuICAgICAge3RoaXMucmVuZGVyQ2hpbGRyZW4oKX1cbiAgICA8L2Zvcm0+XG4gIH1cblxuICByZW5kZXJDaGlsZHJlbigpIHtcbiAgICBsZXQgcmVzdWx0ID0gW11cbiAgICBsZXQgY2hpbGRyZW4gPSB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgZm9yIChsZXQgaT0wOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKz0yKSB7XG4gICAgICBsZXQgbGFiZWwgPSA8bGFiZWwgc3R5bGU9e3tkaXNwbGF5OiAndGFibGUtY2VsbCcsIHBhZGRpbmdSaWdodDogMTB9fT57Y2hpbGRyZW5baV0udHJpbSgpfTwvbGFiZWw+XG4gICAgICBsZXQgZmllbGQgPSBjbG9uZUVsZW1lbnRNZXJnZVN0eWxlKGNoaWxkcmVuW2kgKyAxXSwge2Rpc3BsYXk6ICd0YWJsZS1jZWxsJ30pXG4gICAgICByZXN1bHQucHVzaCg8cCBzdHlsZT17e2Rpc3BsYXk6ICd0YWJsZS1yb3cnfX0ga2V5PXtpfT57bGFiZWx9e2ZpZWxkfTwvcD4pXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBleHRlbmQoYSwgYikge1xuICBsZXQgbmV3T2JqID0gT2JqZWN0LmFzc2lnbih7fSwgYSlcbiAgT2JqZWN0LmFzc2lnbihuZXdPYmosIGIpXG4gIHJldHVybiBuZXdPYmpcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb25lRWxlbWVudE1lcmdlU3R5bGUoZWxlbSwgc3R5bGUpIHtcbiAgbGV0IG5ld1N0eWxlID0gbnVsbFxuICBpZiAodHlwZW9mIGVsZW0ucHJvcHMuc3R5bGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbmV3U3R5bGUgPSBzdHlsZVxuICB9IGVsc2Uge1xuICAgIG5ld1N0eWxlID0gT2JqZWN0LmFzc2lnbih7fSwgZWxlbS5wcm9wcy5zdHlsZSlcbiAgICBPYmplY3QuYXNzaWduKG5ld1N0eWxlLCBzdHlsZSlcbiAgfVxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGVsZW0sIHtzdHlsZTogbmV3U3R5bGV9KVxufVxuXG4vLyBmdW5jdGlvbiBjbG9uZUVsZW1lbnRNZXJnZUNsYXNzTmFtZShlbGVtLCBjbGFzc05hbWUsIGtleSkge1xuLy8gICBsZXQgY2ZnID0ge31cbi8vICAgaWYgKHR5cGVvZiBlbGVtLnByb3BzLmNsYXNzTmFtZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbi8vICAgICBjZmcuY2xhc3NOYW1lID0gY2xhc3NOYW1lXG4vLyAgIH0gZWxzZSB7XG4vLyAgICAgY2ZnLmNsYXNzTmFtZSA9IGAke2VsZW0ucHJvcHMuY2xhc3NOYW1lfSAke2NsYXNzTmFtZX1gXG4vLyAgIH1cbi8vICAgaWYgKGtleSkge1xuLy8gICAgIGNmZy5rZXkgPSBrZXlcbi8vICAgfVxuLy8gICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGVsZW0sIGNmZylcbi8vIH1cbi8vXG4iXX0=
