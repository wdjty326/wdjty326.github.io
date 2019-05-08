import {
  GET_MENU_LIST,
} from '../types/commonType';
import MenuList from '../json/menu.json';

// 메뉴리스트가져오기 액션
export const getMenuList = () => ({
  type: GET_MENU_LIST,
  menuList: MenuList,
});