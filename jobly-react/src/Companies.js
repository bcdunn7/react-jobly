import { useState, useEffect } from 'react';
import './Companies.css'
import JoblyAPI from './api'
import CompanyCard from './CompanyCard';
import SearchForm from './SearchForm';

const Companies = () => {
    const [companies, setCompanies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getCompaniesData = async (filter) => {
        let res = await JoblyAPI.getCompanies(filter);
        setCompanies(res);
        setIsLoading(false);
    }

    // get data on mount
    useEffect(() => {
        getCompaniesData();
    }, [])

    const filterCompanies = (formData) => {
        getCompaniesData(formData);
    }

    return (
        <div className="Companies">
            <h2>Companies</h2>
            {isLoading 
                ? <h2>Loading...</h2>
                : <>
                    <div className="Companies-List">
                    <SearchForm filter={filterCompanies} searchTerm="Name"/>
                        {companies.length && !isLoading
                        ? <>{companies.map(c => <CompanyCard key={c.handle} company={c}/>)}</>
                        : <p>Sorry, no companies found :/</p>
                        }
                    </div>
                </>
            }
        </div>
    )
}

export default Companies;