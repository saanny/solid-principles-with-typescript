import Account from '../Account'

export default class SilverAccount implements Account {
  public interestRate (): number {
    return 0.15
  }

  public minimumBalance (): number {
    return 500000000
  }
}
