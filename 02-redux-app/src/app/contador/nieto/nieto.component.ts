import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import * as Actions from '../contador.actions';

@Component({
    selector: 'app-nieto',
    templateUrl: './nieto.component.html',
    styles: []
})
export class NietoComponent implements OnInit {

    contador: number;

    constructor(
        private store: Store<AppState>
    ) {}

    ngOnInit() {
        this.store.select('contador').subscribe(state => {
            this.contador = state;
        });
    }

    reset() {
        const accion = new Actions.ResetAction();

        this.store.dispatch(accion);
    }

}
