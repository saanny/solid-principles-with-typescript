import Request from './Request';

export default class RequestBuilder {
    private _url: string;
    private _method = 'Get'
    private _headers = {}
    private _body = {}
    private _agent = 'default'

    public static aRequest(): RequestBuilder {
        return new RequestBuilder()
    }

    public withUrl(url: string) {
        this._url = url
        return this
    }

    public withMethod(method: string) {
        this._method = method
        return this
    }

    public withBody(agent: string) {
        this._agent = agent
        return this
    }

    public build(): Request {
        return new Request(this._url, this._method, this._headers, this._body, this._agent)
    }
}
