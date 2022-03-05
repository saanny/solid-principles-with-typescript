import Account from '../Account'
import AccountCreator from '../AccountCreator'
import GoldAccount from '../AccountTypes/GoldAccount'

export default class GoldAccountCreator extends AccountCreator {
  public createAccount (): Account {
    return new GoldAccount()
  }
}
