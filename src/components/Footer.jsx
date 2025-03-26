import React from 'react'
import logo from '../images/logo.jpg'
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
      <footer className='bg-emerald-900 shadow-md '>
          <div className='container mx-auto px-4'>
              <div className='min-h-16 '>
                  <div className='flex justify-between items-center flex-col md:flex-row py-10'>
                      <h2 className='text-4xl font-bold text-white'>Subscribe Our Newsletter </h2>
                      <form className='md:w-1/3 w-full mt-8 md:mt-0 relative  '>
                          <input className='py-4 px-4 rounded shadow-md w-full' type='text' placeholder='Enter Your Email' />
                          <button className='bg-emerald-200 py-3 px-4 rounded-full absolute top-1 right-3'>Submit</button>
                          
                      </form>
                  </div>
              </div>
          </div>
          <div className='bg-emerald-800 text-white py-8'>
              <div className='container mx-auto px-4'>
                  <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 '>
                      <div>
                          <img className='my-4 hover:scale-110 transition' src={logo} alt='' />
                         
                          <div className='flex items-center gap-8 mt-8'>
                              <Facebook size={40} className='bg-white text-black rounded-md p-2 ' />
                              <Twitter size={40} className='bg-white text-black rounded-md p-2 ' />
                              <Youtube size={40} className='bg-white text-black rounded-md p-2 ' />
                              <Instagram size={40} className='bg-white text-black rounded-md p-2 ' />
                              
                          </div>
                      </div>
                      <div>
                          <h2 className='text-2xl font-semibold my-4'>Pages</h2>
                          <ul>
                              <li>
                                  <Link to='/'>Home</Link>
                              </li>
                              <li>
                                  <Link to='/'>About</Link>
                              </li>
                              <li>
                                  <Link to='/'>FAQs</Link>
                              </li>
                              <li>
                                  <Link to='/'>Contact</Link>
                              </li>
                          </ul>
                      </div>
                      <div>
                          <h2 className='text-2xl font-semibold my-4'>Category</h2>
                          <ul>
                              <li>
                                  <Link to='/'>Electronics</Link>
                              </li>
                              <li>
                                  <Link to='/'>Jewelery</Link>
                              </li>
                              <li>
                                  <Link to='/'>Men's Clothing</Link>
                              </li>
                              <li>
                                  <Link to='/'>Women's Clothing</Link>
                              </li>
                          </ul>
                      </div>
                      <div>
                          <h2 className='text-2xl font-semibold my-4'>Category</h2>
                          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, laboriosam.</p>
                          <p>+12345 678 918</p>
                          <p>+12345 678 910</p>
                      </div>
                  </div>
              </div>
          </div>

          <div className='container mx-auto text-center py-4 text-white'>
              <p>Copyright &copy: 2025</p>
          </div>
    </footer>
  )
}
export default Footer