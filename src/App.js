import React, { useState, useCallback } from 'react';

// Parent Component
const App = () => {
  // State to hold the current username, initialized to 'JohnDoe'
  const [username, setUsername] = useState('JohnDoe');

  // Function to change the username when called
  const changeUsername = () => {
    // Toggle the username between 'JohnDoe' and 'JaneDoe'
    const newUsername = username === 'JohnDoe' ? 'JaneDoe' : 'JohnDoe';
    setUsername(newUsername); // Update the state with the new username
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Parent Component</h1>
      <p>Current Username: {username}</p> {/* Display the current username */}
      <button onClick={changeUsername}>Change Username</button> {/* Button to change the username */}
      <ChildComponent username={username} /> {/* Pass the username prop to ChildComponent */}
    </div>
  );
};

// Child Component with React.memo
const ChildComponent = React.memo(({ username }) => {
  // Logs to console each time the child component re-renders
  console.log("Child component re-rendered");
  
  return (
    <div style={{ marginTop: '20px', border: '1px solid gray', padding: '10px' }}>
      <h2>Child Component</h2>
      <p>Username from Parent: {username}</p> {/* Display the username received from the parent */}
    </div>
  );
});

export default App;
