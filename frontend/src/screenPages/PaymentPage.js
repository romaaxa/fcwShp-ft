import React, { useState } from 'react';
import { savePayment } from '../actions/cartActions';
import { useDispatch } from "react-redux";
import CheckoutSteps from '../components/CheckoutSteps';

const PaymentPage = (props) => {
    const [paymentMethod, setPaymentMethod] = useState('');

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(savePayment({ paymentMethod }));
        props.history.push('placeorder');
    }

    return (
        <div>
            <CheckoutSteps step1 step2 step3></CheckoutSteps>
            <div className="form">
                <form onSubmit={submitHandler}>
                    <ul className="form-container">
                        <li>
                            <h3>Payment</h3>
                        </li>

                        <li>
                            <div>
                                <input
                                    type="radio"
                                    name="paymentMethod"
                                    id="paymentMethod"
                                    value="qiwi"
                                    onChange={(e) => setPaymentMethod(e.target.value)}
                                ></input>
                                <label for="paymentMethod">QIWI</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    name="paymentMethod"
                                    id="paymentMethod"
                                    value="paypal"
                                    onChange={(e) => setPaymentMethod(e.target.value)}
                                ></input>
                                <label for="paymentMethod">Paypal</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    name="paymentMethod"
                                    id="paymentMethod"
                                    value="payoneer"
                                    onChange={(e) => setPaymentMethod(e.target.value)}
                                ></input>
                                <label for="paymentMethod">Payoneer</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    name="paymentMethod"
                                    id="paymentMethod"
                                    value="yandex"
                                    onChange={(e) => setPaymentMethod(e.target.value)}
                                ></input>
                                <label for="paymentMethod">Yandex</label>
                            </div>
                        </li>

                        <li>
                            <button type="submit" className="button-primary">Continue</button>
                        </li>
                    </ul>
                </form>
            </div>
        </div>
    )
}

export default PaymentPage;
