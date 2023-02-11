// importation
import {LOAD_CONTACT, SUCC_CONTACT, FAIL_CONTACT, ONE_CONTACT} from '../ActionTypes/contact';

//initialState
const initialState = {
    contactList: [],
    errors: null,
    load: false,
    contactToGet: {},

}

// pure function 
const contactReducer = (state = initialState, {type, payload}) => {
switch (type) {
    case LOAD_CONTACT:
        return {...state, load: true};
    case SUCC_CONTACT:
        return {...state, load: false, contactList: payload.contactList};
    case FAIL_CONTACT:
        return {...state, load: false, errors: payload};
    case ONE_CONTACT:
        return {...state, load: false, contactToGet: payload.contactToGet}    
        default:
            return state;
}
}


export default contactReducer;