import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import TrainingSection from '../components/Training'

const Training = () => {
  return (
    <div>
      <Navbar />
      <HeroImage heading='TRAINING' text='Pre-flight and In-flight Training' />
      <TrainingSection />
      <Footer />
    </div>
  )
}

export default Training
