import SymptomScreen from "./screen/SymptomScreen";
import headScreen from "./screen/SymptomHead/headScreen";
import bodyScreen from "./screen/SymptomBody/bodyScreen";
import bodyScreen1 from "./screen/SymptomBody/bodyScreen1";
import bodyScreen2 from "./screen/SymptomBody/bodyScreen2";
import bodyScreen3 from "./screen/SymptomBody/bodyScreen3";
import bodyScreen4 from "./screen/SymptomBody/bodyScreen4";

export const SYMPTOM_SCREEN = 'SYMPTOM_SCREEN';
export const HEAD_SCREEN = 'HEAD_SCREEN';
export const BOBY_SCREEN = 'BOBY_SCREEN';
export const BOBY_SCREEN1 = 'BOBY_SCREEN1';
export const BOBY_SCREEN2 = 'BOBY_SCREEN2';
export const BOBY_SCREEN3 = 'BOBY_SCREEN3';
export const BOBY_SCREEN4 = 'BOBY_SCREEN4';


export const SymptomRouter = {
    [SYMPTOM_SCREEN]: {
        screen: SymptomScreen
    },
    [HEAD_SCREEN]: {
        screen: headScreen
    },
    [BOBY_SCREEN]: {
        screen: bodyScreen
    },
    [BOBY_SCREEN1]: {
        screen: bodyScreen1
    },
    [BOBY_SCREEN2]: {
        screen: bodyScreen2
    },
    [BOBY_SCREEN3]: {
        screen: bodyScreen3
    },
    [BOBY_SCREEN4]: {
        screen: bodyScreen4
    }
};
