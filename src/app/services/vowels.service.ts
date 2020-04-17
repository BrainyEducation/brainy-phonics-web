import {Injectable} from '@angular/core';
import {Vowels} from '../types/vowels';
import {BehaviorSubject, Observable} from 'rxjs';

import * as json from '../../assets/json/phonemes.json';
import {SightWord} from '../types/sight-word';

@Injectable({
  providedIn: 'root'
})
export class VowelsService {

  /***
   * When accessing the list of phonemes, subscribe to the observable
   * using phonemes.subscribe() from rxjs. This is done to account for
   * the time where the data is yet to load and will update the observable
   * once the data is loaded.
   *
   * https://blog.logrocket.com/understanding-rxjs-observables/
   *
   * Note: Make sure to save your subscription and unsubscribe by implementing
   * the NgOnDestroy to components.
   */
  public vowels: Observable<Vowels[]>;
  private _vowels: BehaviorSubject<Vowels[]>;

  public selectedVowel: Vowels;

  constructor() {
    this._vowels = new BehaviorSubject<Vowels[]>(null);
    this.vowels = this._vowels.asObservable();
    this.dataLoad();
  }

  dataLoad() {
    const temp = [];
    const data: Array<any> = json.default.valueOf();

    for (var i = 0; i < data.length; i++) {
        if (data[i].category === "V") {
            temp.push(
            new Vowels(
              data[i].id,
              data[i].display,
              `../../assets/audio/phonemes/${data[i].audio}`,
              new SightWord(
                data[i].word1.word,
                `../../assets/audio/sight-words/${data[i].word1.audio}`,
                `../../assets/img/sight-words/${data[i].word1.image}`
              ),
              new SightWord(
                data[i].word2.word,
                `../../assets/audio/sight-words/${data[i].word2.audio}`,
                `../../assets/img/sight-words/${data[i].word2.image}`
              ),
              new SightWord(
                data[i].word3.word,
                `../../assets/audio/sight-words/${data[i].word3.audio}`,
                `../../assets/img/sight-words/${data[i].word3.image}`
              ),
              data[i].color,
              data[i].category,
              0,
              0,
              data[i].rhyme
            ));
        }
    }
    this._vowels.next(temp);
    return temp;
  }
}
