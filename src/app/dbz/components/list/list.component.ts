import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public  characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }]

  onDelete(index: number):void {
    //TODO: Emitir el id
  }

  onDeleteCharacter(index:number):void {
    //TODO: Emitir el ID del personaje
    console.log(index)
  }
}
