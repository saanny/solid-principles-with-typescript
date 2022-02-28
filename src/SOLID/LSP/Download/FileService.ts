import IFile from './IFile'
import IFilewITHOwner from './IFileWithOwner'

export default class FileService {
  public excute (file:IFile):void {
    file.move('/home/user/Desktop/')
  }

  public operation (file:IFilewITHOwner):void {
    file.changeOwner('user')
  }
}
