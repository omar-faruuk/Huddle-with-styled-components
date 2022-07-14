import React from 'react';
import { Button } from './Styled/Button.styled';
import Container from './Styled/container.styled';
import { Image, Logo, Nav, StyledHeader } from './Styled/header.styled'
import logoImg from '../../src/images/logo.svg'
import headerImg from '../../src/images/illustration-mockups.svg'
import { Flex } from './Styled/Flex.styled';
const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <Nav>
                    <Logo src={logoImg} alt='' />
                    <Button>try if free</Button>
                </Nav>
                <Flex>
                    <div>
                        <h1>Build your community your fan will love</h1>

                        <p> Huddle re-imagines the way we build communities. You have a voice,
                            but so does your audience. Create connections with your users as
                            you engage in genuine discussion.</p>

                        <Button bg='#ff0099' color='#fff'>
                            Get Started For Free
                        </Button>
                    </div>
                    <Image src={headerImg} alt='' />
                </Flex>
            </Container>
        </StyledHeader>
    );
};

export default Header;