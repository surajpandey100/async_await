// In-memory database
let users = [];

// Function to generate unique user IDs
function generateUserId() {
  return Math.floor(Math.random() * 1000) + 1;
}

// Function to create a new user
async function createUser(name, email) {
  const newUser = {
    id: generateUserId(),
    name,
    email
  };
  users.push(newUser);
  return newUser;
}

// Function to retrieve all users
async function getUsers() {
  return users;
}

// Function to retrieve a user by ID
async function getUserById(id) {
  return users.find(user => user.id === id);
}

// Function to update a user by ID
async function updateUserById(id, newData) {
  const index = users.findIndex(user => user.id === id);
  if (index !== -1) {
    users[index] = { ...users[index], ...newData };
    return users[index];
  } else {
    throw new Error('User not found');
  }
}

// Function to delete a user by ID
async function deleteUserById(id) {
  const index = users.findIndex(user => user.id === id);
  if (index !== -1) {
    users.splice(index, 1);
  } else {
    throw new Error('User not found');
  }
}

// Example usage:
(async () => {
  try {
    // Create a new user
    const newUser = await createUser('Suraj Pandey', 'suraj@example.com');
    console.log('New user:', newUser);

    // Retrieve all users
    const allUsers = await getUsers();
    console.log('All users:', allUsers);

    // Retrieve a user by ID
    const userById = await getUserById(newUser.id);
    console.log('User by ID:', userById);

    // Update a user by ID
    const updatedUser = await updateUserById(newUser.id, { name: 'Suraj Pandey ' });
    console.log('Updated user:', updatedUser);

    // Delete a user by ID
    await deleteUserById(newUser.id);
    console.log('User deleted successfully');

    // Retrieve all users after deletion
    const remainingUsers = await getUsers();
    console.log('Remaining users:', remainingUsers);
  } catch (error) {
    console.error('Error:', error.message);
  }
})();
