import { FnParam } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.component.html',
  styleUrls: ['./sensor.component.css']
})
export class SensorComponent implements OnInit {

  cards: object[] = [];
  status: boolean = true;

  constructor() { }
  delete(id: number): void{
    this.cards.splice(id, 1);
  }
  add(name: any, nameKek: any):void {
    let card: Params = {};
    card.name = name;
    if(this.cards.length == 0){
      card.id = 1;
    }else{
      card.id = this.cards[this.cards.length-1].id+1;
    }
    if(nameKek == 1){
      card.status = true;
      this.cards.push(card);
    }
    else{
      card.status = false;
      this.cards.push(card);
    }
  }
  ngOnInit(): void {
    for(let i = 1; i < 11; i++){
      let card: Params = {};
      card.status = Math.random() < 0.5;
      card.name = "Name" + i;
      card.id = i;
      this.cards.push(card);
    }
  }

}
interface Params{
  id?: number;
  name?: string;
  status?: boolean;
}