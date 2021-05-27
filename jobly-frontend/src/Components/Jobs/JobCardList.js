import React from "react";
import JobCard from "./JobCard";


/** Show list of job cards.
 *
 * Used by both JobList and CompanyDetail to list jobs. Receives an apply
 * func prop which will be called by JobCard on apply.
 *
 * JobList -> JobCardList -> JobCard
 * CompanyDetail -> JobCardList -> JobCard
 *
 */

function JobCardList({ jobs, apply }) {
    console.debug("JobCardList", "jobs=", jobs);
    if (!jobs) {
        return <p>Loading &hellip;</p>;
    }
    return (
        <div className="JobCardList">
            <div className="card-body">
        {jobs.map(job => (
            <JobCard
                className="JobCard"
                key={job.id}
                id={job.id}
                title={job.title}
                salary={job.salary}
                equity={job.equity}
                companyName={job.companyName}
            />
        ))}
        </div>
    </div>
    )
}

export default JobCardList;
