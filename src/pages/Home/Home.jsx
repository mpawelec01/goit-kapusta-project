import React from "react";
import Background from "../../components/Background/Background"; // Import the Background component
import LoginForm from "../../components/LoginForm/LoginForm"; // Import the LoginForm component

export const Home = () => {
  return (
    <div>
      <Background /> {/* Render the Background component */}
      <LoginForm /> {/* Render the LoginForm component */}
    </div>
  );
};
