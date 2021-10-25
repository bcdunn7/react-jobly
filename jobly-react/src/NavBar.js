import './NavBar.css'
import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import theme from './MaterialUITheme';
import { ThemeProvider } from '@mui/material/styles';
import UserContext from './UserContext';

const NavBar = () => {
    const { user, logout } = useContext(UserContext);

    return (
        <nav className="NavBar">
            <ThemeProvider theme={theme}>
                <Stack justifyContent="space-between" direction="row">
                    <Stack className="NavBar-Logo-Stack" justifyContent="center" direction="row">
                        <Link to="/">Jobly</Link>
                        {user
                            ?   <p>Welcome {user.firstName}</p>
                            :   null
                        }
                    </Stack>
                    <Stack className="NavBar-NavLinks" spacing={2} direction="row">
                        {!user
                            ? <>
                                <Button color="primary" variant="text" component={NavLink} to="/login">
                                    Login
                                </Button>
                                <Button color="primary" variant="text" component={NavLink} to="/signup">
                                    Sign Up
                                </Button>
                            </>
                            : null
                        }
                        {user
                            ? <>
                                <Button color="primary" variant="text" component={NavLink} to="/companies">
                                    Companies
                                </Button>
                                <Button color="primary" variant="text" component={NavLink} to="/jobs">
                                    Jobs
                                </Button>
                                <Button color="primary" variant="text" component={NavLink} to="/profile">
                                    Profile
                                </Button>
                                <Button color="primary" variant="text" onClick={() => logout()}>
                                    Logout
                                </Button>
                            </>
                            : null
                        }
                    </Stack>
                </Stack>
            </ThemeProvider>
        </nav>
    )
}

export default NavBar;