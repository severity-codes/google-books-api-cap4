
import React, { useState } from 'react';

function SignUp() {
  // State for new user input fields
  const [newUser, setNewUser] = useState({ username: '', email: '' });

  // State to hold a list of users (for demonstration purposes)
  const [userList, setUserList] = useState([]);

  // Function to add a new user
  const addUser = () => {
    setUserList([...userList, { ...newUser, id: Date.now() }]);
    setNewUser({ username: '', email: '' });
  };

  // Function to delete a user
  const deleteUser = (userId) => {
    setUserList(userList.filter(user => user.id !== userId));
  };

  // Function to edit a user
  const editUser = (userId, newUserData) => {
    setUserList(userList.map(user => (user.id === userId ? { ...user, ...newUserData } : user)));
  };

  return (
    <div>
      {/* Input fields for new user signup */}
      <h2>Sign Up</h2>
      <label htmlFor="newUsername">Username:</label>
      <input
        type="text"
        id="newUsername"
        value={newUser.username}
        onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
      />
      <label htmlFor="newEmail">Email:</label>
      <input
        type="text"
        id="newEmail"
        value={newUser.email}
        onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
      />
      <button onClick={addUser}>Add User</button>

      {/* Display list of users with delete and edit buttons */}
      <div>
        <h2>User List</h2>
        <ul>
          {userList.map((user) => (
            <li key={user.id}>
              {user.username} ({user.email})
              <button onClick={() => deleteUser(user.id)}>Delete</button>
              <button onClick={() => editUser(user.id, { username: 'UpdatedName' })}>Edit</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SignUp;


// input fields for new users to sign up, a button to add a user to the list, and a list of users with delete and edit buttons. this example uses an array (userList) to store user data for demonstration purposes. In a real-world scenario, you would probably interact with a server or database for user management.