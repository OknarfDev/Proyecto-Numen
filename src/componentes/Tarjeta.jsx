import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../stylesheets/Tarjeta.css';
// igual que PRODUCT


function Tarjeta(props) {
    const { tarjeta, onAdd } = props;
    return (
        <Card className='contenedor-principal-de-tarjeta' >
            <Card.Img className='imagen-de-tarjeta' src={tarjeta.imagen}
            // {require(`../imagenes/${tarjeta.imagen}.jpg`)} 
            alt={tarjeta.combo}/>
                <Card.Body className='contenedor-de-tarjeta' >
                <Card.Title className='titulo-de-tarjeta'>
                  Combo {tarjeta.combo}</Card.Title>
                <Card.Text className='precios-de-tarjeta'>
                  <div className='precio-actual-de-tarjeta'>${tarjeta.precio}</div>
                  <div className='precio-anterior-de-tarjeta'>${tarjeta.precioanterior}</div>
                </Card.Text>
                <Button className='boton-de-compra' onClick={()=>onAdd(tarjeta)}>Comprar</Button>
            </Card.Body>
        </Card>
    );
}


export default Tarjeta;      