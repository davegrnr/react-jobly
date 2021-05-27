import React, {useState, useEffect} from "react";

import "./JobsList.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem
} from "reactstrap";
import JoblyApi from "../../Services/api";
import SearchForm from '../SearchForm/SearchForm'
import JobCardList from "./JobCardList";
import { useParams } from "react-router";

function JobsList() {
    const { handle } = useParams
    const [isLoading, setIsLoading] = useState(true);
    const [jobs, setJobs] = useState([])

    useEffect(function getJobsOnMount() {
        search()
    }, [])

    async function search(title) {
        let jobs = await JoblyApi.getJobs(title)
        setJobs(jobs)
        setIsLoading(false)
    }

    useEffect(() => {
        async function getJobs() {
            if(handle){
            let jobs = await JoblyApi.getCompanyJobs(handle)
            setJobs(jobs);
            setIsLoading(false)
            } 
        }
        getJobs()
    }, [handle])

    if (isLoading) {
        return <p>Loading &hellip;</p>;
    }

    return (
            <div className="JobsList col-md-10">
                
                <center><SearchForm searchFor={search} /></center>
                <div className="list-area">
                {jobs.length
                ? <JobCardList className="JobCardList" jobs={jobs} />
                : <p>No results found!</p>
            }
            </div>
            </div>

    );
}

export default JobsList;