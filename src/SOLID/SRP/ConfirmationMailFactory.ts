import User from './User'
import ITemplateEngine from './ITemplateEngine'
import Itranslator from './ITranslator'
import Message from './Message'

export default class ConfirmationMailMailer {
    private templateEngine:ITemplateEngine;
    private translator:Itranslator;

    constructor (templateEngine:ITemplateEngine, translator:Itranslator) {
      this.templateEngine = templateEngine
      this.translator = translator
    }

    public createMessageFor (user:User):Message {
      const subject:string = this.translator.translate('confirmation_mail_subject')
      const body:string = this.templateEngine.render('confirmation_mail_body', {
        confirmationCode: user.getConfirmationCode()
      })
      return new Message(subject, body, user.getEmailAddress())
    }
}
