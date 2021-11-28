import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { animals } from './animals';
import { shoppingPartners } from './shoppingPartners';
import { partners } from './partners';
import { favorites } from './favorites';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            animals,
            shoppingPartners,
            partners,
            favorites
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}