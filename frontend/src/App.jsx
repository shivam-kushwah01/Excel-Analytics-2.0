import './App.css';
import { Route, Routes, Navigate } from "react-router-dom";
// import Main from "./components/Dashbord/Main";
import Navbar from "./components/Loginpage/navbar/navbar"
import Signup from "./components/Loginpage/Singup";
import Login from "./components/Loginpage/Login";
import Sidebar from './layout/Sidebar/Sidebar';
import Content from './layout/Content/Content';
import Charts from './layout/charts/charts';

function App() {
  const user = localStorage.getItem("token");


  return (
    <>

    <Routes>
			<Route path="/signup" exact element = {
        <>
        <Navbar /> 
        <Signup/> 
        </>}/>
			<Route path="/login" exact element = {
        <>
        <Navbar />
        <Login />  
        </>}/>
        <Route path="/charts" exact element = {
        <>
        {/* <Navbar /> 
        <Sidebar /> */}
        <Charts /> 
        </>}/>
      {<Route path="/" exact element={
        <>
       <div className='app'>
        <Sidebar />
        <Content />
      </div>
        </>} />}
      <Route path="/" element={ <Navigate replace to="/login" /> } />
		</Routes>
      
    </>
  )
}



  


export default App
