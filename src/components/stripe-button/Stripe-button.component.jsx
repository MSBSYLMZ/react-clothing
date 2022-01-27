import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey= 'pk_test_51JiYc9KMpnZzFnntZyY4kwFE4COK6ub4aDwyJH0Xthgd6rQWgzRe5To7JaEBMOtwlGyhNNCiUQqwGiXJzvDxbMml00P7LgIZwP';
    const onToken = token => {
        console.log(token)
    }
    return (
        <StripeCheckout
            label='Pay Now'
            name= 'CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={ priceForStripe }
            panelLabel= 'Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton