import { Switch, Route } from 'react-router-dom';
import NotFound from './NotFound';
import Home from './Home';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import Comapnies from './Companies';
import Company from './Company';
import Jobs from './Jobs';
import ProfileForm from './ProfileForm';

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/'><Home/></Route>
            <Route exact path='/login'><LoginForm/></Route>
            <Route exact path='/signup'><SignupForm/></Route>
            <Route exact path='/companies'><Comapnies/></Route>
            <Route exact path='/companies/:company'><Company/></Route>
            <Route exact path='/jobs'><Jobs/></Route>
            <Route exact path='/profile'><ProfileForm/></Route>
            <Route><NotFound/></Route>
        </Switch>
    )
}

export default Routes;