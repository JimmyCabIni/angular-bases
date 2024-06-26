import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';


import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characteres: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  }, {
    id: uuid(),
    name: 'Goku',
    power: 9500
  }, {
    id: uuid(),
    name: 'Vegetta',
    power: 7500
  }];


  addCharacter(character: Character):void {

    const newCharacter: Character = {id: uuid(), ...character}

    this.characteres.push(newCharacter)
  }

  //onDeleteCharacter(index: number):void {
    //this.characteres.splice(index, 1);
  deleteCharacterById( id:string ):void {
    this.characteres = this.characteres.filter( character => character.id !== id);
  }

}
