import { UserType } from '@/types';


export const addDateToUsers = (users: UserType[]): UserType[] => users.map((u, i) => ({
    ...u,
    date: new Date().toLocaleDateString()
}));