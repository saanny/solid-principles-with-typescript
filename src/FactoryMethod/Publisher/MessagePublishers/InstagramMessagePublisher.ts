import MessagePublisher from '../MessagePublisher'
import Publisher from '../Publisher'
import InstagramPublisher from '../Publishers/InstagramPublisher'

export default class InsagramMessagePublisher extends MessagePublisher {
  public createPublisher (): Publisher {
    return new InstagramPublisher()
  }
}
