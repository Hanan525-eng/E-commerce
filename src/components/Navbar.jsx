import React , {useState} from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart, User } from 'lucide-react'
import logo from '../images/logo.jpg'

import { useDispatch, useSelector } from 'react-redux'
import { setSearchTerm } from '../featchers/products/ProductSlice'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const dispatch = useDispatch()
    const searchTerm = useSelector((state) => state.product.searchTerm)

   
    const cartItems = useSelector((state) => state.cart.items);
    const itemCount = cartItems.reduce((total, item) => total + item.quantity , 0)
    
    const handleUser = () => {
        setIsOpen(!isOpen)
    }
    return (
      
      <header className='bg-white shadow-md'>
          <>
              <div className='py-4 shadow-md'>
                  <ul className='container mx-auto flex flex-wrap justify-between md:flex-row px-4 md:px-2 items-center'>
                      <div className='flex gap-4'>
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
                      </div>
                      <div className={`${isOpen ? 'flex flex-col absolute right-0 md:right-0 top-12 z-10 bg-zinc-50 p-4 gap-4 ': 'hidden'}`}>
                          <li>
                              <Link to='/'>Sign</Link>
                          </li>
                          <li>
                              <Link to='/'>My Account</Link>
                          </li>
                      </div>
                      <User size='40' className='bg-emerald-200 p-2 text-black rounded-md cursor-pointer '
                      onClick={handleUser}/>
                  </ul>
              </div>
              <nav className='flex justify-between items-center container mx-auto md:py-6 p-1 px-2'>
                  <div className='flex items-center'>
                      <Link to='/' className=' px-4 rounded '>
                          <img src={logo} alt='' className='w-44 h-16' />
                      </Link>
                  </div>
                  <form className='w-1/2 sm:block hidden'>
                      <input type='text' placeholder='Search Product' className='bg-zinc-50 rounded-md border border-zinc-200
                       py-3 px-3 w-full focus:outline-none'
                        value={searchTerm}
                        onChange={(e) => dispatch(setSearchTerm(e.target.value))} />
                    </form>
                    <div className='relative'>
                         <Link to={'/cart'}>
                            <ShoppingCart size={54} className='cursor-pointer bg-emerald-100 px-3 py-2 rounded-full' />
                            {itemCount > 0 &&
                            <span className='absolute top-2 right-5 bg-emerald-700 text-white text-xs rounded-full 
                            w-5 h-5 flex items-center justify-center '>{itemCount}</span>
                            }
                        </Link>   
                        
                    </div>
              </nav>
            </>
         
           
   </header>
  )
}
export default Navbar

