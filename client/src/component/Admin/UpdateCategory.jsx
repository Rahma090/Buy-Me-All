import React, { useState } from 'react'
import axios from 'axios';
import './UpdateCategory.css'



const UpdateCategory = ({id,refrechers, setRefrechers}) => {
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
      setRefrechers(!refrechers)
      // setOpenRows((prev) => ({ ...prev, [id]: !prev[id] }));
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div style={{backgroundColor: '#1a1a1c'}}>
  <div className="w3-padding-64 w3-content w3-text-grey" id="contact">
<h3>Update Category</h3>
<form>
  <div class="form-container">
   <div class="form__group field">
    <input type="input" class="form__field" placeholder="CategoryName" required="" name="ca_name" onChange={handleChange}/>
    <label for="name" class="form__label">Name</label>
    </div>
    <div class="input-div">
      <label class="file-label">
        <input class="input" name="picture" type="file" onChange={handleImageUpload}/>
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" stroke-linejoin="round" stroke-linecap="round" viewBox="0 0 24 24" stroke-width="2" fill="none" stroke="currentColor" class="icon">
          <polyline points="16 16 12 12 8 16"></polyline>
          <line y2="21" x2="12" y1="12" x1="12"></line>
          <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path>
          <polyline points="16 16 12 12 8 16"></polyline>
        </svg>
      </label>
    </div>

    <p>
      <button onClick={handleClick} className="button1" type="submit">
        Update
      </button>
    </p>
  </div>
</form>
</div>
</div>
  )
}

export default UpdateCategory