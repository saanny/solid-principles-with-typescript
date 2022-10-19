import Alert from "./Alert";

export default interface Notifier {
    notify(alert: Alert): void;
}