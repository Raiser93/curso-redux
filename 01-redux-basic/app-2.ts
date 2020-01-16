import { Action } from "./ngrx-fake/ngrx";
import * as typesExample from './types/types';
import * as contadorActions from './contador/contador.actions';

function reducer( state = 10, action: Action ) {
    
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

let result = reducer(10, contadorActions.incrementadorAction); // 11

console.log(result);

result = reducer(result, contadorActions.decrementadorAction); // 10

console.log(result);

result = reducer(result, contadorActions.multiplicarAction); // 20

console.log(result);

result = reducer(result, contadorActions.dividirAction); // 10

console.log(result);