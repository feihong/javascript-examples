import React from 'react'
import ReactDOM from 'react-dom'
import Form from '../lib/form'


ReactDOM.render(
  <Form>
    Name: <input name='name' />
    Template: <select name='template'>
      <option value='1'>Guest</option>
      <option value='2'>Host</option>
    </select>
    Date: <input name='date' type='date' />
  </Form>,
  document.getElementById('example')
)
