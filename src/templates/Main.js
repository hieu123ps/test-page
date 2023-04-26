import { Container} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
function Main(){
    return (
        <Container fluid>
            <Row className='my-5'>
                <h1 className="my-2">Trang chủ</h1>
                <Col xs={12} md={8}>
                    <h4>Cột 1</h4>
                </Col>
                <Col xs={6} md={4}>
                    <h4>Cột 2</h4>
                </Col>                
            </Row>
        </Container>
    );
}
export default Main;