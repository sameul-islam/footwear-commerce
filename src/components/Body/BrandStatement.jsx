import React from 'react'

const BrandStatement = () => {
  return (
    <section className="mt-16 md:mt-24 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto text-center">

        {/* Small Intro */}
        <p className="font-Lato text-xs md:text-sm tracking-[0.3em] text-gray-500 uppercase mb-6">
          Our Philosophy
        </p>

        {/* Main Statement */}
        <h2 className="font-Poppins text-3xl md:text-5xl lg:text-6xl font-light leading-tight text-gray-900">
          We don't chase trends.
          <br />
          We design pieces that last.
        </h2>

        {/* Supporting Text */}
        <p className="mt-8 max-w-2xl mx-auto font-Lato text-sm md:text-base leading-relaxed text-gray-600">
          Every collection is created with intention — focusing on balance,
          comfort, and timeless design. Crafted to feel relevant today and
          meaningful tomorrow.
        </p>

      </div>
    </section>
  )
}

export default BrandStatement
