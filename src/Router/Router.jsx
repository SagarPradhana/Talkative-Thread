import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Sidebar from '../component/Sidebar/Sidebar'
import Home from '../Pages/Home'
import Settings from '../Pages/Settings'
import { data } from '../component/Data'
import Welcome from '../Pages/Welcome'
import Profile from '../Pages/Profile'
const Router = () => {
  return (
    <div className='flex'>
      <div className='sticky top-0'>
        <Sidebar />
      </div>
      <div className='w-full h-[100vh] overflow-hidden'>
        <Routes>
          <Route path='/' element={<Welcome />} />
          <Route path='/settings' element={<Settings />} />
          {
            data.map((i, num) => {
              return <Route path={i.link} element={<Home name={i.user} src={i.src} key={num} />} key={num} />
            })
          }
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </div>
    </div>
  )
}

export default Router
