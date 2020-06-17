import { createStore } from 'redux'
import cakeReducer from './cake/cakeReduces'

const store = createStore(cakeReducer)

export default store