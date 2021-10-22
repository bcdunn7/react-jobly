import './NavBar.css'
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import theme from './MaterialUITheme';
import { ThemeProvider } from '@mui/material/styles';

const NavBar = () => {
    return (
        <nav className="NavBar">
            <ThemeProvider theme={theme}>
                <Stack justifyContent="space-between" direction="row">
                    <Stack className="NavBar-Logo-Stack" justifyContent="center">
                        <Link to="/">Jobly</Link>
                    </Stack>
                    <Stack className="NavBar-NavLinks" spacing={2} direction="row">
                        <Button color="primary" variant="text" component={NavLink} to="/login">
                            Login
                        </Button>
                        <Button color="primary" variant="text" component={NavLink} to="/signup">
                            Sign Up
                        </Button>
                        <Button color="primary" variant="text" component={NavLink} to="/logout">
                            Logout
                        </Button>
                        <Button color="primary" variant="text" component={NavLink} to="/companies">
                            Companies
                        </Button>
                        <Button color="primary" variant="text" component={NavLink} to="/jobs">
                            Jobs
                        </Button>
                        <Button color="primary" variant="text" component={NavLink} to="/profile">
                            Profile
                        </Button>
                    </Stack>
                </Stack>
            </ThemeProvider>
        </nav>
    )
}

export default NavBar;