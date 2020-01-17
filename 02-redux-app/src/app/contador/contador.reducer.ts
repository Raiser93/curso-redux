import * as ActionOperator from './contador.actions';
import {  actions } from './contador.actions';

export function contadorReducer(state: number = 10, action: actions) {
    switch (action.type) {
        case ActionOperator.INCREMENTAR: {
            return state + 1;
        }
        case ActionOperator.DECREMENTAR: {
            return state - 1;
        }
        case ActionOperator.MULTIPLICAR: {
            return state * action.payload;
        }
        case ActionOperator.DIVIDIR: {
            return state / action.payload;
        }
        case ActionOperator.RESET: {
            return 0;
        }
        default: {
            return state;
        }
    }
}
