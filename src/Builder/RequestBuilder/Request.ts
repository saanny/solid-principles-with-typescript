export default class Request {
    private _url: string;
    private _method: string;
    private _headers: object;
    private _body: object;
    private _agent: string;

    constructor(url: string, method: string, headers: object, body: object, agent: string) {
        this._url = url
        this._method = method
        this._headers = headers
        this._body = body
        this._agent = agent
    }
}
