import {gql} from '@apollo/client'

export const LOGIN = gql`
    query Login($loginUser: LoginUser){
        login(loginUser: $loginUser){
            user{
                _id
                username
            },
            token
        }
    }
`;