/**
 * Name: Franklin Armando Esquivel Guevara
 * Date of Development: 20-05-2023
 * Purpose of the script: Technical test for PerseusX
 */

import { USER_STATUS }                                              from '@/constants';
import { usersCollection }                                          from '@/data';
import { addTimestampToUsers, getActiveUsers, sortUsersByProperty } from '@/functions';
import { UserType }                                                 from '@/types';
import { exit }                                                     from 'process';


const franklin: UserType = {
    name:          'Franklin',
    favoriteMovie: 'Who Framed Roger Rabbit',
    favoriteFood:  'Olives',
    status:        USER_STATUS.active
};

const usersWithTimestamp = addTimestampToUsers([...usersCollection, franklin]);
const activeUsers = getActiveUsers(usersWithTimestamp);

if (activeUsers.length === 0) {
    console.error('There are no active users!');
    exit();
}

const sortedUsersByMovie = sortUsersByProperty(activeUsers, 'favoriteMovie');

sortedUsersByMovie.forEach(({ name, timestamp, favoriteMovie }) => console.log({
    name, timestamp, favoriteMovie
}));