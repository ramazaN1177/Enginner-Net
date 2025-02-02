import Login from './components/Auth/Login/Login';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Register from './components/Auth/Register/Register';
import Profile from './components/Profile/Profile';
import DashboardLayouts from './layouts/DashboardLayouts';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<Navigate to='/login' />} />
        <Route path ='/register' element={<Register />} />
        <Route path='/profile' element={<DashboardLayouts/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
