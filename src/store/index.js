import {createStore, applyMiddleware, compose} from 'redux'
import reducer from '../reducer/index'
import logger from '../middlewares/logger'
import randomId from '../middlewares/randomId'

const middlewares = [logger, randomId];
const enhancer = applyMiddleware(randomId)

const store = createStore(reducer, {}, enhancer)

//dev only
window.store = store

export default store
