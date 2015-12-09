import React from 'react'


export function extend(a, b) {
  let newObj = Object.assign({}, a)
  Object.assign(newObj, b)
  return newObj
}

export function cloneElementMergeStyle(elem, style) {
  let newStyle = null
  if (typeof elem.props.style === 'undefined') {
    newStyle = style
  } else {
    newStyle = Object.assign({}, elem.props.style)
    Object.assign(newStyle, style)
  }
  return React.cloneElement(elem, {style: newStyle})
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
