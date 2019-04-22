import SymptomScreen from "./screen/SymptomScreen";
import headScreen from "./screen/SymptomHead/headScreen";
import headScreen1 from "./screen/SymptomHead/headScreen1";
import headScreen2 from "./screen/SymptomHead/headScreen2";
import headScreen3 from "./screen/SymptomHead/headScreen3";
import headScreen4 from "./screen/SymptomHead/headScreen4";
import headScreen10 from "./screen/SymptomHead/headScreen10";
import headScreen11 from "./screen/SymptomHead/headScreen11";
import headScreen12 from "./screen/SymptomHead/headScreen12";
import headScreen13 from "./screen/SymptomHead/headScreen13";
import bodyScreen from "./screen/SymptomBody/bodyScreen";
import bodyScreen1 from "./screen/SymptomBody/bodyScreen1";
import bodyScreen2 from "./screen/SymptomBody/bodyScreen2";
import bodyScreen3 from "./screen/SymptomBody/bodyScreen3";
import bodyScreen4 from "./screen/SymptomBody/bodyScreen4";

export const SYMPTOM_SCREEN = 'SYMPTOM_SCREEN';
export const HEADSYM_SCREEN = 'HEADSYM_SCREEN';
export const HEAD_SCREEN1 = 'HEAD_SCREEN1';
export const HEAD_SCREEN2 = 'HEAD_SCREEN2';
export const HEAD_SCREEN3 = 'HEAD_SCREEN3';
export const HEAD_SCREEN4 = 'HEAD_SCREEN4';
export const HEAD_SCREEN10 = 'HEAD_SCREEN10';
export const HEAD_SCREEN11 = 'HEAD_SCREEN11';
export const HEAD_SCREEN12 = 'HEAD_SCREEN12';
export const HEAD_SCREEN13 = 'HEAD_SCREEN13';
export const BOBY_SCREEN = 'BOBY_SCREEN';
export const BOBY_SCREEN1 = 'BOBY_SCREEN1';
export const BOBY_SCREEN2 = 'BOBY_SCREEN2';
export const BOBY_SCREEN3 = 'BOBY_SCREEN3';
export const BOBY_SCREEN4 = 'BOBY_SCREEN4';


export const SymptomRouter = {
    [SYMPTOM_SCREEN]: {
        screen: SymptomScreen
    },
    [HEADSYM_SCREEN]: {
        screen: headScreen
    },
    [HEAD_SCREEN1]: {
        screen: headScreen1
    },
    [HEAD_SCREEN2]: {
        screen: headScreen2
    },
    [HEAD_SCREEN3]: {
        screen: headScreen3
    },
    [HEAD_SCREEN4]: {
        screen: headScreen4
    },
    [HEAD_SCREEN10]: {
        screen: headScreen10
    },
    [HEAD_SCREEN11]: {
        screen: headScreen11
    },
    [HEAD_SCREEN12]: {
        screen: headScreen12
    },
    [HEAD_SCREEN13]: {
        screen: headScreen13
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
