import IDispatcher from './IDispatcher'
import UserRegisterParams from './UserRegisterParams'

export default class UserService {
    private _dispatcher: IDispatcher;
    constructor (dispatcher: IDispatcher) {
      this._dispatcher = dispatcher
    }

    public register (params:UserRegisterParams): void {
      this._dispatcher.dispatch('user_register', {
        email: params.email,
        password: params.password,
        firstName: params.firstName
      })
    }
}
