import React, {useContext} from "react";
import { Link } from 'react-router-dom'
import { Card, CardBody, CardTitle } from "reactstrap";
import UserContext from "../../Context/UserContext";
import './Home.css'

function Home() {
    const {currentUser} = useContext(UserContext)


    return (
        <div className="Homepage">
            <div className="container text-center">
            <h1 className="mb-4 font-weight-bold">Jobly</h1>
            <p className="lead">All your jobs in one place!</p>
            {currentUser
                ? <h2>
                    Welcome Back, {currentUser.firstName || currentUser.username}!
                </h2>
                : (
                    <p>
                        <Link 
                            to="/login">
                       <button className="btn btn-primary font-weight-bold mr-3"> Log in </button>
                        </Link>
                        <Link 
                            to="/signup">
                        <button className="btn btn-primary font-weight-bold mr-3"> Sign Up</button>
                        </Link>
                    </p>
                )}
            </div>
        </div>
    );
    }

export default Home;
