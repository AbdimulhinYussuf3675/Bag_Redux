import Navbar from "./components/Navbar";
import CartContainer from "./components/cartContainer";
import { useSelector, useDispatch } from "react-redux";
import { calculateTotal, getCartItems } from "./features/cart/cartSlice";
import { useEffect } from "react";
import Modal from "./components/modal";

function App() {
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems, dispatch]);

  useEffect(() => {
    dispatch(getCartItems('random'))
  }, [dispatch])

  if(isLoading){
    return <div className="loading">
      <h1>Loading...</h1>
    </div>
  }
  return (
    <main>
      {isOpen && <Modal />}      
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
