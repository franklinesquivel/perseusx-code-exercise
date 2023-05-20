import { UserType } from '@/types';


export const addDateToUsers = (users: UserType[]): UserType[] => users.map(u => ({
    ...u,
    date: new Date().toLocaleDateString()
}));