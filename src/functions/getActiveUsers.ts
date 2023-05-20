import { UserType }    from '@/types';
import { USER_STATUS } from '@/constants';


export const getActiveUsers = (users: UserType[]) => users.filter(({ status }) => status === USER_STATUS.active);