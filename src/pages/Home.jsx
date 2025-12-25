import React from 'react'
import Hero from '../components/Header/Hero/Hero'
import BottomHero from '../components/Header/Hero/BottomHero'
import Collection from '../components/Body/Collection'
import BrandStatement from '../components/Body/BrandStatement'
import BestSeller from '../components/Body/BestSeller'
import Gender from '../components/Body/Gender'
import SpotLight from '../components/Body/SpotLight'
import Sneaker from '../components/Body/Sneaker'
import CategoryImage from '../components/Body/CategoryImage'


const Home = () => {
  return (
    <div>
      <Hero/>
      <BottomHero/>
      <CategoryImage/>
      <Sneaker/>
      <Gender/>
      <BestSeller/>
      <SpotLight/>
      <Collection/>
      <BrandStatement/>
    </div>
  )
}

export default Home
