import './App.css';

import { Route, Routes, Navigate } from "react-router-dom";
// import Main from "./components/Dashbord/Main";
import Navbar from "./components/Loginpage/navbar/navbar"
import Signup from "./components/Loginpage/Singup";
import Login from "./components/Loginpage/Login";
import Footer from "./components/Loginpage/footer/footer";
import Sidebar from './components/Dashbord/layout/Sidebar/Sidebar';
import Content from './components/Dashbord/layout/Content/Content';

import Charts_page from './components/Dashbord/Main_pages/Charts_page/Charts_page';
import Users_page from './components/Dashbord/Main_pages/Users_page/Users_page';
import AI_Insights_page from './components/Dashbord/Main_pages/AI_Insights_page/AI_Insights_page';
import Help_page from './components/Dashbord/Main_pages/Help_page/Help_page';
import Setting_page from './components/Dashbord/Main_pages/Setting_page/Setting_page';
// import Chart from './components/Dashbord/'
// import {Menu} from 'antd'


function App() {
  const user = localStorage.getItem("token");


  return (
    <Routes>
			<Route path="/signup" exact element = {
        <>
        <Navbar /> 
        <Signup/> 
        <Footer/> 
        </>}/>
			<Route path="/login" exact element = {
        <>
        <Navbar />
        <Login /> 
        <Footer/> 
        </>}/>
      <Route path="/" exact element={
        <>
      <div className='app'>
        <Sidebar />
        <Content />
        
      </div>
      
      </>} />  {/* {user && } */}
        
      <Route path="/logout" element={ <Navigate replace to="/login" /> } />
		  <Route path="/users" exact element = {
        <>
        <div className='app'>
          <Sidebar/>
          <Users_page/>
          
        </div>
        </>}/>
        <Route path="/charts" exact element = {
        <>
        <div className='app'>
        <Sidebar />
        <Charts_page />
        </div>
        </>}/>
         <Route path="/ai-insights" exact element = {
        <>
        <div className='app'>
        <Sidebar />
        <AI_Insights_page/>
        </div>
        </>}/>
         <Route path="/help" exact element = {
        <>
        <div className='app'>
        <Sidebar />
        <Help_page/>
        </div>
        </>}/>
         <Route path="/settings" exact element = {
        <>
        <div className='app'>
        <Sidebar />
        <Setting_page/>
        </div>
        </>}/>




		</Routes>
  )
}



  


export default App
