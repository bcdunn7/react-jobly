import { Card, CardContent, CardHeader, CardActions, Button, Avatar } from '@mui/material'
import { red, orange, blue, purple, green } from '@mui/material/colors';
import './CompanyCard.css'
import theme from './MaterialUITheme';
import { ThemeProvider } from '@mui/material/styles';

const CompanyCard = ({ company }) => {
    const colorOptions = [red[500], orange[500], blue[500], purple[500], green[500]]

    return (
        <ThemeProvider theme={theme}>
            <Card className="CompanyCard">
                <CardHeader
                    titleTypographyProps={{fontSize: 'h6.fontSize'}}
                    className="CompanyCard-header"
                    avatar={
                        company.logoUrl 
                            ? <img className="CompanyCard-image" src={company.logoUrl} alt="Company logo"/> 
                            : <Avatar sx={{ bgcolor: colorOptions[Math.floor(Math.random()*colorOptions.length)]}} alt={company.name}>
                                {company.name.slice(0,2)}
                            </Avatar>
                    }
                    title={company.name}
                    action={
                        <Button color="primary" variant="contained">Apply</Button>
                    }
                />
                <CardContent>
                    <p>{company.description}</p>
                    <p>Size: {company.numEmployees} Employees</p>
                </CardContent>
            </Card>
        </ThemeProvider>
    )
}

export default CompanyCard;