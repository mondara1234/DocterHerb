import HomeScreen from "./screen/HomeScreen";
import ListHerbScreen from "./screen/ListHerbScreen";

export const HOME_SCREEN = 'HOME_SCREEN';
export const LISTHERB_SCREEN = 'LISTHERB_SCREEN';

export const HomeRouter = {
    [HOME_SCREEN]: {
        screen: HomeScreen
    },
    [LISTHERB_SCREEN]: {
        screen: ListHerbScreen
    }
};
