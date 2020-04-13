import {Component,OnDestroy, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {Injectable} from '@angular/core';
import {Phoneme} from '../../types/phoneme';
import {TransferLetterService} from '../../services/transfer-letter-service.service';

@Component({
  templateUrl: './puzzle.component.html',
  styleUrls: ['./puzzle.component.css']
})
@Injectable()
export class PuzzleComponent implements OnInit, OnDestroy {

  rhyme: HTMLAudioElement;
  img: string;
  text: string;
  phoneme: Phoneme;

  constructor(
    private transferService: TransferLetterService,
    private location: Location
  ) { 
    // get phoneme data
    this.phoneme = this.transferService.getData() as Phoneme;
    this.img = '../../assets/img/puzzle-pieces/puzzle-'+ this.phoneme.id +'/puzzle-' + this.phoneme.id + '-composite.png';
    this.text = this.phoneme.rhyme.replace(/[(]/g, '<span>').replace(/[)]/g, '</span>').replace(/;/g, ',');

    // play audio
    this.rhyme = new Audio();
    this.rhyme.src = '../../assets/audio/rhymes/puzzle-' + this.phoneme.id +'-rhyme.mp3';
    this.rhyme.load();
    this.playAudio();
  }

  ngOnInit() {
    
  }

  ngOnDestroy() {
    this.rhyme.pause();
  }

  playAudio() {
    this.rhyme.pause();
    this.rhyme.currentTime = 0;
    this.rhyme.play();
}

  goBack() {
    this.location.back();
  }
}