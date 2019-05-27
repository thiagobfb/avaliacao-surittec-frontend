import { combineReducers } from 'redux';
import ClienteReducer from '../cliente/clienteReducer'
import ModalReducer from '../common/modal/modalReducer'
import AuthReducer from '../auth/authReducer'
import { reducer as reduxForm } from 'redux-form';
import { reducer as toastrReducer } from 'react-redux-toastr'

const rootReducer = combineReducers({
    cliente: ClienteReducer,
    form:reduxForm,
    toastr: toastrReducer,
    modal: ModalReducer,
    // auth: AuthReducer
});

export default rootReducer;