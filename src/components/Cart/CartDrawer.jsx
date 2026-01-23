import { motion, AnimatePresence, easeIn } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from './CartItem'; 
import { selectCartItems, selectCartTotal } from '../../features/products/cartSlice';
import { closeCartDrawer } from '../../features/products/uiSlice';
import { TfiClose } from 'react-icons/tfi';
import { Link } from 'react-router-dom';
import { GrCart } from 'react-icons/gr';
import RecommendedDrawerProducts from './RecommendedDrawerProducts';

const CartDrawer = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);
  const isOpen = useSelector(state => state.ui.isCartDrawerOpen);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex justify-end"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/50" onClick={() => dispatch(closeCartDrawer())}></div>

          {/* Drawer */}
          <motion.div
            className="relative w-full sm:w-145 bg-white h-full shadow-xl"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.8, ease: "easeOut" }}
          >
            <div className="p-4 sticky top-0 right-0 flex justify-between items-center bg-white border-b border-gray-300 z-40">
              <h2 className="font-semibold text-lg font-Quicksand">My Cart</h2>
              <button onClick={() => dispatch(closeCartDrawer())} className="text-xl cursor-pointer hover:rotate-180 transition duration-700"><TfiClose size={24}/></button>
            </div>

            <div className="p-4 flex flex-col gap-4 overflow-y-auto no-scrollbar h-[calc(100%-210px)]">
              {cartItems.length ? (
                cartItems.map(item => <CartItem key={item.id} item={item} />)
              ) : (
                <div className='flex flex-col items-center p-4 gap-8 text-center'>
                  <p className=' font-semibold font-Quicksand'>Your cart is empty. Start Shopping!</p>
                  <div className='flex items-center gap-2 w-full'>
                  <Link to='/men' onClick={() => dispatch(closeCartDrawer())} className=' w-full p-2.5 font-Outfit rounded-full text-white bg-[#111010] hover:bg-[#5f5c5c] text-xs cursor-pointer transition'>SHOP MENS</Link>
                  <Link to='/women' onClick={() => dispatch(closeCartDrawer())} className=' w-full p-2.5 font-Outfit rounded-full text-white bg-[#111010] hover:bg-[#5f5c5c] text-xs cursor-pointer transition'>SHOP WOMENS</Link>
                  </div>
                   
                   <Link to='bestsellers' onClick={() => dispatch(closeCartDrawer())} className='relative flex flex-col gap-2 group'>
                    <div className='mt-25 md:mt-30 p-16 bg-gray-50 shadow-sm hover:shadow-md rounded-full text-gray-400 hover:text-gray-900 cursor-pointer transition duration-1000'>
                     <GrCart size={50}/>
                    </div>
                    <p className=' cursor-pointer font-Quicksand font-bold'>CONTINUE BROWSING</p>
                     <span className='absolute left-0 -bottom-px h-0.5 w-full bg-[#2f3542] scale-x-0 origin-right transition-transform duration-300 ease-out group-hover:scale-x-100 group-hover:origin-left'/>
                   </Link>

                    

                </div>
                
              )}
            {cartItems.length > 0 && <RecommendedDrawerProducts/>}
            </div>



         {cartItems.length > 0 && (
            <div className="absolute bottom-0 left-0 w-full p-6 bg-[#f5f5f5]  border-t border-gray-400 z-40">
              <p className="font-semibold flex justify-between font-Quicksand">
                Subtotal: <span>${total.toFixed(2)}</span>
              </p>
              <button className="mt-5 w-full bg-[#111010] hover:bg-[#5f5c5c] text-white font-semibold py-3 cursor-pointer font-Quicksand transition duration-300">
                Checkout
              </button>
            </div>
         )}


          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default CartDrawer;
