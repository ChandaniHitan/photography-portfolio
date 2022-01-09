import React from 'react';
import FooterComponent from '../components/FooterComponent';
import NavbarComponent from '../components/NavbarComponent';
import { 
    Button,
    Container,
    Form,
    FormGroup,
    Label,
    Input,
    Col
 } from 'reactstrap';
import styled from 'styled-components';

function Contact(){
        return(
            <div>
                <NavbarComponent/>
                <FormContainer>
                <Title>Contact</Title>
                    <Form>
                        <FormGroup row>
                            <Text sm={2}>
                                Name (required)
                            </Text>
                            <Col sm={10}>
                            <Input/>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Text sm={2}>
                            Email Address (required)
                            </Text>
                            <Col sm={10}>
                            <Input
                                id="exampleEmail"
                                name="email"
                                type="email"
                            />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Text sm={2}>
                                Subject
                            </Text>
                            <Col sm={10}>
                            <Input/>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Text sm={2}>
                                Message
                            </Text>
                            <Col sm={10}>
                            <Input
                                id="exampleText"
                                name="text"
                                type="textarea"
                            />
                            </Col>
                        </FormGroup>

                        <FormGroup
                            check
                            row
                        >
                            <Col
                            sm={{
                                offset: 2,
                                size: 10
                            }}
                            >
                            <Button>
                                Submit
                            </Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </FormContainer>
                
                <FooterComponent /> 
            </div>
            
        )
    }

const FormContainer = styled(Container)`
    width:500;
    padding-bottom: 10%;
`
const Title = styled(Label)`
    font-family: serif;
    font-size: 30px;
    margin-top: 5px;
`
const Text = styled(Label)`
    color: #9B9B9B;
`

export default Contact;