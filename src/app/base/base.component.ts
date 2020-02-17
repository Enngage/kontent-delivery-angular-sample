import { Directive, OnDestroy, OnInit, ChangeDetectorRef } from '@angular/core';
import { KontentService } from 'src/kontent/kontent-service';
import { takeUntil, take, catchError } from 'rxjs/operators';
import { of, throwError, EMPTY, Subject, Observable, zip  } from 'rxjs';
import { BaseKontentError } from '@kentico/kontent-core';

@Directive()
// tslint:disable-next-line: directive-class-suffix
export abstract class BaseComponent implements OnInit, OnDestroy {
    /**
     * Needed to unsubscribe / cancel pending requests
     */
    protected ngUnsubscribe: Subject<void> = new Subject<void>();

    public networkError?: string;

    constructor(protected kontentService: KontentService, protected cdr: ChangeDetectorRef) {}

    ngOnInit(): void {}

    ngOnDestroy(): void {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }

    resolveObservable(observable: Observable<any>): void {
        this.resolveObservables([observable]);
    }

    resolveObservables(observables: Observable<any>[]): void {
        this.zipObservables(observables)
            .pipe(
                take(1),
                takeUntil(this.ngUnsubscribe),
                catchError(error => {
                    if (error instanceof BaseKontentError) {
                        this.networkError = `Network error: '${error.message}'. Request id: '${error.requestId}'`;
                        return EMPTY;
                    }

                    return throwError(error);
                })
            )
            .subscribe(() => {
                this.markForCheck();
            });
    }

    protected markForCheck(): void {
        this.cdr.markForCheck();
    }

    private zipObservables(observables: Observable<any>[]): Observable<any> {
        if (!observables || !Array.isArray(observables)) {
            throw Error(`Invalid input param`);
        }

        if (observables.length === 0) {
            // return empty/fake observable if there are none observables
            return of(undefined);
        }

        if (observables.length === 1) {
            return observables[0];
        }

        let zippedObservable: Observable<any> = observables[0];

        for (let i = 1; i < observables.length; i++) {
            const currentObservable = observables[i];
            zippedObservable = zip(zippedObservable, currentObservable);
        }

        return zippedObservable;
    }
}
