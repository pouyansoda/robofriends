import React from "react";
import {Form} from "react-bootstrap";

const SearchBox = ({searchField, searchChange}) => {
    return (
        <div className="">
            <Form>
                <Form.Control type="search" placeholder="Search robot" onChange={searchChange}/>
            </Form>
        </div>
    );
}

export default SearchBox;