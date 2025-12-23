import React from 'react'
import Image1 from '../../assets/image/women.jpg'
import Image2 from '../../assets/image/men.jpg'
import Image3 from '../../assets/image/kid.jpg'

const genderImage = [
    {
        id: 1,
        gender: 'Men',
        image: Image1
    },
    {
        id: 2,
        gender: "Women's",
        image: Image2,
    },
    {
        id: 3,
        gender: 'Kid',
        image: Image3,
    }
];

const Gender = () => {
  return (
    <div className='flex flex-3 items-center'>
      {genderImage.map((item, idx) => (
        <img
        key={idx}
        src={item.image}
        alt={item.gender}
        className=' flex  h-250'
        />
      ))}
    </div>
  )
}

export default Gender
