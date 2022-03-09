import React from "react";
import Cards from "./Cards";
import {Row} from "react-bootstrap";

const CardList = ({robots}) => {
    return (
        <div>
            <Row lg={5}>
                {
                    robots.map((user, i) => {
                        return (
                            <Cards key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>
                        );
                    })
                }
            </Row>
        </div>
    );
}

export default CardList;