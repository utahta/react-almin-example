import {DispatchedPayload, Store} from "almin";
import {User} from "../../domain/User/User";

export class UserState {
    user: User;
    userList: User[];

    constructor(user?: User, userList?: User[]) {
        this.user = !user ? new User() : user;
        this.userList = !userList ? [] : userList;
    }

    reduce(payload: {type: string, user?: User, userList?: User[]}) {
        switch (payload.type) {
            case "user":
                return new UserState(payload.user, payload.userList);
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
