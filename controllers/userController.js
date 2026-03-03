// userController.js

/**
 * User management functions
 */

const users = [];

/**
 * Create a new user
 * @param {Object} user - The user object
 */
const createUser = (user) => {
    users.push(user);
    return user;
};

/**
 * Get a user by ID
 * @param {number} id - The user ID
 */
const getUserById = (id) => {
    return users.find(user => user.id === id);
};

/**
 * Update a user by ID
 * @param {number} id - The user ID
 * @param {Object} updatedUser - The updated user object
 */
const updateUserById = (id, updatedUser) => {
    const index = users.findIndex(user => user.id === id);
    if (index !== -1) {
        users[index] = { ...users[index], ...updatedUser };
        return users[index];
    }
    return null;
};

/**
 * Delete a user by ID
 * @param {number} id - The user ID
 */
const deleteUserById = (id) => {
    const index = users.findIndex(user => user.id === id);
    if (index !== -1) {
        return users.splice(index, 1);
    }
    return null;
};

module.exports = { createUser, getUserById, updateUserById, deleteUserById };