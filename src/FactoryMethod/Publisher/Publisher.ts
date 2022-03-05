import Message from './Message'

export default interface Publisher {
    publish (message: Message): void;
}
