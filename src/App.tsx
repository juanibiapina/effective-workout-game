// external dependencies
import { Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Plus } from 'react-bootstrap-icons';

const App = () => {
  return (
    <>
      <Outlet />

      <Navbar fixed="bottom" className="bg-body-tertiary justify-content-center">
        <Container>
          <Nav className="w-100 justify-content-center">
            <Nav.Link href="#home">
              <Plus size={24} />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default App;
