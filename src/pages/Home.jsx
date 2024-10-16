import React from 'react'
import './Home.css'
import Navbar from '../components/Navbar/Navbar'
import Particles from '@/components/ui/particles'

const Home = () => {
  return (
    <div className='home-page'>
      <Navbar/>
      <Particles className={'container'} quantity={200}/>
      
    </div>
  )
}

export default Home