import React from 'react'
import Radium from 'radium'


export class VBox extends React.Component {
  render() {
    return renderBox(false, this.props)
  }
}
VBox = Radium(VBox)


export class HBox extends React.Component {
  render() {
    return renderBox(true, this.props)
  }
}
HBox = Radium(HBox)


function renderBox(isHorizontal, props) {
  let className = isHorizontal ? 'hbox' : 'vbox'

  // Merge style.
  let style = {display: 'flex', flexDirection: isHorizontal ? 'row' : 'column'}
  let newStyle = Object.assign(style, props.style)

  return <div {...props} className={className} style={newStyle}>
    {props.children}
  </div>
}
