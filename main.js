import { QLtheme } from "./src/utils/themeInit.js";
import { Log } from "./src/themes/Dark.js";
// Here added component/theme to pass data and print
/* 
    Taking react initialization from QLtheme object added reactDOM etc...
    In Log obj added exact component
*/
export const console = {
    log: (atr) => QLtheme(Log(atr, 'log'))
};