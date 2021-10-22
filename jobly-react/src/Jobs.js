import { useState, useEffect } from "react";
import JoblyAPI from "./api";
import JobCard from './JobCard';
import './Jobs.css'
import SearchForm from "./SearchForm";

const Jobs = () => {
    const [jobs, setJobs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getJobsData = async (filter) => {
        let res = await JoblyAPI.getJobs(filter);
        setJobs(res);
        setIsLoading(false);
    }

    useEffect(() => {
        getJobsData();
    }, [])

    const filterJobs = (formData) => {
        getJobsData(formData);
    }

    return (
        <div className="Jobs">
            <h2>Jobs</h2>
            {isLoading
                ? <h2>Loading...</h2>
                : <>
                    <SearchForm filter={filterJobs}/>
                    <div className="Jobs-list">
                        {jobs.length && !isLoading
                        ? <>{jobs.map(j => <JobCard key={j.id} job={j}/>)}
                        </>
                        : <p>Sorry, no jobs found :/</p>
                        }
                    </div>
                </>
            }
        </div>
    )
}

export default Jobs;