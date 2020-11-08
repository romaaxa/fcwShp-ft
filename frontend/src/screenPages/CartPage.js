import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../actions/cartActions';

const CartPage = (props) => {
    const cart = useSelector(state => state.cart);

    const { cartItems } = cart;

    const productId = props.match.params.id;

    const hmProducts = props.location.search ? Number(props.location.search.split("=")[1]) : 1;
    const dispatch = useDispatch();

    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, hmProducts));
        }
    }, [])

    return (
        <div className="cart">
            <div className="cart-list">
                <ul className="cart-list-container">
                    <li key="cartKey">
                        <h3>Shopping Cart</h3>
                        <div>Price</div>
                    </li>
                    {
                        cartItems.length === 0 ?
                            <div>Cart is empty!</div> :
                            cartItems.map(item =>
                                <div>
                                    <img src={item.image} alt="product" />
                                    <div className="cart-name">
                                        <div>{item.name}</div>

                                        <div>
                                            Number: <select>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div>
                                        {item.price}
                                    </div>
                                </div>
                            )
                    }
                </ul>
            </div>
            <div className="cart-action">
                <h3>Subtotal ({cartItems.reduce((a, c) => a + c.hmProducts, 0)} items) : $ {cartItems.reduce((a, c) => a + c.price * c.hmProducts, 0)}</h3>
                <button className="button-primary" disabled={cartItems.length === 0}>
                    Proceed to checkout
                </button>
            </div>
        </div>
    )
}

export default CartPage;
