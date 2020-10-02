import React from 'react';
import {
  SquareContainer,
  TitleText,
  DetailText,
  TextContainer,
  CompanyText,
} from './style';

const Footer = () => {
  return (
    <SquareContainer>
      <div className="square" style={{ backgroundColor: '#e5e5e5' }}>
        <div style={{ padding: '65px 0px' }}>
          <TextContainer>
            <TitleText> Example&nbsp;</TitleText>
            <p>by&nbsp;</p>
            <DetailText>Jaranchai Thongkam.</DetailText>
          </TextContainer>
          <CompanyText>ChomCHOB Group Co.,Ltd.</CompanyText>
        </div>
      </div>
    </SquareContainer>
  );
};

export default Footer;
