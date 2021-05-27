import React, {useState, useEffect} from "react";
import JoblyApi from '../../Services/api'
import CompanyCard from './CompanyCard'
import SearchForm from '../SearchForm/SearchForm'
import "./CompaniesList.css";


function CompaniesList() {
    const [isLoading, setIsLoading] = useState(true);
    const [companies, setCompanies] = useState([]);

    useEffect(function getCompaniesOnMount() {
        search()
    }, []);

    async function search(name) {
        let companies = await JoblyApi.getCompanies(name)
        setCompanies(companies)
        setIsLoading(false)
    }

    if (isLoading) {
        return <p>Loading &hellip;</p>;
    }

    return (
        <div className="list-area">
            <center><SearchForm searchFor={search} className="SearchForm" /></center>
            {companies.length
            ? (
                <div className="CompanyList-list">
                {companies.map(c => (
                    <CompanyCard
                        key={c.handle}
                        handle={c.handle}
                        name={c.name}
                        description={c.description}
                        logoUrl={c.logoUrl}
                    />
                ))}
                </div>
            ) : (
                <p className="lead">Sorry, no results were found!</p>
            )}
            </div>
    );
}

export default CompaniesList;