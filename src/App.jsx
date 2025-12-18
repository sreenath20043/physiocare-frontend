
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
import DoctorRegister from './user/pages/DoctorRegister'
import Therapistspage from './therapists/pages/Therapists-page'
import AdminHeader from './admin/pages/Admin-Header'
import AdminPage from './admin/pages/Admin-Page'
import Preloader from './pages/Preloader'
import { useEffect, useState } from 'react'

function App() {

    const [isLoading,setIsLoading]=useState(false)

  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(true)
    },3000)
  },[])
  //-----

  return (
    <>
     <Routes>
      {/* user */}
      <Route path='' element={isLoading? <Home/> : <Preloader/>}/>
      <Route path='login' element={<Auth/>}/>
      <Route path='register' element={<Auth register/>}/>
      <Route path='about'element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='videos' element={<Videos/>}/> 
      <Route path='service' element={<Service/>}/> 
      <Route path='alldoctors' element={<AllDoctors/>}/>
      <Route path='viewProfile/:id' element={<ViewProfile/>}/>
      <Route path='booking/:id' element={<Booking/>}/>
      <Route path='bookingstatus' element={<BookingStatus/>}/>
      <Route path='doctorportal' element={<DoctorRegister/>}/>

      {/* therapists */}
      <Route path='therapistspage/:id' element={<Therapistspage/>}/>

      {/* admin */}
      <Route path='adminheader' element={<AdminHeader/>}/>
      <Route path='adminpage' element={<AdminPage/>}/>
     </Routes>
    </>
  )
}

export default App
