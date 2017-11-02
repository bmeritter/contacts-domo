import contacts from '../data/fixture';

export const loadContacts = (state = contacts, action) => {
    switch (action.type) {
        case 'LOAD_CONTACTS':
            return [...state, ...contacts];
        default:
            return state;
    }

};