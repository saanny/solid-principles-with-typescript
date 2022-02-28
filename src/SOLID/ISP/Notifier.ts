export default interface Notifier {
    sendSms(message:string): void;
    sendEmail(message:string): void;
    sendPushNotification(message:string): void;
}
