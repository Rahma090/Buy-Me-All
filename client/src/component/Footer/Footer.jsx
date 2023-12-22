import * as React from "react";

const Footer=(props)=> {
      return (
        <>
          <div className="divFouter">
            <div className="divFouter2">
              <div className="divFouter3">
                <div className="divFouter4">Exclusive</div>
                <div className="divFouter5">Subscribe</div>
                <div className="divFouter6">Get 10% off your first order</div>
                <div className="divFouter7">
                  <div className="divFouter8">Enter your email</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6bac8a3a4556d00df359345f40c4304fa01a92d9d278e1cc8be218cdcd6e20d8?"
                    className="imgFouter"
                  />
                </div>
              </div>
              <div className="divFouter9">
                <div className="divFouter10">Support</div>
                <div className="divFouter11">
                  111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
                </div>
                <div className="divFouter12">exclusive@gmail.com</div>
                <div className="divFouter13">+88015-88888-9999</div>
              </div>
              <div className="divFouter14">
                <div className="divFouter15">Account</div>
                <div className="divFouter16">My Account</div>
                <div className="divFouter17">Login / Register</div>
                <div className="divFouter18">Cart</div>
                <div className="divFouter19">Wishlist</div>
                <div className="divFouter20">Shop</div>
              </div>
              <div className="divFouter21">
                <div className="divFouter22">Quick Link</div>
                <div className="divFouter23">Privacy Policy</div>
                <div className="divFouter24">Terms Of Use</div>
                <div className="divFouter25">FAQ</div>
                <div className="divFouter26">Contact</div>
              </div>
              <div className="divFouter27">
                <div className="divFouter28">Download App</div>
                <div className="divFouter29">Save $3 with App New User Only</div>
                <div className="divFouter30">
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="imgFouter2"
                  />
                  <div className="divFouter31">
                    <img
                      loading="lazy"
                      srcSet="..."
                      className="imgFouter3"
                    />
                    <img
                      loading="lazy"
                      srcSet="..."
                      className="imgFouter4"
                    />
                  </div>
                </div>
                <div className="divFouter32">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/30ef1881c8ba382ad841b10dec22c4728e1ac56594cd8fd1b8fc54e4c0c91052?"
                    className="imgFouter"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9ced94950f4cc086daaeb9756606cbe4aef1c9aa0fc7a0b7a11b345c3a5d1eaa?"
                    className="imgFouter5"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d0b67f52bb53b8c3b436cfc50867157e647c1cc5fa6f7cc373ba309b35f3d286?"
                    className="imgFouter6"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/017f03fd6271e23e94e189db8506f53ec67e53623ecac07e20b0cc0e64aa481c?"
                    className="imgFouter"
                  />
                </div>
              </div>
            </div>
            <div className="divFouter33">
              <div className="divFouter34">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/63d130c445c2cf637fd1e84407b3842e9603ef36f8aa5d47db94707cedcf5786?"
                  className="imgFouter7"
                />
                <div className="divFouter35">
                  Copyright Rimel 2022. All right reserved
                </div>
              </div>
            </div>
          </div>
          <style jsx>{`
            .divFouter {
              justify-content: flex-end;
              align-items: center;
              background-color: var(--Button, #000);
              align-self: stretch;
              display: flex;
              margin-top: 140px;
              width: 1779px;
              flex-direction: column;
              padding: 50px 0 24px;
            }
            @media (max-width: 991px) {
              .div {
                max-width: 100%;
                margin-top: 40px;
              }
            }
            .divFouter2 {
              justify-content: space-between;
              align-items: flex-start;
              display: flex;
              margin-top: 30px;
              width: 100%;
              max-width: 1170px;
              gap: 20px;
              padding: 0 20px;
            }
            @media (max-width: 991px) {
              .divFouter2 {
                max-width: 100%;
                flex-wrap: wrap;
              }
            }
            .divFouter3 {
              align-self: start;
              display: flex;
              flex-grow: 1;
              flex-basis: 0%;
              flex-direction: column;
              padding: 2px 0;
            }
            .divFouter4 {
              color: var(--Text, #fafafa);
              letter-spacing: 0.72px;
              font: 700 24px/100% Inter, -apple-system, Roboto, Helvetica,
                sans-serif;
            }
            @media (max-width: 991px) {
              .divFouter4 {
                margin-right: 6px;
              }
            }
            .divFouter5 {
              color: var(--Text, #fafafa);
              margin-top: 27px;
              font: 500 20px/140% Poppins, -apple-system, Roboto, Helvetica,
                sans-serif;
            }
            @media (max-width: 991px) {
              .divFouter5 {
                margin-right: 6px;
              }
            }
            .divFouter6 {
              color: var(--Text, #fafafa);
              margin-top: 24px;
              white-space: nowrap;
              font: 400 16px/150% Poppins, -apple-system, Roboto, Helvetica,
                sans-serif;
            }
            @media (max-width: 991px) {
              .divFouter6 {
                white-space: initial;
              }
            }
            .divFouter7 {
              border-radius: 4px;
              border: 1.5px solid var(--Text, #fafafa);
              display: flex;
              margin-top: 16px;
              justify-content: space-between;
              gap: 20px;
              padding: 12px 16px;
            }
            .divFouter8 {
              color: var(--Text, #fafafa);
              font: 400 16px/150% Poppins, -apple-system, Roboto, Helvetica,
                sans-serif;
            }
            .imgFouter {
              aspect-ratio: 1;
              object-fit: contain;
              object-position: center;
              width: 24px;
              overflow: hidden;
              max-width: 100%;
            }
            .divFouter9 {
              align-self: start;
              display: flex;
              flex-grow: 1;
              flex-basis: 0%;
              flex-direction: column;
            }
            .divFouter10 {
              color: var(--Text, #fafafa);
              font: 500 20px/140% Poppins, -apple-system, Roboto, Helvetica,
                sans-serif;
            }
            .divFouter11 {
              color: var(--Text, #fafafa);
              margin-top: 24px;
              font: 400 16px/24px Poppins, -apple-system, Roboto, Helvetica,
                sans-serif;
            }
            .divFouter12 {
              color: var(--Text, #fafafa);
              margin-top: 16px;
              white-space: nowrap;
              font: 400 16px/150% Poppins, -apple-system, Roboto, Helvetica,
                sans-serif;
            }
            @media (max-width: 991px) {
              .divFouter12 {
                white-space: initial;
              }
            }
            .divFouter13 {
              color: var(--Text, #fafafa);
              margin-top: 16px;
              white-space: nowrap;
              font: 400 16px/150% Poppins, -apple-system, Roboto, Helvetica,
                sans-serif;
            }
            @media (max-width: 991px) {
              .divFouter13 {
                white-space: initial;
              }
            }
            .divFouter14 {
              align-self: stretch;
              display: flex;
              flex-grow: 1;
              flex-basis: 0%;
              flex-direction: column;
            }
            .divFouter15 {
              color: var(--Text, #fafafa);
              font: 500 20px/140% Poppins, -apple-system, Roboto, Helvetica,
                sans-serif;
            }
            .divFouter16 {
              color: var(--Text, #fafafa);
              margin-top: 24px;
              white-space: nowrap;
              font: 400 16px/150% Poppins, -apple-system, Roboto, Helvetica,
                sans-serif;
            }
            @media (max-width: 991px) {
              .divFouter16 {
                white-space: initial;
              }
            }
            .divFouter17 {
              color: var(--Text, #fafafa);
              margin-top: 16px;
              white-space: nowrap;
              font: 400 16px/150% Poppins, -apple-system, Roboto, Helvetica,
                sans-serif;
            }
            @media (max-width: 991px) {
              .divFouter17 {
                white-space: initial;
              }
            }
            .divFouter18 {
              color: var(--Text, #fafafa);
              margin-top: 16px;
              font: 400 16px/150% Poppins, -apple-system, Roboto, Helvetica,
                sans-serif;
            }
            .divFouter19 {
              color: var(--Text, #fafafa);
              margin-top: 16px;
              font: 400 16px/150% Poppins, -apple-system, Roboto, Helvetica,
                sans-serif;
            }
            .divFouter20 {
              color: var(--Text, #fafafa);
              margin-top: 16px;
              font: 400 16px/150% Poppins, -apple-system, Roboto, Helvetica,
                sans-serif;
            }
            .divFouter21 {
              align-self: start;
              display: flex;
              flex-basis: 0%;
              flex-direction: column;
            }
            .divFouter22 {
              color: var(--Text, #fafafa);
              white-space: nowrap;
              font: 500 20px/140% Poppins, -apple-system, Roboto, Helvetica,
                sans-serif;
            }
            @media (max-width: 991px) {
              .divFouter22 {
                white-space: initial;
              }
            }
            .divFouter23 {
              color: var(--Text, #fafafa);
              margin-top: 24px;
              white-space: nowrap;
              font: 400 16px/150% Poppins, -apple-system, Roboto, Helvetica,
                sans-serif;
            }
            @media (max-width: 991px) {
              .divFouter23 {
                white-space: initial;
              }
            }
            .divFouter24 {
              color: var(--Text, #fafafa);
              margin-top: 16px;
              white-space: nowrap;
              font: 400 16px/150% Poppins, -apple-system, Roboto, Helvetica,
                sans-serif;
            }
            @media (max-width: 991px) {
              .divFouter24 {
                white-space: initial;
              }
            }
            .divFouter25 {
              color: var(--Text, #fafafa);
              margin-top: 16px;
              font: 400 16px/150% Poppins, -apple-system, Roboto, Helvetica,
                sans-serif;
            }
            .divFouter26 {
              color: var(--Text, #fafafa);
              margin-top: 16px;
              font: 400 16px/150% Poppins, -apple-system, Roboto, Helvetica,
                sans-serif;
            }
            .divFouter27 {
              align-self: start;
              display: flex;
              flex-grow: 1;
              flex-basis: 0%;
              flex-direction: column;
            }
            .divFouter28 {
              color: var(--Text, #fafafa);
              font: 500 20px/140% Poppins, -apple-system, Roboto, Helvetica,
                sans-serif;
            }
            .divFouter29 {
              color: var(--Text, #fafafa);
              margin-top: 24px;
              white-space: nowrap;
              font: 500 12px/150% Poppins, -apple-system, Roboto, Helvetica,
                sans-serif;
            }
            @media (max-width: 991px) {
              .divFouter29 {
                white-space: initial;
              }
            }
            .divFouter30 {
              align-items: center;
              display: flex;
              margin-top: 8px;
              justify-content: space-between;
              gap: 8px;
            }
            .imgFouter2 {
              aspect-ratio: 1;
              object-fit: contain;
              object-position: center;
              width: 80px;
              justify-content: center;
              align-items: center;
              overflow: hidden;
              max-width: 100%;
              margin: auto 0;
            }
            .divFouter31 {
              align-items: center;
              align-self: stretch;
              display: flex;
              flex-grow: 1;
              flex-basis: 0%;
              flex-direction: column;
            }
            .imgFouter3 {
              aspect-ratio: 2.75;
              object-fit: contain;
              object-position: center;
              width: 110px;
              overflow: hidden;
            }
            .imgFouter4 {
              aspect-ratio: 2.75;
              object-fit: contain;
              object-position: center;
              width: 110px;
              justify-content: center;
              align-items: center;
              overflow: hidden;
              margin-top: 4px;
            }
            .divFouter32 {
              display: flex;
              margin-top: 24px;
              padding-right: 30px;
              justify-content: space-between;
              gap: 20px;
            }
            @media (max-width: 991px) {
              .divFouter32 {
                padding-right: 20px;
              }
            }
            .imgFouter5 {
              aspect-ratio: 1;
              object-fit: contain;
              object-position: center;
              width: 24px;
              align-items: center;
              overflow: hidden;
              max-width: 100%;
            }
            .imgFouter6 {
              aspect-ratio: 1;
              object-fit: contain;
              object-position: center;
              width: 24px;
              justify-content: center;
              align-items: center;
              overflow: hidden;
              max-width: 100%;
            }
            .divFouter33 {
              align-items: center;
              align-self: stretch;
              display: flex;
              margin-top: 60px;
              width: 100%;
              flex-direction: column;
              padding: 16px 60px 0;
            }
            @media (max-width: 991px) {
              .divFouter33 {
                max-width: 100%;
                margin-top: 40px;
                padding: 0 20px;
              }
            }
            .divFouter34 {
              align-items: center;
              display: flex;
              gap: 6px;
            }
            .imgFouter7 {
              aspect-ratio: 1;
              object-fit: contain;
              object-position: center;
              width: 20px;
              justify-content: center;
              align-items: center;
              overflow: hidden;
              max-width: 100%;
              margin: auto 0;
            }
            .divFouter35 {
              color: var(--Primary, #fff);
              align-self: stretch;
              flex-grow: 1;
              white-space: nowrap;
              font: 400 16px/150% Poppins, -apple-system, Roboto, Helvetica,
                sans-serif;
            }
            @media (max-width: 991px) {
              .divFouter35 {
                white-space: initial;
              }
            }
          `}</style>
        </>
      );
    }
    
  
export default Footer