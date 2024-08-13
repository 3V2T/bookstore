import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { SectionTitle, CartTotals, CartItemsList } from '../../components'
import styled from 'styled-components'
import {
  quaternaryBgColorLight,
  shadow1,
  textColor,
} from '../../assets/js/variables'
import { emptyCart } from '../../assets/images'

const Cart = () => {
  const { user } = useSelector((store) => store.user)

  const { numItemsInCart } = useSelector((store) => store.cart)
  if (numItemsInCart === 0)
    return (
      <Wrapper>
        <div className="d-flex justify-content-center align-items-center flex-column">
          <SectionTitle text="Your cart is empty!" />
          <img src={emptyCart} alt="empty-cart" className="empty-cart-img" />
          <SectionTitle text="Please put in some books" />
        </div>
      </Wrapper>
    )

  return (
    <Wrapper>
      <SectionTitle text="Your Cart" />
      {/* chia thành 12 cột */}
      <div className="row cart-container">
        {/* Item chiếm 8 cột */}
        <div className="col-8">
          <CartItemsList />
        </div>
        {/* cart total chiếm 4 cột */}
        <div className="col-4 checkout-column">
          <div className="checkout-container">
            <CartTotals />
            {user ? (
              <Link to="/checkout" className="btn">
                proceed to checkout
              </Link>
            ) : (
              <Link to="/login" className="btn">
                please login
              </Link>
            )}
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
export default Cart

const Wrapper = styled.section`
  margin-top: 6rem;
  padding-bottom: 3rem;
  .cart-container {
    padding: 0 5rem;
    margin-bottom: 2rem;
  }
  .btn {
    color: ${textColor};
    cursor: pointer;
    background-color: ${quaternaryBgColorLight};
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    box-shadow: ${shadow1};
    font-weight: 600;
    text-transform: uppercase;
  }
  .empty-cart-img {
    height: 20rem;
    width: 20rem;
  }
  .checkout-container {
    position: sticky;
    top: 5rem;
  }
`
