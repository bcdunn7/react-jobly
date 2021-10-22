import { Card, CardContent, CardHeader, Button } from '@mui/material'
import './JobCard.css'
import theme from './MaterialUITheme';
import { ThemeProvider } from '@mui/material/styles';

const JobCard = ({ job }) => {

    return (
        <ThemeProvider theme={theme}>
            <Card className="JobCard" style={{ backgroundColor: '#f5f2f7'}}>
                <CardHeader
                    titleTypographyProps={{fontSize: 'h6.fontSize'}}
                    className="JobCard-header"
                    title={job.title}
                    action={
                        <Button color="primary" variant="contained">Apply</Button>
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