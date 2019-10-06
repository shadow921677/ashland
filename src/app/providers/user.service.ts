import {UserOptions} from "../interfaces/user-options";
import {Subject} from "rxjs/Subject";

export class userService {
    private users: UserOptions[] = [];
    userSubject = new Subject<UserOptions[]>();

    emitUsers() {
        this.userSubject.next(this.users.slice());
    }

    addUser(user: UserOptions) {
        this.users.push(user);
        this.emitUsers();
    }
}