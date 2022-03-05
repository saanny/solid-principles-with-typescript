import Account from './Account'
import CustormerAccount from './CustomerAccount'
import User from './User'

export default abstract class AccountCreator {
    public abstract createAccount(): Account;
    public registerAccount (user: User, balance:number): CustormerAccount {
      const account:Account = this.createAccount()
      if (balance < account.minimumBalance()) {
        throw new Error('Balance is too low')
      }
      const custormerAccount = new CustormerAccount(user, account.interestRate(), balance)
      custormerAccount.save()
      return custormerAccount
    }
}
