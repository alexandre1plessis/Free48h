import Router from "@koa/router";
import * as Controllers from './controllers.js'

const root = new Router()

root.get('/', Controllers.getTickets)

export default root