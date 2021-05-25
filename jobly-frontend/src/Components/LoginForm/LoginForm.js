import React from 'react';
import { Form, FormGroup, Label, Input, FormFeedback, FormText } from 'reactstrap';
import './LoginForm.css'

const LoginForm = () => {
  return (
    <Form>
     <FormGroup className="form-input">
        <Label for="username">Username: </Label>
        <Input />
      </FormGroup>
     <FormGroup className="form-input">
        <Label for="password">Password: </Label>
        <Input />
      </FormGroup>
    </Form>
  );
}

export default LoginForm;