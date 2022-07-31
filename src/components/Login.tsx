import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {Link} from 'react-router-dom';
import '../../style/auth.css'

interface LoginUser{
    email: string,
    password: string
}

const Login: React.FC = ()=>{
    const [userData, setUserData] = useState<LoginUser>({
        email: "",
        password: ""
    });
    const {email, password} = userData;

    const navigate = useNavigate();

    const changeHandler = (e:React.FormEvent<HTMLInputElement>)=>{
        setUserData({...userData, [e.currentTarget.name]: e.currentTarget.value});
    }

    const submitHandler = async(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        try{
            

            //store the token in local storage
            // localStorage.setItem('token', userResponse.token);
            // localStorage.setItem('username', userResponse.username);
            // localStorage.setItem('userId', userResponse.userId)
            //redirect to search page
            navigate('/');
        }catch(error)
        {
            console.log(error);
        }
    }
    
    return (
        <div className = 'screen'>
            <div className = 'container p-4'>
                <div className = 'row text-center'>
                    <h1>Login</h1>
                </div>
            </div>
            <div className = 'container'>
                <form onSubmit = {submitHandler}>
                    <div className = 'row form-group d-flex justify-content-center mb-2'>
                        <div className= 'col-8'>
                            <input className = 'form-control' type = 'text' placeholder= 'email' name = 'email' value = {email} onChange = {changeHandler}/>
                        </div>
                    </div>
                    <div className = 'row form-group d-flex justify-content-center mb-2'>
                        <div className = 'col-8'>
                            <input className = 'form-control' type = 'password' placeholder = 'password' name = 'password' value = {password} onChange = {changeHandler}/>
                        </div>
                    </div>
                    <div className = 'row form-group d-flex justify-content-center'>
                        
                        <button className = 'btn btn-block col-4 btn-custom' type = 'submit'>Submit</button>
                    </div>
                    <div className = 'row form-group d-flex justify-content-center mt-3'>
                        <Link className = 'btn btn-block col-4 btn-link 'to='/auth/register'>Create a new account</Link>
                    </div>

                </form>

            </div>
        </div>
    )
}

export default Login;