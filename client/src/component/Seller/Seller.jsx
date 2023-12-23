import React, { useEffect, useState } from 'react';
import './Seller.css'
import axios from 'axios';
import Header from '../Header/Header';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Seller = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:3000/api/BuyMeAll/seller/products/5').then((res)=>{
            setData(res.data)
        })
    },[])
    const handleDelete=(idProd)=>{
        axios.delete(`http://localhost:3000/api/BuyMeAll/product/${idProd}`).then(()=>{

        })
        .catch((err)=>{
            console.log(err)
        })
    }
    return (
        <div>
            <Header value={0}/>
            <div>
                <h1>Sellers Products</h1>
            </div>
          <div className='seller-products'>
            {data.map((el,i)=>(
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
                    <DeleteOutlineIcon onClick={()=>{handleDelete(el.id)}}/>
                  </div>
                    <div >
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/92f95af307a693492ef165c4482565d88008392560df9e3855fc15ed6903d028?"
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
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f79bd71a6471f38d5d1fc5e45c151fa99346fc4a5342fd2b25d87f1e68ade395?"
                  className="img-20"
                />
                <div className="div-104">({el.quantity})</div>
              </div>
            </div>))}
            </div>  
            
        </div>
    );
};

export default Seller;