import React, {useState, useEffect, useContext} from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from './Components/Home/Home'
import SignupForm from './Components/SignupForm/SignupForm'
import LoginForm from './Components/LoginForm/LoginForm'
import JobsList from './Components/JobsList/JobsList'
import CompaniesList from './Components/CompaniesList/CompaniesList'
import UserProfile from './Components/UserProfile/UserProfile'
import CompanyDetail from './Components/CompanyDetail/CompanyDetail'
import CompaniesContext from './Context/CompaniesContext'
import JoblyApi from './Services/api'

function Routes() {
    const [isLoading, setIsLoading] = useState(true);
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        async function getAllCompanies(){
            let companies = await JoblyApi.getAllCompanies();
            setCompanies(companies);
            setIsLoading(false)
        }
        getAllCompanies();
    }, []);

    if (isLoading) {
        return <p>Loading &hellip;</p>;
    }



    return (
        <div>
        <BrowserRouter>
            <NavBar />
                <main>
                <CompaniesContext.Provider value={companies}>
                    <Switch>
                            <Route exact path="/">
                                <Home />
                            </Route>
                            <Route exact path="/signup">
                                <SignupForm />
                            </Route>
                            <Route exact path="/login">
                                <LoginForm />
                            </Route>
                            <Route exact path="/jobs">
                                <JobsList />
                            </Route>
                            <Route exact path="/companies" >
                                <CompaniesList />
                            </Route>
                            <Route exact path="/companies/:handle">
                                <CompanyDetail />
                            </Route>
                            <Route exact path="/profile">
                                <UserProfile />
                            </Route>
                    </Switch>
                    </CompaniesContext.Provider>
                </main>
        </BrowserRouter>
        </div>
    )
}

export default Routes;