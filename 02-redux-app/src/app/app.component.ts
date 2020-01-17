import { Component } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import * as Actions from './contador/contador.actions';
import { AppState } from './app.reducers';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    contador: number;

    constructor(
        private store: Store<AppState>
    ) {
        this.store.select('contador').subscribe(state => {
            this.contador = state;
        });
    }

    incrementar() {
        const accion = new Actions.IncrementarAction();
        this.store.dispatch(accion);
    }
    decrementar() {
        if (this.contador - 1 < 0) {
            return;
        }
        const accion = new Actions.DecrementarAction();

        this.store.dispatch(accion);
    }

}
