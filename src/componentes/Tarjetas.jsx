import React from "react";
// import Basket from "./Basket";
import Tarjeta from './Tarjeta';
// import NavbarComp from "./NavbarComp";

// igual que MAIN -PRODUCTS


function Tarjetas (props) {
    const { tarjetas, onAdd } = props;
    

    
    return (
        <div className="row">
            {/* {tarjetas.map ((tarjeta)=> (
                <Tarjeta key={tarjeta.id} tarjeta={tarjeta}></Tarjeta>   
            )) } */}
        
        
        {tarjetas.map((tarjeta) => (
        <Tarjeta key={tarjeta.id} tarjeta={tarjeta} onAdd={onAdd} className="col-2" ></Tarjeta>
        ))}
        </div> 
        
    )
};

export default Tarjetas;
