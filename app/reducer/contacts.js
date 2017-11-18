// http://www.mocky.io/v2/5a01c6a83300005002f6ed66
export const loadContacts = (state = {}, action) => {
        switch (action.type) {
            case 'LOAD_CONTACTS':
                return { ...action, data: state.data };
            case 'LOAD_CONTACTS_SUCCESS':
                return { data: [...state.data || [], ...action.data], isLoading: action.isLoading };
            case 'LOAD_CONTACTS_FAILURE':
                return { isLoading: action.isLoading, data: state.data };
            default:
                return state;
        }

    }
;