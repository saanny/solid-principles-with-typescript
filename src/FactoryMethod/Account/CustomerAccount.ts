import User from './User'

export default class CustormerAccount {
    private _user: User;
    private _rate: number;
    private _balance:number;
    constructor (user: User, rate: number, balance: number) {
      this._user = user
      this._rate = rate
      this._balance = balance
    }

    public save () {
      console.log('saving account')
    }
}
