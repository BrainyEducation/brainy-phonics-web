import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './pages/home';
import {PhonemeCategoriesComponent} from './pages/phoneme-categories';
import {AlphabetLearnComponent} from './pages/alphabet-learn/alphabet-learn.component';
import {AlphabetQuizComponent} from './pages/alphabet-quiz';
import {PhonemeLearnComponent} from './pages/phoneme-learn';
import {PhonemeQuizComponent} from './pages/phoneme-quiz';
import {ListSelectComponent} from './pages/list-select/list-select.component';
import {CoinsComponent} from './pages/coins/coins.component';
import {PuzzlesComponent} from './pages/puzzles/puzzles.component';
import {PuzzleComponent} from './pages/puzzle/puzzle.component';
import {PrekCategoriesComponent} from './pages/prek-categories';
import {KCategoriesComponent} from './pages/k-categories';
import {KLettersDetailsComponent} from './pages/k-categories/k-letters-details';
import {KEndingSoundsDetailsComponent} from './pages/k-categories/k-ending-sounds-details';
import {KBeginningSoundsDetailsComponent} from './pages/k-categories/k-beginning-sounds-details';
import {FirstCategoriesComponent} from './pages/first-categories/first-categories.component';
import {FirstLettersDetailsComponent} from './pages/first-categories/first-letters-details/first-letters-details.component';
import {FirstConsonantsDetailsComponent} from './pages/first-categories/first-consonants-details/first-consonants-details.component';
import {FirstVowelsDetailsComponent} from './pages/first-categories/first-vowels-details/first-vowels-details.component';
import {SecondCategoriesComponent} from './pages/second-categories';
import {SecondVowelsDetailsComponent} from './pages/second-categories/second-vowels-details';
import {SecondConsonantsDetailsComponent} from './pages/second-categories/second-consonants-details';
import {ThirdCategoriesComponent} from './pages/third-categories';
import {ThirdConsonantsDetailsComponent} from './pages/third-categories/third-consonants-details';
import {ThirdVowelsDetailsComponent} from './pages/third-categories/third-vowels-details';
import {ThirdVowelconsonantsDetailsComponent} from './pages/third-categories/third-vowelconsonants-details';
import {NobodysBetterComponent} from './pages/nobodys-better/nobodys-better.component';
import {SecretStuffComponent} from './pages/secret-stuff/secret-stuff.component';
import {LoginComponent} from './pages/login';
import {WordStructuresComponent} from './pages/word-structures';

const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'home', component: HomeComponent},
    {path: 'phoneme-categories', component: PhonemeCategoriesComponent},
    {path: 'prek-categories', component: PrekCategoriesComponent},
    {path: 'k-categories', component: KCategoriesComponent},
    {path: 'k-letters-details', component: KLettersDetailsComponent},
    {path: 'k-beginning-sounds-details', component: KBeginningSoundsDetailsComponent},
    {path: 'k-ending-sounds-details', component: KEndingSoundsDetailsComponent},
    {path: 'first-categories', component: FirstCategoriesComponent},
    {path: 'first-letters-details', component: FirstLettersDetailsComponent},
    {path: 'first-consonants-details', component: FirstConsonantsDetailsComponent},
    {path: 'first-vowels-details', component: FirstVowelsDetailsComponent},
    {path: 'second-categories', component: SecondCategoriesComponent},
    {path: 'second-vowels-details', component: SecondVowelsDetailsComponent},
    {path: 'second-consonants-details', component: SecondConsonantsDetailsComponent},
    {path: 'third-categories', component: ThirdCategoriesComponent},
    {path: 'third-consonants-details', component: ThirdConsonantsDetailsComponent},
    {path: 'third-vowels-details', component: ThirdVowelsDetailsComponent},
    {path: 'third-vowelconsonants-details', component: ThirdVowelconsonantsDetailsComponent},
    {path: 'alphabet-learn', component: AlphabetLearnComponent},
    {path: 'alphabet-quiz', component: AlphabetQuizComponent},
    {path: 'list-select', component: ListSelectComponent},
    {path: 'phoneme-learn', component: PhonemeLearnComponent},
    {path: 'phoneme-quiz', component: PhonemeQuizComponent},
    {path: 'coins', component: CoinsComponent},
    {path: 'puzzles', component: PuzzlesComponent},
    {path: 'puzzle', component: PuzzleComponent},
    {path: 'nobodys-better', component: NobodysBetterComponent},
    {path: 'secret-stuff', component: SecretStuffComponent},
    {path: 'word-structures', component: WordStructuresComponent},

    // otherwise redirect to home
    {path: '**', redirectTo: ''}
];

export const appRoutingModule = RouterModule.forRoot(routes);
