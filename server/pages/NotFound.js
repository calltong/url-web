import React from 'react';
import Header from '../Header';

export default class NotFound extends React.Component {
  render() {
    let url = this.props.url ? this.props.url : '';
    let meta = {
      title: 'ขายสินค้าวัสดุก่อสร้างตรา SCG',
      description: 'ขายสินค้าวัสดุก่อสร้างตรา SCG',
      image: 'https://azecomsa99.blob.core.windows.net/production/home/welcome.jpg',
      url,
      keywords: 'สินค้าวัสดุก่อสร้างออนไลน์ สินค้า SCG สินค้าดี มีคุณภาพ จำหน่ายสินค้าวัสดุก่อสร้าง ราคาวัสดุก่อสร้าง เช็คราคาวัสดุก่อสร้าง โปรโมชั่นวัสดุก่อสร้าง สั่งซื้อวัสดุก่อสร้างออนไลน์ ซื้อวัสดุก่อสร้างออนไลน์ ราคาปูนเสือมอร์ตาร์ เปรียบเทียบราคาปูนซีเมนต์ ซื้อปูนราคาถูก ปูนฉาบทั่วไป ราคาถูก ฉนวนกันความร้อน stay cool ราคาถูก สเตย์คูล ปูนปูกระเบื้อง ซื้อปูนกาวซีเมนต์ ไม้พื้นลามิเนต เช็คราคาไม้พื้น ติดตั้งไม้พื้นลามิเนต ซื้อหลังคาราคาถูก หลังคา Modern ซื้อกระเบื้องหลังคา',
    };
    return (
      <Header meta={meta} />
    );
  }
}
