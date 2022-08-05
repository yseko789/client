import {Link} from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from '../model';
import { useMutation, useLazyQuery, useQuery } from '@apollo/client';
import { GET_SUBSCRIPTIONS, GET_USER } from '../graphql/queries';
import Nav from './Nav';
import { EDIT_USER } from '../graphql/mutations';

interface Subscription{
    providerId: number
    logo: string
    name: string
    rate: number
    startDate: Date
    endDate: Date
    reminderDate: Date
}

const SubscriptionsPage: React.FC = ()=>{
    

   const navigate = useNavigate();

    const [subscriptions, setSubscriptions] = useState<Subscription[]>([])

    // const [getSubscriptions, {error}] = useMutation(GET_SUBSCRIPTIONS)

    const [getSubscriptions,{loading, data}] = useLazyQuery(GET_SUBSCRIPTIONS,{
         variables:{userId:localStorage.getItem("userId")}
   })

    const fetchSubscriptions = async()=>{
         const response = await getSubscriptions()
         setSubscriptions(response.data.getSubscriptions)
    }

    useEffect(()=>{
        fetchSubscriptions()
    }, [])




    return(
        <div>
            {
                !subscriptions&&
                <h1>
                    Loading...
                </h1>
            }
            {
                subscriptions&&
                <div>
                    <Nav/>
                    <div className="container p-3">
                        <div>
                            Subscriptions
                        </div>
                        <button onClick={()=>console.log(subscriptions)}>click</button>
                    </div>
                </div>
            }
            
        </div>

    )
}

export default SubscriptionsPage;