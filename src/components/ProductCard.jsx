import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {
    

  return (
    //   <Link to={`/product/${product.id}`}>
          <div className='shadow-lg rounded-md cursor-pointer'>
              <img className='w-40 h-40  block mx-auto p-4 ' src={product.image} alt='' />
              <div className='bg-gray-50 p-4'>
                  <h2 className='text-lg font-semibold my-4 '>{product.title.substring(0,18) +'...'}</h2>
                  <p className='text-sm text-zinc-500 border-b-2 pb-4'>{product.description.substring(0,70) + '...'}</p>
                  <div className='flex justify-between mt-4 items-center  '>
                      <p className='text-xl font-semibold '>${product.price}</p>
                      {/* <p>View Details</p> */}
                      <Link to={`/product/${product.id}`}>View Details</Link>
                  </div>
              </div>
          </div>
    //   </Link>
  )
}
export default ProductCard