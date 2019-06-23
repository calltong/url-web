import React from 'react';
import Header from '../Header';

import { config } from '../config';
import { http } from '../utils/http';

export default class Landing extends React.Component {
  static async fetch() {
    let url = `${config.api.cms}/v1/layouts/home/active/full`;
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
      title: 'Home',
      description: '',
      image: '',
      url,
      keywords: [],
    };

    if (this.props.initial) {
      let seo = this.props.initial.main;
      meta = {
        title: seo.title,
        description: seo.description,
        image: seo.image_url,
        url,
        keywords: seo.keywords,
      };
    }
    return (
      <Header meta={meta} />
    );
  }
}
