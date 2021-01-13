import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList192558Navigator from '../features/ArticleList192558/navigator';
import ArticleList192557Navigator from '../features/ArticleList192557/navigator';
import ArticleList192556Navigator from '../features/ArticleList192556/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList192558: { screen: ArticleList192558Navigator },
ArticleList192557: { screen: ArticleList192557Navigator },
ArticleList192556: { screen: ArticleList192556Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
