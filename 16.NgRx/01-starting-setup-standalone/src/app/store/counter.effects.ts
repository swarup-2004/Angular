import { Actions, createEffect, ofType } from "@ngrx/effects";
import { decrement, increment } from "./counter.action";
import { tap, withLatestFrom } from "rxjs";
import { Store } from "@ngrx/store";
import { selectCount } from "./counter.selector";
import { Injectable } from "@angular/core";

@Injectable()
export class CounterEffects {
    



    saveCount = createEffect(() => this.actions$.pipe(
        ofType(increment, decrement),
        withLatestFrom(this.store.select(selectCount)),
        tap(([action, counter]) => {
            console.log(counter);
            localStorage.setItem('count', counter.toString());
        })

    ), {dispatch: false});

    constructor(private actions$: Actions, private store: Store<{counter: number}>) {}
}