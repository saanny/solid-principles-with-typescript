import ConfirmationMailFactory from './ConfirmationMailFactory'
import IMailer from './IMailer'
import Message from './Message'
import User from './User'

export default class ConfirmationMailMailer {
    private mailer:IMailer;
    private confirmationMailFactory:ConfirmationMailFactory;

    constructor (mailer:IMailer, confirmationMailFactory:ConfirmationMailFactory) {
      this.mailer = mailer
      this.confirmationMailFactory = confirmationMailFactory
    }

    public sentTo (user:User):void {
      const message:Message = this.createMessageFor(user)
      this.sendMessage(message)
    }

    private sendMessage (message:Message):void {
      this.mailer.send(message)
    }

    public createMessageFor (user:User):Message {
      return this.confirmationMailFactory.createMessageFor(user)
    }
}
