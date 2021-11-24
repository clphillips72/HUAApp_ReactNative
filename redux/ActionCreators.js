import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const fetchAnimals = () => dispatch => {

    dispatch(animalsLoading());

    return fetch(baseUrl + 'animals')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            })
        .then(response => response.json())
        .then(animals => dispatch(addAnimals(animals)))
        .catch(error => dispatch(animalsFailed(error.message)));
};

export const animalsLoading = () => ({
    type: ActionTypes.ANIMALS_LOADING
});

export const animalsFailed = errMess => ({
    type: ActionTypes.ANIMALS_FAILED,
    payload: errMess
});

export const addAnimals = animals => ({
    type: ActionTypes.ADD_ANIMALS,
    payload: animals
});

export const fetchShoppingPartners = () => dispatch => {
    
    dispatch(shoppingPartnersLoading());

    return fetch(baseUrl + 'shoppingPartners')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            })
        .then(response => response.json())
        .then(shoppingPartners => dispatch(addShoppingPartners(shoppingPartners)))
        .catch(error => dispatch(shoppingPartnersFailed(error.message)));
};

export const shoppingPartnersLoading = () => ({
    type: ActionTypes.SHOPPING_PARTNERS_LOADING
});

export const shoppingPartnersFailed = errMess => ({
    type: ActionTypes.SHOPPING_PARTNERS_FAILED,
    payload: errMess
});

export const addShoppingPartners = shoppingPartners => ({
    type: ActionTypes.ADD_SHOPPING_PARTNERS,
    payload: shoppingPartners
});

export const fetchPartners = () => dispatch => {
    
    dispatch(partnersLoading());

    return fetch(baseUrl + 'partners')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            })
        .then(response => response.json())
        .then(partners => dispatch(addPartners(partners)))
        .catch(error => dispatch(partnersFailed(error.message)));
};

export const partnersLoading = () => ({
    type: ActionTypes.PARTNERS_LOADING
});

export const partnersFailed = errMess => ({
    type: ActionTypes.PARTNERS_FAILED,
    payload: errMess
});

export const addPartners = partners => ({
    type: ActionTypes.ADD_PARTNERS,
    payload: partners
});