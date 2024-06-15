import React from 'react'
import './CustomInput.css'

const CustomInput = ({type, value, onblur, onchange, label, name, onkeyup}) => {
  return (
    <div className='common-input-box'>
        <input type={type} required className='common-input' value={value} name={name} onChange={onchange} onBlur={onblur} onKeyUp={onkeyup}/>
        <label htmlFor=''>{label}</label>
    </div>
  )
}

export default CustomInput