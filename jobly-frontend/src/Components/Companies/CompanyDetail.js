import React, {useState, useEffect} from "react";
import { useParams } from 'react-router-dom'
import JobCardList from '../Jobs/JobCardList'
import './CompanyDetail.css'

import JoblyApi from "../../Services/api";

function CompanyDetail() {
    const {handle} = useParams()
    const [company, setCompany] = useState(handle)
    

    useEffect(function getCompanyAndJobs() {
        async function getCompany() {
            setCompany(await JoblyApi.getCompany(handle))
        }
        getCompany();
    }, [handle])
    
    if (!company) {
        return <p>Loading &hellip;</p>;
    }

    return (
        <div className="CompanyDetail">
            <div className="company-info">
                <p className="company-name">{company.name}</p>
                <span className="company-description">{company.description}</span>
            </div>
            <hr />
                <div className="JobCardList col-md-8 offset-md-3">
                    <JobCardList jobs={company.jobs} />
                </div>

        </div>

    );
}

export default CompanyDetail;