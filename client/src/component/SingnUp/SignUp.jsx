import * as React from "react";
import "./SignUp.css"
import TopHeader from "../Top Header/TopHeader.jsx";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const SignUp=(props) =>{
  return (
    <>
      <div className="divSignUp">
      <TopHeader/>
      <Header/>

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
                            '& > :not(style)': { m: 1, width: '25ch' },
                             }}
                           noValidate
                        autoComplete="off"
                                        >
                         <TextField id="standard-basic" label="Name" variant="standard" />
                        </Box>
                  </div>  
                <div className="divUp29">
                <Box
                            component="form"
                            sx={{
                            '& > :not(style)': { m: 1, width: '25ch' },
                             }}
                           noValidate
                        autoComplete="off"
                                        >
                         <TextField id="standard-basic" label="Email or Phone Number" variant="standard" />
                        </Box>
                  </div>
                <div className="divUp31">
                <Box
                            component="form"
                            sx={{
                            '& > :not(style)': { m: 1, width: '25ch' },
                             }}
                           noValidate
                        autoComplete="off"
                                        >
                         <TextField id="standard-basic" label="Password" variant="standard" />
                        </Box>
                  </div>
                <div className="divUp33" onClick={()=>{}
                        }>Create Account</div>
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
                    <div className="divUp40">Log in</div>
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


