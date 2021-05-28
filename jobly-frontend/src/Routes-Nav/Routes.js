import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from '../Components/Home/Home'
import SignupForm from '../Components/SignupForm/SignupForm'
import LoginForm from '../Components/LoginForm/LoginForm'
import JobsList from '../Components/Jobs/JobsList'
import CompaniesList from '../Components/Companies/CompaniesList'
import UserProfile from '../Components/UserProfile/UserProfile'
import CompanyDetail from '../Components/Companies/CompanyDetail'
import PrivateRoute from './PrivateRoute'


function Routes({ signup, login }) {
    console.debug(
        "Routes",
        `login=${typeof login}`,
        `register=${typeof register}`,
    );
    return (
        <div>
                <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>

                        <Route exact path="/signup">
                            <SignupForm signup={signup} />
                        </Route>

                        <Route exact path="/login">
                            <LoginForm login={login} />
                        </Route>

                        <PrivateRoute exact path="/jobs">
                            <JobsList />
                        </PrivateRoute>

                        <PrivateRoute exact path="/companies" >
                            <CompaniesList />
                        </PrivateRoute>

                        <PrivateRoute exact path="/companies/:handle">
                            <CompanyDetail />
                        </PrivateRoute>

                        <PrivateRoute path="/profile">
                            <UserProfile />
                        </PrivateRoute>

                        <Redirect to="/" />
                </Switch>
        </div>
    )
}

export default Routes;