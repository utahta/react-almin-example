
class AdminApiClient {
    get(path: string, query?: string) {
        // stub
        switch (path) {
            case "/users":
                return `[{"id":1, "nickname":"tom"}, {"id":2, "nickname":"bob"}]`;

            case "/user/1":
                return `{"id":1, "nickname":"tom"}`;

            case "/user/2":
                return `{"id":2, "nickname":"bob"}`;

            default:
                return "";
        }
    }
}

export const adminApiClient = new AdminApiClient();