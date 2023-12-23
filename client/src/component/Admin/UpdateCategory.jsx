import React, { useState } from 'react'
import axios from 'axios';
import './UpdateCategory.css'



const UpdateCategory = ({id}) => {
  const [formData, setFormData] = useState({
    ca_name: '',
    ca_img:null

  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const form = new FormData();
    form.append('file', file);
    form.append('upload_preset', 'patient');

    try {
      const response = await axios.post(
        'https://api.cloudinary.com/v1_1/dodim9flq/image/upload',
        form,
        {
          headers: {
            'Content-Type': 'multipart/form-data' 
          }
        }
      );

      const imageUrl = response.data.secure_url;
      setFormData((prev) => ({ ...prev, ca_img: imageUrl }));
    } catch (err) {
      console.log(err);
    }
  }


  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/api/BuyMeAll/category/${id}`, formData);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
  <div className="w3-padding-64 w3-content w3-text-grey" id="contact">
<h2 className="w3-text-light-grey">Update Category</h2>
<hr style={{width:'200px'}} className="w3-opacity"/>


<form action="/action_page.php" target="_blank">
  <p><input onChange={handleChange} className="w3-input w3-padding-16" type="text" placeholder="CategoryName" required name="ca_name"/></p>
  <p><input onChange={handleImageUpload} className="w3-input w3-padding-16" type="file"  required name="picture"/></p>


  <p>
    <button onClick={handleClick} className="w3-button w3-light-grey w3-padding-large" type="submit">
      <i className="fa fa-paper-plane"></i> Update
    </button>
  </p>
</form>
</div>
</div>
  )
}

export default UpdateCategory