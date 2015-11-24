
const HINTS = [
  '我很喜欢咖啡',
  '我会帮人做咖啡',
  '我帮助做的咖啡特别好喝（也特别贵）！',
]

const ANSWERS = {
  correct: '椰子猫',
  partial: {
    '麝香猫': '是什么样的麝香猫？',
    '哺乳动物': '是，但请你具体一点',
    '动物': '拜托，你认真一点好不好？',
  },
}

class WhatAmI extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      answer: '',
      charHint: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleAnswerChange = this.handleAnswerChange.bind(this)
  }

  render() {
    return <div>
      <h1>我是什么？</h1>

      <img src='thing.jpg' />

      <form onSubmit={this.handleSubmit}>
        <input
          placeholder='在这里输入你的答案'
          value={this.state.answer}
          onChange={this.handleAnswerChange} />
        <input type='submit' value='Submit' />
        <div>{this.state.charHint}</div>
      </form>
      {this.renderHints()}
    </div>
  }

  renderHints() {
    return this.props.hints.map((hint, index) => {
      return <Hint key={index} text={'提示' + (index + 1)} hint={hint} />
    })
  }

  handleSubmit(evt) {
    evt.preventDefault()
    let answer = this.state.answer
    if (answer === '') {
      return
    }

    let answers = this.props.answers
    if (answer === answers.correct) {
      alert('哇，你太棒了！')
    } else if (answer in answers.partial) {
      alert(answers.partial[answer])
    } else {
      alert('不对，但请你再次答题！')
    }
  }

  handleAnswerChange(evt) {
    let answer = evt.target.value.trim()
    this.setState({answer: answer})

    let count = countChars(this.props.answers.correct, answer)
    if (count > 0) {
      this.setState({charHint: `你的答案有${count}个正确的汉子`})
    } else {
      this.setState({charHint: ''})
    }
  }
}


class Hint extends React.Component {
  constructor(props) {
    super(props)
    this.state = {open: false}

    this.toggleOpen = this.toggleOpen.bind(this)
  }

  render() {
    let hintSpan = this.state.open ?
      <span className='hint'>{this.props.hint}</span> : null

    return <div className={this.state.open ? 'openHint' : null}>
      <button onClick={this.toggleOpen}>{this.props.text}</button>
      {hintSpan}
    </div>
  }

  toggleOpen() {
    this.setState({open: !this.state.open})
  }
}
Hint.propTypes = {
  text: React.PropTypes.string,
  hint: React.PropTypes.string,
}


// Count the number of chars from the given answer that are also in the correct
// answer.
function countChars(correctAnswer, givenAnswer) {
  let chars = givenAnswer.split('')

  return chars.reduce((prev, current) => {
    if (correctAnswer.indexOf(current) === -1) {
      return prev
    } else {
      return prev + 1
    }
  }, 0)
}


ReactDOM.render(
  <WhatAmI hints={HINTS} answers={ANSWERS} />,
  document.getElementById('content')
);
