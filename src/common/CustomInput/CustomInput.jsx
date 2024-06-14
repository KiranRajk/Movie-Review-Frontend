import React from 'react'
import './CustomInput.css'

const CustomInput = ({type, value, onblur, onchange, label, name}) => {
  return (
    <div className='common-input-box'>
        <input type={type} required className='common-input' value={value} name={name} onChange={onchange} onBlur={onblur}/>
        <label htmlFor=''>{label}</label>
    </div>
  )
}

export default CustomInput