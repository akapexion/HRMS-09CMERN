import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppLayout from './AppLayout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './components/Contact'
import DashboardLayout from './dashboard/DashboardLayout'
import Employees from './dashboard/pages/Employees'
import AddEmployee from './dashboard/pages/AddEmployee'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AppLayout />}>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
          </Route>

          <Route path='/dashboard' element={<DashboardLayout/>}>
              <Route path="employees" element={<Employees/>}/>
              <Route path="addemployee" element={<AddEmployee/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
