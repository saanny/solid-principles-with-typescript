import Message from '../Message'
import Publisher from '../Publisher'

export default class TwiterPublisher implements Publisher {
  public publish (message: Message): void {
    console.log(`Twitter: ${message.title()} - ${message.image()} - ${message.content()}`)
  }
}
