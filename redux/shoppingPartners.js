import * as ActionTypes from './ActionTypes';

export const shoppingPartners = (state = { isLoading: true,
                                    errMess: null,
                                    shoppingPartners: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_SHOPPING_PARTNERS:
            return {...state, isLoading: false, errMess: null, shoppingPartners: action.payload};

        case ActionTypes.SHOPPING_PARTNERS_LOADING:
            return {...state, isLoading: true, errMess: null, shoppingPartners: []}

        case ActionTypes.SHOPPING_PARTNERS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};