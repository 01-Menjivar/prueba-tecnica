import type { User } from "../types";

export const sortFunctions = {
      country: (a: User, b: User) => a.country.localeCompare(b.country),
      name: (a: User, b: User) => a.firstName.localeCompare(b.firstName),
      lastName: (a: User, b: User) => a.lastName.localeCompare(b.lastName),
      none: () => 0
    }