export default interface IFile {
    rename(newName: string): void;

    copy(path:string):void;

    move(path:string):void;

}
