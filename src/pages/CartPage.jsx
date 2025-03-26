import { Link } from 'react-router-dom';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Minus, Plus, Trash2 } from 'lucide-react';
import { removeFromCart, updatQuantity } from '../featchers/products/cart/Cartslice';

const CartPage = () => {
   
  const dispatch = useDispatch();
  const cartitems = useSelector((state) => state.cart.items);

  const total = cartitems.reduce((sun, item) => sun + item.price * item.quantity, 0);

  if (cartitems.length === 0) {
    return <div className='container mx-auto px-4 py-8'>
      <div className='text-center'>
        <h2>Your cart is Empty </h2>
        <p className='text-gray-600 mb-4 '>Add some products to Your cart to see them here</p>
        <Link to='/' className='inline-block bg-emerald-300 px-6 py-2 rounded-lg hover:bg-emerald-400'>Continue Shopping</Link>
        </div>

    </div>
  }
  return (
    <div className='container mx-auto py-8 px-4 '>
      <h2 className='text-2xl font-bold mb-8 '>Shopping Cart</h2>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 '>
        <div className='lg:col-span-2 shadow-md p-4 rounded-md'>

          {cartitems.map((item) =>(
            <div key={item.id} className='flex items-center gap-4 py-4 border-b  '>
              <Link to={`/product/${item.id}`}>
                <img src={item.image} alt={item.title} className='w-24 h-24 object-cover rounded 
                '/>
              </Link>
              <div className='flex-1 '>
                <Link to={`/product/${item.id}`}
                  className='font-semibold hover:text-blue-600'>
                  {item.title}
                </Link>
                <p className='text-gray-600'>${item.price}</p>
                <div className='flex items-center gap-2 mt-2 '>
                  <button className='p-1 rounded-full hover:bg-gray-100 ' onClick={() => dispatch(updatQuantity({id:item.id , quantity: Math.max(0, item.quantity -1)}))}>
                    <Minus size={16} />
                  </button >
                  <span>{item.quantity}</span>
                  <button className='p-1 rounded-full hover:bg-gray-100 ' onClick={() => dispatch(updatQuantity({id:item.id , quantity: item.quantity + 1}))} >
                    <Plus size={16}/>
                  </button>
                  <div className='ml-4 text-red-500 hover:text-red-700 cursor-pointer' onClick={() => dispatch(removeFromCart(item.id ))}>
                      <Trash2 size={20}/>
                  </div>
                </div>
                </div>
                <div className='text-right'>
                <p className='font-bold'>
                  ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
            </div>
          ))}
        </div>
        <div className='lg:col-span-1 '>
          <div className='p-6 shadow-md rounded-md bg-white'>
            <h3 className='text-xl font-bold mb-4'>Order Summary </h3>
            <div className='space-y-2 mb-4'>
              <div className='flex justify-between '>
                  <span >Sub Total</span>
                <span >${total.toFixed(2)}</span>
              </div>
              <div className='flex justify-between'>
                  <span >Shipping</span>
                  <span >Free</span>
              </div>
              <div className='flex justify-between'>
                <div className='border-t pt-2 font-bold'>
                  <span >Total</span>
                  <span >${total.toFixed(2)}</span>
                </div>
             </div>
            </div>
            <button className='w-full bg-emerald-400 px-6 py-3 rounded-lg hover:bg-emerald-500 transition'>
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default CartPage