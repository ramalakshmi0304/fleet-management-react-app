import React from 'react'
import Login from './pages/Login'
import Admin from './pages/Admin'
import { Route,router,BrowserRouter } from 'react-router-dom'

const App = () => {
 
 
   return (
    <div>

<Browserrouter>
<router>
<route path="./" element={<Login/>}/>
<route path="./admin" element={<Admin/>}/>
</router>
</Browserrouter>

    </div>
  )
}

export default App