import SmsProvider from './SmsProvider'

export default class Sms implements SmsProvider {
  sendSms (message: string): void {
    throw new Error('Method not implemented.')
  }
}
