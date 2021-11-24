import * as ActionTypes from './ActionTypes';

export const animals = (state = { isLoading: true,
                                     errMess: null,
                                     animals: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_ANIMALS:
            return {...state, isLoading: false, errMess: null, animals: action.payload};

        case ActionTypes.ANIMALS_LOADING:
            return {...state, isLoading: true, errMess: null, animals: []}

        case ActionTypes.ANIMALS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
      }
};