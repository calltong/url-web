import React from 'react';
import Header from '../Header';

import { config } from '../config';
import { http } from '../utils/http';

export default class Category extends React.Component {
  static async fetch(param) {
    let url = `${config.api.cms}/v1/categories/${param.params.id}`;
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
      title: 'Category',
      description: '',
      image: '',
      url,
      keywords: [],
    };
    if (this.props.initial) {
      let initial = this.props.initial;
      meta = {
        title: initial.details[0].name,
        description: initial.details[0].description,
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
