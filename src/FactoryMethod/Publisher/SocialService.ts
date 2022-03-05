import Message from './Message'
import MessagePublisher from './MessagePublisher'

export default class SocialService {
    private _publisher:MessagePublisher

    constructor (publisher:MessagePublisher) {
      this._publisher = publisher
    }

    public publish (message:Message):void {
      this._publisher.publish(message)
    }
}
