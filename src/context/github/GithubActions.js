import axios from 'axios'

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN= process.env.REACT_APP_GITHUB_TOKEN

//axios

const github = axios.create({
  baseURL: GITHUB_URL,
  headers: {Authorization : `token ${GITHUB_TOKEN }`}
})
// Search User
export const searchUsers = async (text) =>{

   const params = new URLSearchParams({
       q: text
   })
  //  const  response = await fetch(`${GITHUB_URL}/search/users?${params}`,{
  //    headers:{
  //        Authorization: `token ${GITHUB_TOKEN }`
  //    }
  //  })
  //   //destructuring the result
  //  const {items} = await response.json()

  //  return items 
  const response =await github.get(`/search/users?${params}`)
  return response.data.items
}

 // Get individual user
 export const getUser = async (login) => {
  
    const  response = await fetch(`${GITHUB_URL}/users/${login}`,{
      headers:{
          Authorization: `token ${GITHUB_TOKEN }`
      }
    })

    if(response.status === 404)
    {
        window.location = '/notfound'
    }
    else
    {
         //destructuring the result
    const data = await response.json()
    return data 
    }
    
 }

 export const getRepos = async (login) =>{
 
    const params = new URLSearchParams({
        sort: 'created',
        per_page:10
    })

   
    const  response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`,{
      headers:{
          Authorization: `token ${GITHUB_TOKEN }`
      }
    })
     //destructuring the result
    const data = await response.json()


    return data

 }