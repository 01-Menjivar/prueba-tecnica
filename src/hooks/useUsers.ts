import { useQuery } from "@tanstack/react-query"
import { fetchUsers } from "../services/user"

const useUsers = (limit: number) => {
    return useQuery({
        queryKey: ['users',limit],
        queryFn: () => fetchUsers(limit),
        refetchOnWindowFocus: false,
    })
} 

export {
    useUsers
}