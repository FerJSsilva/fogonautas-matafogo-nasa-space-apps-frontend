import React from 'react';
import { Layout, Col, Row } from 'antd';

const { Footer } = Layout;

const FooterComponent = () => (
  <Footer style={{ backgroundColor: '#FAFAFA' }}>
    <Row>
      <Col span={24} style={{ textAlign: 'center' }}>
        Mata Fogo ©2019 Created by Fogonautas at NASA Space Apss
        <br />
        version 0.1
      </Col>
    </Row>
  </Footer>
);

export default FooterComponent;
