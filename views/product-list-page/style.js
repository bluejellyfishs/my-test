/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const ProductSectionContainer = styled.div`
  .ant-radio-group-solid
    .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled) {
    background: #13c2c2;
    border-color: #13c2c2;
  }

  .ant-radio-button-wrapper:hover {
    color: #13c2c2;
  }

  .square {
    height: 170px;
    width: '100%';
  }
`;

export const SquareContainer = styled.div`
  padding: 40px;
`;

export const TitleText = styled.p`
  color: black;
  font-weight: bold;
`;

export const DetailText = styled.p`
  color: #1890ff;
`;

export const TextContainer = styled.div`
  display: flex;
  padding: 0px 0px;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
  line-height: 0.5rem;
`;

export const CompanyText = styled.p`
  color: #1890ff;
  text-align: center;
`;
