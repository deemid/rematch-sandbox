import { init } from '@rematch/core'
import * as models from '../models'
import { connectRouter, routerMiddleware } from "connected-react-router"
import {createBrowserHistory} from "history"
export const history = createBrowserHistory()

const reducers = { router: connectRouter(history) }

const store = init({
  models,
  redux: {
    reducers,
    middlewares: [routerMiddleware(history)],
    devtoolOptions: {}
  }
})

export default store