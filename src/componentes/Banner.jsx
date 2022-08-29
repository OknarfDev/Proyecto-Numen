import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../stylesheets/Banner.css';

function Banner (props) {
    return (
        <div className='banner'>
            <img src={require('../imagenes/01.jpg')}/>
            <p></p>
        </div>
    )
}


export default Banner;   