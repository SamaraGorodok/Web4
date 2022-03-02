import axios from 'axios';
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        "Content-Type": "application/json",
        "access-control-allow-origin": "*"

    },
});

const authAPI = {
    async login(username, password) {
        const data = {
            "username": username,
            "password": password
        }
        console.log(data)
        axiosInstance.post("/user/login", data).then(resp=>{

            if (resp.status!=200){
                toast("faillll")
            }


            localStorage.setItem("secret",resp.data.secret)
            localStorage.setItem("username",username)
            console.log(localStorage)
        }).catch(ex=>{
            toast("failed to authorize")
        });

    },
    async register(username, password) {
        const data = {
            "username": username,
            "password": password
        }
        return await axiosInstance.post("/user/register", data);

    }
}

export default authAPI;

