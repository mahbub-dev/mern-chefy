import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className='relative'>
      <ToastContainer/>
      <Navbar />
      <Outlet />
      <Footer/>
    </div>
  )
}

export default App
