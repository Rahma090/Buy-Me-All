    import * as React from "react";
    import './SingnIn.css'
    import TopHeader from "../Top Header/TopHeader.jsx";
    import Header from "../Header/Header.jsx";
    import Footer from "../Footer/Footer.jsx";
    
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
                      <div>Email or Phone Number</div>
                      <input onChange={(e)=>{}}/>
                    </div>
                    <div className="divS30" />
                    <div className="divS31">
                      <div>Password</div>
                      <input onChange={(e)=>{}}/>
                      </div>
                    <div className="divS30" />
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
    
    
    