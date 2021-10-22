import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import JoblyApi from "./api";
import JobCard from "./JobCard";
import './Company.css'

const Company = () => {
    const [company, setCompany] = useState();
    const [companyJobs, setCompanyJobs] = useState([]);

    const { name } = useParams();

    useEffect(() => {
        const getCompanyData = async () => {
            let res = await JoblyApi.getCompany(name);
            setCompany(res);
            setCompanyJobs(res.jobs);
        }
        getCompanyData();
    }, [name])

    return (
        <div>
            {company
                ? <>
                    <h2>{company.name}</h2>
                    <p>{company.description}</p>
                    <div className="Company-jobs-list">
                        {companyJobs.map(j => 
                            <JobCard key={j.id} job={j}/>
                        )}
                    </div>
                </>
                : <h2>Loading...</h2>
            }
        </div>
    )
}

export default Company;