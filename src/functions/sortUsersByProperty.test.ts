/*
Code Analysis

Objective:
The objective of the function is to sort an array of user objects based on a specified property and order.

Inputs:
- users: an array of UserType objects
- prop: a keyof UserType, representing the property to sort by
- order: an optional OrderType, representing the order of the sorting (default is 'DESC')

Flow:
1. Determine the orderN based on the order parameter
2. Sort the users array using the sort() method and a comparison function
3. Compare the specified property of each user object and return the sorted array

Outputs:
- A sorted array of UserType objects

Additional aspects:
- The function uses TypeScript to ensure type safety
- The function handles cases where the specified property is undefined or null
*/

import { USER_STATUS }         from '@/constants';
import { sortUsersByProperty } from '@/functions';
import { UserType }            from '@/types';


describe('sortUsersByProperty_function', () => {

    // Tests that the function sorts users by name in ascending order. Tags: [happy path]
    it('test_sort_users_by_name_in_ascending_order', () => {
        const users = [
            { name: 'John', favoriteFood: 'Pizza', favoriteMovie: 'The Godfather', status: USER_STATUS.active },
            {
                name:          'Alice',
                favoriteFood:  'Sushi',
                favoriteMovie: 'The Shawshank Redemption',
                status:        USER_STATUS.inactive
            },
            { name: 'Bob', favoriteFood: 'Burgers', favoriteMovie: 'The Dark Knight', status: USER_STATUS.active }
        ];

        const sortedUsers = sortUsersByProperty(users, 'name', 'ASC');

        expect(sortedUsers[0].name).toBe('Alice');
        expect(sortedUsers[1].name).toBe('Bob');
        expect(sortedUsers[2].name).toBe('John');
    });

    // Tests that the function sorts users by favorite food in descending order. Tags: [happy path]
    it('test_sort_users_by_favorite_food_in_descending_order', () => {
        const users = [
            { name: 'John', favoriteFood: 'Pizza', favoriteMovie: 'The Godfather', status: USER_STATUS.active },
            {
                name:          'Alice',
                favoriteFood:  'Sushi',
                favoriteMovie: 'The Shawshank Redemption',
                status:        USER_STATUS.inactive
            },
            { name: 'Bob', favoriteFood: 'Burgers', favoriteMovie: 'The Dark Knight', status: USER_STATUS.active }
        ];

        const sortedUsers = sortUsersByProperty(users, 'favoriteFood');

        expect(sortedUsers[0].favoriteFood).toBe('Sushi');
        expect(sortedUsers[1].favoriteFood).toBe('Pizza');
        expect(sortedUsers[2].favoriteFood).toBe('Burgers');
    });

    // Tests that the function returns an empty array when sorting an empty array of users. Tags: [edge case]
    it('test_sort_empty_array_of_users', () => {
        const users: UserType[] = [];
        const sortedUsers = sortUsersByProperty(users, 'name');
        expect(sortedUsers.length).toBe(0);
    });

    // Tests that the function sorts users by favorite movie in ascending order. Tags: [happy path]
    it('test_sort_users_by_favorite_movie_in_ascending_order', () => {
        const users = [
            { name: 'John', favoriteFood: 'Pizza', favoriteMovie: 'The Godfather', status: USER_STATUS.active },
            {
                name:          'Alice',
                favoriteFood:  'Sushi',
                favoriteMovie: 'The Shawshank Redemption',
                status:        USER_STATUS.inactive
            },
            { name: 'Bob', favoriteFood: 'Burgers', favoriteMovie: 'The Dark Knight', status: USER_STATUS.active }
        ];
        const sortedUsers = sortUsersByProperty(users, 'favoriteMovie', 'ASC');
        expect(sortedUsers[0].favoriteMovie).toBe('The Dark Knight');
        expect(sortedUsers[1].favoriteMovie).toBe('The Godfather');
        expect(sortedUsers[2].favoriteMovie).toBe('The Shawshank Redemption');
    });

    // Tests that the function returns the same array when sorting an array of users with only one user. Tags: [edge case]
    it('test_sort_array_of_users_with_only_one_user', () => {
        const users = [
            { name: 'John', favoriteFood: 'Pizza', favoriteMovie: 'The Godfather', status: USER_STATUS.active }
        ];
        const sortedUsers = sortUsersByProperty(users, 'name');
        expect(sortedUsers[0].name).toBe('John');
    });

    // Tests that the function sorts an array of users by current timestamp by descending order. Tags: [happy path]
    it('test_sort_users_by_timestamps', () => {
        const users = [
            {
                name:          'John',
                favoriteFood:  'Pizza',
                favoriteMovie: 'The Godfather',
                status:        USER_STATUS.active,
                timestamp:     1631230800000 // September 10, 2021 12:00:00 AM UTC
            },
            {
                name:          'Jane',
                favoriteFood:  'Sushi',
                favoriteMovie: 'The Shawshank Redemption',
                status:        USER_STATUS.inactive,
                timestamp:     1631317200000 // September 11, 2021 12:00:00 AM UTC
            },
            {
                name:          'Bob',
                favoriteFood:  'Burgers',
                favoriteMovie: 'The Dark Knight',
                status:        USER_STATUS.active,
                timestamp:     1631403600000 // September 12, 2021 12:00:00 AM UTC
            }
        ];

        const sortedUsers = sortUsersByProperty(users, 'timestamp');

        expect(sortedUsers).toEqual([
            {
                name:          'Bob',
                favoriteFood:  'Burgers',
                favoriteMovie: 'The Dark Knight',
                status:        USER_STATUS.active,
                timestamp:     1631403600000 // September 12, 2021 12:00:00 AM UTC
            },
            {
                name:          'Jane',
                favoriteFood:  'Sushi',
                favoriteMovie: 'The Shawshank Redemption',
                status:        USER_STATUS.inactive,
                timestamp:     1631317200000 // September 11, 2021 12:00:00 AM UTC
            },
            {
                name:          'John',
                favoriteFood:  'Pizza',
                favoriteMovie: 'The Godfather',
                status:        USER_STATUS.active,
                timestamp:     1631230800000 // September 10, 2021 12:00:00 AM UTC
            }
        ]);
    });

});
