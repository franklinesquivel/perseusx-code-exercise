import { USER_STATUS } from '@/constants';
import { UserType }    from '@/types';


export const getActiveUsers = (users: UserType[]) => users.filter(({ status }) => status === USER_STATUS.active);