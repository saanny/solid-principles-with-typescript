import Account from '../Account'
import AccountCreator from '../AccountCreator'
import GeneralAccount from '../AccountTypes/GeneralAccount'

export default class GeneralAccountCreator extends AccountCreator {
  public createAccount (): Account {
    return new GeneralAccount()
  }
}
