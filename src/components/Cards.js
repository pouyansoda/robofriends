import React from "react";
import {Card} from "react-bootstrap";


const Cards = ({name, email, id}) => {
    return (
        <>
            <div style={{width: '17rem', margin:'10px', backgroundColor:'lightGreen'}}>
                <Card.Img variant="top" src={`https://robohash.org/${id}?200*200`} alt="robots"/>
                <Card.Body>
                    <Card.Title className="mb-2 text-muted">{name}</Card.Title>
                    <Card.Text>
                        {email}
                    </Card.Text>
                </Card.Body>
            </div>

        </>
    );
}

export default Cards