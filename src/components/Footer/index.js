import React from 'react';
import {
  FooterContainer,
  FooterLink,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterWrapp,
  SocialIcon,
  SocialIconLink,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
} from './FooterElements';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
  FaYoutube,
} from 'react-icons/fa6';

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
              <FooterLinkItems>
                <FooterLinkTitle>About Us</FooterLinkTitle>
                <FooterLink to="signin">How it works</FooterLink>
                <FooterLink to="signin">Testimonials</FooterLink>
                <FooterLink to="signin">Careers</FooterLink>
                <FooterLink to="signin">Terms of Service</FooterLink>
                <FooterLink to="signin">Investors</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>About Us</FooterLinkTitle>
                <FooterLink to="signin">How it works</FooterLink>
                <FooterLink to="signin">Testimonials</FooterLink>
                <FooterLink to="signin">Careers</FooterLink>
                <FooterLink to="signin">Terms of Service</FooterLink>
                <FooterLink to="signin">Investors</FooterLink>
              </FooterLinkItems>
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
          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo to="/">dolla</SocialLogo>
              <WebsiteRights>
                dolla &copy; {new Date().getFullYear()}
                All rights reserved.
              </WebsiteRights>
              <SocialIcon>
                <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                  <FaFacebook />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                  <FaInstagram />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="YouTube">
                  <FaYoutube />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                  <FaXTwitter />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                  <FaLinkedin />
                </SocialIconLink>
              </SocialIcon>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrapp>
      </FooterContainer>
    </>
  );
}

export default Footer;
