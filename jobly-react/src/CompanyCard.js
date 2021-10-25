import { Card, CardContent, CardHeader, Button, Avatar } from '@mui/material'
import { red, orange, blue, purple, green } from '@mui/material/colors';
import './CompanyCard.css'
import theme from './MaterialUITheme';
import { ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const CompanyCard = ({ company }) => {
    const colorOptions = [red[500], orange[500], blue[500], purple[500], green[500]]

    return (
        <ThemeProvider theme={theme}>
            <Card className="CompanyCard" style={{ backgroundColor: '#f5f2f7'}}>
                <CardHeader
                    titleTypographyProps={{fontSize: 'h6.fontSize'}}
                    className="CompanyCard-header"
                    avatar={
                        company.logoUrl 
                            ? <img className="CompanyCard-image" src={company.logoUrl} alt="Company logo"/> 
                            : <Avatar className="CompanyCard-avatar" sx={{ bgcolor: colorOptions[Math.floor(Math.random()*colorOptions.length)]}} alt={company.name}>
                                {company.name.slice(0,2)}
                            </Avatar>
                    }
                    title={company.name}
                    action={
                        <Button color="primary" variant="contained" component={Link} to={`/companies/${company.handle}`}>View Jobs</Button>
                    }
                />
                <CardContent className="CompanyCard-cardContent">
                    <p>{company.description}</p>
                    <p className="CompanyCard-size"><i>{company.numEmployees} Employees</i></p>
                </CardContent>
            </Card>
        </ThemeProvider>
    )
}

export default CompanyCard;