import React from 'react'
import Hero from '../components/Header/Hero/Hero'
import Collection from '../components/Body/Collection'
import BrandStatement from '../components/Body/BrandStatement'
import BestSeller from '../components/Body/BestSeller'
import Gender from '../components/Body/Gender'
import SpotLight from '../components/Body/SpotLight'
import Sneaker from '../components/Body/Sneaker'
import CategoryImage from '../components/Body/CategoryImage'
import CraftSection from '../components/Body/CraftSection'


const Home = () => {
  return (
    <div>
      <Hero/>
      <CraftSection/>
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
