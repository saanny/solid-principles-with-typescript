import PushProvider from './PushProvider'

export default class Pusher implements PushProvider {
  sendPushNotification (message: string): void {
    throw new Error('Method not implemented.')
  }
}
