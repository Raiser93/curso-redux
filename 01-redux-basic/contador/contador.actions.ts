import * as typesExample from '../types/types';
import { Action } from '../ngrx-fake/ngrx';

export const incrementadorAction: Action = {
    type: typesExample.INCREASE
};

export const decrementadorAction: Action = {
    type: typesExample.DECREASE
};

export const multiplicarAction: Action = {
    type: typesExample.MULTIPLY,
    payload: 2
};

export const dividirAction: Action = {
    type: typesExample.DIVIDE,
    payload: 2
};