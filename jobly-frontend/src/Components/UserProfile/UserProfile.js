import React from 'react';
import { Form, FormGroup, Label, Input, FormFeedback, FormText } from 'reactstrap';
import './UserProfile.css'

const UserProfile = () => {
    return (
        <div className="col-md-6 col-lg-4 offset-md-3 offset-lg-4">
        <h3>User Profile</h3>
        <div className="card">
            <div className="card-body">
                    <Form>
                        <div className="form-group">
                            <FormGroup className="form-input">
                                <Label for="password">Password: </Label>
                                <Input />
                            </FormGroup>
                        </div>
                        <div className="form-group">
                            <FormGroup className="form-input">
                                <Label for="firstname">First name: </Label>
                                <Input />
                            </FormGroup>
                        </div>
                        <div className="form-group">
                            <FormGroup className="form-input">
                                <Label for="lastname">Last Name: </Label>
                                <Input />
                            </FormGroup>
                        </div>
                        <div className="form-group">
                            <FormGroup className="form-input">
                                <Label for="email">Email: </Label>
                                <Input />
                            </FormGroup>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
  );
}

export default UserProfile;