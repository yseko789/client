import {gql} from '@apollo/client'

export const LOGIN = gql`
    query Login($loginUser: LoginUser){
        login(loginUser: $loginUser){
            user{
                _id
            },
            token
        }
    }
`;

export const GET_USER = gql`
    query GetUser($userId: ID!){
        getUser(userId: $userId){
            username
            email
        }
    }
`;

export const GET_SUBSCRIPTIONS = gql`
    query GetSubscriptions($userId: ID!){
        getSubscriptions(userId: $userId){
            providerId
            logo
            name
            rate
        }
    }
`;