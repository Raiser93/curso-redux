import * as typesExample from './types/types';

// Acciones

interface Action {
    type: string;
    payload?: any;
}

// const incrementadorAction: Action = {
//     type: 'INCREMENTAR'
// };

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

// Usar reducer

const incrementadorAction: Action = {
    type: typesExample.INCREASE
};

let result = reducer(10, incrementadorAction); // 11

console.log(result);

const decrementadorAction: Action = {
    type: typesExample.DECREASE
};

result = reducer(result, decrementadorAction); // 10

console.log(result);

const multiplicarAction: Action = {
    type: typesExample.MULTIPLY,
    payload: 2
};

result = reducer(result, multiplicarAction); // 20

console.log(result);

const dividirAction: Action = {
    type: typesExample.DIVIDE,
    payload: 2
};

result = reducer(result, dividirAction); // 10

console.log(result);
