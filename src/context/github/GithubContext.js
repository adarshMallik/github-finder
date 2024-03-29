import { createContext,useReducer, useState } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext()

// const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
// const GITHUB_TOKEN= process.env.REACT_APP_GITHUB_TOKEN

export const GithubProvider = ({children}) => {
    // const [users,setUsers ] =useState([])
    // const [loading ,setLoading] = useState(true)

    const initialState = {
        users: [],
        user:{},
        repos:[],
        loading: false
    }

    const [state,dispatch] = useReducer(githubReducer,initialState)
    //  // Search User
    //  const searchUsers = async (text) =>{
    //     setLoading()

    //     const params = new URLSearchParams({
    //         q: text
    //     })
    //     const  response = await fetch(`${GITHUB_URL}/search/users?${params}`,{
    //       headers:{
    //           Authorization: `token ${GITHUB_TOKEN }`
    //       }
    //     })
    //      //destructuring the result
    //     const {items} = await response.json()


    //     dispatch({
    //                type: 'GET_USERS',
    //                 payload: items,
    //              })

    //  }

    //  // Get individual user
    //  const getUser = async (login) =>{
    //     setLoading()

    //     const  response = await fetch(`${GITHUB_URL}/users/${login}`,{
    //       headers:{
    //           Authorization: `token ${GITHUB_TOKEN }`
    //       }
    //     })

    //     if(response.status === 404)
    //     {
    //         window.location = '/notfound'
    //     }
    //     else
    //     {
    //          //destructuring the result
    //     const data = await response.json()
    //     dispatch({
    //                type: 'GET_USER',
    //                 payload: data,
    //              })
    //     }
        
    //  }

    //  const clearUsers = () =>{

    //         dispatch ({
    //             type: 'CLEAR_USERS',
    //             payload:[],
    //         })
    //  }

     //// Fetch all users
    // const fetchUsers = async () =>{
    //     setLoading()
    //     const  response = await fetch(`${GITHUB_URL}/users`,{
    //      headers:{
    //          Authorization: `token ${GITHUB_TOKEN }`
    //      }
    //     })
    //     const data = await response.json()
    //     // setUsers(data)
    //     // setLoading(false)
    //     dispatch({
    //         type: 'GET_USERS',
    //         payload: data,
    //     })
    //  }

     // //Set Loading

    //  const setLoading = () => {
    //     dispatch({
    //         type:'SET_LOADING'
    //     })
    //  }

     //Get Repository

    //  const getRepos = async (login) =>{
    //     setLoading()

    //     const params = new URLSearchParams({
    //         sort: 'created',
    //         per_page:10
    //     })

       
    //     const  response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`,{
    //       headers:{
    //           Authorization: `token ${GITHUB_TOKEN }`
    //       }
    //     })
    //      //destructuring the result
    //     const data = await response.json()


    //     dispatch({
    //                type: 'GET_REPOS',
    //                 payload: data,
    //              })

    //  }

     return <GithubContext.Provider value={{
        // users: state.users,
        // loading: state.loading,
        // user: state.user,
        // repos:state.repos,
        ...state,
        dispatch,
        
        //fetchUsers
        // getUser,
        // searchUsers,
        // getRepos,
        // clearUsers
     }}>
        {children}
     </GithubContext.Provider>


}

export default GithubContext