import User from './User'

export default class UserController {
  public increaseWallet (amount:number):void {
    const user:User = new User('John', 'Doe')

    user.increaseWallet(amount)
  }
}
