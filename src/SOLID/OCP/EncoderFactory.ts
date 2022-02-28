import IEncoder from './IEncoder'
import IEncoderFactory from './IEncoderFactory'
import IEncoderFactoryConfig from './IEncoderFactoryConfig'

export default class EncoderFactory implements IEncoderFactoryConfig, IEncoderFactory {
 private encoders:Map<string, IEncoder> =new Map<string, IEncoder>()

 public addEncoder (format:string, encoder: IEncoder):void {
   this.encoders.set(format, encoder)
 }

 public createEncoder (format:string): IEncoder {
   if (!this.encoders.has(format)) {
     throw new Error(`Encoder for format ${format} not found`)
   }
   return this.encoders.get(format) as IEncoder
 }
}
