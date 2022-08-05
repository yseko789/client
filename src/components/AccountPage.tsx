import {Link} from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from '../model';
import { useMutation, useLazyQuery, useQuery } from '@apollo/client';
import { GET_USER } from '../graphql/queries';
import Nav from './Nav';
import { EDIT_USER } from '../graphql/mutations';

const AccountPage: React.FC = ()=>{
    

   const navigate = useNavigate();

    const [userData, setUserData] = useState<User>({
      email: "",
      username: "",
      password: ""
    })

    const [editUser, {error}] = useMutation(EDIT_USER)

    const [getUser,{loading, data}] = useLazyQuery(GET_USER,{
         variables:{userId:localStorage.getItem("userId")}
   })

    const fetchUserData = async()=>{
         const response = await getUser()
         setUserData(response.data.getUser)
    }

    const editUserData = async()=>{
         try{
            const user = await editUser({
               variables:{
                  userId: localStorage.getItem('userId'),
                  userInput: {
                     email: userData.email,
                     username: userData.username
                  }
               }
            })
            setUserData(user.data.editUser)
        }catch(error){
            console.log(error)
        }
    }

    const changeHandler = (e: React.FormEvent<HTMLInputElement>)=>{
        setUserData({...userData, [e.currentTarget.name]: e.currentTarget.value})
    }

    useEffect(()=>{
        fetchUserData()
    }, [data])




    return(
        <div>
            {
                !userData&&
                <h1>
                    Loading...
                </h1>
            }
            {
                userData&&
                <div>
                    <Nav/>
                    <div className="container p-3">
                        <div className="row">
                            <div className="d-flex flex-column">
                                <h1 className="col-12">Account Details</h1>
                                <div className="input-group mb-4">
                                    <div className = "input-group-prepend">
                                        <span className="input-group-text">Email</span>
                                    </div>
                                    <input type = 'email' name = 'email'className="form-control" value={userData.email} onChange={changeHandler}/>
                                </div>
                                <div className="input-group mb-4">
                                    <div className = "input-group-prepend">
                                        <span className="input-group-text">Username</span>
                                    </div>
                                    <input type = 'text' name = 'username' className="form-control" value={userData.username} onChange={changeHandler}/>
                                </div>
                                <div className="input-group mb-4">
                                    <button className='btn col-12 custom-btn' type='button' onClick={editUserData}>
                                        Save
                                    </button>
                                </div>
                                <div className="input-group">
                                    <button className='btn col-12 btn-light' type='button' onClick={()=>navigate('/')}>
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
            
        </div>

    )
}

export default AccountPage;