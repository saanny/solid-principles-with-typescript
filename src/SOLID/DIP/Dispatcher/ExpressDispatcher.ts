import IDispatcher from './IDispatcher'

export default class ExpressDispatcher implements IDispatcher {
  public dispatch (event: string, payload:object): void {
    console.log(`Dispatching event ${event} with payload ${JSON.stringify(payload)}`)
  }
}
