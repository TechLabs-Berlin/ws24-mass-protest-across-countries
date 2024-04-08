// In the frontend component
import React, { useState } from 'react';
import axios from 'axios';
import { Form, InputGroup }  from 'react-bootstrap';

const DEV_URL = "http://localhost:8000/";

function SearchBar({ onSubmit }) {
    const [searchterm, setSearchterm] = useState("");

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const url_param = '?searchterm=' + searchterm;
            console.log('Sending search request with term:', searchterm);
            const response = await axios.get(DEV_URL + "api/search" + url_param);
            console.log('Response received:', response.data);
            const searchData = response.data;
            onSubmit(searchData); // Call the onSubmit callback with the search results
            setSearchterm("")
        } catch (err) {
            console.log('Error occurred:', err.message);
        }
    };

    const handleChange = (event) => {
        setSearchterm(event.target.value);
    };

    return (
        <Form onSubmit={handleFormSubmit}>
            <Form.Group lg="auto" controlId="validationCustomUsername">
                <InputGroup hasValidation>
                <Form.Control
                    className="form-control-lg"
                    type="text"
                    value={searchterm}
                    onChange={handleChange}
                    placeholder="Search Protest"
                    aria-describedby="inputGroupPrepend"
                    required
                />
                </InputGroup>
            </Form.Group>
        </Form>
    );
}

export default SearchBar;