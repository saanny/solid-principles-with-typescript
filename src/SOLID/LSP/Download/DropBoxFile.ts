import IFile from './IFile'

export default class DropBoxFile implements IFile {
  rename (newName: string): void {
    throw new Error('Method not implemented.')
  }

  copy (path:string):void {
    throw new Error('Method not implemented.')
  }

  move (path:string):void {
    throw new Error('Method not implemented.')
  }
}
