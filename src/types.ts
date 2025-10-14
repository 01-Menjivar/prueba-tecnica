export type UserApiResponse = {
    id: {
        value: string;
    };
    name: {
        first: string;
        last: string;
    };
    picture: {
        thumbnail: string;
    };
    location: {
        country: string;
    };
};

export type User = {
    id: string,
    firstName: string,
    lastName: string,
    avatar: string,
    country: string
}


export const SORT_OPTIONS = {
    NONE: 'none',
    COUNTRY: 'country', 
    NAME: 'name',
    LAST_NAME: 'lastName'
} as const

export type SortBy = typeof SORT_OPTIONS[keyof typeof SORT_OPTIONS]