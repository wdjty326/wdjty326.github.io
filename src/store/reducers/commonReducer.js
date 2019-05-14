import {
  GET_MENU_LIST,
  SET_ACTIVE_MENU_ID,
  GET_TECHNOLOGY_LIST,
} from '../types/commonType';

const initalState = {
  menuId: undefined,
  menuList: [],
  technologyList: [],
};

export default (state = initalState, action) => {
  const { type, menuId, menuList, technologyList } = action;

  switch(type) {
    case GET_MENU_LIST:
    return {
      ...state,
      ...{
        menuList,
      },
    };
    case SET_ACTIVE_MENU_ID:
    return {
      ...state,
      ...{
        menuId,
      },
    };
    case GET_TECHNOLOGY_LIST:
    return {
      ...state,
      ...{
        technologyList,
      },
    }
    default:
    return state;
  }
};