import { Card, CardContent, CardHeader, Button } from '@mui/material'
import './JobCard.css'
import theme from './MaterialUITheme';
import { ThemeProvider } from '@mui/material/styles';
import JoblyApi from './api';
import { useContext, useEffect, useState } from 'react';
import UserContext from './UserContext';

const JobCard = ({ job }) => {
    const [applied, setApplied] = useState(false);
    const { user, appliedToIds, setAppliedToIds } = useContext(UserContext);

    const applyToJob = async (jobId) => {
        try {            
            await JoblyApi.applyToJob(user.username, jobId);
            setApplied(true);
            setAppliedToIds(new Set([...appliedToIds, jobId]))
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        if (appliedToIds.has(job.id)) setApplied(true);
    }, [appliedToIds, job.id])

    return (
        <ThemeProvider theme={theme}>
            <Card className="JobCard" style={{ backgroundColor: '#f5f2f7'}}>
                <CardHeader
                    titleTypographyProps={{fontSize: 'h6.fontSize'}}
                    className="JobCard-header"
                    title={job.title}
                    action={
                        <Button 
                            color="primary" 
                            variant="contained" 
                            disabled={applied ? true : false}
                            onClick={() => applyToJob(job.id)
                        }>
                            {applied ? 'Applied' : 'Apply'}
                        </Button>
                    }
                />
                <CardContent>
                    <p>Salary: {job.salary}</p>
                    <p>Equity: {job.equity}</p>
                </CardContent>
            </Card>
        </ThemeProvider>
    )
}

export default JobCard;