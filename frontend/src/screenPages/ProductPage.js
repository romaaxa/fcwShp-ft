import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { detailsProduct } from '../actions/productActions'

const ProductPage = (props) => {
    const [hmProducts, setHmProducts] = useState(1);
    const productDetails = useSelector(state => state.productDetails);
    const { product, loading, error } = productDetails;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(detailsProduct(props.match.params.id));
        return () => {
            //
        }
    }, [])

    const handleAddToCart = () => {
        props.history.push("/cart/" + props.match.params.id + "?productNumber=" + hmProducts)
    }

    return (
        <div>
            <div className="back-to-result">
                <Link to="/" style={{ color: "white" }}>Back to result</Link>
            </div>

            {loading ? <div>Loading...</div> :
                error ? <div>{error}</div> :
                    (
                        <div className="details">
                            <div className="details-image">
                                <img src={product.image} alt="product"></img>
                            </div>

                            <div className="details-info">
                                <ul>
                                    <li>
                                        <h4>{product.name}</h4>
                                    </li>

                                    <li>
                                        {product.rating} Stars ({product.numReviews} Reviews)
                                </li>

                                    <li>
                                        Price: <b>${product.price}</b>
                                    </li>

                                    <li>
                                        Decription:
                                    <div>
                                            {product.description}
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="details-action">
                                <ul>
                                    <li>
                                        Price: {product.price}
                                    </li>
                                    <li>
                                        Status: {product.countInStock > 0 ? "In Stock!" : "NOT IN STOCK!"}
                                    </li>
                                    <li>
                                        Number: <select value={hmProducts} onChange={(e) => { setHmProducts(e.target.value) }}>
                                            {[...Array(product.countInStock).keys()].map(x =>
                                                <option key={x + 1} value={x + 1}>{x + 1}</option>
                                            )}
                                        </select>
                                    </li>
                                    <li>
                                        {product.countInStock > 0 && <button className="button-primary" onClick={handleAddToCart}>Add to cart</button>}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )
            }
        </div>
    )
}

export default ProductPage;
