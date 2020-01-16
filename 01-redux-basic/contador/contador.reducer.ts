import { Action } from "../ngrx-fake/ngrx";
import * as typesExample from '../types/types';

export function contadorReducer( state = 10, action: Action ) {
    
    // if (action.type === 'INCREMENTAR') {

    //     return state += 1;

    // }

    switch (action.type) {

        case typesExample.INCREASE: {
            return state += 1;
        }

        case typesExample.DECREASE: {
            return state -= 1;
        }

        case typesExample.MULTIPLY: {
            return state * action.payload;
        }

        case typesExample.DIVIDE: {
            return state / action.payload;
        }

        default: {
            return state;
        }
    }

}