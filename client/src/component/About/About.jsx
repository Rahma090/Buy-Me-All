// import * as React from "react";
// import './About.css'
// import Header from "../Header/Header.jsx";
// import TopHeader from "../Top Header/TopHeader.jsx"
// function About({user}) {
//     return (
      
//         <div className="div">
//             <TopHeader/>
//         <Header value={0} user={user}/>
        
    
//           <div className="div-22" />
//           <div className="div-23">
//             <div className="div-24">
             
//             </div>
//             <div className="div-27">
//               <div className="div-28">
//                 <div className="column">
//                   <div className="div-29">
//                     <div className="div-30">Our Story</div>
//                     <div className="div-31">
//                       Launced in 2015, Exclusive is South Asia’s premier online
//                       shopping makterplace with an active presense in Bangladesh.
//                       Supported by wide range of tailored marketing, data and
//                       service solutions, Exclusive has 10,500 sallers and 300
//                       brands and serves 3 millioons customers across the region.{" "}
//                     </div>
//                     <div className="div-32">
//                       Exclusive has more than 1 Million products to offer, growing
//                       at a very fast. Exclusive offers a diverse assotment in
//                       categories ranging from consumer.
//                     </div>
//                   </div>
//                 </div>
//                 <div className="column-2">
//                   <div className="div-33">
//                     <img
//                       loading="lazy"
//                       srcSet="..."
//                       className="img-5"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="div-34">
//               <div className="div-35">
//                 <div className="column-3">
//                   <div className="div-36">
//                     <img
//                       loading="lazy"
//                       src="https://cdn.builder.io/api/v1/image/assets/TEMP/540ce15ebf56d8ba02478887cc0b866b4d9dc2c9f12f6273e5f726096f954a1c?"
//                       className="img-6"
//                     />
//                     <div className="div-37">Sallers active our site</div>
//                   </div>
//                 </div>
//                 <div className="column-4">
//                   <div className="div-38">
//                     <img
//                       loading="lazy"
//                       src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b964920c51749798432322beca130e89a93bd03ed1e219faf0ac82dfc9fb6f4?"
//                       className="img-7"
//                     />
//                   </div>
//                 </div>
//                 <div className="column-5">
//                   <div className="div-39">
//                     <div className="div-40">
//                       <img
//                         loading="lazy"
//                         src="https://cdn.builder.io/api/v1/image/assets/TEMP/23347f57400a31c91cbbb7279fdf9ecb779726a76da0f742e02fc58f642d4925?"
//                         className="img-8"
//                       />
//                     </div>
//                   </div>
//                 </div>
//                 <div className="column-6">
//                   <div className="div-41">
//                     <img
//                       loading="lazy"
//                       src="https://cdn.builder.io/api/v1/image/assets/TEMP/dd02f132c954ac28f6ae308c0af30f5c76b453da141c47f1cad95f50f6c76bcc?"
//                       className="img-9"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="div-42">
//               <div className="div-43">
//                 <div className="column-7">
//                   <div className="div-44">
//                     <div className="div-45">
//                       <img
//                         loading="lazy"
//                         srcSet="..."
//                         className="img-10"
//                       />
//                     </div>
//                     <div className="div-46">Tom Cruise</div>
//                     <div className="div-47">Founder & Chairman</div>
//                     <div className="div-48">
//                       <img
//                         loading="lazy"
//                         src="https://cdn.builder.io/api/v1/image/assets/TEMP/ce257e590f85ae7bdc52579b096904f395f36442d9415507d0dca97088900d21?"
//                         className="img-11"
//                       />
//                       <img
//                         loading="lazy"
//                         src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c1a0fefac87f608f4c0aae4614cc407882e4296e7e60d716ad48fdde7e2b127?"
//                         className="img-12"
//                       />
//                       <img
//                         loading="lazy"
//                         src="https://cdn.builder.io/api/v1/image/assets/TEMP/fa88e0ec4d85b90779c166de611103f06f0c7744640ae7496df24ef1ff5c4d83?"
//                         className="img-13"
//                       />
//                     </div>
//                   </div>
//                 </div>
//                 <div className="column-8">
//                   <div className="div-49">
//                     <div className="div-50">
//                       <img
//                         loading="lazy"
//                         srcSet="..."
//                         className="img-14"
//                       />
//                     </div>
//                     <div className="div-51">Emma Watson</div>
//                     <div className="div-52">Managing Director</div>
//                     <div className="div-53">
//                       <img
//                         loading="lazy"
//                         src="https://cdn.builder.io/api/v1/image/assets/TEMP/ce999db528f50ad7616cdd5da960857cf0714a3b012056b97d154724871cbe2b?"
//                         className="img-15"
//                       />
//                       <img
//                         loading="lazy"
//                         src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c1a0fefac87f608f4c0aae4614cc407882e4296e7e60d716ad48fdde7e2b127?"
//                         className="img-16"
//                       />
//                       <img
//                         loading="lazy"
//                         src="https://cdn.builder.io/api/v1/image/assets/TEMP/fa88e0ec4d85b90779c166de611103f06f0c7744640ae7496df24ef1ff5c4d83?"
//                         className="img-17"
//                       />
//                     </div>
//                   </div>
//                 </div>
//                 <div className="column-9">
//                   <div className="div-54">
//                     <div className="div-55">
//                       <img
//                         loading="lazy"
//                         srcSet="..."
//                         className="img-18"
//                       />
//                     </div>
//                     <div className="div-56">Will Smith</div>
//                     <div className="div-57">Product Designer</div>
//                     <div className="div-58">
//                       <img
//                         loading="lazy"
//                         src="https://cdn.builder.io/api/v1/image/assets/TEMP/66baeed2c425cd3a3174faa32ae5fb5009e82b6c1ad150a83b8035a5aab44b06?"
//                         className="img-19"
//                       />
//                       <img
//                         loading="lazy"
//                         src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c1a0fefac87f608f4c0aae4614cc407882e4296e7e60d716ad48fdde7e2b127?"
//                         className="img-20"
//                       />
//                       <img
//                         loading="lazy"
//                         src="https://cdn.builder.io/api/v1/image/assets/TEMP/fa88e0ec4d85b90779c166de611103f06f0c7744640ae7496df24ef1ff5c4d83?"
//                         className="img-21"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="div-59">
//               <div className="div-60" />
//               <div className="div-61" />
//               <img
//                 loading="lazy"
//                 src="https://cdn.builder.io/api/v1/image/assets/TEMP/92b177d4489b789ca67cd5f3caa2fe9bf63df0a7d703e2d52fb18370f3559c3c?"
//                 className="img-22"
//               />
//               <div className="div-62" />
//               <div className="div-63" />
//             </div>
//             <div className="div-64">
//               <div className="div-65">
//                 <div className="column-10">
//                   <div className="div-66">
//                     <img
//                       loading="lazy"
//                       src="https://cdn.builder.io/api/v1/image/assets/TEMP/a96cc9e60be332b84fdc8ff8a3cb7050ea3bba7b16ca4cc7d053364b55e93786?"
//                       className="img-23"
//                     />
//                     <div className="div-67">FREE AND FAST DELIVERY</div>
//                     <div className="div-68">
//                       Free delivery for all orders over $140
//                     </div>
//                   </div>
//                 </div>
//                 <div className="column-11">
//                   <div className="div-69">
//                     <img
//                       loading="lazy"
//                       src="https://cdn.builder.io/api/v1/image/assets/TEMP/3fa6ba68696e33b1da082c8a65adcea679693853774a4a7b95d21dd37aa4f208?"
//                       className="img-24"
//                     />
//                     <div className="div-70">24/7 CUSTOMER SERVICE</div>
//                     <div className="div-71">Friendly 24/7 customer support</div>
//                   </div>
//                 </div>
//                 <div className="column-12">
//                   <div className="div-72">
//                     <img
//                       loading="lazy"
//                       src="https://cdn.builder.io/api/v1/image/assets/TEMP/212dcc356d51af23492ece10724c086e774c8917c922a9d23b3a400e64353cb1?"
//                       className="img-25"
//                     />
//                     <div className="div-73">MONEY BACK GUARANTEE</div>
//                     <div className="div-74">We reurn money within 30 days</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="div-75">
//             <div className="div-76">
//               <div className="div-77">
//                 <div className="div-78">Exclusive</div>
//                 <div className="div-79">Subscribe</div>
//                 <div className="div-80">Get 10% off your first order</div>
//                 <div className="div-81">
//                   <div className="div-82">Enter your email</div>
//                   <img
//                     loading="lazy"
//                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/12a54082781a806227ade42d81d6722495cd51ed50c28a6b5eebf5a1f9d88295?"
//                     className="img-26"
//                   />
//                 </div>
//               </div>
//               <div className="div-83">
//                 <div className="div-84">Support</div>
//                 <div className="div-85">
//                   111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
//                 </div>
//                 <div className="div-86">exclusive@gmail.com</div>
//                 <div className="div-87">+88015-88888-9999</div>
//               </div>
//               <div className="div-88">
//                 <div className="div-89">Account</div>
//                 <div className="div-90">My Account</div>
//                 <div className="div-91">Login / Register</div>
//                 <div className="div-92">Cart</div>
//                 <div className="div-93">Wishlist</div>
//                 <div className="div-94">Shop</div>
//               </div>
//               <div className="div-95">
//                 <div className="div-96">Quick Link</div>
//                 <div className="div-97">Privacy Policy</div>
//                 <div className="div-98">Terms Of Use</div>
//                 <div className="div-99">FAQ</div>
//                 <div className="div-100">Contact</div>
//               </div>
//               <div className="div-101">
//                 <div className="div-102">Download App</div>
//                 <div className="div-103">Save $3 with App New User Only</div>
//                 <div className="div-104">
//                   <img
//                     loading="lazy"
//                     srcSet="..."
//                     className="img-27"
//                   />
//                   <div className="div-105">
//                     <img
//                       loading="lazy"
//                       srcSet="..."
//                       className="img-28"
//                     />
//                     <img
//                       loading="lazy"
//                       srcSet="..."
//                       className="img-29"
//                     />
//                   </div>
//                 </div>
//                 <div className="div-106">
//                   <img
//                     loading="lazy"
//                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/30ef1881c8ba382ad841b10dec22c4728e1ac56594cd8fd1b8fc54e4c0c91052?"
//                     className="img-30"
//                   />
//                   <img
//                     loading="lazy"
//                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/cf096b28e55aad0c24c6a2140caade31240a2e4c790ad69ebe1378aec8b4a4c4?"
//                     className="img-31"
//                   />
//                   <img
//                     loading="lazy"
//                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/d0b67f52bb53b8c3b436cfc50867157e647c1cc5fa6f7cc373ba309b35f3d286?"
//                     className="img-32"
//                   />
//                   <img
//                     loading="lazy"
//                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/017f03fd6271e23e94e189db8506f53ec67e53623ecac07e20b0cc0e64aa481c?"
//                     className="img-33"
//                   />
//                 </div>
//               </div>
//             </div>
//             <div className="div-107">
//               <div className="div-108">
//                 <img
//                   loading="lazy"
//                   src="https://cdn.builder.io/api/v1/image/assets/TEMP/c9255197fb7f6a68bdb5f4b54de482f531f124b2e217b117b3b0e4deba8cd4a3?"
//                   className="img-34"
//                 />
//                 <div className="div-109">
//                   Copyright Rimel 2022. All right reserved
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//     )}
//     export default About