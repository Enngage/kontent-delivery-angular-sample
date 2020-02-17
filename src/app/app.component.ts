import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ContentItem, ContentType, SortOrder, TaxonomyGroup } from '@kentico/kontent-delivery';
import { map } from 'rxjs/operators';
import { KontentService } from 'src/kontent/kontent-service';
import { Actor } from 'src/kontent/models/actor';
import { Movie } from 'src/kontent/models/movie';

import { BaseComponent } from './base/base.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent extends BaseComponent implements OnInit {
    readonly title = 'Kentico Kontent Angular Sample';

    public reloadedTimestamp?: string;
    public error?: string;
    private readonly actorType = 'actor';
    private readonly movieType = 'movie';

    public latestMovies?: Movie[];
    public actor?: Actor;
    public types?: ContentType[];
    public variousItems?: ContentItem[];
    public taxonomies?: TaxonomyGroup[];

    constructor(kontentService: KontentService, cdr: ChangeDetectorRef) {
        super(kontentService, cdr);
    }

    ngOnInit(): void {
        super.ngOnInit();
        this.loadData();
    }

    loadData(): void {
        this.setTimestamp();

        super.resolveObservables([
            // gets 'top 3' latest movies
            this.kontentService.deliveryClient
                .items<Movie>()
                .type(this.movieType)
                .limitParameter(3)
                .orderParameter('elements.title', SortOrder.desc)
                .toObservable()
                .pipe(
                    map(response => {
                        console.log(response.items);
                        this.latestMovies = response.items;
                    })
                ),
            // taxonomies
            this.kontentService.deliveryClient
                .taxonomies()
                .toObservable()
                .pipe(
                    map(response => {
                        console.log(response.taxonomies);
                        this.taxonomies = response.taxonomies;
                    })
                ),
            // get single item of 'Character' type
            this.kontentService.deliveryClient
                .item<Actor>('tom_hardy')
                .toObservable()
                .pipe(
                    map(response => {
                        console.log(response.item);
                        this.actor = response.item;
                    })
                ),
            this.kontentService.deliveryClient
                .types()
                .toObservable()
                .pipe(
                    map(response => {
                        console.log(response.types);
                        this.types = response.types;
                    })
                ),
            this.kontentService.deliveryClient
                .items<ContentItem>()
                .toObservable()
                .pipe(
                    map(response => {
                        console.log(response.items);
                        this.variousItems = response.items;
                    })
                )
        ]);
    }

    private setTimestamp(): void {
        this.reloadedTimestamp = new Date().toLocaleString();
    }

    getTaxonomyTerms(taxonomy: TaxonomyGroup): string {
        return taxonomy.terms.map(term => term.name).join(', ');
    }
}
