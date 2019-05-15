import {
  GET_MENU_LIST,
  GET_TECHNOLOGY_LIST,
  GET_PROJECT_LIST,
} from '../types/commonType';

const initalState = {
  menuId: undefined,
  menuList: [],
  technologyList: [],
  projectList: [],
};

export default (state = initalState, action) => {
  const { type, menuId, menuList, technologyList, projectList } = action;

  switch(type) {
    case GET_MENU_LIST:
    return {
      ...state,
      ...{
        menuList,
      },
    };
    case GET_TECHNOLOGY_LIST:
    return {
      ...state,
      ...{
        technologyList,
      },
    }
    case GET_PROJECT_LIST:
    return {
      ...state,
      ...{
        projectList,
      },
    }
    default:
    return state;
  }
};