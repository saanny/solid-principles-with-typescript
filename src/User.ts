export default class User {
    private firstName:string;
    private lastName:string;
    private wallet:number =0;

    constructor (firstName:string, lastName:string) {
      this.firstName = firstName
      this.lastName = lastName
    }

    public increaseWallet (amount:number):void {
      if (amount <= 0) {
        throw new Error('Amount must be greater than 0')
      }
      this.wallet += amount
    }
}
