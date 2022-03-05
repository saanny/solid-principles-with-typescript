import Account from '../Account'
import AccountCreator from '../AccountCreator'
import SilverAccount from '../AccountTypes/SilverAccount'

export default class SilverAccountCreator extends AccountCreator {
  public createAccount (): Account {
    return new SilverAccount()
  }
}
