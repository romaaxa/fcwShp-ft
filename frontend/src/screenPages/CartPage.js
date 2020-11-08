import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart } from '../actions/cartActions';

const CartPage = (props) => {
    const cart = useSelector(state => state.cart);

    const { cartItems } = cart;

    const productId = props.match.params.id;

    const hmProducts = props.location.search ? Number(props.location.search.split("=")[1]) : 1;
    const dispatch = useDispatch();

    const removeFromCartHandler = (productId) => {
        dispatch(removeFromCart(productId));
    }

    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, hmProducts));
        }
    }, []);

    const checkoutHandler = () => {
        props.history.push("/signing?redirect=shipping");
    }

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
                                        <Link to={"/product/" + item.product}>
                                            {item.name}
                                        </Link>

                                        <div>
                                            Number:
                                            <select value={item.hmProducts} onChange={(e) => dispatch(addToCart(item.product, e.target.value))}> {/* isn't working onChange */}
                                                {[...Array(item.countInStock).keys()].map(x =>
                                                    <option key={x + 1} value={x + 1}>{x + 1}</option>
                                                )}
                                            </select>
                                            <button className="delete-button" type="button" onClick={() => removeFromCartHandler(item.product)}>
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                    <div>
                                        ${item.price}
                                    </div>
                                </div>
                            )
                    }
                </ul>
            </div>
            <div className="cart-action">
                <h3>
                    Subtotal ( {cartItems.reduce((a, c) => a + c.hmProducts, 0)} items)
                    :
                    $ {cartItems.reduce((a, c) => a + c.price * c.hmProducts, 0)}
                </h3>
                <button onClick={checkoutHandler} className="button-primary" disabled={cartItems.length === 0}>
                    Proceed to checkout
                </button>
            </div>
        </div >
    )
}

export default CartPage;
