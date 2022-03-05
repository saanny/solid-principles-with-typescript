import Account from '../Account'

export default class GeneralAccount implements Account {
  public interestRate (): number {
    return 0.01
  }

  public minimumBalance (): number {
    return 10000000
  }
}
