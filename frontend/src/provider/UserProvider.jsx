import UserContext from "../context/UserContext"
import axios from "axios"

axios.defaults.withCredentials = true  //this will call the backend along with the credentials (cookies) from the browser and this will help us to maintain the session of the user

const UserProvider = ({ children }) => {
    //global states

    const BaseUrl = import.meta.env.VITE_BASE_URL;

    //global functions
    const handleRegister = async(data) => {
        try {
            const res = await axios.post(`${BaseUrl}auth/register`,data)
            console.log(res)
        } catch(error){
            console.log(error)
     }
    }

    const handleLogin = async(data) => {
        try {
            const res = await axios.post(`${BaseUrl}auth/login`,data)
            console.log(res)
        } catch(error){
            console.log(error)
     }
    }

    const value = {
        handleRegister,
        handleLogin
    }
    return(
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}


export default UserProvider;