import BaseStore from './BaseStore'
import _ from 'lodash'

import { config } from '../config'
import { http } from '../utils/http'
import { storage } from '../utils/storage'

const origin = {
  _id: '',
  name: '',
  email: '',
  password: '',
}

export class User extends BaseStore {
  constructor() {
    super()
    this.observable({
      detail: _.cloneDeep(origin),
    })
    this.init()
  }

  init() {
    this.loadFromStorage()
  }

  async reset() {
    await http.setToken(undefined)
    this.detail = _.cloneDeep(origin)
    this.removeStorage()
  }

  isLogin() {
    return this.detail._id !== ''
  }

  async login({ email, password }) {
    try {
      this.reset()
      let url = `${config.api.content}/user/login`

      return true
    } catch (e) {
      this.signin = {
        status: 'error',
        message: 'something wrong. please try again',
      }
      return false
    }
  }

  async logout() {
    this.reset()
  }

  saveToStorage({ token }) {
    let auth = {
      token,
    }

    storage.save('authentication', auth)
  }

  removeStorage() {
    storage.save('authentication', {})
  }

  async loadFromStorage() {
    let auth = storage.load('authentication')
    if (auth && auth.token) {
      await http.setToken(auth.token)
      this.getMemberProfile()
    }
  }
}

export default new User()
