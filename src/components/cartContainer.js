import CartItem from "./cartItem";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../features/modal/modalSlice";

const CartContainer = () => {
  const dispatch = useDispatch();
  const { cartItems, total, amount } = useSelector((store) => store.cart);

  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>Your collection</h2>
          <h4 className="empty-cart">Is currently emplty</h4>
        </header>
      </section>
    );
  }

  return (
    <section className="cart">
      <header>
        <h2>Your Collection</h2>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className='cart-total'>
          <h4>
            total <span>${total.toFixed(2)}</span>
          </h4>
        </div>
      </footer>
      <button className="btn clear-btn" onClick={() => dispatch(openModal())}>
        clear cart
      </button>
    </section>
  );
};

export default CartContainer;
