import BaseStore from './BaseStore'
import _ from 'lodash'

import { config } from '../config'
import { http } from '../utils/http'
import { helper } from '../utils/helper'

const origin = {
  _id: undefined,
  url: '',
  tag: '',
  code: '',
  viewer: 0,
}

export class Generator extends BaseStore {
  constructor() {
    super()
    this.observable({
      detail: _.cloneDeep(origin),
      created: _.cloneDeep(origin),
      message: '',
    })
  }

  async getCode({ code }) {
    let msg
    try {
      await helper.sleep(2000)
      let url = `${config.api}/generator/url/${code}`
      let res = await http.get(url)
      if (res.statusCode === 200) {
        this.detail = res.body.data
        return true
      }

      msg = res.body.message
    } catch (e) {
      msg = e.message
    }

    this.message = msg
    return false
  }

  async create({ url, tag }) {
    let msg
    try {
      let json ={
        url,
        tag,
      }
      let path = `${config.api}/generator/url`

      await helper.sleep(2000)
      this.message = ''
      this.created = _.cloneDeep(origin)
      let res = await http.post(path, { json })
      if (res.statusCode === 200) {
        this.created = res.body.data
        return true
      }

      msg = res.body.message
    } catch (e) {
      msg = e.message
    }

    this.message = msg
    return false
  }
}

export default new Generator()
