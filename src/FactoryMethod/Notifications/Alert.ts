export default class Alert {
    private _message: string;
    private _level: string;

    constructor(message: string, level: string) {

    }

    public message(): string {
        return this._message;
    }
    public level(): string {
        return this._level
    }

}