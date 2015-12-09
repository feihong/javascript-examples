(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HINTS = ['我很喜欢咖啡', '我会帮人做咖啡', '我帮助做的咖啡特别好喝（也特别贵）！'];

var ANSWERS = {
  correct: '椰子猫',
  partial: {
    '麝香猫': '是什么样的麝香猫？',
    '哺乳动物': '是，但请你具体一点',
    '动物': '拜托，你认真一点好不好？'
  }
};

var WhatAmI = (function (_React$Component) {
  _inherits(WhatAmI, _React$Component);

  function WhatAmI(props) {
    _classCallCheck(this, WhatAmI);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(WhatAmI).call(this, props));

    _this.state = {
      answer: '',
      charHint: ''
    };

    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.handleAnswerChange = _this.handleAnswerChange.bind(_this);
    return _this;
  }

  _createClass(WhatAmI, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h1',
          null,
          '我是什么？'
        ),
        _react2.default.createElement('img', { src: 'thing.jpg' }),
        _react2.default.createElement(
          'form',
          { onSubmit: this.handleSubmit },
          _react2.default.createElement('input', {
            placeholder: '在这里输入你的答案',
            value: this.state.answer,
            onChange: this.handleAnswerChange }),
          _react2.default.createElement('input', { type: 'submit', value: 'Submit' }),
          _react2.default.createElement(
            'div',
            null,
            this.state.charHint
          )
        ),
        this.renderHints()
      );
    }
  }, {
    key: 'renderHints',
    value: function renderHints() {
      return this.props.hints.map(function (hint, index) {
        return _react2.default.createElement(Hint, { key: index, text: '提示' + (index + 1), hint: hint });
      });
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(evt) {
      evt.preventDefault();
      var answer = this.state.answer;
      if (answer === '') {
        return;
      }

      var answers = this.props.answers;
      if (answer === answers.correct) {
        alert('哇，你太棒了！');
      } else if (answer in answers.partial) {
        alert(answers.partial[answer]);
      } else {
        alert('不对，但请你再次答题！');
      }
    }
  }, {
    key: 'handleAnswerChange',
    value: function handleAnswerChange(evt) {
      var answer = evt.target.value.trim();
      this.setState({ answer: answer });

      var count = countChars(this.props.answers.correct, answer);
      if (count > 0) {
        this.setState({ charHint: '你的答案有' + count + '个正确的汉子' });
      } else {
        this.setState({ charHint: '' });
      }
    }
  }]);

  return WhatAmI;
})(_react2.default.Component);

var Hint = (function (_React$Component2) {
  _inherits(Hint, _React$Component2);

  function Hint(props) {
    _classCallCheck(this, Hint);

    var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(Hint).call(this, props));

    _this2.state = { open: false };

    _this2.toggleOpen = _this2.toggleOpen.bind(_this2);
    return _this2;
  }

  _createClass(Hint, [{
    key: 'render',
    value: function render() {
      var hintSpan = this.state.open ? _react2.default.createElement(
        'span',
        { className: 'hint' },
        this.props.hint
      ) : null;

      return _react2.default.createElement(
        'div',
        { className: this.state.open ? 'openHint' : null },
        _react2.default.createElement(
          'button',
          { onClick: this.toggleOpen },
          this.props.text
        ),
        hintSpan
      );
    }
  }, {
    key: 'toggleOpen',
    value: function toggleOpen() {
      this.setState({ open: !this.state.open });
    }
  }]);

  return Hint;
})(_react2.default.Component);

Hint.propTypes = {
  text: _react2.default.PropTypes.string,
  hint: _react2.default.PropTypes.string
};

// Count the number of chars from the given answer that are also in the correct
// answer.
function countChars(correctAnswer, givenAnswer) {
  var chars = givenAnswer.split('');

  return chars.reduce(function (prev, current) {
    if (correctAnswer.indexOf(current) === -1) {
      return prev;
    } else {
      return prev + 1;
    }
  }, 0);
}

