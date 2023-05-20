import { UserType } from '@/types';


type OrderType = 'ASC' | 'DESC';

export const sortUsersByProperty = (users: UserType[], prop: keyof UserType, order: OrderType = 'DESC') => {
    const orderN = order === 'DESC' ? -1 : 1;

    return [...users].sort((a, b) => {
        const propA = a[prop];
        const propB = b[prop];

        if (!propA || !propB)
            return 0;

        return propA > propB ? orderN : -1 * orderN;
    });
};