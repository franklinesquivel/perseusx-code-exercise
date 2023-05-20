/*
Code Analysis

Objective:
The objective of the function is to filter out the active users from the given array of user objects based on their status.

Inputs:
- An array of user objects containing user details such as name, favorite food, favorite movie, status, and timestamp.

Flow:
- The function takes an array of user objects as input.
- It uses the filter method to iterate through each user object in the array.
- For each user object, it checks the status property against the USER_STATUS constant object to determine if the user is active or not.
- If the user is active, the filter method includes the user object in the output array.

Outputs:
- An array of user objects containing only the active users.

Additional aspects:
- The function uses the USER_STATUS constant object to determine the status of each user.
- The function uses destructuring to extract the status property from each user object.
- The function does not modify the original array of user objects.
*/

import { USER_STATUS }    from '@/constants';
import { getActiveUsers } from '@/functions';
import { UserType }       from '@/types';


describe('getActiveUsers_function', () => {

    // Tests that the function returns only active users. Tags: [happy path]
    it('test_get_active_users_returns_only_active_users', () => {
        const users: UserType[] = [
            { name: 'John', favoriteFood: 'Pizza', favoriteMovie: 'The Godfather', status: USER_STATUS.active },
            {
                name:          'Jane',
                favoriteFood:  'Sushi',
                favoriteMovie: 'The Shawshank Redemption',
                status:        USER_STATUS.inactive
            },
            { name: 'Bob', favoriteFood: 'Burgers', favoriteMovie: 'The Dark Knight', status: USER_STATUS.active }
        ];

        const activeUsers = getActiveUsers(users);

        expect(activeUsers.length).toBe(2);
        expect(activeUsers[0].name).toBe('John');
        expect(activeUsers[1].name).toBe('Bob');
    });

    // Tests that the function does not modify the original array. Tags: [happy path]
    it('test_get_active_users_does_not_modify_original_array', () => {
        const users: UserType[] = [
            { name: 'John', favoriteFood: 'Pizza', favoriteMovie: 'The Godfather', status: USER_STATUS.active },
            {
                name:          'Jane',
                favoriteFood:  'Sushi',
                favoriteMovie: 'The Shawshank Redemption',
                status:        USER_STATUS.inactive
            },
            { name: 'Bob', favoriteFood: 'Burgers', favoriteMovie: 'The Dark Knight', status: USER_STATUS.active }
        ];

        const originalUsers = [...users];

        getActiveUsers(users);
        expect(users).toEqual(originalUsers);
    });

    // Tests that the function returns all active users. Tags: [happy path, edge case]
    it('test_get_active_users_returns_all_active_users', () => {
        const users: UserType[] = [
            { name: 'John', favoriteFood: 'Pizza', favoriteMovie: 'The Godfather', status: USER_STATUS.active },
            {
                name:          'Jane',
                favoriteFood:  'Sushi',
                favoriteMovie: 'The Shawshank Redemption',
                status:        USER_STATUS.active
            },
            { name: 'Bob', favoriteFood: 'Burgers', favoriteMovie: 'The Dark Knight', status: USER_STATUS.active }
        ];

        const activeUsers = getActiveUsers(users);

        expect(activeUsers.length).toBe(3);
    });

    // Tests that the function returns some active users. Tags: [happy path, edge case]
    it('test_get_active_users_returns_some_active_users', () => {
        const users: UserType[] = [
            { name: 'John', favoriteFood: 'Pizza', favoriteMovie: 'The Godfather', status: USER_STATUS.active },
            {
                name:          'Jane',
                favoriteFood:  'Sushi',
                favoriteMovie: 'The Shawshank Redemption',
                status:        USER_STATUS.inactive
            },
            { name: 'Bob', favoriteFood: 'Burgers', favoriteMovie: 'The Dark Knight', status: USER_STATUS.active },
            { name: 'Alice', favoriteFood: 'Tacos', favoriteMovie: 'Pulp Fiction', status: USER_STATUS.inactive }
        ];

        const activeUsers = getActiveUsers(users);

        expect(activeUsers.length).toBe(2);
        expect(activeUsers[0].name).toBe('John');
        expect(activeUsers[1].name).toBe('Bob');
    });

    // Tests that the function returns a new array. Tags: [happy path]
    it('test_get_active_users_returns_new_array', () => {
        const users: UserType[] = [
            { name: 'John', favoriteFood: 'Pizza', favoriteMovie: 'The Godfather', status: USER_STATUS.active },
            {
                name:          'Jane',
                favoriteFood:  'Sushi',
                favoriteMovie: 'The Shawshank Redemption',
                status:        USER_STATUS.inactive
            },
            { name: 'Bob', favoriteFood: 'Burgers', favoriteMovie: 'The Dark Knight', status: USER_STATUS.active }
        ];

        const activeUsers = getActiveUsers(users);

        expect(activeUsers).not.toBe(users);
    });

    // Tests that the function handles the edge case of an empty user array. Tags: [edge case]
    it('test_get_active_users_handles_edge_case_empty_user_array', () => {
        const users: UserType[] = [];
        const activeUsers = getActiveUsers(users);

        expect(activeUsers.length).toBe(0);
    });

});
