import { Injectable, Inject } from '@angular/core';
import { StorageServiceModule} from 'angular-webstorage-service';
import {SESSION_STORAGE, WebStorageService} from 'angular-webstorage-service';
import {TransferLetterService} from './transfer-letter-service.service';
import {AlphabetLettersService} from './alphabet-letters.service';
import {AlphabetLetter} from '../types/alphabet-letter';

@Injectable({
  providedIn: 'root'
})

export class ProgressService {

  constructor(@Inject(SESSION_STORAGE) private storage: WebStorageService) {
    this.storage.set('hasReceivedPhonemeInstruction', false);
    this.storage.set('hasReceivedAlphabetInstruction', false);
  }

  getReceivedInstructions(key) {
    return this.storage.get(key);
  }


  setReceivedInstructions(key, hasRecInstructions) {
    this.storage.set(key, hasRecInstructions); 
  }

  //initial each input with { stars: 0, active: false, checkmark: false }
  prepareNewKeyProgress(): any {
    return {'stars': 1,
            'active': true, 
            'checkmark':false}
  }

  getActiveStatus(key): any {
    if (this.storage.get(key) != null) {
      return this.storage.get(key).active;
    } else {
      return 0;
    }
  }

  setActiveStatus(key, val): void {
    let input;
    if(this.storage.get(key) != null) {
      const currentStatus = this.storage.get(key).active;
  
      input = { 'stars': this.storage.get(key).stars,
                'active': val,
                'checkmark':this.storage.get(key).checkmark}
      
    } else {
      input = this.prepareNewKeyProgress();
    }
    this.storage.set(key, input);
  }

  getCheckMark(key): any {
    if (this.storage.get(key) != null) {
      return this.storage.get(key).checkmark;
    } else {
      return false;
    }
  }

  setCheckMark(key, val): any {
    let input;
    if(this.storage.get(key) != null) {
      const currentStatus = this.storage.get(key).checkmark;
      input = { 'stars': 5,
                'active': this.storage.get(key).active,
                'checkmark': val}
    } else {
      input = this.prepareNewKeyProgress();
    }
    this.storage.set(key, input);
  }

  saveStarsToKey(key, val): void {
    let input;
    if(this.storage.get(key) == null) {
      input = this.prepareNewKeyProgress();
    } else {
      if (this.storage.get(key).active == true) {
        let currentStars = this.storage.get(key).stars;
        if (currentStars + val >= 5 && key.includes("letter")) {
          this.setCheckMark(key, true);
          return;
        } else if (currentStars + val >= 5) {
          input = { 'stars': 5,
          'active':this.storage.get(key).active,
          'checkmark':this.storage.get(key).checkmark}
        } else {
          input = { 'stars': this.storage.get(key).stars + val,
          'active':this.storage.get(key).active,
          'checkmark':this.storage.get(key).checkmark}
        }
      } else {
        input = this.storage.get(key)
      }
    }
    this.storage.set(key, input);
  }

  getStarsFromKey(key): any {
    let stars = 0;
    if (this.storage.get(key) != null) {
      stars = this.storage.get(key).stars;
    }
    return stars;
  }
}
