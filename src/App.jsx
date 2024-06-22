import React from 'react'
import Routing from './components/Routing'
import 'bootstrap/dist/css/bootstrap.min.css';
import toast, { Toaster } from 'react-hot-toast';
import { UserProvider } from './helpers/UserContext';

const App = () => {
  return (
    
    <UserProvider>
      <Toaster />
        <Routing/>
    </UserProvider>
   
  )
}

export default App