import { Switch, Route } from 'react-router-dom';
import NotFound from './NotFound';
import Home from './Home';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import Companies from './Companies';
import Company from './Company';
import Jobs from './Jobs';
import ProfileForm from './ProfileForm';
import ProtectedRoute from './ProtectedRoute';

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/'><Home/></Route>
            <Route exact path='/login'><LoginForm/></Route>
            <Route exact path='/signup'><SignupForm/></Route>
            <ProtectedRoute exact path="/companies">
                <Companies/>
            </ProtectedRoute>
            <ProtectedRoute exact path="/companies/:name">
                <Company/>
            </ProtectedRoute>
            <ProtectedRoute exact path="/jobs">
                <Jobs/>
            </ProtectedRoute>
            <ProtectedRoute exact path="/profile">
                <ProfileForm/>
            </ProtectedRoute>
            <Route><NotFound/></Route>
        </Switch>
    )
}

export default Routes;