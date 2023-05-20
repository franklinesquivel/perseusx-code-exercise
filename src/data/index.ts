import { UserType } from '@/types';


const rocky: UserType = {
    name:          'Rocky',
    favoriteFood:  'Sushi',
    favoriteMovie: 'Back to The Future',
    status:        'Inactive'
};

const miroslav: UserType = {
    name:          'Miroslav',
    favoriteFood:  'Sushi',
    favoriteMovie: 'American Psycho',
    status:        'Inactive'
};

const donny: UserType = {
    name:          'Donny',
    favoriteFood:  'Singapore chow mei fun',
    favoriteMovie: 'The Princess Bride',
    status:        'Inactive'
};

const matt: UserType = {
    name:          'Matt',
    favoriteFood:  'Brisket Tacos',
    favoriteMovie: 'The Princess Bride',
    status:        'Active'
};

export const usersCollection = [
    rocky,
    miroslav,
    donny,
    matt
];