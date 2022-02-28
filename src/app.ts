import express, { Express } from 'express'
export default class Application {
    private app:Express

    constructor () {
      this.app = express()
    }

    public run (port:number):void {
      this.app.listen(port, () => {
        console.log(`App is running on port ${port}`)
      })
    }
}
