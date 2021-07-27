import SharesReducers, { LableReducers, NumberReducers} from './SharesReducers';
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
    SharesReducers, LableReducers, NumberReducers
})

export default rootReducer;