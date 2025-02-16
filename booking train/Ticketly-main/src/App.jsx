import Navbar from "./UI/Navbar"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./page/Home"
import Contact from "./page/Contact";
import About from "./page/About";
import Service from "./page/Service"
import Footer from "./components/Footer";
import propTypes from "prop-types";
import Login from "./page/Login";
import { LoginProvider } from "./components/ContextLogin.jsx";
import SingUp from "./page/SingUp.jsx";
import AdminLogin from "./page/AdminLogin.jsx";
import Admin from "./page/Admin.jsx";
import Tlist from "./page/Tlist.jsx";
import TrainList from "./page/TrainList.jsx";
import UpdateTrain from "./page/UpdateTrain.jsx";
import UserDetails from "./page/UserDetails.jsx";
import { Gotake } from "./page/Gotake.jsx";


function App() {
  return (


    <LoginProvider>
 <BrowserRouter>

 {/* <AdminLogin/> */}
 {/* <Tlist/> */}
 {/* <UpdateTrain/> */}
 {/* <UserDetails/> */}
     <div  className="bg-white relative h-full">
   <Navbar/>
 <Login/>
 <Routes>
 <Route path="/" element={<Home/>}/>
  <Route path="/Admin" element={<Admin/>}/>
  <Route path="/About" element={<About/>}/>
  <Route path="/Service" element={<Service/>}/>
  <Route path="/Contact" element={<Contact/>}/>
  <Route path="/SignIUp" element={<SingUp/>}/>
  <Route path="/Gotake" element={    <Gotake/> 
}/>
  
 </Routes>
 <Footer tit="Ticketly" des=" Egyptian Railways offers a reliable and fast way to travel between cities. We provide excellent services for our customers
             , with up-to-date information on train schedules and ticket prices.
               Enjoy a comfortable and safe travel experience with Egyptian Railways.
            " right="Copyright © Ticketly 2025"/>
             {/* <TrainList/> */}

 </div>
 </BrowserRouter>
 </LoginProvider>
 
  )
}
App.propTypes={
tit:propTypes.string,
des:propTypes.string,
right:propTypes.string,
children: propTypes.node
}
export default App
