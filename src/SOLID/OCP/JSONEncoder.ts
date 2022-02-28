import IEncoder from './IEncoder'

export default class JSONEncoder implements IEncoder {
  public encode (data: any): string {
    return JSON.stringify(data)
  }
}
