import { Button, Container, FormControl, FormGroup, FormLabel } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
function Login(){
    return (
        <Container bg='dark'>
            <Form>
                <FormGroup class='mb3' controlId='exampleForm.ControlInput'>
                    <FormLabel>Tên tài khoản</FormLabel>
                    <FormControl type='text' placeholder='Tên tài khoản'></FormControl>
                </FormGroup>
                <FormGroup class='mb3' controlId='exampleForm.ControlInput'>
                    <FormLabel>Mật khẩu</FormLabel>
                    <FormControl type='password' placeholder='Mật khẩu'></FormControl>
                </FormGroup> 
                <Button>Đăng nhập</Button>               
            </Form>            
        </Container>
    );
}
export default Login;