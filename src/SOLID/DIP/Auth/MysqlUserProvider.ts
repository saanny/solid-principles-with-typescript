import IUserProvider from './IUserProvider'
import MysqlConnection from './MysqlConnection'

export default class MysqlUserProvider implements IUserProvider {
    private _connection: MysqlConnection
    constructor (connection: MysqlConnection) {
      this._connection = connection
    }

    public findUser (username: string): boolean {
      const result = this._connection.query(`SELECT * FROM users WHERE username = '${username}'`)
      return !!result
    }
}
