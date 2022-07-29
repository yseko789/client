import React, {useState} from 'react'
import {useNavigate, Link} from 'react-router-dom'
import {useMutation} from '@apollo/client'
import {CREATE_USER} from '../graphql/mutations'

interface User{
    username: string,
    email: string,
    password: string
}
const Register: React.FC =()=>{
    const navigate = useNavigate()

    const [userData, setUserData] = useState<User>({
        username: "",
        email: "",
        password: ""
    })

    const {username, email, password} = userData

    const [createUser, {error}] = useMutation(CREATE_USER)

    const changeHandler = (e: React.FormEvent<HTMLInputElement>)=>{
        setUserData({...userData, [e.currentTarget.name]: e.currentTarget.value})
    }

    const submitHandler = async (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        console.log(userData)
        try{
            const id = await createUser({
                variables:{
                    userInput: userData
                }
            })
            console.log(id)
            navigate('/')
        }catch(error){
            console.log(error);

        }


    }

    return(
        <div className='screen'>
            <div className='container p-4'>
                <div className = 'row text-center'>
                    <h1>Register</h1>
                </div>
            </div>
            <div className='container'>
                <form onSubmit = {submitHandler}>
                    <div className='row form-group d-flex justify-content-center mb-2'>
                        <div className = 'col-8'>
                            <input className='form-control' type = 'text' placeholder = 'username' name = 'username' value = {username} onChange = {changeHandler}/>
                        </div>
                    </div>
                    <div className='row form-group d-flex justify-content-center mb-2'>
                        <div className = 'col-8'>
                            <input className='form-control' type = 'email' placeholder = 'email' name = 'email' value = {email} onChange = {changeHandler}/>
                        </div>
                    </div>
                    <div className='row form-group d-flex justify-content-center mb-2'>
                        <div className = 'col-8'>
                            <input className='form-control' type = 'password' placeholder = 'password' name = 'password' value = {password} onChange = {changeHandler}/>
                        </div>
                    </div>
                    <div className = 'row form-group d-flex justify-content-center'>
                            <button className = 'btn btn-block col-4 btn-custom' type = 'submit'>Submit</button>
                    </div>
                    <div className = 'row form-group d-flex justify-content-center mt-3'>
                            <Link className = 'btn btn-block col-4 btn-link'to='/auth/login'>Already have an account?</Link>
                    </div>
                </form>
            </div>
        </div>
        

    )
}

export default Register