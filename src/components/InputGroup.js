import React, { Component } from 'react'
import { FormGroup, Label } from 'reactstrap'

export default class InputGroup extends Component {
  render() {
    return (
      <FormGroup>
        <Label>{this.props.label} &#160;</Label>
        <div>{this.props.children}</div>
      </FormGroup>
    )
  }
}
