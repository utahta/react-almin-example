import {UseCase} from "almin";
import {parseUser} from "../../domain/User/User";
import {adminApiClient} from "../../infra/api/AdminApiClient";

export default class FetchUserDetailUseCase extends UseCase {
    execute(id: string) {
        const resp = adminApiClient.get("/user/"+id);
        this.dispatch({
            type: "user",
            user: parseUser(resp)
        });
    }
}
