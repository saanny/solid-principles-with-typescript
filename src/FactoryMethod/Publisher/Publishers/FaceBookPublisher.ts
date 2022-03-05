import Message from '../Message'
import Publisher from '../Publisher'

export default class FaceBookPublisher implements Publisher {
  public publish (message: Message): void {
    console.log(`Facebook: ${message.title()} - ${message.image()} - ${message.content()}`)
  }
}
