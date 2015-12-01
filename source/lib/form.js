import React from 'react'
import Radium from 'radium'
import { cloneElementMergeStyle } from '../lib/util'


export default class Form extends React.Component {
  render() {
    // Merge style.
    let newStyle = Object.assign({display: 'table'}, this.props.style)

    return <form {...this.props} style={newStyle}>
      {this.renderChildren()}
    </form>
  }

  renderChildren() {
    let result = []
    let children = this.props.children
    for (let i=0; i < children.length; i+=2) {
      let label = <label style={{display: 'table-cell', paddingRight: 10}}>{children[i].trim()}</label>
      let field = cloneElementMergeStyle(children[i + 1], {display: 'table-cell'})
      result.push(<p style={{display: 'table-row'}} key={i}>{label}{field}</p>)
    }
    return result
  }
}
Form = Radium(Form)