_reactDom2.default.render(_react2.default.createElement(WhatAmI, { hints: HINTS, answers: ANSWERS }), document.getElementById('content'));

},{"react":undefined,"react-dom":undefined}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsInNpdGUvd2hhdC1hbS1pL2FwcC5iYWJlbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSUEsSUFBTSxLQUFLLEdBQUcsQ0FDWixRQUFRLEVBQ1IsU0FBUyxFQUNULG9CQUFvQixDQUNyQixDQUFBOztBQUVELElBQU0sT0FBTyxHQUFHO0FBQ2QsU0FBTyxFQUFFLEtBQUs7QUFDZCxTQUFPLEVBQUU7QUFDUCxTQUFLLEVBQUUsV0FBVztBQUNsQixVQUFNLEVBQUUsV0FBVztBQUNuQixRQUFJLEVBQUUsY0FBYztHQUNyQjtDQUNGLENBQUE7O0lBRUssT0FBTztZQUFQLE9BQU87O0FBQ1gsV0FESSxPQUFPLENBQ0MsS0FBSyxFQUFFOzBCQURmLE9BQU87O3VFQUFQLE9BQU8sYUFFSCxLQUFLOztBQUNYLFVBQUssS0FBSyxHQUFHO0FBQ1gsWUFBTSxFQUFFLEVBQUU7QUFDVixjQUFRLEVBQUUsRUFBRTtLQUNiLENBQUE7O0FBRUQsVUFBSyxZQUFZLEdBQUcsTUFBSyxZQUFZLENBQUMsSUFBSSxPQUFNLENBQUE7QUFDaEQsVUFBSyxrQkFBa0IsR0FBRyxNQUFLLGtCQUFrQixDQUFDLElBQUksT0FBTSxDQUFBOztHQUM3RDs7ZUFWRyxPQUFPOzs2QkFZRjtBQUNQLGFBQU87OztRQUNMOzs7O1NBQWM7UUFFZCx1Q0FBSyxHQUFHLEVBQUMsV0FBVyxHQUFHO1FBRXZCOztZQUFNLFFBQVEsRUFBRSxJQUFJLENBQUMsWUFBWSxBQUFDO1VBQ2hDO0FBQ0UsdUJBQVcsRUFBQyxXQUFXO0FBQ3ZCLGlCQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEFBQUM7QUFDekIsb0JBQVEsRUFBRSxJQUFJLENBQUMsa0JBQWtCLEFBQUMsR0FBRztVQUN2Qyx5Q0FB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RSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQTtLQUN4Qzs7O1NBcEJHLElBQUk7R0FBUyxnQkFBTSxTQUFTOztBQXNCbEMsSUFBSSxDQUFDLFNBQVMsR0FBRztBQUNmLE1BQUksRUFBRSxnQkFBTSxTQUFTLENBQUMsTUFBTTtBQUM1QixNQUFJLEVBQUUsZ0JBQU0sU0FBUyxDQUFDLE1BQU07Q0FDN0I7Ozs7QUFBQSxBQUtELFNBQVMsVUFBVSxDQUFDLGFBQWEsRUFBRSxXQUFXLEVBQUU7QUFDOUMsTUFBSSxLQUFLLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQTs7QUFFakMsU0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBSztBQUNyQyxRQUFJLGFBQWEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7QUFDekMsYUFBTyxJQUFJLENBQUE7S0FDWixNQUFNO0FBQ0wsYUFBTyxJQUFJLEdBQUcsQ0FBQyxDQUFBO0tBQ2hCO0dBQ0YsRUFBRSxDQUFDLENBQUMsQ0FBQTtDQUNOOztBQUdELG1CQUFTLE1BQU0sQ0FDYiw4QkFBQyxPQUFPLElBQUMsS0FBSyxFQUFFLEtBQUssQUFBQyxFQUFDLE9BQU8sRUFBRSxPQUFPLEFBQUMsR0FBRyxFQUMzQyxRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUNuQyxDQUFBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXG5cblxuY29uc3QgSElOVFMgPSBbXG4gICfmiJHlvojllpzmrKLlkpbllaEnLFxuICAn5oiR5Lya5biu5Lq65YGa5ZKW5ZWhJyxcbiAgJ+aIkeW4ruWKqeWBmueahOWSluWVoeeJueWIq+WlveWWne+8iOS5n+eJueWIq+i0te+8ie+8gScsXG5dXG5cbmNvbnN0IEFOU1dFUlMgPSB7XG4gIGNvcnJlY3Q6ICfmpLDlrZDnjKsnLFxuICBwYXJ0aWFsOiB7XG4gICAgJ+m6nemmmeeMqyc6ICfmmK/ku4DkuYjmoLfnmoTpup3pppnnjKvvvJ8nLFxuICAgICflk7rkubPliqjniaknOiAn5piv77yM5L2G6K+35L2g5YW35L2T5LiA54K5JyxcbiAgICAn5Yqo54mpJzogJ+aLnOaJmO+8jOS9oOiupOecn+S4gOeCueWlveS4jeWlve+8nycsXG4gIH0sXG59XG5cbmNsYXNzIFdoYXRBbUkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBhbnN3ZXI6ICcnLFxuICAgICAgY2hhckhpbnQ6ICcnLFxuICAgIH1cblxuICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKVxuICAgIHRoaXMuaGFuZGxlQW5zd2VyQ2hhbmdlID0gdGhpcy5oYW5kbGVBbnN3ZXJDaGFuZ2UuYmluZCh0aGlzKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8ZGl2PlxuICAgICAgPGgxPuaIkeaYr+S7gOS5iO+8nzwvaDE+XG5cbiAgICAgIDxpbWcgc3JjPSd0aGluZy5qcGcnIC8+XG5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHBsYWNlaG9sZGVyPSflnKjov5nph4zovpPlhaXkvaDnmoTnrZTmoYgnXG4gICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuYW5zd2VyfVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUFuc3dlckNoYW5nZX0gLz5cbiAgICAgICAgPGlucHV0IHR5cGU9J3N1Ym1pdCcgdmFsdWU9J1N1Ym1pdCcgLz5cbiAgICAgICAgPGRpdj57dGhpcy5zdGF0ZS5jaGFySGludH08L2Rpdj5cbiAgICAgIDwvZm9ybT5cbiAgICAgIHt0aGlzLnJlbmRlckhpbnRzKCl9XG4gICAgPC9kaXY+XG4gIH1cblxuICByZW5kZXJIaW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5oaW50cy5tYXAoKGhpbnQsIGluZGV4KSA9PiB7XG4gICAgICByZXR1cm4gPEhpbnQga2V5PXtpbmRleH0gdGV4dD17J+aPkOekuicgKyAoaW5kZXggKyAxKX0gaGludD17aGludH0gLz5cbiAgICB9KVxuICB9XG5cbiAgaGFuZGxlU3VibWl0KGV2dCkge1xuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgbGV0IGFuc3dlciA9IHRoaXMuc3RhdGUuYW5zd2VyXG4gICAgaWYgKGFuc3dlciA9PT0gJycpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCBhbnN3ZXJzID0gdGhpcy5wcm9wcy5hbnN3ZXJzXG4gICAgaWYgKGFuc3dlciA9PT0gYW5zd2Vycy5jb3JyZWN0KSB7XG4gICAgICBhbGVydCgn5ZOH77yM5L2g5aSq5qOS5LqG77yBJylcbiAgICB9IGVsc2UgaWYgKGFuc3dlciBpbiBhbnN3ZXJzLnBhcnRpYWwpIHtcbiAgICAgIGFsZXJ0KGFuc3dlcnMucGFydGlhbFthbnN3ZXJdKVxuICAgIH0gZWxzZSB7XG4gICAgICBhbGVydCgn5LiN5a+577yM5L2G6K+35L2g5YaN5qyh562U6aKY77yBJylcbiAgICB9XG4gIH1cblxuICBoYW5kbGVBbnN3ZXJDaGFuZ2UoZXZ0KSB7XG4gICAgbGV0IGFuc3dlciA9IGV2dC50YXJnZXQudmFsdWUudHJpbSgpXG4gICAgdGhpcy5zZXRTdGF0ZSh7YW5zd2VyOiBhbnN3ZXJ9KVxuXG4gICAgbGV0IGNvdW50ID0gY291bnRDaGFycyh0aGlzLnByb3BzLmFuc3dlcnMuY29ycmVjdCwgYW5zd2VyKVxuICAgIGlmIChjb3VudCA+IDApIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2NoYXJIaW50OiBg5L2g55qE562U5qGI5pyJJHtjb3VudH3kuKrmraPnoa7nmoTmsYnlrZBgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7Y2hhckhpbnQ6ICcnfSlcbiAgICB9XG4gIH1cbn1cblxuXG5jbGFzcyBIaW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge29wZW46IGZhbHNlfVxuXG4gICAgdGhpcy50b2dnbGVPcGVuID0gdGhpcy50b2dnbGVPcGVuLmJpbmQodGhpcylcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgaGludFNwYW4gPSB0aGlzLnN0YXRlLm9wZW4gP1xuICAgICAgPHNwYW4gY2xhc3NOYW1lPSdoaW50Jz57dGhpcy5wcm9wcy5oaW50fTwvc3Bhbj4gOiBudWxsXG5cbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUub3BlbiA/ICdvcGVuSGludCcgOiBudWxsfT5cbiAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy50b2dnbGVPcGVufT57dGhpcy5wcm9wcy50ZXh0fTwvYnV0dG9uPlxuICAgICAge2hpbnRTcGFufVxuICAgIDwvZGl2PlxuICB9XG5cbiAgdG9nZ2xlT3BlbigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtvcGVuOiAhdGhpcy5zdGF0ZS5vcGVufSlcbiAgfVxufVxuSGludC5wcm9wVHlwZXMgPSB7XG4gIHRleHQ6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gIGhpbnQ6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG59XG5cblxuLy8gQ291bnQgdGhlIG51bWJlciBvZiBjaGFycyBmcm9tIHRoZSBnaXZlbiBhbnN3ZXIgdGhhdCBhcmUgYWxzbyBpbiB0aGUgY29ycmVjdFxuLy8gYW5zd2VyLlxuZnVuY3Rpb24gY291bnRDaGFycyhjb3JyZWN0QW5zd2VyLCBnaXZlbkFuc3dlcikge1xuICBsZXQgY2hhcnMgPSBnaXZlbkFuc3dlci5zcGxpdCgnJylcblxuICByZXR1cm4gY2hhcnMucmVkdWNlKChwcmV2LCBjdXJyZW50KSA9PiB7XG4gICAgaWYgKGNvcnJlY3RBbnN3ZXIuaW5kZXhPZihjdXJyZW50KSA9PT0gLTEpIHtcbiAgICAgIHJldHVybiBwcmV2XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBwcmV2ICsgMVxuICAgIH1cbiAgfSwgMClcbn1cblxuXG5SZWFjdERPTS5yZW5kZXIoXG4gIDxXaGF0QW1JIGhpbnRzPXtISU5UU30gYW5zd2Vycz17QU5TV0VSU30gLz4sXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JylcbilcbiJdfQ==
