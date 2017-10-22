import * as React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom"
import {appStore} from "../store/AppStore";
import {appContext} from "../context";
import {UserList} from "./User/UserList";
import {UserDetail} from "./User/UserDetail";

interface AppProps {}

type AppState = typeof appStore.state;

export class App extends React.Component<AppProps, AppState> {
    releaseChange: () => void;

    constructor(props: AppProps) {
        super(props);
        this.state = appContext.getState();
    }

    componentWillMount() {
        this.releaseChange = appContext.onChange(() => {
            this.setState(appContext.getState());
        });
    }

    componentWillUnmount() {
        this.releaseChange();
    }

    render() {
        return (
            <Router>
                <div>
                    <p><Link to="/users">Users</Link></p>

                    <Route path="/user/:id" render={(props) => <UserDetail user={this.state.user} {...props} />} />
                    <Route path="/users" render={(props) => <UserList user={this.state.user} {...props} />} />
                </div>
            </Router>
        );
    }
}
