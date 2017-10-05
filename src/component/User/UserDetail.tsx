import * as React from "react";
import {UserState} from "../../store/User/UserStore";
import {appContext} from "../../context";
import FetchUserDetailUseCase from "../../usecase/User/FetchUserDetailUseCase";
import {match} from "react-router";

interface UserDetailParams {
    id: string
}

interface UserDetailProps {
    user: UserState
    match?: match<UserDetailParams>
}

export class UserDetail extends React.Component<UserDetailProps, {}> {
    constructor(props: UserDetailProps) {
        super(props);
    }

    componentWillMount() {
        const params = this.props.match.params;
        appContext.useCase(new FetchUserDetailUseCase()).execute(params.id);
    }

    render() {
        const state = this.props.user;
        return (
            <div>
                <p>{state.user.id}</p>
                <p>{state.user.nickname}</p>
            </div>
        );
    }
}
