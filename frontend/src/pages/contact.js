import React from 'react'
import NavbarComponent from '../components/NavbarComponent'
import FooterComponent from '../components/FooterComponent'
import { Form } from 'semantic-ui-react'
import { Button } from 'react-bootstrap'

export default class Contact extends React.Component {

    render(){
        return(
            <div>
            <NavbarComponent />
                <div className="formcontainer">
            <Form className="form" onSubmit={this.onSubmit}>
                <Form.Field>
                    <h1>CONTACT</h1>
                </Form.Field>
                <Form.Field>
                    <label htmlFor="fullname">Name*</label>
                    <br />
                    <input type="text"
                            name="firstname"/>
                </Form.Field>
                <br />

                <Form.Field>
                <label htmlFor="email">Email Address*</label>
                    <br />
                    <input type="email"
                            name="email"/>
                </Form.Field>
                <br />

                <Form.Field>
                <label htmlFor="subject">Subject*</label>
                    <br />
                    <input type="text"
                            name="subject"/>
                </Form.Field>
                <br />

                <Form.Field>
                <label htmlFor="message">Message*</label>
                    <br />
                    <textarea type="text"
                            name="message"/>
                </Form.Field>
                <br />

                <Button class="btn btn-success" type="button">Submit</Button>
            </Form>
            <FooterComponent />

            </div>
            </div>
            
        )
    }
}