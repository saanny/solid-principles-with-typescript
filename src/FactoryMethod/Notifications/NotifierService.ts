import Alert from "./Alert";
import Notifier from "./Notifier";

export default abstract class NotifierService {
    public abstract createNotifier(): Notifier;
    public notify(alert: Alert): void {
        const notifier: Notifier = this.createNotifier();
        notifier.notify(alert);
    }
}