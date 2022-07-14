import React from 'react';
import Container from './Styled/container.styled';
import { Flex } from './Styled/Flex.styled';
import { StyledFooter } from './Styled/Footer.styled';
import footerImg from '../images/logo_white.svg';
import SocialIcons from './SocialIcons';

const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <img src={footerImg} alt='' />

                <Flex>
                    <ul>
                        <li>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua
                        </li>
                        <li>+1-543-123-4567</li>
                        <li>example@huddle.com</li>
                    </ul>
                    <ul>
                        <li>About Us</li>
                        <li>What We Do</li>
                        <li>FAQ</li>
                    </ul>

                    <ul>
                        <li>Career</li>
                        <li>Blog</li>
                        <li>Contact Us</li>
                    </ul>

                    <SocialIcons/>
                </Flex>

                <p>&copy; 2022 Huddle. All rights reserved</p>
            </Container>
        </StyledFooter>
    );
};

export default Footer;