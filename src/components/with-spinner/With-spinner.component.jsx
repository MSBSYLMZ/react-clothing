import { SpinnerContainer, SpinnerOverlay } from "./With-spinner.styles";

const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
    return isLoading ? (
        <SpinnerOverlay>
            <SpinnerContainer></SpinnerContainer>
        </SpinnerOverlay>
    ) : (
        <WrappedComponent {...otherProps} />
    );
};

export default WithSpinner