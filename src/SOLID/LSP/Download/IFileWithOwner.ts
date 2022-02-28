import IFile from './IFile'

export default interface IFilewITHOwner extends IFile {
    changeOwner(newOwner: string): void;
}
