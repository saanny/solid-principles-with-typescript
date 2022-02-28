import IEncoder from './IEncoder'

export default interface IEncoderFactoryConfig {
    addEncoder (format:string, encoder: IEncoder):void;
}
