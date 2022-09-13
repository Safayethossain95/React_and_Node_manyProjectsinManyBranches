import { combineReducers } from 'redux'
import { plusminus } from './plusminus'

const rootReducers = combineReducers({
    jogbiyog:plusminus
})

export default rootReducers