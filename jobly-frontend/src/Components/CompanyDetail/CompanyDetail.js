import React, {useContext} from "react";
import { useParams } from 'react-router-dom'
import CompaniesContext from '../../Context/CompaniesContext'
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem
} from "reactstrap";

function CompanyDetail() {
    const companies = useContext(CompaniesContext)
    let {handle} = useParams()

    let company = companies.find(company => company.handle === handle)
    console.log(company)
    // let company = companies.find(company => company.handle === handle)

    return (
            <div className="col-md-4">
            <Card className="CompaniesList">
                <CardBody>
                <CardTitle className="font-weight-bold text-center">
                    {company.name}
                </CardTitle>
                <CardText>
                    {company.description}
                </CardText>
                </CardBody>
            </Card>
            </div>

    );
}

export default CompanyDetail;