import axios from 'axios'

//export const getUsers = async () => {
//  const response = await axios.get (
//    'https://jsonplaceholder.typicode.com/users'
//  )
//  return response.data
//}

export async function getUsers(){
  try{
    const data = await axios.get('https://jsonplaceholder.typicode.com/users')
    return data.data
  } catch (error){
    console.log(error)
    return []
  }
}