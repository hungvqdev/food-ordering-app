import React from 'react'
import { Topbar, Sidebar, FeaturedInfo } from '../../components'

const Home = () => {

  return (
    <>
      <Topbar/>
      <div className='app_admin'>
        <Sidebar/>       
        <FeaturedInfo/>
      </div>
    </>
    
  )
}

export default Home