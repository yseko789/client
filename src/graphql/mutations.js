import {gql} from '@apollo/client'

export const CREATE_USER = gql`
    mutation CreateUser($userInput: UserInput){
        createUser(userInput: $userInput){
            user{
                _id
            }
            token
        }
    }
`;

export const EDIT_USER = gql`
    mutation EditUser($userId: ID, $userInput: UserInput){
        editUser(userId: $userId, userInput: $userInput){
            username
            email
        }
    }
`;