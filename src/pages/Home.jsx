import React from 'react'
import ProductGrid from '../components/ProductGrid'
import Footer from '../components/Footer'
import { useDispatch } from 'react-redux'
import { setSelectedCateogry } from '../featchers/products/ProductSlice'
// import ImageSlider from '../components/Imageslider'


const categories = [
  "All",
  "Electronics",
  "Jewelery",
  "Men's clothing",
  "Women's clothing"
];

const Home = () => {
  const dispatch = useDispatch()

  return (
    <div>
      <div className='bg'>
        
      </div>
      <div className='container mx-auto my-10 px-4'>
        <div className='flex gap-4  text-center'>
          {categories.map((cat) => {
            return (
              <button className='py-2 px-4 bg-emerald-500 rounded-md text-white active:scale-105
         hover:bg-emerald-600 transition-all ease-in '
                key={cat}
                onClick={() => dispatch(setSelectedCateogry(cat))}>
                {cat}</button>
            )
          })}    
        </div>
        <ProductGrid />
        
      </div>
      <Footer />
      
    </div>
  )
}
export default Home