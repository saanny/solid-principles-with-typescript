import MessagePublisher from '../MessagePublisher'
import Publisher from '../Publisher'
import TwitterPublisher from '../Publishers/TwitterPublisher'
export default class TwitterMessagePublisher extends MessagePublisher {
  public createPublisher (): Publisher {
    return new TwitterPublisher()
  }
}
