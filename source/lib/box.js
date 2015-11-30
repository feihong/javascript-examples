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
  let style = {display: 'flex', flexDirection: isHorizontal ? 'row' : 'column'}
  return <div {...props} style={[style, props.style]}>
    {renderChildren(isHorizontal, props.children)}
  </div>
}

function renderChildren(isHorizontal, children) {
  let result = []
  let count = React.Children.count(children)
  React.Children.forEach(children, (child, index) => {
    if (index < count - 1) {
      let marginStyle = isHorizontal ? {marginRight: 10} : {marginBottom: 10};
      let clone = cloneElementMergeStyle(child, marginStyle)
      result.push(clone);
    } else {
      result.push(child);
    }
  })
  return result
}

function cloneElementMergeStyle(elem, style) {
  let newStyle = null
  if (typeof elem.props.style === 'undefined') {
    newStyle = style
  } else {
    newStyle = Object.assign({}, elem.props.style)
    Object.assign(newStyle, style)
  }
  return React.cloneElement(elem, {style: newStyle})
}
