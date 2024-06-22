import React, {useState} from 'react'
import './AddMovieAdmin.css'
import CustomInput from '../../../components/common/CustomInput/CustomInput'
import axiosInstance from '../../../../config/AxiosInstance'

const AddMovieAdmin = () => {
  const [formData, setFormData] = useState({
    title:'',
    genre:'',
    director:'',
    year:'',
    description:'',
    language:'',
  })
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name] : e.target.value})
  }

  const handleImageChange = (e) => {
      if (e.target.files && e.target.files[0]) {
          setImage(e.target.files[0])
          setImagePreview(URL.createObjectURL(e.target.files[0]));
      }
  };

  const handleSubmit = async (e) =>{
    e.preventDefault();
    const movieDataToSend = new FormData();
    movieDataToSend.append('title', formData.title);
    movieDataToSend.append('genre', formData.genre);
    movieDataToSend.append('director', formData.director);
    movieDataToSend.append('year', formData.year);
    movieDataToSend.append('description', formData.description);
    movieDataToSend.append('language', formData.language);
    if(image) {
      movieDataToSend.append('image', image)
      console.log(movieDataToSend);
    }
    try {
      console.log('Hit1');
      const response = await axiosInstance.post('/api/v1/admin/addNewMovies' , movieDataToSend , {
        headers: {
          'Content-Type' : 'multipart/form-data',
        }
      })
      console.log(response.data);
      alert('Movie added successfully!');
      window.location.reload();
    } catch (error) {
      console.log('Hit2');
      console.error('Error adding movie:', error);
      alert('Error adding movie');
    }
  }

  return (
    <div className='addmovie-container'>
       <div className="form-box ">
                <h2 className="form-title">Film Roll: Add New</h2>
                <div className='input-container'>
                <form onSubmit={handleSubmit}>
                    <CustomInput label={'Title'} type={'text'} name={'title'} value={formData.title} onchange={handleChange}/>
                    <CustomInput label={'Genre'} type={'text'} name={'genre'} value={formData.genre} onchange={handleChange} />
                    <CustomInput label={'Director'} type={'text'} name={'director'} value={formData.director} onchange={handleChange} />
                    <CustomInput label={'Release Year'} type={'number'} name={'year'} value={formData.year} onchange={handleChange} />
                    <CustomInput label={'Language'} type={'text'} name={'language'} value={formData.language} onchange={handleChange}  />
                    <CustomInput label={'Description'} type={'textarea'} name={'description'} value={formData.description} onchange={handleChange}/>
                    
                    <div className="custom-input">
                        <label>Upload Image</label>
                        <input type="file" onChange={handleImageChange} />
                    </div>
                    {image && (
                        <div className="image-preview">
                            <img src={imagePreview} alt="Movie Preview" />
                        </div>
                    )}
                    <button type="submit" className="submit-button">Save</button>
                </form>
                </div>
            </div>
    </div>
  )
}

export default AddMovieAdmin