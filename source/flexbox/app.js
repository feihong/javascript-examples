import React from 'react'
import ReactDOM from 'react-dom'
import {HBox, VBox} from '../lib/box'

ReactDOM.render(
  <HBox style={{color: 'yellow', backgroundColor: 'green'}}>
    <div>Alpha</div>
    <div>Beta</div>
    <VBox className='vert' style={{color: 'blue', backgroundColor: 'orange'}}>
      <div>One</div>
      <div>Two</div>
      <div>Three</div>
    </VBox>
    <div>Gamma</div>
  </HBox>,
  document.getElementById('example-1')
)

ReactDOM.render(
  <VBox style={{color: 'blue', border: '1px dashed gray'}}>
    <div>One</div>
    <HBox style={{color: 'pink', border: '2px dotted red'}}>
      <div>Apple</div>
      <div>Banana pepper</div>
      <div>Cauliflower</div>
    </HBox>
    <div>Two</div>
    <div>Three</div>
  </VBox>,
  document.getElementById('example-2')
)
