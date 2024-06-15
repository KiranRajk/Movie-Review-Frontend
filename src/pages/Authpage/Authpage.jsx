import React, { useState } from 'react'
import SignIn from '../../components/SignIn/SignIn'
import SignUp from '../../components/SignUp/SignUp'

const Authpage = () => {
  const [authPage, setAuthPage] = useState('signin')
  return (
    <div>
        {authPage === 'signin' && <SignIn toggleBox={setAuthPage} />}
        {authPage === 'signup' && <SignUp toggleBox={setAuthPage} />}
    </div>
  )
}

export default Authpage