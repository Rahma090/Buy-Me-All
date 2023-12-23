import * as React from "react";
import './Admin.css'
import ListClient from "./ListUsers";
import ClientDetails from "./UsersDetails";
import axios from "axios"
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ListCategories from "./ListCategories";

const Admin=(props)=> {
  const [data, setData] = useState([]);
  const [refrech,setRefrech]=useState(false)
  const [users,setUsers]=useState("")
  const [one,setOne]=useState({}) 
  const [two,setTwo]=useState("1") 
  const location = useLocation();
  const idAdmin = location.pathname.split('/')[2];
  var Admin = data.filter((e) => e.id === Number(idAdmin));
 
 


  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const res = await axios.get('http://localhost:3000/api/BuyMeAll/users');

        setData(res.data)

      } catch (err) {
        console.log(err);
      }
    };
    fetchAllUsers();
  }, [refrech]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/BuyMeAll/users/${id}`);
      setRefrech(!refrech);
     
    } catch (err) {
      console.log(err);
    }
  }



  return (
    <>
      <div className="divAdmin">
        <div className="divAdmin2">
          <div className="columnAdmin">
            <div className="divAdmin3">
              <div className="divAdmin4">
                <div className="divAdmin5">
                  <div className="divAdmin6">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ba1ba319e439fc67eb537da94e50530ff26a32623bd3fcc32d4412e3d8dbaba?"
                      className="imgAdmin"
                    />
                    <div className="divAdmin7">Admin</div>
                  </div>
                
                  <div className="divAdmin9">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/3789b4da0ff7bbb401a51930e99f1964fd94e4f71c0e259abf6ece542a3cfb2a?"
                      className="imgAdmin"
                    />
                   
                    <div className="divAdmin10"><h2>dashboard</h2> </div>
                  </div>

                  <div className="divAdmin13">
               
                  
                  </div>


                  <div className="divAdmin15" onClick={()=>{
                      
                  setUsers("client")
                  setOne({})
                  setTwo("1")}}>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/7ad67e24eee99acf595ceea4cfa35ee5d01f5d565023cd7b1ba4265fd85ffef3?"
                      className="imgAdmin"
                    />
                    <div className="divAdmin16">Clientes</div>
                  </div>



                  <div className="divAdmin15" onClick={()=>{
                    
                  setUsers("seller")
                  setOne({})
                  setTwo("1")}}>
                  <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/85ef95a54d33f89a22b913eb3571f1204f8b42cca07f320006d7eee555fa0364?"
                      className="imgAdmin"
                    />
                    <div className="divAdmin16">Sellers</div>
                  </div>



                  <div className="divAdmin15" onClick={()=>{
                      
                      setUsers("client")
                      setOne({})
                      setTwo("2")}}>
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/463861501310dc27db182a16aedd158acdfc08475c9e0e7c42a9a515a3b9a852?"
                          className="imgAdmin"
                        />
                        <div className="divAdmin16">categories</div>
                      </div>



                  
                  <div className="divAdmin17" onClick={()=>{setTwo("3")}}>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c05468233b11f9536a72cead6cc036c821fb23aaf6166b914842d292dfe5c51?"
                      className="imgAdmin"
                    />
                    <div className="divAdmin18" ><h1>history</h1> </div>
                  </div>


                </div>
                <div className="divAdmin25">
                  <img
                    loading="lazy"
                    src={Admin[0]?.user_img}
                    className="imgAdmin3"
                  />
                  <div className="divAdmin26">
                    <div className="divAdmin27">{Admin[0]?.user_phOrEmail}</div>
                    <div className="divAdmin28">{Admin[0]?.user_name}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
         
          {two==="1" ? <div className="colAdmin2">  <ListClient users={users} setOne={setOne} handleDelete={handleDelete}/> </div> 
          :<></>}
        
         
          
        { two==="1" ? <div className="columnAdmin3"><ClientDetails one={one}/></div>
        :two==="2"?<div className="columnAdmin333"><ListCategories/></div>
        :<></>}
          </div>
        </div>
      

    </>
  );
}


export default Admin