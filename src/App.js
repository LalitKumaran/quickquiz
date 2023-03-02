import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Authentication from './Authentication';
import Admin from './Resources/Admin_components/Admin'
import AdminLogin from './Resources/Admin_components/AdminLogin';
import Home from './Resources/User_components/Home';
function App() {
  return (
    <>
      <BrowserRouter>
       <Authentication>
        <Routes>
             
            <Route path='/' element={<Home/>}>


            </Route>
          
           <Route path='/admin' element={<Admin/>}>


           </Route>

        </Routes>
       </Authentication>
       </BrowserRouter>



    </>
  );
}

export default App;
