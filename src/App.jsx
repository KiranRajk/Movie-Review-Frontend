import React from 'react'
import Routing from './components/Routing'
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserProvider } from './helpers/UserContext';

const App = () => {
  return (
    
    <UserProvider>
        <Routing/>
    </UserProvider>
   
  )
}

export default App