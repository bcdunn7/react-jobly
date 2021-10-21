import { useState, useEffect } from 'react';
import './Companies.css'
import JoblyAPI from './api'
import CompanyCard from './CompanyCard';

const Companies = () => {
    const [companies, setCompanies] = useState([])

    useEffect(() => {
        const getCompaniesData = async () => {
            let res = await JoblyAPI.getCompanies();
            setCompanies(res);
        }
        getCompaniesData();
    }, [])

    return (
        <div className="Companies">
            <h2>Companies</h2>
            {companies 
                ? 
                <div className="Companies-List">
                    {companies.map(c => <CompanyCard key={c.handle} company={c}/>)}
                </div>
                : <h2>Loading...</h2>
            }
        </div>
    )
}

export default Companies;