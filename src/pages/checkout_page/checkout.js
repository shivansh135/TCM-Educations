import React from "react";
import './checkout.css';

export function Checkout() {
    return (
        <div>
            <div className="Checkout">
                <div className="checkout_left">
                    <div className="checkout_head">
                        <div className="checkout_heading">
                            Checkout
                        </div>
                        <div className="email_pass_text">
                            <form action="/"  method="post" >
                                <div class="input-group" className="input">
                                    <div class="input-field" className="name">
                                        <label for="name" className="name_text">Enter Name</label>
                                        <input type="text" name="name" placeholder="name" className="name_input" />
                                    </div>
                                    <div class="input-field" className="Emails">
                                        <label for="Email" className="Emails_text">Enter Email</label>
                                        <input type="text" name="Email" placeholder="Email" className="Emails_input" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="line">
                        
                    </div>

                    <div className="checkout_payment">
                        <div className="select_payment">
                            <div className="select_text">
                                Select Payment Method
                            </div>
                            <div className="select_subtext">
                                Select a prefered payment method
                            </div>
                        </div>

                        <div className="payment_options">
                            <div className="option_one">
                                <div className="option_one_radio">
                                    <form action="/"  method="post" >
                                        <input 
                                            type="radio"
                                            id="radio"
                                            name="option_one"
                                            className="radio"
                                        />
                                        <label htmlFor="radio" className="radio_text">Pay with Credit Card</label>
                                    </form>
                                    <img src="./images/credit_image.png" alt="credit_card" className="credit_card"/>
                                    <div className="foot">
                                        You will be redirected to a secure payment page.
                                    </div>
                                </div>
                            </div>

                            <div className="option_one">
                                <div className="option_one_radio">
                                    <form action="/"  method="post" >
                                        <input 
                                            type="radio"
                                            id="upi"
                                            name="option_two"
                                            className="radio"
                                        />
                                        <label htmlFor="radio" className="radio_text">Pay with UPI</label>
                                    </form>
                                    <img src="./images/upi.png" alt="upi" className="credit_card"/>
                                    <div className="foot">
                                        You will be redirected to a secure payment page.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="pay_now">Pay Now</button>
                    </div>
                </div>

                <div className="checkout_right">
                    <div className="order_head">
                        <div className="order_text">
                            <div className="order_heading">
                                ORDER SUMMARY
                            </div>
                            <div className="order_subtext">
                                <div className="item">Item Total</div>
                                <div className="price">Price</div>
                            </div>
                        </div>

                        <div className="order_detail">
                            <div className="order_sub">
                                CAT 2023 <br/> Session 1 <br/> Batch: Varanasi
                            </div>
                            <div className="qty">
                                Qty:1
                            </div>
                            <div className="price">
                                ₹ 1259
                            </div>
                        </div>
                        
                        <div className="linee">
                            
                        </div>

                        <div className="order_summary">
                            <div className="summ_sub">
                                Total
                            </div>
                            <div className="qtyy">
                                Qty:1
                            </div>
                            <div className="price">
                                ₹ 1259
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>

    )
}