// pages/index.js
import Navbar from '../components/Navbar';
import SignupForm from '../components/SignupForm';
import LoginForm from '../components/LoginForm';
import { useState } from 'react';

export default function Home() {
  const [isSignup, setIsSignup] = useState(true); // Toggle between Signup and Login

  return (
    <>
      <Navbar />
      <div className="landing-container">
        <h1>Welcome to User Auth App</h1>
        <div className="auth-forms">
          {isSignup ? <SignupForm /> : <LoginForm />}
          <button onClick={() => setIsSignup(!isSignup)}>
            {isSignup ? 'Already have an account? Login' : "Don't have an account? Signup"}
          </button>
        </div>
      </div>
    </>
  );
}
