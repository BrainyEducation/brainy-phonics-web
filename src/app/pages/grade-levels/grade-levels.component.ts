import {Component} from '@angular/core';
import {Location} from '@angular/common';

@Component({
    templateUrl: 'grade-levels.component.html',
    styleUrls: [ 'grade-levels.component.css']
})

export class GradeLevelsComponent {
    grade: HTMLAudioElement;

    constructor(private location: Location) {
    }
    
    playAudio(event) {
        this.grade = new Audio();
        this.grade.src = '/assets/audio/buttons/' + event.target.id + '.mp3';
        if (this.grade.src !== undefined) {
            this.grade.load();
            this.grade.play();
        }
    }

    goBack() {
        this.location.back();
    }
}
