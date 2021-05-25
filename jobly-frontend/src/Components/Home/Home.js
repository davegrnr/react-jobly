import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import './Home.css'

function Home() {
    return (
        <section className="col-md-8">
        <Card className="Home">
            <CardBody className="text-center">
            <CardTitle>
                <p className="font-weight-bold">
                All your jobs in one place!
                </p>
            </CardTitle>
            </CardBody>
        </Card>
        </section>
    );
    }

export default Home;
