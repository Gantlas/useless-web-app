import { actionTypes } from "../actions";

/**
 * 1) Начальный стейт уже создан. В эту переменную нужно положить
 * результат запроса на получение списка пользователей
 * */
const initialState = {
  users: [],
  errors: "",
};

/**
 * 2) В редьюсере нужно выполнить присвоение action.payload в users. В action.payload
 * нужно положить список пользователей из запроса.
 */
const UsersRedcuer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_USERS_SUCCESS: {
      return {
        ...state,
        users: action.payload,
      };
    }

    case actionTypes.GET_USERS_FAILURE: {
      return {
        ...state,
        errors: action.payload,
      };
    }

    default:
      return state;
  }
};

export default UsersRedcuer;
