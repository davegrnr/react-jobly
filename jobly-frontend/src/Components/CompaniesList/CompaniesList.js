import React, {useContext} from "react";
import {Link} from 'react-router-dom'
import "./CompaniesList.css";
import {
    Button, Form, FormGroup,  Input, 
  Card,
  CardBody,
  CardTitle,
  CardText,
  Container,
  ListGroup,
  ListGroupItem
} from "reactstrap";
import CompaniesContext from '../../Context/CompaniesContext'

function CompaniesList() {
    const companies = useContext(CompaniesContext)

    return (
        
            <div className="col-md-4">
                <div className="list-area">
                    <Container>
                        <Form className="search-form">
                            <FormGroup>
                                <Input className="form-control" name="searchTerm" placeholder="Enter search term.." />
                                    <Button type="submit" className="btn btn-lg btn-primary">Submit</Button>
                            </FormGroup>
                        </Form>
                    </Container>
                    
                        <ListGroup>
                            {companies.map(company => (
                                <Link to={`/companies/${company.handle}`} key={company.handle}>
                                <div>
                                <Card className="company-card" key={company.handle}>
                                    <CardBody>
                                        <CardTitle>
                                            <ListGroupItem className="company-name">{company.name}</ListGroupItem>
                                    </CardTitle>
                                        <CardText>
                                            {company.description}
                                        </CardText>
                                    </CardBody>
                                </Card>
                                </div>
                                </Link>
                                ))}
                        </ListGroup>
                    
                </div>
            </div>
    );
}

export default CompaniesList;