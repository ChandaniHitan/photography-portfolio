import React from 'react';
import NavbarComponent from '../components/NavbarComponent';
import FooterComponent from '../components/FooterComponent';
import styled from 'styled-components';

function About() {
    return (
        <div>
            <NavbarComponent />
            <Container>
                <Main>
                    <Image src='images/ashish.jpg' /> 
                    <AboutText>
                        <Heading>About Us</Heading>
                        <Title>Civil Engineeer <Span>& Photographer</Span></Title>
                        <Description>
                            An Engineer by profession, But a Photographer and Storyteller by choice. 
                            Hi I am Ashish Dahal, Photographer and Motion graphics storyteller based in Oulu, Finland.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                            mollit anim id est laborum.
                        </Description>
                    </AboutText>
                </Main>
            </Container>
            <FooterComponent />
        </div>
    )
}

const Container = styled.div`
    background-color: #191919;
    width: 100%;
    padding: 78px 0px;
`
const Image = styled.img`
    height: auto;
    width: 420px;
`
const Main = styled.div`
    width: 1130px;
    max-width: 95%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
    @media (max-width: 768px) {
    flex-direction: column;
  }
`
const AboutText = styled.div`
    width: 550px;
    @media (max-width: 768px) {
    width: 350px;
  }
`
const Heading = styled.h1`
    color: white;
    font-size: 40px;
    text-transform: capitalize !important;
    margin-bottom: 20px;
`
const Title = styled.h5`
    color: white;
    font-size: 25px;
    text-transform: capitalize;
    margin-bottom: 25px;
    letter-spacing: 2px;
`
const Span = styled.span`
    color: #f9004d;
`
const Description = styled.p`
    color: #fcfc;
    letter-spacting: 1px;
    line-height: 28px;
    font-size: 16px;
    margin-bottom: 45px;
`


export default About;

