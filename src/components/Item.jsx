import React from "react";
import Card from 'react-bootstrap/Card';
import ItemCount from "./ItemCount";


const Item = ({id, nombre, imagen, precio}) => {
    return (
        <div className="col-md-4 py-3">
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imagen} alt={nombre}/>
            <Card.Body>
            <Card.Title className="text-center"><b>{nombre}</b></Card.Title>
            <Card.Text className="text-center"> ${precio}</Card.Text>
            </Card.Body>
            <ItemCount stock={10} initial={1} onAdd={0} />
            </Card>
        </div>
    )
}

export default Item;