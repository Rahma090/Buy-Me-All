import   React,{useState} from "react";
import axios from "axios";
import {Link, useNavigate } from 'react-router-dom';
import { useIdentity } from '../../AuthorContext/IdentityContext.jsx'
import Cookies from 'js-cookie';
import "./SignUp.css"
import TopHeader from "../Top Header/TopHeader.jsx";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

  
const SignUp=(props) =>{
  const [username, setUsername] = useState("")
  const [userEmail, setUserEmail] = useState("")
  const [userpassword, setUserpassword] = useState("")
  const [role,setRole]=useState("client")
  
  const navigate = useNavigate();
  const { setUser } = useIdentity();
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignup = async (event) => {

    try {
      const response = await axios.post('http://localhost:3000/api/BuyMeAll/signup', {
        user_name: username ,
        user_phOrEmail: userEmail,
        user_password: userpassword,
        user_role: role,
      });
      console.log(response);
      const { user_phOrEmail, user_name, tok, id } = response.data;

      if (user_phOrEmail && user_name && tok) {
        Cookies.set('authToken', tok, { expires: 7 }); 
        setUser(response.data);
        
        setSuccessMessage('Registration successful');
        setErrorMessage('');

        navigate(`/`);
      } else {
        setSuccessMessage('');
        setErrorMessage('!Registration failed. Please try again.');
      }
    } catch (error) {
      setSuccessMessage('');
      setErrorMessage('Error during registration. Please try again.');
      console.error('Error during registration:', error);
    }
  };


  return (
    <>
      <div className="divSignUp">
      <TopHeader/>
      <Header value={3}/>

        <div className="divUp" />
        <div className="divUp21">
          <div className="divUp22">
            <div className="col">
              <div className="divUp23">
                <img
                  loading="lazy"
                  srcSet="..."
                  className="imgUp2"
                />
              </div>
            </div>
            <div className="col-2">
              <div className="divUp24">
                <div className="divUp25">Create an account</div>
                <div className="divUp26">Enter your details below</div>
                <div className="divUp27">
                <Box
                            component="form"
                            sx={{
                            '& > :not(style)': { m: 1, width: '35ch' },
                             }}
                           noValidate
                        autoComplete="off"
                                        >
                         <TextField id="standard-basic" label="Name" variant="standard" onChange={(event)=>{setUsername(event.target.value)}}/>
                        </Box>
                  </div>  
                <div className="divUp29">
                <Box
                            component="form"
                            sx={{
                            '& > :not(style)': { m: 1, width: '35ch' },
                             }}
                           noValidate
                        autoComplete="off"
                                        >
                         <TextField id="standard-basic" label="Email or Phone Number" variant="standard" onChange={(event)=>{setUserEmail(event.target.value)}} />
                        </Box>
                  </div>
                <div className="divUp31">
                <Box
                            component="form"
                            sx={{
                            '& > :not(style)': { m: 1, width: '35ch' },
                             }}
                           noValidate
                        autoComplete="off"
                                        >
                         <TextField id="standard-basic" label="Password" variant="standard"  onChange={(event)=>{setUserpassword(event.target.value)}} />
                        </Box>
                  </div>
                  <div className="role">
                  <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group">Role</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={role}
        onChange={(e)=>{setRole(e.target.value)}}
      >
        <FormControlLabel value="client" control={<Radio />} label="Client" />
        <FormControlLabel value="seller" control={<Radio />} label="Seller" />
      </RadioGroup>
    </FormControl>
                  </div>
                <div className="divUp33" onClick={()=>{handleSignup()}}>Create Account</div>
                <div className="divUp34">
                  <div className="divUp35">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/a6375a6a69051bfc043033cd291b0f7987b1438bb083d10da7d992f6aca588e1?"
                      className="imgUp3"
                    />
                    <div className="divUp36">Sign up with Google</div>
                  </div>
                </div>
                <div className="divUp37">
                  <div className="divUp38">Already have account?</div>
                  <div className="divUp39">

                    <Link to="/SignIn"><div className="divUp40">Log in</div></Link>
                    <img
                      loading="lazy"
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                      className="imgUp4"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      <Footer/>
      </div>
    </>
  );
}


export default SignUp


