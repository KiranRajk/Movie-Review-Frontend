import React, { useState } from 'react'
import './SignIn.css'
import CustomInput from '../../common/CustomInput/CustomInput'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const SignIn = () => {
    const navigate = useNavigate();
    const [logCre, setlogCre] = useState({email : '', password:''});

    const handleChange = (e) => {
        setlogCre({...logCre, [e.target.name] : e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`${import.meta.env.VITE_APP_BE_URL}/api/v1/auth/signin` , logCre);
            if(response.data.message === 'LoggedIn') {
                localStorage.setItem('token', response.data.token);
                navigate('/home');
                alert('login successfull')
            }

        } catch (error) {
            if(error.response) {
                if(error.response.status === 404) {
                    alert('User Not found');
                } else if (error.response.status === 401) {
                    alert('Invalid Credentials')
                } else {
                    alert('Something went wrong. Server error');
                }
            } else {
                alert('An unknown error occured')
            }
            console.error('Error during sign-in:', error.response?.data || error.message);
        }
    }

  return (
    <div>
        <div className="sign-in container">

            <div className="signin-container row ">

                <div className='image-part col-md-6 col-sm-6 '>
                    <h2 >Welcome Fellow Cinephile</h2>
                    <p >loremnn</p>
                </div>

                <div className='form-part col-md-6 col-sm-6 my-2'>
                    <h1>Sign In</h1>
                    <form onSubmit={handleSubmit}>
                        <CustomInput label={'Email'} type={'email'} name={'email'} value={logCre.email} onchange={handleChange}/>
                        <CustomInput label={'Password'} type={'password'} name={'password'} value={logCre.password} onchange={handleChange}/>

                        <button className='sign-in-button'>SignIn</button>
                    </form>
                </div>

            </div>
        </div>
    </div>
  )
}

export default SignIn