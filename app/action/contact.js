export const loadContacts = () => {
    return (dispatch) => {
        dispatch(loadingContacts());
        fetch('http://www.mocky.io/v2/5a01c6a83300005002f6ed66')
            .then(response => response.json())
            .then(data => {
                if (data.length !== 0){
                    return dispatch(loadContactsSuccess(data));
                } else {
                    dispatch(loadContactsFailure());
                }
            }).catch(
            dispatch(loadContactsFailure())
        );
    }
};

const loadingContacts = () => ({
    type: 'LOAD_CONTACTS',
    isLoading: true,
});

const loadContactsSuccess = (data) => ({
    type: 'LOAD_CONTACTS_SUCCESS',
    data,
    isLoading: false,
});

const loadContactsFailure = () => ({
    type: 'LOAD_CONTACTS_FAILURE',
    isLoading: false,
});