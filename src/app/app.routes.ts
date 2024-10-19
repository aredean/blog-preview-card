import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path : '',
        redirectTo : 'card-example',
        pathMatch : 'full'
    },
    {
        path : 'card-example',
        loadComponent: ()=> import('./pages/card-sample/card-sample.component').then(m => m.CardSampleComponent)
    },
    {
        path : 'blog-preview-card',
        loadComponent: ()=> import('./components/blog-preview-card/blog-preview-card.component').then(m => m.BlogPreviewCardComponent)
    },
    {
        path : '**',
        redirectTo : 'card-example'
    }
];
