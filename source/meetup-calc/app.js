import React from 'react'
import ReactDOM from 'react-dom'
import Form from '../lib/form'
import parse from './dsl'
import { sum, sumAll } from './util'
import { extend } from '../lib/util'


const DEFAULT_VALUES = {
  tax: 9.75,
  tip: 20,
  serviceFee: 1,
}

const RESULT_FIELDS = [
  'Subtotal',
  'Tax',
  'Tip',
  'Total',
]


class Calculator extends React.Component {
  constructor(props) {
    super(props)
    let d = {
      results: null,
      detailValues: null,
    }
    this.state = Object.assign(d, DEFAULT_VALUES)

    this.handleDetailChange = this.handleDetailChange.bind(this)
  }

  render() {
    return <div>
      <h2>Inputs</h2>
      <Form>
        Tax percentage: <input defaultValue='9.75'
                               onChange={this.changeHandler('tax')} />
        Tip percentage: <input defaultValue='20' type='number'
                               onChange={this.changeHandler('tip')} />
        Service fee: <input defaultValue='1' type='number'
                            onChange={this.changeHandler('serviceFee')} />
        Order details: <textarea cols='50' rows='8' onChange={this.handleDetailChange} />
      </Form>

      <h2>Results</h2>
      <ResultTable results={this.state.results} />
    </div>
  }

  changeHandler(field) {
    return (evt) => {
      let value = evt.target.value
      this.setState({[field]: parseFloat(value)})
      this.calculate(field, value)
    }
  }

  handleDetailChange(evt) {
    let detailValues = parse(evt.target.value)
    this.setState({detailValues: detailValues})
    this.calculate('detailValues', detailValues)
  }

  calculate(key, value) {
    let results = new Map()
    let state = extend(this.state, {[key]: value})
    if (state.detailValues === null) {
      this.setState({results: null})
    } else {
      let subtotal = sumAll(state.detailValues)
      results.set('Subtotal', subtotal)
      results.set('Tax', state.tax * subtotal * 0.01)

      this.setState({results: results})
    }
  }
}


class ResultTable extends React.Component {
  render() {
    return <div style={{display: 'table'}}>
      {this.renderChildren()}
    </div>
  }

  renderChildren() {
    if (this.props.results === null) {
      return
    }
    let children = []
    for (let [key, val] of this.props.results) {
      children.push(
        <p key={key} style={{display: 'table-row'}}>
          <label style={{display: 'table-cell', paddingRight: 20}}>{key}</label>
          <label style={{display: 'table-cell'}}>{val}</label>
        </p>
      )
    }
    return children
  }
}

ReactDOM.render(
  <Calculator />,
  document.getElementById('content')
)
