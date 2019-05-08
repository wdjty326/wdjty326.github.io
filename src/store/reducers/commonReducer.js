import {
  GET_MENU_LIST,
} from '../types/commonType';

const initalState = {
  menuList: [],
};

export default (state = initalState, action) => {
  const { type, menuList } = action;

  switch(type) {
    case GET_MENU_LIST:
    return {
      menuList,
    };
    default:
    return state;
  }
};