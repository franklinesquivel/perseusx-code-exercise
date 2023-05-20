import { UserType } from '@/types';


export const addTimestampToUsers = (users: UserType[]): UserType[] => users.map(u => ({
    ...u,
    timestamp: Date.now()
}));