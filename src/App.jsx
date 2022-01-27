import "./App.scss";
import { Switch, Route, Redirect} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import React, { useEffect } from "react";

import HomePage from "./pages/homepage/Homepage.component";
import ShopPage from "./pages/shop/Shop.component";
import SıgnInAndSıgnUpPage from "./pages/sign-in-and-sign-up/Sign-in-and-sign-up.component";
import CheckoutPage from "./pages/checkout/Checkout.component";
import Header from "./components/header/Header.component";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import { selectCurrentUser } from './redux/user/user.selector';
import { checkUserSession } from "./redux/user/user.actions";
import { createStructuredSelector } from "reselect";

const App = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(checkUserSession());
  }, [dispatch]);

    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    //   if(userAuth){
    //     const userRef = await createUserProfileDocument(userAuth)

    //     userRef.onSnapshot(snapShot => {
    //         setCurrentUser({
    //           id:snapShot.id,
    //           ...snapShot.data()
    //         });
    //       });
    //   }else{
    //     setCurrentUser(userAuth)
    //   }

      // this.setState({ currentUser: user });

    // });
  
  // componentWillUnmount() {
  //   this.unsubscribeFromAuth();
  // }
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/signin" render={()=> currentUser ? (<Redirect to='/' />) : (<SıgnInAndSıgnUpPage/>)} />
          <Route exact path="/checkout" component={CheckoutPage} />
        </Switch>
      </div>
    );
}


export default App;
