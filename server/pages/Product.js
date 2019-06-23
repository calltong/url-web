import React from 'react';
import Header from '../Header';

import { config } from '../config';
import { http } from '../utils/http';

export default class Product extends React.Component {
  static async fetch(param) {
    let url = `${config.api.cms}/v1/products/${param.params.id}`;
    let response = await http.get(url);
    if (response.statusCode === 200) {
      return response.body.data;
    } else {
      return undefined;
    }
  }

  render() {
    let url = this.props.url ? this.props.url : '';
    let meta = {
      title: 'Product',
      description: '',
      image: '',
      url,
      keywords: [],
    };
    if (this.props.initial) {
      let initial = this.props.initial;
      let name = '';
      let des = '';
      if (initial.details.length > 0) {
        name = initial.details[0].name;
        des = initial.details[0].description;
      }

      meta = {
        title: name,
        description: des,
        image: initial.image_url,
        url,
        keywords: initial.keywords,
      };
    }
    return (
      <Header meta={meta} />
    );
  }
}
