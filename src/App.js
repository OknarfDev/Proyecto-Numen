import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Tarjeta from './componentes/Tarjeta';
import NavbarComp from './componentes/NavbarComp'
import Tarjetas from './componentes/Tarjetas';
import data from './data';
import { useState } from 'react';
import Basket from './componentes/Basket';



// const PAGE_TARJETAS = "Tarjetas"
// const PAGE_BASKET = "Basket"


function App() {

  const { tarjetas } = data;
  const [cartItems, setCartItems] = useState([])
  // const [page, setPage] = useState(PAGE_TARJETAS);

  // const navigateTo = (nextPage) => {
  //   setPage (nextPage);
  // }
 
  const onAdd = (tarjeta) => {
    const exist = cartItems.find(x => x.id === tarjeta.id);
    if(exist) {
      setCartItems(cartItems.map(x => x.id === tarjeta.id ? {...exist, qty: exist.qty +1 } :x 
        )
      );
    } else { 
      setCartItems([...cartItems, { ...tarjeta, qty: 1 }]);
    }
  }
   
   const onRemove = (tarjeta) => {
    const exist = cartItems.find(x => x.id === tarjeta.id);
    if(exist.qty===1) {
      setCartItems(cartItems.filter((x) => x.id !== tarjeta.id));
  } else {
    setCartItems(cartItems.map(x => x.id === tarjeta.id ? {...exist, qty: exist.qty -1 } :x 
      ))
    } }  

  //  DESDE ACA SE AGREGA
  // const navigateTo = (nextPage) => {
  //   setPage (nextPage);
  // }

  // const renderTarjetas = () => ( 
  // <> 
 




   //HASTA ACA SE AGREGA

  // const renderBasket = () => ( 
  //   <> 

  //   <div className='basket'> 
  //    <Basket onAdd={onAdd} 
  //    cartItems={cartItems}
  //    onRemove={onRemove}
  //    navigateTo={navigateTo}>
  //   </Basket> 
  //    </div>
  //    </>
  // )




  return (
    <div className="App">
      <div className='banner-cuotas'>3 y 6 cuotas sin interés. Envíos gratis a todo el país</div>
      <div className="container">
        
          <NavbarComp />
          
        
    </div >
      <div className='NuestrasOfertas'>
        
        <div className='titulo-contenedor'>
        
          <h2 className='nuestras'>Nuestras <span>Ofertas</span></h2>
        </div>
        

        <div className='tarjetas'>

          <Tarjetas onAdd={onAdd} tarjetas={tarjetas}/>
          <Basket 
            onAdd={onAdd}
            onRemove={onRemove}
            cartItems={cartItems}>
          </Basket>
    
        </div>
  
        {/* {page === PAGE_TARJETAS && renderTarjetas( )} */}
        {/* {page === PAGE_BASKET && renderBasket( )} */}
        

        {/* <div className='tarjetas'> */}
      
        
        {/* // <Tarjetas onAdd={onAdd} tarjetas={tarjetas}/> */}
        {/* <Basket onAdd={onAdd} cartItems={cartItems}></Basket> */}
        
        
        </div>
        
      </div>
      
    
    // </div>
    
    
  );
  }
// }

export default App;
