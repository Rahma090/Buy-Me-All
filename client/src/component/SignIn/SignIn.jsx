import   React,{useState} from "react";
import axios from "axios";
    import './SignIn.css'
    import { useAuth } from '../../AuthorContext/authContext.jsx';
    import { useNavigate } from 'react-router-dom';
    import Cookies from 'js-cookie';
    import TopHeader from "../Top Header/TopHeader.jsx";
    import Header from "../Header/Header.jsx";
    import Footer from "../Footer/Footer.jsx";
    import Box from '@mui/material/Box';
    import TextField from '@mui/material/TextField';
    
    const SingnIn=(props) =>{
      const [userpassword, setUserpassword] = useState("")
      const [userEmail, setUserEmail] = useState("")
      const [successMessage, setSuccessMessage] = useState('');
      const [errorMessage, setErrorMessage] = useState('');
      const { setToken } = useAuth();
      const navigate = useNavigate();
      const handleSubmit = async (event) => {
          try {
         
         const response = await axios.post('http://localhost:3000/api/BuyMeAll/signin', {
            user_phOrEmail: userEmail,
            user_password: userpassword,
          });
          console.log(response)
          const {tok, id} = response.data;
    
          if (id &&tok) {
            const { tok } = response.data;
            console.log(tok)
            Cookies.set('authToken', tok, { expires: 60*60*24 })
            setToken(tok);
            setErrorMessage('');
           
            setSuccessMessage('signup successful')
            navigate(`/ECommerceHomePage`);
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
          <TopHeader/>
          <Header/>
    
            <div className="divS" />
            <div className="divS21">
              <div className="divS22">
                <div className="col">
                  <div className="divS23">
                    <img
                      loading="lazy"
                      srcSet="..."
                      className="imgIn2"
                    />
                  </div>
                </div>
                <div className="col-2">
                  <div className="divS24">
                    <div className="divS25">Log in to Exclusive</div>
                    <div className="divS26">Enter your details below</div>
                    <div className="divS29">
                         <Box
                            component="form"
                            sx={{
                            '& > :not(style)': { m: 1, width: '25ch' },
                             }}
                           noValidate
                        autoComplete="off"
                                        >
                         <TextField id="standard-basic" label="Email or Phone Number" variant="standard" onChange={(event)=>{setUserEmail(event.target.value)}} />
                        </Box>
                    </div>
                    <div className="divS31">
                    <Box
                            component="form"
                            sx={{
                            '& > :not(style)': { m: 1, width: '25ch' },
                             }}
                           noValidate
                        autoComplete="off"
                                        >
                         <TextField id="standard-basic" label="Password" variant="standard" onChange={(event)=>{setUserpassword(event.target.value)}} />
                        </Box>
                      </div>
                    <div className="divS33" onClick={()=>{handleSubmit()}}>Log In</div>
                   
                    <div className="divS37">
                      <div className="divS38">Forget Password?</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          <Footer/>
          </div>
          <style jsx>{`

            
          `}</style>
        </>
      );
    }
    
    
    export default SingnIn
    
    
    