/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-wrap-multilines */
import React, { useState } from 'react';
import { Row, Card, Col, Radio, Typography, Layout, Button } from 'antd';
import { UnorderedListOutlined, AppstoreFilled } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import Router from 'next/router';
import { ProductSectionContainer } from './style';
import Footer from '../../components/Footer';

const { Text, Paragraph } = Typography;
const { Content } = Layout;

const ProductListSection = () => {
  const [typeButton, setTypeButton] = useState('grid');
  const products = useSelector((state) => state.products.productList);
  const goToProductDetail = (id) => {
    Router.push(`/products/${id}`);
  };

  const onClickTypeButton = (type) => {
    setTypeButton(type);
  };
  return (
    <ProductSectionContainer>
      <Content style={{ padding: '0 10%' }}>
        <Col lg={24} />
        <Card
          bodyStyle={{ padding: '5' }}
          bordered={false}
          extra={
            <div>
              <Radio.Group defaultValue="grid" buttonStyle="solid" size="large">
                <Radio.Button
                  onChange={(e) => onClickTypeButton(e.target.value)}
                  value="grid"
                >
                  <AppstoreFilled />
                </Radio.Button>
                <Radio.Button
                  onChange={(e) => onClickTypeButton(e.target.value)}
                  value="list"
                >
                  <UnorderedListOutlined />
                </Radio.Button>
              </Radio.Group>
            </div>
          }
        >
          {typeButton === 'grid' ? (
            <Row gutter={16}>
              {products?.map((product, i) => (
                <Col
                  key={i}
                  style={{ paddingBottom: '16px' }}
                  sm={12}
                  lg={8}
                  xl={6}
                >
                  <Card
                    bodyStyle={{ padding: '20px' }}
                    hoverable
                    cover={
                      <img
                        alt="example"
                        height="250px"
                        style={{
                          borderLeft: '1px solid #f0f0f0',
                          borderRight: '1px solid #f0f0f0',
                        }}
                        src={product?.image_url ?? ''}
                      />
                    }
                  >
                    <Row style={{ marginBottom: '10px' }}>
                      <Col className="pl-0 pr-3" lg={6}>
                        <img
                          style={{
                            borderRadius: '6px',
                          }}
                          alt="example"
                          width="55px"
                          height="40px"
                          src={product?.brand_info?.url ?? ''}
                        />
                      </Col>
                      <Col lg={18}>
                        <Paragraph
                          style={{
                            paddingLeft: '10px',
                            marginBottom: '0px',
                            lineHeight: '1.45',
                          }}
                          ellipsis={{ rows: 2 }}
                          strong
                        >
                          {product?.name ?? ''}
                        </Paragraph>
                      </Col>
                    </Row>
                    <Row>
                      <Paragraph ellipsis={{ rows: 2 }}>
                        {product?.description ?? ''}
                      </Paragraph>
                    </Row>
                    <Row>
                      <Text
                        style={{
                          color: 'red',
                          position: 'absolute',
                          bottom: '65px',
                          right: '20px',
                        }}
                        strong
                      >
                        {new Intl.NumberFormat('th-TH', {
                          style: 'currency',
                          currency: 'THB',
                        }).format(product?.price ?? '0.00')}
                      </Text>
                    </Row>
                    <Row style={{ paddingTop: '30px' }}>
                      <Button
                        type="primary"
                        style={{
                          background: '#13c2c2',
                          borderColor: '#13c2c2',
                        }}
                        onClick={() => goToProductDetail(product._id)}
                        block
                      >
                        Detail
                      </Button>
                    </Row>
                  </Card>
                </Col>
              ))}
            </Row>
          ) : (
            <Row gutter={16}>
              {products?.map((product, i) => (
                <Col lg={24} key={i}>
                  <Card.Grid
                    bodyStyle={{ padding: '20px' }}
                    hoverable
                    bordered={false}
                    style={{ width: '100%' }}
                  >
                    <Row gutter={8}>
                      <Col lg={4}>
                        <img
                          style={{ paddingRight: '10px', bordered: '1px' }}
                          alt="example"
                          width="100px"
                          height="100px"
                          src={product?.image_url ?? ''}
                        />
                      </Col>
                      <Col lg={17}>
                        <Text strong>{product?.name ?? ''}</Text>
                        <Paragraph>{product?.description ?? ''}</Paragraph>
                      </Col>
                      <Col lg={3}>
                        <Col style={{ paddingTop: '10px' }} lg={24}>
                          <Text style={{ color: 'red' }} strong>
                            {new Intl.NumberFormat('th-TH', {
                              style: 'currency',
                              currency: 'THB',
                            }).format(product?.price ?? '')}
                          </Text>
                        </Col>
                        <Col style={{ paddingTop: '10px' }} lg={24}>
                          <Button
                            type="primary"
                            style={{
                              background: '#13c2c2',
                              borderColor: '#13c2c2',
                            }}
                            onClick={() => goToProductDetail(product._id)}
                          >
                            Detail
                          </Button>
                        </Col>
                      </Col>
                    </Row>
                  </Card.Grid>
                </Col>
              ))}
            </Row>
          )}
        </Card>
      </Content>
      <Footer />
    </ProductSectionContainer>
  );
};

export default ProductListSection;
