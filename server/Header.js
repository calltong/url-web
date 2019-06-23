import React from 'react';

export default class Header extends React.Component {
  render() {
    let meta = this.props.meta;
    let title = meta.title ? meta.title : 'ขายสินค้าวัสดุก่อสร้างตรา SCG';
    let description = meta.description ? meta.description : 'ขายสินค้าวัสดุก่อสร้างตรา SCG';
    let url = meta.url ? meta.url : 'https://store.scg.com';
    let image = meta.image ? meta.image : '';
    let keywords = '';
    if (Array.isArray(meta.keywords) && meta.keywords.length > 0) {
      keywords = meta.keywords.reduce((result, val) => {
        return result + ', ' + val;
      });
    }
    return [
      <meta property="og:title" content={title} />,
      <meta property="og:description" content={description} />,
      <meta property="og:image" content={image} />,
      <meta property="og:url" content={url} />,
      <meta name="Description" content={description} />,
      <meta name="Keywords" content={keywords} />,
      <meta name="og:title" content={title} />,
      <meta name="og:url" content={url} />,
      <meta name="og:image" content={image} />,
      <meta name="og:description" content={description} />,
      <title>{title}</title>,
    ];
  }
}
