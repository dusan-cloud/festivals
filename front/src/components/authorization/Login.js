import React,  { useState } from 'react';
import {Row, Col, Form, Button} from 'react-bootstrap';
import {login} from '../../service/auth';

function Login () {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

  
    
        return(
            <Row className="justify-content-center">
                <Col md={6}>
                <Form>
                    <Form.Group>
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}></Form.Control>
                    </Form.Group>
                </Form>
                <Button variant="success" onClick={()=>login(username, password)}>Log in</Button>
                </Col>
            </Row>
        )
        
    }


export default Login