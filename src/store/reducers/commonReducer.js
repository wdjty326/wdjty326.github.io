import {
  GET_MENU_LIST,
  GET_TECHNOLOGY_LIST,
  GET_PROJECT_LIST,
  GET_FUTURE_LIST,
} from '../types/commonType';

const initalState = {
  menuId: undefined,
  menuList: [],
  technologyList: [],
  projectList: [],
  futureList: [],
};

export default (state = initalState, action) => {
  const {
    type,
    menuList,
    technologyList,
    projectList,
    futureList,
  } = action;

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
    };
    case GET_PROJECT_LIST:
    return {
      ...state,
      ...{
        projectList,
      },
    };
    case GET_FUTURE_LIST:
    return {
      ...state,
      ...{
        futureList,
      },
    };
    default:
    return state;
  }
};