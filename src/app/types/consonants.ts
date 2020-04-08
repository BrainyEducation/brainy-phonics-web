import {SightWord} from './sight-word';

export class Consonants {
    id: string;         // unique identifier
    display: string;    // display string
    audio: string;      // url to audio
    word1: SightWord;
    word2: SightWord;
    word3: SightWord;
    stars: number;
    rhyme: string;


    constructor(id: string, display: string, audio: string, word1: SightWord, word2: SightWord, word3: SightWord, stars: number, rhyme: string) {
        this.id = id;
        this.display = display;
        this.audio = audio;
        this.word1 = word1;
        this.word2 = word2;
        this.word3 = word3;
        this.stars = stars;
        this.rhyme = rhyme;
    }
}
