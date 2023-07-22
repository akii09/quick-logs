import { QLtheme } from "./src/utils/themeInit.js";
import { Log } from "./src/themes/Dark.js";
import {console} from "./src/logsLogic.js";

export const console = {
    log: (atr) => QLtheme(Log(atr))
};