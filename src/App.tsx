// external dependencies
import { Outlet, Link } from 'react-router-dom';
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
            <Link to="startWorkout" className="nav-link">
              <Plus size={24} />
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default App;
