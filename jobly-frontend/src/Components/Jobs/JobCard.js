import React, { useState, useContext } from 'react'
import UserContext from '../../Context/UserContext'

function JobCard({ id, title, salary, equity, companyName }) {
    console.debug("JobCard");

    const { hasAppliedToJob, applyToJob, applicationIds, currentUser } = useContext(UserContext);
    const [applied, setApplied] = useState();
    const [infoLoaded, setInfoLoaded] = useState(false)

    React.useEffect(function updateAppliedStatus() {
        console.debug("JobCard useEffect updateAppliedStatus", id);
        setApplied(hasAppliedToJob(id));
        setInfoLoaded(true)
      }, [id, hasAppliedToJob, applicationIds]);
    

    // Handles applying for job
    async function handleApply(evt) {
        if(hasAppliedToJob(id)) return;
        applyToJob(id);
        setApplied(true);
    }

   
    return(
        <div className="JobCard card"> {applied}
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p>{companyName}</p>
                {salary && <div><small>Salary: {formatSalary(salary)}</small></div>}
                {equity !== undefined && <div><small>Equity: {equity}</small></div>}
                <button
                    className="btn btn-danger font-weight-bold text-uppercase mt-2"
                    onClick={handleApply}
                    disabled={applied}
                >
                    {applied ? "Applied" : "Apply"}
                </button>
            </div>
        </div>
    )
}

function formatSalary(salary) {
    const digitsRev = [];
    const salaryStr = salary.toString();
    
        for (let i = salaryStr.length - 1; i >= 0; i--) {
        digitsRev.push(salaryStr[i]);
        if (i > 0 && i % 3 === 0) digitsRev.push(",");
        }
    
        return digitsRev.reverse().join("");
}

export default JobCard