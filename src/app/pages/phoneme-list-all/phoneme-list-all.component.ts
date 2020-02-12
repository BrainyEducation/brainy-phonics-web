import {Component, OnDestroy, OnInit} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Router} from '@angular/router';
import {CardComponent} from '../../components/card/card.component';
import { TransferLetterService } from '../../services/transfer-letter-service.service';

@Component({
    templateUrl: 'phoneme-list-all.component.html',
    styleUrls: ['phoneme-list-all.component.css',
                '../../main.css']
})

export class PhonemeListAllComponent implements OnInit, OnDestroy {
    instruction: HTMLAudioElement;

    constructor(private transferService:TransferLetterService, private router: Router) {
		
    }
    
    ngOnInit() {
        this.instruction = new Audio();
        this.instruction.src = '/assets/audio/00_Button_Audio_Complete_a_whole_puzzle_(Phonics_only).mp3';
        this.instruction.load();
        this.playAudio();
    }

    ngOnDestroy() {
        this.instruction.pause();
    }

    playAudio() {
        this.instruction.pause();
        this.instruction.currentTime = 0;
        this.instruction.play();
    }

    //FIX THIS
    phonemes: { [key: number]: string } =
        {
            1: 'a',
            2: 'a',
            3: 'a',
            4: 'a',
            5: 'ai',
            6: 'an',
            7: 'ar',
            8: 'au',
            9: 'aw',
            10: 'ay',
            11: 'b',
            12: 'bl',
            13: 'br',
            14: 'c',
            15: 'c',
            16: 'ch',
            17: 'cl',
            18: 'cr',
            19: 'd',
            20: 'dr',
            21: 'e',
            22: 'e',
            23: 'e',
            24: 'ea',
            25: 'er',
            26: 'et',
            27: 'et',
            28: 'ew',
            29: 'f',
            30: 'fl',
            31: 'fr',
            32: 'g',
            33: 'g',
            34: 'gl',
            35: 'gr',
            36: 'h',
            37: 'i',
            38: 'i',
            39: 'i',
            40: 'ie',
            41: 'ie',
            42: 'igh',
            43: 'il',
            44: 'ir',
            45: 'j',
            46: 'k',
            47: 'l', 
            48: 'le',
            49: 'm',
            50: 'n',
            51: 'nd',
            52: 'ng',
            53: 'nk',
            54: 'o',
            55: 'o',
            56: 'o',
            57: 'oo',
            58: 'oo',
            59: 'oa',
            60: 'oi',
            61: 'or',
            62: 'ou',
            63: 'ow',
            64: 'ow',
            65: 'oy',
            66: 'p',
            67: 'pl',
            68: 'pr',
            69: 'qu',
            70: 'r',
            71: 's',
            72: 's',
            73: 'sh',
            74: 'sk',
            75: 'sl',
            76: 'sp',
            77: 'st',
            78: 'sw',
            79: 't',
            80: 'th',
            81: 'th',
            82: 'tr',
            83: 'u',
            84: 'u',
            85: 'u',
            86: 'ur',
            87: 'v',
            88: 'w',
            89: 'wh',
            90: 'x',
            91: 'y',
            92: 'y',
            93: 'y',
            94: 'z'
        };

    sortNull() {

    }

    showPhonemeLearn(phoneme) {
        this.transferService.setData(phoneme);
        this.router.navigateByUrl('/phoneme-learn');
    }
}