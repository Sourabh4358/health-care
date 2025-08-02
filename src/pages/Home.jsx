import React from 'react'
import Header from '../components/Header'
import NirogGyanDifference from './NirogGyanDifference'
import EngagePatients from './EngagePatients'
import Footer from '../components/Footer'
import TopDoctors from '../components/TopDoctors'

const Home = () => {
  return (
    <div>
        <Header/>
        <TopDoctors/>
        <EngagePatients/>
        <NirogGyanDifference/>
        <Footer/>
    </div>
  )
}

export default Home