import {createStore,applyMiddleware,combineReducers} from "redux";
import news from "./reducers/news";
import home from "./reducers/home";
import sneaker from "./reducers/sneaker";
import details from "./reducers/details";
import reduxPromiseMiddleware from "redux-promise-middleware";
const reducers = combineReducers({
    news,
    home,
    sneaker,
    details

})
const store = createStore(reducers,applyMiddleware(reduxPromiseMiddleware()));
export default store;