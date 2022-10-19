import Alert from "../Alert";
import Notifier from "../Notifier";

export default class TelegramNotifier implements Notifier {
    notify(alert: Alert): void {
        console.log('Telegram Notifier')
    }
}