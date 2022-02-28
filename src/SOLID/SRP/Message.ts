export default class Message {
    private subject:string;
    private body:string;
    private emailAddress:string;

    constructor (subject:string, body:string, emailAddress:string) {
      this.subject = subject
      this.body = body
      this.emailAddress = emailAddress
    }

    public getSubject ():string {
      return this.subject
    }

    public getBody ():string {
      return this.body
    }

    public getEmailAddress ():string {
      return this.emailAddress
    }
}
