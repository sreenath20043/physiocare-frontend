
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './user/pages/Home'
import About from './user/pages/About'
 import Contact from './user/pages/Contact'
import Service from './user/pages/Service'
import AllDoctors from './user/pages/AllDoctors'
import ViewProfile from './user/pages/ViewProfile'
import Auth from './pages/Auth'
import Booking from './user/pages/Booking'
import BookingStatus from './user/components/BookingStatus'
import Videos from './user/pages/Videos'

function App() {

  return (
    <>
     <Routes>
      <Route path='' element={<Home/>}/>
      <Route path='login' element={<Auth/>}/>
      <Route path='register' element={<Auth/>}/>
      <Route path='about'element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='videos' element={<Videos/>}/> 
      <Route path='service' element={<Service/>}/> 
      <Route path='alldoctors' element={<AllDoctors/>}/>
      <Route path='viewProfile/:id' element={<ViewProfile/>}/>
      <Route path='booking/:id' element={<Booking/>}/>
      <Route path='bookingstatus' element={<BookingStatus/>}/>
     </Routes>
    </>
  )
}

export default App
