import HerbScreen from "./screen/HerbScreen";
import DetailHerb from "./screen/DetailHerb";

export const HERB_SCREEN = 'HERB_SCREEN';
export const DETAILHERB_SCREEN = 'DETAILHERB_SCREEN';

export const HerbRouter = {
    [HERB_SCREEN]: {
        screen: HerbScreen
    },
    [DETAILHERB_SCREEN]: {
        screen: DetailHerb
    }
};
