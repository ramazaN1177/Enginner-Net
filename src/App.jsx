import Login from './components/Auth/Login/Login';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Register from './components/Auth/Register/Register';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<Navigate to='/login' />} />
        <Route path ='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
