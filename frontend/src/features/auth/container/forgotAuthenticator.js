import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import ForgotAuthenticator from '../component/forgotPassword';
import { forgotPassword } from '../reducer/action';

const mapStateToProps = state => ({
    Loading: state.authReducer.isLoading,
    users: state.authReducer.user,
    isAuthenticated: state.authReducer.isAuthenticated,
    error: state.authReducer.error, 
});

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        forgotPassword, 
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(ForgotAuthenticator);
