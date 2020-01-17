import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './pages/home';
import {PhonemeCategoriesComponent} from './pages/phoneme-categories';
import {ListComponent} from './pages/phoneme-list-all';
import {AComponent} from './pages/phonemes/a';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'phoneme-categories', component: PhonemeCategoriesComponent },
    { path: 'phoneme-list-all', component: ListComponent },
    { path: 'a', component: AComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);
