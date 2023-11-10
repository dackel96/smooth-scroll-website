import React from 'react';
import {
  FooterContainer,
  FooterLink,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterWrapp,
} from './FooterElements';

function Footer() {
  return (
    <>
      <FooterContainer>
        <FooterWrapp>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>About Us</FooterLinkTitle>
                <FooterLink to="signin">How it works</FooterLink>
                <FooterLink to="signin">Testimonials</FooterLink>
                <FooterLink to="signin">Careers</FooterLink>
                <FooterLink to="signin">Terms of Service</FooterLink>
                <FooterLink to="signin">Investors</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>
        </FooterWrapp>
      </FooterContainer>
    </>
  );
}

export default Footer;
