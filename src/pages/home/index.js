import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import {
  Container, Row, Col,
  Input, Form, Button } from 'reactstrap'
import Select from 'react-select'

import InputGroup from '../../components/InputGroup'
import Loading from '../../components/Loading'
import { dialog } from '../../utils/dialog'

const tags = [
  { value: 'fackbook', label: 'Facebook' },
  { value: 'instagram', label: 'Instagram' },
  { value: 'email', label: 'Email' },
  { value: 'website', label: 'Website' },
]

class Home extends Component {
  constructor() {
    super()
    this.state = {
      url: '',
      tag: undefined,
      loading: false,
      valid: {
        url: true,
      },
    }

    this.onChange = this.onChange.bind(this)
    this.onCreate = this.onCreate.bind(this)
  }

  async onCreate() {
    let { url, tag } = this.state
    if ( url === '') {
      dialog.warning({ title: 'please check', text: 'url is undefined'})
      return
    }
    this.setState({ loading: true })
    let val = tag !== undefined ? tag.value : undefined
    await this.props.generator.create({ url, tag: val })
    this.setState({ loading: false })
  }

  onChange(evt) {
    let name = evt.target.name
    let value = evt.target.value

    let state = this.state
    state[name] = value
    this.setState(state)
  }

  chTag(val) {
    this.setState({ tag: val })
  }

  render() {
    let { url, tag, loading } = this.state
    let generator = this.props.generator.toJS()
    let doc = generator.created
    let content
    if (doc._id !== undefined) {
      let path = `http://localhost:3000/${doc.code}`
      content = (
        <Row>
          <Col md="12">
            <InputGroup label="New URL">
              <a href={path} target="_blank">{path}</a>
            </InputGroup>
          </Col>
        </Row>
      )
    } else if (generator.message !== '') {
      content = (
        <Row>
          <Col md="12">
            <InputGroup label="New URL">
              <p style={{color: 'red'}}>{generator.message}</p>
            </InputGroup>
          </Col>
        </Row>
      )
    }
    return (
      <div>
        <br />
        <Form>
          <Container>
            <h3>Create your short url</h3>
            <br />
            <Row>
              <Col md="2">
                <InputGroup label="Tag">
                  <Select
                    placeholder="Tag"
                    value={tag}
                    options={tags}
                    onChange={this.chTag.bind(this)} />
                </InputGroup>
              </Col>
              <Col md="8">
                <InputGroup label="URL">
                  <Input
                    name="url"
                    value={url}
                    onChange={this.onChange} />
                </InputGroup>
              </Col>
              <Col md="2">
                <InputGroup label="">
                  <Loading loading={loading} >
                    <Button
                      style={{ width: '100%' }}
                      onClick={this.onCreate}>
                      Create
                    </Button>
                  </Loading>
                </InputGroup>
              </Col>
            </Row>
            {content}
          </Container>
        </Form>
      </div>
    )
  }
}

export default inject('generator')(observer(Home))
