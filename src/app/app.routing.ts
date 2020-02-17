import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './pages/home';
import {PhonemeCategoriesComponent} from './pages/phoneme-categories';
import {PhonemeListAllComponent} from './pages/phoneme-list-all';
import {PhonemeListVowelsComponent} from './pages/phoneme-list-vowels';
import {PhonemeListConsonantsComponent} from './pages/phoneme-list-consonants';
import {PhonemeListConsonantBlendsComponent} from './pages/phoneme-list-consonantblends';
import {PhonemeListVowelBlendsComponent} from './pages/phoneme-list-vowelblends';
import {PhonemeListVowelsConsonantsComponent} from './pages/phoneme-list-vowelsconsonants';
import { AlphabetListAllComponent } from './pages/alphabet-list-all/alphabet-list-all.component';
import { AlphabetLearnComponent } from './pages/alphabet-learn/alphabet-learn.component';
import { PhonemeLearnComponent } from './pages/phoneme-learn';
import { PhonemeQuizComponent } from './pages/phoneme-quiz';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'phoneme-categories', component: PhonemeCategoriesComponent },
    { path: 'alphabet-list-all', component: AlphabetListAllComponent },
    { path: 'alphabet-learn', component: AlphabetLearnComponent },
    { path: 'phoneme-list-all', component: PhonemeListAllComponent },
    { path: 'phoneme-list-vowels', component: PhonemeListVowelsComponent},
    { path: 'phoneme-list-consonants', component: PhonemeListConsonantsComponent},
    { path: 'phoneme-list-consonantblends', component: PhonemeListConsonantBlendsComponent},
    { path: 'phoneme-list-vowelblends', component: PhonemeListVowelBlendsComponent},
    { path: 'phoneme-list-vowelsconsonants', component: PhonemeListVowelsConsonantsComponent},
    { path: 'phoneme-learn', component: PhonemeLearnComponent },
    { path: 'phoneme-quiz', component: PhonemeQuizComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);
