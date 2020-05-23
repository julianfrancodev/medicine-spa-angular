import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-card-psico',
  templateUrl: './card-psico.component.html',
  styleUrls: ['./card-psico.component.css']
})
export class CardPsicoComponent implements OnInit {

  @Input() psicodelic : any = {};
  @Input() index:number;

  constructor() { }

  ngOnInit(): void {
  }

  showPsico(){
    
  }

}
