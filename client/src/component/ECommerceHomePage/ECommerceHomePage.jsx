import  React,{useState,useEffect} from "react";
import './ECommerceHomePage.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import TopHeader from "../Top Header/TopHeader.jsx"


// http://localhost:3000/api/BuyMeAll/category
const ECommerceHomePage=(props) =>{
  const [refrPo,setRefrPo]=useState(false)
  const [postData,setPostData]=useState([])
  const [catData,setCatData]=useState([])

  useEffect(() => {
    axios.get("http://localhost:3000/api/BuyMeAll/products")
      .then((response) => {
        const responseData = response.data;
          setPostData(responseData)
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [refrPo]);

   useEffect(() => {
    axios.get("http://localhost:3000/api/BuyMeAll/products")
      .then((response) => {
        const responseData = response.data;
          setPostData(responseData)
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [refrPo]);

  
  useEffect(() => {
    axios.get("http://localhost:3000/api/BuyMeAll/category")
      .then((response) => {
        const responseData = response.data;
          setCatData(responseData)
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [refrPo]);

const  handlecategory= (ids) => {
    axios.get(`http://localhost:3000/api/BuyMeAll/category/${ids}`)
      .then((response) => {
        const responseData = response.data[0].products;
          setPostData(responseData)
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  const  handleAll= () => {
    axios.get(`http://localhost:3000/api/BuyMeAll/products`)
      .then((response) => {
        const responseData = response.data;
          setPostData(responseData)
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  return (
    <>
      <div className="div">
       <TopHeader/>
        <Header value={0}/>
        {/* <div className="div-22" /> */}
        <div className="div-23">
          <div className="div-24">
            {/* <div className="div-25"> */}
              {/* <div className="div-26">
                <div className="div-27">Woman’s Fashion</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/419e3d65c94f39310352312d26156e850a5fd9835e5ec39a019f5290ed34bf71?"
                  className="img-4"
                />
              </div> */}
              {/* <div className="div-28">
                <div className="div-29">Men’s Fashion</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/419e3d65c94f39310352312d26156e850a5fd9835e5ec39a019f5290ed34bf71?"
                  className="img-5"
                />
              </div> */}
              {/* <div className="div-30">Electronics</div>
              <div className="div-31">Home & Lifestyle</div>
              <div className="div-32">Medicine</div>
              <div className="div-33">Sports & Outdoor</div>
              <div className="div-34">Baby’s & Toys</div>
              <div className="div-35">Groceries & Pets</div>
              <div className="div-36">Health & Beauty</div> */}
            {/* </div> */}
            {/* <div className="div-37" /> */}
            <div className="div-38">
              <div className="div-39">
                <div className="column">
                  <div className="div-40">
                    <div className="div-41">
                      <img
                        loading="lazy"
                        srcSet="https://shorturl.at/pwWZ1"
                        className="img-6"
                      />
                      <div className="div-42">iPhone 14 Series</div>
                    </div>
                    <div className="div-43">Up to 10% off Voucher</div>
                    <div className="div-44">
                      <div className="div-45">
                        <div className="div-46">Shop Now</div>
                        <div className="div-47" />
                      </div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a9f9190215df855e46de68e25db2cebf222e4b26191868239034c2f0ce1ceb8?"
                        className="img-7"
                      />
                    </div>
                  </div>
                </div>
                <div className="column-2">
                  <img
                    loading="lazy"
                    srcSet="https://shorturl.at/fvJZ0"
                    className="img-8"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="div-142" />
          <div className="div-143">
            <div className="div-144">
              <div className="div-145">
                <div className="div-146" />
                <div className="div-147">Categories</div>
              </div>
              <div className="div-148">Browse By Category</div>
            </div>
            <div className="div-149">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6d46c131187bfff9eb633481579a064341b51d7196040ee40dd3f9577e445a5e?"
                className="img-36"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e88e31fcac886e936832d43b7fb2b7a3e219274da66d8e9d07a08a6cc7094c1b?"
                className="img-37"
              />
            </div>
          </div>
          <div className="div-150" >   
            {catData.map((e,i)=>(
               <div className="div-151" onClick={()=>{handlecategory(e.id)}}  >

               <img
                 loading="lazy"
                 src={e.ca_img}
                 className="img-38"
               />
               <div className="div-152"> <h1>{e.ca_name}</h1></div>
             </div>
        
            
            ))}
            
          </div>
          <div className="div-278" onClick={()=>{handleAll()}}   >View All Products</div>
          <div className="div-163" />
          <div className="div-199">
            <div className="div-200">
              <div className="div-201">
                <div className="div-202" />
                <div className="div-203">Our Products</div>
              </div>
              <div className="div-204">Explore Our Products</div>
            </div>
         
          </div>


          <div className="div-206">
          <div className='seller-products'>
            {postData.map((el,i)=>(
          <div key={i} className="one-product">
              <div className="div-95">
                <div className="div-96">
                  <img
                    loading="lazy"
                    src={el.image}
                    className="img-17"
                  />
                </div>
                <div className="div-98">
                    <div >
                    <img 
                    loading="lazy" 
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/00d93adab53c5214ab1a164999c542db25c2e68622e0085e7c9140fbeae9a9e5" 
                    className="img-18"
                    />
                  </div>
                    <div >
                      
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/92f95af307a693492ef165c4482565d88008392560df9e3855fc15ed6903d028"
                        className="img-19"
                    />
                    </div>
                </div>
              </div>
              <div className="div-99">{el.product_name}</div>
              <div className="div-100">
                <div className="div-101">{el.price}$</div>
                {/*      */}
              </div>
              <div className="div-103">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f79bd71a6471f38d5d1fc5e45c151fa99346fc4a5342fd2b25d87f1e68ade395"
                  className="img-20"
                />
                <div className="div-104">({el.quantity})</div>
              </div>
            </div>))}
            </div>
          </div>
          
          
          <div className="div-279">
            <div className="div-280" />
            <div className="div-281">Featured</div>
          </div>
          <div className="div-282">New Arrival</div>
          <div className="div-283">
            <div className="div-284">
              <div className="column-17">
                {/* <div className="div-285"> */}
                  <div className="div-286">
                    <img
                      loading="lazy"
                      srcSet="https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/black_ps5.png"
                      className="img-81"
                    />
                    <div className="div-287">PlayStation 5</div>
                    <div className="div-288">
                      Black and White version of the PS5 coming out on sale.
                    </div>
                    <div className="div-289">Shop Now</div>
                  </div>
                {/* </div> */}
              </div>
              <div className="column-18">
                <div className="div-290">
                  <div className="div-291">
                    <div className="div-292">
                      <img
                        loading="lazy"
                        srcSet="https://shorturl.at/BDGHW"
                        className="img-82"
                      />
                      <div className="div-293">Women’s Collections</div>
                      <div className="div-294">
                        Featured woman collections that give you another vibe.
                      </div>
                      <div className="div-295">Shop Now</div>
                    </div>
                  </div>
                  <div className="div-296">
                    <div className="div-297">
                      <div className="column-19">
                        <img
                          loading="lazy"
                          srcSet="https://shorturl.at/vDNQ9"
                          className="img-83"
                        />
                      </div>
                      <div className="column-20">
                        <img
                          loading="lazy"
                          srcSet="https://img.freepik.com/premium-photo/luxury-perfume-black-background_160204-2526.jpg"
                          className="img-84"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="div-298">
            <div className="div-299">
              <div className="column-21">
                <div className="div-300">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b577eb776407c6950f72d58b75d2ff3f2ac99d2c591cccf697f852c83610ad7a?"
                    className="img-85"
                  />
                  <div className="div-301">FREE AND FAST DELIVERY</div>
                  <div className="div-302">
                    Free delivery for all orders over $140
                  </div>
                </div>
              </div>
              <div className="column-22">
                <div className="div-303">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f5a8bcb67852a6927c4dd9c5d7d1072f6a61aa579650280fe8717b84e528aa8a?"
                    className="img-86"
                  />
                  <div className="div-304">24/7 CUSTOMER SERVICE</div>
                  <div className="div-305">Friendly 24/7 customer support</div>
                </div>
              </div>
              <div className="column-23">
                <div className="div-306">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f24d55efa29ff049d4e712bb199ed88698a64dbf08266e5adc6d6c0a572e53ff?"
                    className="img-87"
                  />
                  <div className="div-307">MONEY BACK GUARANTEE</div>
                  <div className="div-308">We reurn money within 30 days</div>
                </div>
              </div>
            </div>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4994e2c1a620d4ea356d28611072582355d46de2085b91428063bb54d28d049e?"
            className="img-88"
          />
        </div>
     <Footer/>
      </div>
    
    </>
  );
}


export default ECommerceHomePage