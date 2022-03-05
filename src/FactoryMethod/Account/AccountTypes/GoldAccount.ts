import Account from '../Account'

export default class GoldAccount implements Account {
  public interestRate (): number {
    return 0.20
  }

  public minimumBalance (): number {
    return 800000000
  }
}
