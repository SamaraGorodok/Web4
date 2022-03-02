import axios from 'axios';
import ArrayValues from "../Store/ArrayValues";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080/entry',
    headers: {
        "Content-Type": "application/json",
        "access-control-allow-origin": "*"
    },
});

const entriesAPI = {
    async checkEntryRequest(x, y, r) {
        const data = {
            "x": x,
            "y": y,
            "r": r
        }
        const config = {
            headers: {
                secret: localStorage.getItem("secret"),
                username: localStorage.getItem("username")
            }
        }
        return await axiosInstance.post("/check", data,config).then(res=>{
            ArrayValues.push(res.data)
            console.log(res.data)
        });

    },
    async getEntriesRequest(update) {
        const config = {
            headers: {
                secret: localStorage.getItem("secret"),
                username: localStorage.getItem("username")
            }
        }
        axiosInstance.get("/getAll", config).then(data=>{
            // update=[...data.data]
            // console.log(data.data)
            ArrayValues.set(data.data)
            update(Array(data.data))
        });
        // process.nextTick(update)

    }, async clearEntriesRequest(token) {
        const config = {
            headers: {
                secret: localStorage.getItem("secret"),
                username: localStorage.getItem("username")
            }
        }
        return await axiosInstance.get("/clear", config);

    },

}

export default entriesAPI;

