import React from 'react'
import './Home.css'
import Navbar from '../components/Navbar/Navbar'
import Particles from '@/components/ui/particles'
import Meteors from '@/components/ui/meteors'
import { Dock } from '@/components/ui/dock'

const Home = () => {
  return (
    <div className='home-page'>
      <Navbar/>
      <Meteors/>
      <Particles className={'container'} quantity={200}/>
      <Dock/>
    </div>
  )
}

export default Home