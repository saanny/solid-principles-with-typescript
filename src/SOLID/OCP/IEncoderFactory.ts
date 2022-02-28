import IEncoder from './IEncoder'

export default interface IEncoderFactory {
    createEncoder (format:string):IEncoder;
}
