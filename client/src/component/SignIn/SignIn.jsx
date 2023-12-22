    import * as React from "react";
    import './SignIn.css'
    import TopHeader from "../Top Header/TopHeader.jsx";
    import Header from "../Header/Header.jsx";
    import Footer from "../Footer/Footer.jsx";
    import Box from '@mui/material/Box';
    import TextField from '@mui/material/TextField';
    
    const SingnIn=(props) =>{
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
                         <TextField id="standard-basic" label="Email or Phone Number" variant="standard" />
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
                         <TextField id="standard-basic" label="Password" variant="standard" />
                        </Box>
                      </div>
                    <div className="divS33">Log In</div>
                   
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
    
    
    