import { useMemo, useState } from "react"
import { Table } from "./components/Table"
import { useUsers } from "./hooks/useUsers"
import { type UserApiResponse, type SortBy, SORT_OPTIONS, type User } from "./types"
import { sortFunctions } from "./utils/sort"
import { Button } from "./ui/Button"

function App() {
  const { data: users } = useUsers(100)
  const [sort, setSort] = useState<SortBy>('none')
  const [searchTerm, setSearchTerm] = useState('')

  const [showColors, setShowColors] = useState(false)
  const [deletedUserIds, setDeletedUserIds] = useState<Set<string>>(new Set())

  const processedUsers = useMemo(() => {
    if (!users) return []

    let result = users.map((user: UserApiResponse) => ({
      id: user.id.value || crypto.randomUUID(),
      firstName: user.name.first,
      lastName: user.name.last,
      avatar: user.picture.thumbnail,
      country: user.location.country
    }))

    // Filter out soft-deleted users
    result = result.filter((user: User) => !deletedUserIds.has(user.id))

    if (searchTerm) {
      result = result.filter((user: User) =>
        user.country.toLowerCase().includes(searchTerm.toLowerCase())
      )
    } else {
      result = [...result].sort(sortFunctions[sort])
    }

    return result
  }, [users, sort, searchTerm, deletedUserIds])

  const handleDeleteUser = (userId: string) => {
    setDeletedUserIds(prev => new Set(prev).add(userId))
  }

  const handleResetStates = () => {
    setSort(SORT_OPTIONS.NONE)
    setDeletedUserIds(new Set())
    setSearchTerm('')
    setShowColors(false)
  }

  return (
    <main>
      <header className="flex justify-center font-bold">
        <h1 className="m-14 text-5xl">Prueba técnica</h1>
      </header>
      <div className="flex justify-center gap-2">
        <Button
          onClick={() => { setShowColors(!showColors) }}
          title="Colorear filas" />
        <Button
          onClick={() => { setSort(SORT_OPTIONS.COUNTRY) }}
          title="Ordernar por país" />
        <Button
          onClick={handleResetStates}
          title="Resetear estados" />
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border-1 py-2 px-4 border-gray-400 rounded-sm"
          placeholder="Filtrar por país" type="text" />
      </div>
      <Table users={processedUsers} setSort={setSort} showColors={showColors} onDeleteUser={handleDeleteUser} />
    </main>
  )
}

export default App
