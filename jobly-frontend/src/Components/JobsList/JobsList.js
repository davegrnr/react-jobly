import React from "react";

import "./JobsList.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem
} from "reactstrap";

function JobsList() {
    return (
            <div className="col-md-4">
            <Card className="Menu">
                <CardBody>
                <CardTitle className="font-weight-bold text-center">
                    Jobs
                </CardTitle>
                <CardText>
                </CardText>
                <ListGroup>
                    Here's all the jobs
                </ListGroup>
                </CardBody>
            </Card>
            </div>

    );
}

export default JobsList;