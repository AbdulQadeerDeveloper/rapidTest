import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import LoginAuthenticator from '../component/signin';
import { loginUser } from '../reducer/action';

const mapStateToProps = state => ({
    Loading: state.authReducer.isLoading,
    users: state.authReducer.user,
    isAuthenticated: state.authReducer.isAuthenticated,
    error: state.authReducer.error, 
});


const mapDispatchToProps = dispatch => (
    bindActionCreators({
        loginUser, 
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(LoginAuthenticator);
