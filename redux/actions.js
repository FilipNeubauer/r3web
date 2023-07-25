export const SET_USER_NAME = "SET_LANGUAGE";

export const setUserName = name => dispatch => {
    dispatch({
        type: SET_LANGUAGE,
        payload: language,
    });
};


// getting redux
// const {name, email, phone, location, trainer} = useSelector(state=> state.userReducer)