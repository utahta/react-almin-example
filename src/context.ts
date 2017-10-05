import {Context, Dispatcher} from "almin";
import {appStore} from "./store/AppStore";

const dispatcher = new Dispatcher();

export const appContext = new Context({
    dispatcher,
    store: appStore
});
