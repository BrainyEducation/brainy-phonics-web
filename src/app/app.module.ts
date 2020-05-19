import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {StorageServiceModule} from 'angular-webstorage-service';
import {appRoutingModule} from './app.routing';
import {AppComponent} from './app.component';
import {HomeComponent} from './pages/home';
import {PhonemeCategoriesComponent} from './pages/phoneme-categories';
import {CardComponent} from './components/card/card.component';
import {PhonemeLearnComponent} from './pages/phoneme-learn';
import {PhonemeQuizComponent} from './pages/phoneme-quiz';
import {AlphabetLearnComponent} from './pages/alphabet-learn/alphabet-learn.component';
import {AlphabetQuizComponent} from './pages/alphabet-quiz';
import {ListSelectComponent} from './pages/list-select/list-select.component';
import {GradeLevelsComponent} from './pages/grade-levels';
import {CoinsComponent} from './pages/coins/coins.component';
import {PuzzlesComponent} from './pages/puzzles/puzzles.component';
import {PuzzleComponent} from './pages/puzzle/puzzle.component';
import {PrekCategoriesComponent} from './pages/prek-categories';
import {PrekSoundsDetailsComponent} from './pages/prek-categories/prek-sounds-details';
import {PrekNamesDetailsComponent} from './pages/prek-categories/prek-names-details';
import {SecondCategoriesComponent} from './pages/second-categories';
import {SecondVowelsDetailsComponent} from './pages/second-categories/second-vowels-details';
import {SecondConsonantsDetailsComponent} from './pages/second-categories/second-consonants-details';
import {SecondBlendsDetailsComponent} from './pages/second-categories/second-blends-details';
import {SecondDigraphsDetailsComponent} from './pages/second-categories/second-digraphs-details';
import { KCategoriesComponent } from './pages/k-categories';
import { KLettersDetailsComponent } from './pages/k-categories/k-letters-details';
import { KEndingSoundsDetailsComponent } from './pages/k-categories/k-ending-sounds-details';
import { KBeginningSoundsDetailsComponent } from './pages/k-categories/k-beginning-sounds-details';
import { FirstCategoriesComponent } from './pages/first-categories/first-categories.component';
import { FirstLettersDetailsComponent } from './pages/first-categories/first-letters-details/first-letters-details.component';
import { FirstConsonantsDetailsComponent } from './pages/first-categories/first-consonants-details/first-consonants-details.component';
import { FirstVowelsDetailsComponent } from './pages/first-categories/first-vowels-details/first-vowels-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PhonemeCategoriesComponent,
    CardComponent,
    PhonemeLearnComponent,
    PhonemeQuizComponent,
    AlphabetLearnComponent,
    AlphabetQuizComponent,
    ListSelectComponent,
    GradeLevelsComponent,
    CoinsComponent,
    PuzzlesComponent,
    PuzzleComponent,
    PrekCategoriesComponent,
    PrekSoundsDetailsComponent,
    PrekNamesDetailsComponent,
    SecondCategoriesComponent,
    SecondVowelsDetailsComponent,
    SecondConsonantsDetailsComponent,
    SecondBlendsDetailsComponent,
    SecondDigraphsDetailsComponent,
    KCategoriesComponent,
    KLettersDetailsComponent,
    KEndingSoundsDetailsComponent,
    KBeginningSoundsDetailsComponent,
    FirstCategoriesComponent,
    FirstLettersDetailsComponent,
    FirstConsonantsDetailsComponent,
    FirstVowelsDetailsComponent

  ],
  imports: [
    BrowserModule,
    appRoutingModule,
    FlexLayoutModule,
    StorageServiceModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
