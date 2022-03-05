export default class Message {
    private _title:string;
    private _image:string;
    private _content:string;

    constructor (title:string, body:string, content:string) {
      this._title = title
      this._image = body
      this._content = content
    }

    public title ():string {
      return this._title
    }

    public image ():string {
      return this._image
    }

    public content ():string {
      return this._content
    }
}
