import React, {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import List from "./List";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row} from "react-bootstrap";

const initialContactForm = {name: '', phone: ''}

function Contact({contacts, setContacts}) {
    const [contactInfo, setContactInfo] = useState(initialContactForm)
    const onChangeInput = (e) => {
        setContactInfo({...contactInfo, [e.target.name]: e.target.value})
    }
    const addNewContact = (e) => {
        e.preventDefault();
        console.log(contactInfo)
        console.log(contacts)
        setContacts([...contacts, contactInfo])
        setContactInfo(initialContactForm)
    }
    return (
        <div>
            <Container className="mb-5 mt-4">
                <Row>
                    <Form onSubmit={addNewContact} className="mb-2">
                        <Form.Group className="mb-3">
                            <Form.Control name="name" value={contactInfo.name} onChange={onChangeInput}
                                          placeholder="Name"/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control name="phone" value={contactInfo.phone} onChange={onChangeInput}
                                          placeholder="Phone"/>
                        </Form.Group>
                        <Button variant="primary" type="submit">Add</Button>
                    </Form>
                </Row>
                <Row>
                    <List contacts={contacts}/>
                </Row>
            </Container>
        </div>
    );
}

export default Contact;