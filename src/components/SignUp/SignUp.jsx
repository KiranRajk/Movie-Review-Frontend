import React, { useState } from 'react'
import './SignUp.css'
import CustomInput from '../../common/CustomInput/CustomInput'
import axios from 'axios'

const SignUp = ({toggleBox}) => {
    const [signUp, setSignUp] = useState({name:'', email:'', password:'', confirmpassword:''})
    const [message, setMessage] = useState('')

    const handleChange = (e) => {
        setSignUp({...signUp, [e.target.name]:e.target.value})
    } 

    const handleKeyPress = () => {
        if(signUp.password !== signUp.confirmpassword) {
            setMessage('Passwords do not match')
        } else {
            setMessage('')
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            if(signUp.name === '' || signUp.email === '' || signUp.password === '') {
                return setMessage('Please fill all the fields')
            } 
            else if(signUp.password !== signUp.confirmpassword) {
                return setMessage('Password do not match ')
            } else {
                const response = await axios.post(`${import.meta.env.VITE_APP_BE_URL}/api/v1/auth/signup`, signUp)
                if(response.data.message === 'UserCreated') {
                    alert('Your account has been created successfully' , response.data)
                    toggleBox('signin')
                } 
            }
        } catch (error) {
            console.log('something went wrong' , error);
        }
    }

  return (
    <div className='sign-up container'>
        <div className='signup-container row '>
            <div className='signup-image col-md-6 col-sm-6'>
                <h2>Sign Up to CineCritique </h2>
                <p> Where Every Frame is Judged</p>
            </div>
            <div className="form-part-signup col-md-6 col-sm-6">
            <h1>Create a  New Account</h1>
            <form onSubmit={handleSubmit}>
              <CustomInput label={'Name'} type={'text'} name={'name'} value={signUp.name} onchange={handleChange}/>
              <CustomInput label={'Email'} type={'email'} name={'email'} value={signUp.email} onchange={handleChange} />
              <CustomInput label={'Password'} type={'password'} name={'password'} value={signUp.password} onchange={handleChange} />
              <CustomInput label={'Confirm Password'} type={'password'} name={'confirmpassword'} value={signUp.confirmpassword} onchange={handleChange} onkeyup={handleKeyPress} />
              <div className='error-message'><p>{message}</p></div>

              <div className='old-account-container'><p className='old-account'>Already have an account? <span><i onClick={()=>toggleBox('signin')}>Login here</i></span></p></div>
              <button className='sign-up-button '>SignUp</button>
            </form>
            </div>
        </div>

    </div>
  )
}

export default SignUp