import Connection from './Connection'

export default class MysqlConnection implements Connection {
  public query (sql:string):string {
    return 'Mysql'
  }
}
