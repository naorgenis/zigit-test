import * as actionTypeS from "../action/actionType";

const initialState = {
  token: null,
  userName: null,
  team: null,
  avatar: null,
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypeS.AUTH_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypeS.AUTH_SUCCESS:
      return {
        token: action.token,
        userName: action.userData.name,
        team: action.userData.Team,
        avatar: action.userData.avatar,
        loading: false,
      };
    case actionTypeS.AUTH_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
      };

    default:
      return state;
  }
};

export default reducer;
