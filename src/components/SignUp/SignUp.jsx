import React, { useState } from 'react';
import './SignUp.css';
import CustomInput from '../common/CustomInput/CustomInput';
import axios from 'axios';
import toast from 'react-hot-toast';

const SignUp = ({ toggleBox }) => {
    const [signUp, setSignUp] = useState({ name: '', email: '', password: '', confirmpassword: '' });
    const [errors, setErrors] = useState({ name: '', email: '', password: '', confirmpassword: '' });

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const validateField = (name, value) => {
        let errorMsg = '';
        switch (name) {
            case 'name':
                errorMsg = value.trim() === '' ? 'Name is required' : '';
                break;
            case 'email':
                if (value.trim() === '') {
                    errorMsg = 'Email is required';
                } else if (!validateEmail(value)) {
                    errorMsg = 'Invalid email format';
                }
                break;
            case 'password':
                if(value.trim() === ''){
                    errorMsg ='Password is required'
                } else if (value.trim().length < 6) {
                    errorMsg = 'Password must be at least 6 characters';
                }
                break;
            case 'confirmpassword':
                if (value.trim() === '') {
                    errorMsg = 'Confirm Password is required';
                } else if (value !== signUp.password) {
                    errorMsg = 'Passwords do not match';
                }
                break;
            default:
                break;
        }
        setErrors(prevErrors => ({ ...prevErrors, [name]: errorMsg }));
    };

    const handleChange = (e) => {
        setSignUp({ ...signUp, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: '' });

        // Validate field on change
        validateField(e.target.name, e.target.value);
    };

    const handleBlur = (e) => {
        validateField(e.target.name, e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let newErrors = {};

        // Validate all fields before submission
        Object.keys(signUp).forEach(field => {
            validateField(field, signUp[field]);
        });

        if (Object.keys(newErrors).length === 0) {
            try {
                await toast.promise(
                axios.post(`${import.meta.env.VITE_APP_BE_URL}/api/v1/auth/signup`, signUp),
                {
                    loading: 'Signing up...',
                    success: 'Your account has been created successfully',
                    error: 'Sign-up failed. Please try again.'
                  }
                ).then(response => {
                    if (response.data.message === 'UserCreated') {
                        // toast.success('Your account has been created successfully', {
                        //     duration: 4000
                        // });
                        toggleBox('signin');
                    }
                })
            } catch (error) {
                if (error.response) {
                    if (error.response.status === 409) {
                        toast.error('User already exists!');
                    } else if (error.response.status === 400) {
                        toast.error('User not created');
                    } else {
                        toast.error('Something went wrong, Server error');
                    }
                } else {
                    toast.error('An unknown error occurred');
                }
            }
        }
    };

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
                        <CustomInput
                            label={'Name'}
                            type={'text'}
                            name={'name'}
                            value={signUp.name}
                            onchange={handleChange}
                            onblur={handleBlur}
                        />
                        {errors.name && <span className="error-message">{errors.name}</span>}
                        <CustomInput
                            label={'Email'}
                            type={'email'}
                            name={'email'}
                            value={signUp.email}
                            onchange={handleChange}
                            onblur={handleBlur}
                        />
                        {errors.email && <span className="error-message">{errors.email}</span>}
                        <CustomInput
                            label={'Password'}
                            type={'password'}
                            name={'password'}
                            value={signUp.password}
                            onchange={handleChange}
                            onblur={handleBlur}
                        />
                        {errors.password && <span className="error-message">{errors.password}</span>}
                        <CustomInput
                            label={'Confirm Password'}
                            type={'password'}
                            name={'confirmpassword'}
                            value={signUp.confirmpassword}
                            onchange={handleChange}
                            onblur={handleBlur}
                        />
                        {errors.confirmpassword && <span className='error-message'>{errors.confirmpassword}</span>}
                        <div className='old-account-container'>
                            <p className='old-account'>Already have an account? <span><i onClick={() => toggleBox('signin')}>Login here</i></span></p>
                        </div>
                        <button className='sign-up-button'>SignUp</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
