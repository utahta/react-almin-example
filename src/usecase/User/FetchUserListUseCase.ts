import {UseCase} from "almin";
import {parseUserList} from "../../domain/User/User";
import {adminApiClient} from "../../infra/api/AdminApiClient";

export default class FetchUserListUseCase extends UseCase {
    execute() {
        const resp = adminApiClient.get("/users");
        this.dispatch({
            type: "user",
            userList: parseUserList(resp)
        });
    }
}
