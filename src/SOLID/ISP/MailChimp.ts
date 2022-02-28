import EmailProvider from './EmailProvider'
export default class MailChimp implements EmailProvider {
  sendEmail (message:string): void {
    throw new Error('Method not implemented.')
  }
}
