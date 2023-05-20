import { USER_STATUS } from '@/constants';
import { UserType }    from '@/types';


const rocky: UserType = {
    name:          'Rocky',
    favoriteFood:  'Sushi',
    favoriteMovie: 'Back to The Future',
    status:        USER_STATUS.inactive
};

const miroslav: UserType = {
    name:          'Miroslav',
    favoriteFood:  'Sushi',
    favoriteMovie: 'American Psycho',
    status:        USER_STATUS.inactive
};

const donny: UserType = {
    name:          'Donny',
    favoriteFood:  'Singapore chow mei fun',
    favoriteMovie: 'The Princess Bride',
    status:        USER_STATUS.inactive
};

const matt: UserType = {
    name:          'Matt',
    favoriteFood:  'Brisket Tacos',
    favoriteMovie: 'The Princess Bride',
    status: USER_STATUS.active
};

export const usersCollection = [
    rocky,
    miroslav,
    donny,
    matt
];