import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Authentication from './Authentication';
import Dashboard from './Resources/Admin_Pages/AdminDashboard';
import Admin from './Resources/Admin_Pages/Admin'
import "bootstrap/dist/css/bootstrap.min.css";
import AdminLogin from './Resources/Admin_Pages/AdminLogin';
import Home from './Resources/User_components/Home';
import AdminPanel from './Resources/Admin_Pages/AdminPanel';
import AdminLoginRequired from './Resources/Admin_Pages/AdminLoginRequired';
function App() {
  return (
    <>
       <Authentication>
        <Routes>
             
            <Route path='/' element={<Home/>}>


            </Route>
            <Route path='/dashboard' element={<Dashboard/>}>


            </Route>
          
           <Route path='/admin' element={<Admin/>}>
                    <Route index element={<AdminLoginRequired><AdminPanel/></AdminLoginRequired>}></Route>
                    <Route path='login' element={<AdminLogin/>}/>



           </Route>

        </Routes>
       </Authentication>



    </>
  );
}

export default App;
