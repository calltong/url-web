import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { Container, Row, Col } from 'reactstrap'

import Loading from '../../components/Loading'

class Code extends Component {
  constructor() {
    super()
    this.state = {
      loading: false,
    }
  }

  componentDidMount() {
    let code = this.props.match.params.code
    this.getCode({ code })
  }

  async getCode({ code }) {
    this.setState({ loading: true })
    await this.props.generator.getCode({ code })
    this.setState({ loading: false })
  }

  render() {
    let { loading } = this.state
    let generator = this.props.generator.toJS()
    let detail = generator.detail
    let content
    if (generator.message !== '') {
      content = (
        <div>
          <h3>We found the problem</h3>
          <p style={{color: 'red'}}>{generator.message}</p>
        </div>
      )
    } else if (detail._id !== undefined) {
      console.log('url:', detail)
      window.location.href = detail.url
    }
    return (
      <Container>
        <br />
        <Row>
          <Col md={{size: 6, offset: 3}}>
            <p stype={{left: '50%'}}>
              <Loading loading={loading}>
                {content}
              </Loading>
            </p>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default inject('generator')(observer(Code))
