import {
  GET_MENU_LIST,
  SET_ACTIVE_MENU_ID,
  GET_TECHNOLOGY_LIST,
} from '../types/commonType';
import MenuList from '../json/menu.json';
import TechnologyList from '../json/technology.json';

// 메뉴리스트가져오기 액션
export const getMenuList = () => ({
  type: GET_MENU_LIST,
  menuList: MenuList,
});
// 활성메뉴ID설정 액션
export const setActiveMenuId = (menuId) => ({
  type: SET_ACTIVE_MENU_ID,
  menuId,
});
// 기술리스트가져오기 액션
export const getTechnologyList = () => ({
  type: GET_TECHNOLOGY_LIST,
  technologyList: TechnologyList,
});