import {Link} from 'react-router-dom';
import { useEffect } from 'react';


const Logout: React.FC = ()=>{
    

    useEffect(()=>{
        localStorage.clear();
    },[]);

    return(
         <div className = 'screen'>
            <div className = 'container p-4'>
                <div className = 'row text-center'>
                    <h1>Successfully logged out</h1>
                    <Link to='/login'>Login</Link>
                </div>
            </div>
        </div>
    )
}

export default Logout;