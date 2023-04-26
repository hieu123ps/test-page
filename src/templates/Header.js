import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  return (
      <Navbar fixed='top' bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="../../public/img/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Trang chủ
          </Navbar.Brand>
          <Navbar.Collapse>
            <Navbar.Text>Lê Hiếu</Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}
export default Header;
