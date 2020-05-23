import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-psico',
  templateUrl: './card-psico.component.html',
  styleUrls: ['./card-psico.component.css']
})
export class CardPsicoComponent implements OnInit {

  @Input() psicodelic : any = {};
  @Input() index:number;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  showPsico(){
    this.router.navigate(['/psicodelic',this.index]);
    
  }

}
