import axios from "axios"

const BASE_URL = (limit: number) => `https://randomuser.me/api/?results=${limit}`

export const fetchUsers = async (limit: number) =>{
    const {data} = await axios.get(BASE_URL(limit))
    return data.results
}
