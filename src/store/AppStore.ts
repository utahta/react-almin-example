import {StoreGroup} from "almin";
import UserStore from "./User/UserStore";

export const appStore = new StoreGroup({
    user: new UserStore()
});
