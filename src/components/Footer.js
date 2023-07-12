import React from 'react';
import {
  FooterBox,
  FooterContainer,
  FooterInfo,
  FooterMail,
  MailBox,
} from '../styled/style';

export default function Footer() {
  return (
    <FooterContainer>
      <FooterBox>
        <FooterInfo>개인정보 처리방침</FooterInfo>
        <FooterInfo>이용 약관</FooterInfo>
      </FooterBox>
      <MailBox>
        <FooterMail>All rights reserved @ Codestates</FooterMail>
      </MailBox>
    </FooterContainer>
  );
}
