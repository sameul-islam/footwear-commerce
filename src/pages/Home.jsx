import React from 'react'
import Hero from '../components/Header/Hero/Hero'
import BottomHero from '../components/Header/Hero/BottomHero'
import Collection from '../components/Body/Collection'
import BrandStatement from '../components/Body/BrandStatement'
import BestSeller from '../components/Body/BestSeller'
import Gender from '../components/Body/Gender'


const Home = () => {
  return (
    <div className='h-550'>
      <Hero/>
      <BottomHero/>
      <Collection/>
      <BrandStatement/>
      <Gender/>
      <BestSeller/>
    </div>
  )
}

export default Home
