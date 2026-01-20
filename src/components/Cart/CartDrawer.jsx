import { motion, AnimatePresence } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from './CartItem'; 
import { selectCartItems, selectCartTotal } from '../../features/products/cartSlice';
import { closeCartDrawer } from '../../features/products/uiSlice';

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
            className="relative w-80 sm:w-96 bg-white h-full shadow-xl overflow-y-auto"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            <div className="p-4 flex justify-between items-center border-b">
              <h2 className="font-semibold text-lg">Your Cart</h2>
              <button onClick={() => dispatch(closeCartDrawer())} className="text-xl">X</button>
            </div>

            <div className="p-4 flex flex-col gap-4">
              {cartItems.length ? (
                cartItems.map(item => <CartItem key={item.id} item={item} />)
              ) : (
                <p>Your cart is empty.</p>
              )}
            </div>

            <div className="p-4 border-t">
              <p className="font-semibold flex justify-between">
                Total: <span>${total.toFixed(2)}</span>
              </p>
              <button className="mt-4 w-full bg-black text-white py-2 rounded-md">
                Checkout
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default CartDrawer;
