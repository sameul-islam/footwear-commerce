import React from 'react'

const FilterSection = ({ title, children }) => {
  return (
    <div className='mb-6'>
      <h3 className='text-sm font-semibold text-gray-800 mb-3 font-Outfit'>
        {title}
      </h3>
      <div className='space-y-2 space-x-2'>
        {children}
      </div>
    </div>
  )
}

export default FilterSection
