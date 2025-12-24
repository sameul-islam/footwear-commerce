import React from 'react'
import Hero from '../components/Header/Hero/Hero'
import BottomHero from '../components/Header/Hero/BottomHero'
import Collection from '../components/Body/Collection'
import BrandStatement from '../components/Body/BrandStatement'
import BestSeller from '../components/Body/BestSeller'
import Gender from '../components/Body/Gender'
import SpotLight from '../components/Body/SpotLight'


const Home = () => {
  return (
    <div className='h-550'>
      <Hero/>
      <BottomHero/>
      <Collection/>
      <BestSeller/>
      <Gender/>
      <SpotLight/>
      {/* <BrandStatement/> */}
    </div>
  )
}

export default Home
