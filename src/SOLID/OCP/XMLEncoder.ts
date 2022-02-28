import IEncoder from './IEncoder'

export default class XMLEncoder implements IEncoder {
  public encode (data:any):string {
    return `<data>${data}</data>`
  }
}
