import React from "react";

import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import { auth } from "../../firebase/firebase.utils";

import CartIcon from "../card-icon/Cart-icon.component";
import CartDropdown from '../cart-dropdown/Cart-dropdown.component';
import { selectCartHidden } from "../../redux/cart/cart.selector";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { signOutStart } from "../../redux/user/user.actions";

import { HeaderContainer, LogoContainer, OptionsContainer, OptionDiv, OptionLink } from "./Header.styles";

const Header = ({ currentUser, hidden, signOutStart }) => (
  <HeaderContainer>
    <LogoContainer  to="/">
      <Logo className="logo"></Logo>
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">
        SHOP
      </OptionLink>
      <OptionLink to="/shop">
        CONTACT
      </OptionLink>
      {currentUser ? (
        <OptionDiv onClick={signOutStart}>
          SIGN OUT
        </OptionDiv>
      ) : (
        <OptionLink to="/signin">
          SIGN IN
        </OptionLink>
      )}
        <CartIcon/>
    </OptionsContainer>
    {
      !hidden ? <CartDropdown/>: null
    }
    
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden:selectCartHidden 
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
