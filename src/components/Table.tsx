import { SORT_OPTIONS, type SortBy, type User } from "../types";
import { Button } from "../ui/Button";

interface TableProps {
    users: User[];
    setSort: React.Dispatch<React.SetStateAction<SortBy>>;
    showColors: boolean;
    onDeleteUser: (userId: string) => void;
}

export const Table = ({users, setSort, showColors, onDeleteUser}: TableProps) =>{

    return(
        <table className="table-auto m-5 w-full border-separate border-spacing-y-2">
            <thead>
                <tr>
                    <th>Foto</th>
                    <th
                    className="cursor-pointer"
                    onClick={() => setSort(SORT_OPTIONS.NAME)}
                    >Nombre</th>
                    <th
                    onClick={()=>setSort(SORT_OPTIONS.LAST_NAME)}
                    >Apellido</th>
                    <th
                    className="cursor-pointer"
                    onClick={() => setSort(SORT_OPTIONS.COUNTRY)}
                    >País</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody className="text-center">
                {users.map((user, index) => (
                    <tr 
                        key={user.id}
                        className={
                            showColors ? 
                                index % 2 === 1 ?
                                    'bg-gray-200' 
                                : 'bg-blue-100  ' 
                            : 'bg-white'}
                    >
                        <td className="flex justify-center">
                            <img src={user.avatar} alt={user.firstName} />
                        </td>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.country}</td>
                        <td>
                           <Button onClick={() => onDeleteUser(user.id)} title="Borrar" />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}