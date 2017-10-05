import * as React from "react";
import {Link} from "react-router-dom"
import {UserState} from "../../store/User/UserStore";
import {User} from "../../domain/User/User";
import {appContext} from "../../context";
import FetchUserListUseCase from "../../usecase/User/FetchUserListUseCase";

interface UserListProps {
    user: UserState
}

export class UserList extends React.Component<UserListProps, {}> {
    constructor(props: UserListProps) {
        super(props);
    }

    componentWillMount() {
        this._onFetch();
    }

    _onFetch = () => {
        appContext.useCase(new FetchUserListUseCase()).execute();
    };

    render() {
        const state = this.props.user;
        return (
            <div>
                <ul>
                    {state.userList.map((u: User) => {
                        return <li key={u.id}><Link to={"/user/" + u.id}>{u.nickname}</Link></li>
                    })}
                </ul>
                <button onClick={this._onFetch}>Push</button>
            </div>
        );
    }
}
