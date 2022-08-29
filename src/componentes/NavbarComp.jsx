
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../stylesheets/NavbarComp.css"



const NavbarComp =() => {
    // const {PAGE_BASKET , navigateTo } = props;
  
    
    // const navigateTo = (nextPage) => {
    //   setPage (nextPage);
    // }
  
    return (
      <div >
        
{/* function CollapsibleExample() {  */
    <Navbar collapseOnSelect expand="lg">
      <Container className='contenedor-de-nav'>
      <Navbar.Brand href="#home" >
            <img
              src={require(`../imagenes/WW LOGO.png`)}
              width="108"
              height="72"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className='Navbar-container' id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link id='navbar-text' href="#Nosotros">Nosotros</Nav.Link>
            <Nav.Link id='navbar-text' href="#Galería">Galería</Nav.Link>
            <Nav.Link id='navbar-text' href="#Contacto">Contacto</Nav.Link>
            <NavDropdown id='navbar-text' title="Productos">
              <NavDropdown.Item href="#action/3.1">Ropa</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Accesorios</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Bebidas</NavDropdown.Item>
             
            </NavDropdown>
          </Nav>

          {/* Iconos en navbar */}
          <Nav>
            <Nav.Link className='iconos-navbar' href="#deets">
              <ion-icon name="search-outline" href='#busqueda'></ion-icon>
              <ion-icon name="person-outline" href='#login'></ion-icon>
              <ion-icon name="cart-outline" href='#cart' /*</onClick={() => navigateTo(PAGE_BASKET)}*/ ></ion-icon>
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              {/* Dank memes */}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    }
</div>
)
}


;

export default NavbarComp;
    
