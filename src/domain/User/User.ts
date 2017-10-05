export class User {
    id: number;
    nickname: string;

    static fromJSON(obj: any) {
        let u = new User();
        u.id = obj.id;
        u.nickname = obj.nickname;
        return u;
    }
}

export function parseUser(json: string): User {
    return User.fromJSON(JSON.parse(json));
}

export function parseUserList(json: string): User[] {
    const data = JSON.parse(json);
    return data.map((obj: any) => {
        return User.fromJSON(obj);
    });
}
