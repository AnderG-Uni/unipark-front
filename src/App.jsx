import React, { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/Unipark_Login.jsx';
//import Home from './Components/Unipark_Home.jsx';
//import Report from './Components/Unipark_Reports.jsx';
//import History from './Components/Unipark_History_User.jsx';
//import RegisterUser from './Components/Unipark_Register_User.jsx';


function App() {
  const [user, setUser] = useState(0)

  return (

    <BrowserRouter>
      {/* <Navigation/> */}
      <Routes>
        <Route index element={<Login callback={setUser}/>}></Route>
        
        {/*<Route path='/Inicio' element={<Home user={user}/>} ></Route>
        <Route path='/Reproducir/:id' element={<Report user={user}/>} ></Route>
        <Route path='/InicioUser' element={<History user={user}/>} ></Route>
        <Route path='/InicioVideos' element={<RegisterUser user={user}/>} ></Route>*/}

      </Routes>
    </BrowserRouter>

  )
}

export default App
