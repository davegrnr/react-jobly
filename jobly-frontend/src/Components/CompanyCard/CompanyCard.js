import React from "react";
import { useParams } from 'react-router-dom'
import {Link} from 'react-router-dom'
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem
} from "reactstrap";

function CompanyCard({ companies }) {



    return (
            <div className="col-md-4">
            <Card className="CompanieCard">
                <CardBody>
                <CardTitle className="font-weight-bold text-center">
                </CardTitle>
                <CardText>
                </CardText>
                </CardBody>
            </Card>
            </div>

    );
}

export default CompanyCard;