import IUserProvider from './IUserProvider'

export default class Auth {
    private userProvider:IUserProvider

    constructor (userProvider:IUserProvider) {
      this.userProvider = userProvider
    }

    public check (username:string, password:string): boolean {
      const userExists = this.userProvider.findUser(username)
      if (!userExists) {
        throw new Error('User does not exist')
      }
      return true
    }
}
