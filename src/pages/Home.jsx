import React from 'react'
import Hero from '../components/Header/Hero/Hero'
import BottomHero from '../components/Header/Hero/BottomHero'
import Collection from '../components/Body/Collection'

const Home = () => {
  return (
    <div>
      <Hero/>
      <BottomHero/>
      <Collection/>
    </div>
  )
}

export default Home
