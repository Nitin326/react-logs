import {Container,Nav,Navbar} from "react-bootstrap";
import logo from '../../assets/Images/1_fin.png'
import '../../assets/css/AppBar.css'

function AppBar() {
  return (
    <Navbar expand="lg" className="nav-bg-body">
      <Container>
        <Navbar.Brand href="/">
          <img
            src={logo}
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt="1-finance-logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppBar;
