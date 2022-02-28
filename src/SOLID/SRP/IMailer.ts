import Message from './Message'
export default interface IMailer {
        send(message: Message): void;
}
