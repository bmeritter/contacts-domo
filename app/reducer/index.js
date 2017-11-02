import {combineReducers} from 'redux';

import {loadContacts} from './contacts';

export const rootReducer = combineReducers({
    contacts: loadContacts,
});