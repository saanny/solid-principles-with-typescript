import IFileWithOwner from './IFileWithOwner'

export default class LocalFile implements IFileWithOwner {
  rename (newName: string): void {
    throw new Error('Method not implemented.')
  }

  copy (path: string): void {
    throw new Error('Method not implemented.')
  }

  move (path: string): void {
    throw new Error('Method not implemented.')
  }

  changeOwner (newOwner: string): void {
    throw new Error('Method not implemented.')
  }
}
