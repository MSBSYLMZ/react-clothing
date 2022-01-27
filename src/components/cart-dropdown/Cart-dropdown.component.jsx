import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useHistory } from 'react-router';


import CustomButton from '../custom-button/Custom-button.component';
import CartItem from '../cart-item/Cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selector';
import { toggleCartHidden } from '../../redux/cart/cart.actions';


import './Cart-dropdown.styles.scss';


const CartDropdown = () => {
        const cartItems= useSelector(selectCartItems);
        const dispatch= useDispatch();
        const history = useHistory();
        return (
                <div className='cart-dropdown'>
                <div className="cart-items">
                        {
                        cartItems.length ?  
                        cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
                        :
                        <span className="empty-message">Your cart is empty</span>
                        }
                </div>
                <CustomButton onClick={()=> {
                        history.push('/checkout');
                        dispatch( toggleCartHidden() );
                }}>GO TO CHECKOUT</CustomButton>
                </div>
        )
}

export default CartDropdown;
