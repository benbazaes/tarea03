import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import counterReducer from './module/counter'
import pokemonReducer from './module/pokemon'

const rootReducer = combineReducers({
    counter: counterReducer,
    pokemon: pokemonReducer,
})

const store = createStore(rootReducer, applyMiddleware(logger))

export default store
