import React from 'react'
import trust from '../../assets/image/trust.png';
import travel from '../../assets/image/travel.png';
import shipping from '../../assets/image/shipping.webp';
import warenty from '../../assets/image/warenty.png';

const icons = [
  {
    id: 1,
    image: trust,
    title: 'TrustScore 5'
  },
  {
    id: 2,
    image: travel,
    title: '"Travel Sneaker of the Year"'
  },
  {
    id: 3,
    image: shipping,
    title: 'Shipping & Exchanges*'
  },
  {
    id: 4,
    image: warenty,
    title: '6 Month warranty'
  }
];

const TrustIcon = () => {
  return (
   <div className="w-full grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4 space-y-1 space-x-1 mt-4">
      {icons.map((item, idx) => (
        <div
          key={idx}
          className="flex flex-col items-center justify-center gap-2 px-4 py-2 bg-[#f5f5f5]"
        >
          <img
            src={item.image}
            alt={`image${idx}`}
            className="h-8 w-8 object-contain"
          />
          {item.title && (
            <span className="text-sm font-Unna text-center">{item.title}</span>
          )}
        </div>
      ))}
    </div>
  )
}

export default TrustIcon
