import React from 'react';
import {
  Row,
  Col,
  InputNumber,
  Typography,
  Layout,
  Button,
  Breadcrumb,
  Divider,
  Spin,
} from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import Footer from '../../components/Footer';
// import { Link } from 'react-router-dom';

const { Text, Paragraph, Title } = Typography;
const { Content } = Layout;
const ProductDetailSection = () => {
  const product = useSelector((state) => state?.products?.product);
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
  const onChange = () => {
    console.log('');
  };
  return (
    <>
      <Content style={{ padding: '0 10%', marginBottom: '50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>
            <Link href="/">
              <a>HOME</a>
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>{product?.name ?? ''}</Breadcrumb.Item>
        </Breadcrumb>
        <Divider />
        <Row>
          <Col
            sm={24}
            lg={11}
            xl={7}
            style={{ border: '1px solid #f0f0f0', marginRight: '20px' }}
          >
            <img
              alt="example"
              width="300px"
              height="300px"
              src={product?.image_url ?? ''}
            />
          </Col>
          <Col sm={24} lg={12} xl={16}>
            <Title level={4}>{product?.name ?? ''}</Title>
            <Paragraph>{product?.description ?? ''}</Paragraph>
            <Col style={{ paddingTop: '10px' }} lg={24}>
              <Text style={{ color: 'red' }} strong>
                {new Intl.NumberFormat('th-TH', {
                  style: 'currency',
                  currency: 'THB',
                }).format(product?.price ?? '0.00')}
              </Text>
            </Col>
            <Col style={{ paddingTop: '10px' }} lg={24}>
              <InputNumber min={1} defaultValue={1} onChange={() => onChange} />
            </Col>
            <Col style={{ paddingTop: '10px' }} lg={24}>
              <Button
                type="primary"
                style={{ background: '#13c2c2', borderColor: '#13c2c2' }}
              >
                Add to Cart
              </Button>
            </Col>
          </Col>
        </Row>
      </Content>
      <Footer />
    </>
  );
};

export default ProductDetailSection;
