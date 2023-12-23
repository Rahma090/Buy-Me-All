import React, { useState, useEffect } from "react";
import { IoSearch, IoTrashOutline } from "react-icons/io5";
import axios from "axios";
import './Admin.css';

const ListUsers = (props) => {
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const res = await axios.get('http://localhost:3000/api/BuyMeAll/users');
        const user = res.data.filter((e) => e.user_role === props.users);
        setFilteredData(user);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };
    fetchAllUsers();
  }, [props.users]);

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    const newData = filteredData.filter((user) =>
      user.user_name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredData(newData);
  };

  const handleDeleteClick = (userId) => {
    const newData = filteredData.filter((user) => user.id !== userId);
    setFilteredData(newData);
    props.handleDelete(userId);
  };

  return (
    <div className="divAdmin29">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="divAdmin30">
            {filteredData.length > 0 ? filteredData[0].user_role : "No Users"}
          </div>
          <div className="divAdmin31">
            <div className="nav-search">
              <IoSearch style={{ height: "100px", width: "40px" }} onClick={() => {}} />
              <input
                type="search"
                placeholder="name"
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>
          </div>
          {filteredData.map((elem, i) => (
            <div className="divAdmin33" key={i}>
              <img
                loading="lazy"
                srcSet={elem.user_img}
                className="imgAdmin5"
                onClick={() => props.setOne(elem)}
                alt={`User ${elem.id}`}
              />
              <div className="divAdmin34">
                <div className="divAdmin35">{elem.user_name}</div>
                <div className="divAdmin36">{elem.id}</div>
              </div>
              <div>
                <IoTrashOutline
                  style={{ height: "100px", width: "40px", color: "white" }}
                  onClick={() => handleDeleteClick(elem.id)}
                />
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default ListUsers;
