import React, { useEffect, useState } from "react";
import '../ProductDetails/ProductDetails.css'
import TopHeader from "../Top Header/TopHeader.jsx";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import axios from "axios";
import { useParams } from "react-router-dom";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
// import Cloudinary from "../Cloudinary";

const ProductUpdate=() =>{
  const [oneProduct,SetOneProduct]=useState([])
  const [oneProdImg,setOneProdImg]=useState([])
  const [idImg,setIdImg]=useState(0)

  const {id}=useParams()

 const taktak=(str)=>{
    var start=0
    var arr=[]
    for (var i=0;i<str.length;i++){
        if(str[i]===','){
            arr.push(str.slice(start,i))
            start=i+1
        }
    }
    return arr
}
  useEffect(()=>{
    axios.get(`http://localhost:3000/api/BuyMeAll/products/${id}`).then((result)=>{
      SetOneProduct(result.data)
      setOneProdImg(taktak(result.data.image))
    })
  },[])
  
console.log(id)
  return (
    <>
      <div className="divP">
      <TopHeader/>
      {/* <Cloudinary/> */}
        <div className="divProduct23">
          
          <div className="divProduct28">
            <div className="divProduct29">
              <div className="columnP">
               { oneProdImg.map((el,i)=>(
                <div key={i} onClick={()=>{setIdImg(i)}} className="divProduct30">
                  <div className="divProduct31">
                    <img
                      loading="lazy"
                      srcSet={el?el:""}
                      className="imgProduct5"
                    />
                  </div>
                </div>
                 ))}
              </div>
              <div className="columnProduct2">
                <div className="divProduct35">
                  <img
                    loading="lazy"
                    srcSet={oneProdImg[idImg]}
                    className="imgProduct9"
                  />
                </div>
              </div>
              <div className="columnProduct3">
                <div className="divProduct36">
                  <div className="divProduct37">{oneProduct.product_name}</div>
                  <div className="divProduct38">
                    <div className="divProduct39">
                         {parseFloat(oneProduct.rate)&&<Stack spacing={1}>
                       <Rating name="half-rating" defaultValue={parseFloat(oneProduct.rate)} precision={0.5} readOnly />
                            </Stack>}
                      <div className="divProduct40">({oneProduct.quantity})</div>
                    </div>
                    <div className="divProduct41">In Stock</div>
                  </div>
                  <div className="divProduct42">${oneProduct.price}</div>
                  <div className="divProduct43">{oneProduct.description}</div>
                  <div className="divProduct44" />
                  
                  
                  <div className="divProduct57">
                    
                    <div className="divProduct60"><div className="buyBtn">Buy Now</div></div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/ec08a593d461e728db2a3e431df9e075d5f9912126c045dc62171b9ec6894644?"
                      className="imgProduct14"
                    />
                  </div>
                  <div className="divProduct61">
                    <div className="divProduct62">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b4550074645e51a42aca1953c2a07533a677b1016164bd0048a3a97ea8722833?"
                        className="imgProduct15"
                      />
                      <div className="divProduct63">
                        <div className="divProduct64">Free Delivery</div>
                        <div className="divProduct65">
                          Enter your postal code for Delivery Availability
                        </div>
                      </div>
                    </div>
                    <div className="divProduct66" />
                    <div className="divProduct67">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/90a8842bc3d9920ea195b68825a420da192397e7504a3a1fec5c41ab12315e5e?"
                        className="imgProduct16"
                      />
                      <div className="divProduct68">
                        <div className="divProduct69">Return Delivery</div>
                        <div className="divProduct70">
                          Free 30 Days Delivery Returns.{" "}
                          <span style={{ textDecoration: "underline" }}>
                            Details
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
         
        </div>
      </div>
    </>
  );
}

export default ProductUpdate
