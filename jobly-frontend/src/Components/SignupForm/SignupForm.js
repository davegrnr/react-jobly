import React from 'react';
import { Form, FormGroup, Label, Input, FormFeedback, FormText } from 'reactstrap';
import './SignupForm.css'

const SignupForm = () => {
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
     <FormGroup className="form-input">
        <Label for="firstname">First name: </Label>
        <Input />
      </FormGroup>
     <FormGroup className="form-input">
        <Label for="lastname">Last Name: </Label>
        <Input />
      </FormGroup>
     <FormGroup className="form-input">
        <Label for="email">Email: </Label>
        <Input />
      </FormGroup>
    </Form>
  );
}

export default SignupForm;