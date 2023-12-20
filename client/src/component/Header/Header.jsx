import * as React from "react";
import '../ECommerceHomePage/ECommerceHomePage.css'

const Header=(props) =>{
  return (
      <div className="div-9">
          <div className="div-10">
            <div className="div-11">Exclusive</div>
            <div className="div-12">
              <div className="div-13">Home</div>
              <div className="div-14">Contact</div>
              <div className="div-15">About</div>
              <div className="div-16">Sign Up</div>
            </div>
          </div>
          <div className="div-17">
            <div className="div-18">
              <div className="div-19">
                <div className="div-20">What are you looking for?</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a36546edd30f9649053810fdbf6c98d92541e863e7b8b10ab13af855343b34e?"
                  className="img"
                />
              </div>
            </div>
            <div className="div-21">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/850597cc14d3bfef027aa097fc5bca3ac1b650d683dc1d3c8c0134d5cd9a061d?"
                className="img-2"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f1602ef0e88675df931f73ee88ccd85c7a919ff3264f5e5c09b7ad94b1f6df9c?"
                className="img-3"
              />
            </div>
          </div>
        </div>
  );
}


export default Header