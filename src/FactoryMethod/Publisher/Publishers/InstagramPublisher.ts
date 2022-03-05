import Message from '../Message'
import Publisher from '../Publisher'

export default class InstagramPublisher implements Publisher {
  public publish (message: Message): void {
    console.log(`Instagram: ${message.title()} - ${message.image()} - ${message.content()}`)
  }
}
