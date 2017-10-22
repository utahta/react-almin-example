import {DispatchedPayload, Store} from "almin";
import {User} from "../../domain/User/User";

export class UserState {
    user: User;
    userList: User[];

    constructor() {
        this.user = new User();
        this.userList = [];
    }

    reduce(payload: {type: string, user?: User, userList?: User[]}) {
        let state = new UserState();
        switch (payload.type) {
            case "user":
                state.user = payload.user;
                return state;
            case "userList":
                state.userList = payload.userList;
                return state;
            default:
                return this;
        }
    }
}

export default class UserStore extends Store {
    constructor() {
        super();
        this.state = new UserState();
    }

    receivePayload(payload: DispatchedPayload) {
        this.setState(this.state.reduce(payload));
    }

    getState() {
        return this.state
    }
}
