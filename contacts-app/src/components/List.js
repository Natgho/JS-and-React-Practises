import React, {useState} from 'react';
import {ListGroup, InputGroup} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import {Badge} from "react-bootstrap";

function List({contacts}) {
    const [filterText, setFilterText] = useState("")
    const filtered = contacts.filter((item) => {
        // https://stackoverflow.com/questions/50269777/how-react-search-filter-all-field-in-array
        return Object.keys(item).some((key) =>
            item[key].toString().toLowerCase().includes(filterText.toLowerCase()))
    })
    return (
        <div className="contacts">
            <InputGroup>
                <InputGroup.Text>Filter</InputGroup.Text>
                <Form.Control value={filterText} onChange={(e) => setFilterText(e.target.value)}></Form.Control>
            </InputGroup>
            <ListGroup as="ol" numbered className="mt-3 d-flex">
                <h3>Contacts</h3>
                {filtered.map((contact, index) => <ListGroup.Item key={index} as="li">{contact.name}
                <Badge pill>{contact.phone}</Badge></ListGroup.Item>)}
            </ListGroup>
        </div>
    );
}

export default List;