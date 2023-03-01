import CartItem from "./cartItem";
import { useSelector } from "react-redux";

const CartContainer = () => {
  const { cartItems, total, amount } = useSelector((store) => store.cart);

  if (amount < 1) {
    return (
      <section className="cart">
        <hearder>
          <h2>Your collection</h2>
          <h4 className="empty-cart">Is currently emplty</h4>
        </hearder>
      </section>
    );
  }

  return (
    <section className="cart">
      <hearder>
        <h2>Your Collection</h2>
      </hearder>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h3>total <span>${total}</span></h3>
        </div>
      </footer>
      <button className='btn clear-btn'>
          clear cart
        </button>
    </section>
  );
};

export default CartContainer;
