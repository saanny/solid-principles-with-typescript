import SmsProvider from './SmsProvider'

export default class Service {
  public operation (provider:SmsProvider):void {
    provider.sendSms('Hello world')
  }
}
