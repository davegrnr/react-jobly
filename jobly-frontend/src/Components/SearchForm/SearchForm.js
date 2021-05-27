import React, { useState } from "react";
import {Button, Form, Input} from 'reactstrap'

function SearchForm({ searchFor }) {
    const [searchTerm, setSearchTerm] = useState("")


    function handleSubmit(evt) {
        evt.preventDefault();
        searchFor(searchTerm.trim() || undefined);
        setSearchTerm(searchTerm.trim())
    }

    function handleChange(evt) {
        setSearchTerm(evt.target.value);
    }

    return (
        <div className="SearchForm mb-4 mt-4">
            <Form className="SearchForm mb-4" onSubmit={handleSubmit}>
                <input className="search-input"
                        name="searchTerm"
                        placeholder="Enter Search Term..."
                        value={searchTerm}
                        onChange={handleChange}
                    />
                    <Button type="submit" className="btn btn-sm ml-2 btn-primary">
                        Submit
                    </Button>
            </Form>
        </div>
    )
}

export default SearchForm