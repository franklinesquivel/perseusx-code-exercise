import { StatusType } from './StatusType';


export type UserType = {
    name: string;
    favoriteFood: string;
    favoriteMovie: string;
    status: StatusType;
    date?: string
}