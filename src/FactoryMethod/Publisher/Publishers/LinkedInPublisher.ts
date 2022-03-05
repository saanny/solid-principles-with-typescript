import Message from '../Message'
import Publisher from '../Publisher'

export default class LinkedInPublisher implements Publisher {
  public publish (message: Message): void {
    console.log(`LinkedIn: ${message.title()} - ${message.image()} - ${message.content()}`)
  }
}
