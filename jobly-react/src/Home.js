import UserContext from './UserContext';
import { useContext } from 'react';

const Home = () => {
    const { user } = useContext(UserContext);

    return (
        <div>
            {user
                ? <>
                    <h2>Welcome back!</h2>
                    <p>Happy Job Hunting</p>
                </>
                : <>
                    <h2>Welcome to Jobly</h2>
                    <p>Login or Sign Up to get started.</p>
                </>
            }
        </div>
    )
}

export default Home;