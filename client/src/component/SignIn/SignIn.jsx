import React, { useState } from "react";
import axios from "axios";
import './SignIn.css';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useIdentity } from '../../AuthorContext/IdentityContext.jsx';
import TopHeader from "../Top Header/TopHeader.jsx";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const SignIn = (props) => {
  const [userpassword, setUserpassword] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const { setUser } = useIdentity(); // Update to match your context structure
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    try {
      const response = await axios.post('http://localhost:3000/api/BuyMeAll/signin', {
        user_phOrEmail: userEmail,
        user_password: userpassword,
      });

      const { tok, id } = response.data;

      if (id && tok) {
        setUser(response.data); // Set user in the context
        Cookies.set('authToken', tok, { expires: 60 * 60 * 24 });
        setErrorMessage('');
        setSuccessMessage('Login successful');

        // Redirect based on user role
        response.data.user_role === "admin" ? navigate(`/admin/${response.data.id}`)
          : response.data.user_role === "seller" ?
            navigate(`/seller/${response.data.id}`)
            : navigate(`/`);
      } else {
        setErrorMessage('Login failed. Please check your credentials.');
      }
    } catch (error) {
      setErrorMessage('Error during login. Please try again.');
      console.error('Error during login:', error);
    }
  };

  return (
    <>
      <div className="divSignIn">
        <TopHeader />
        <Header value={3} />

        {/* ... (Your existing JSX code) */}

        <div className="divS33" onClick={() => { handleSubmit() }}>Log In</div>

        {/* ... (Your existing JSX code) */}

        <Footer />
      </div>
    </>
  );
};

export default SignIn;
