import { Component, OnInit } from '@angular/core';
import { PsicodelicsService,Psicodelic } from '../../services/psicodelics.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-psicodelics',
  templateUrl: './psicodelics.component.html',
  styles: [
  ]
})
export class PsicodelicsComponent implements OnInit {

  psicodelics : Psicodelic[] = [];

  constructor(private _psicodelicsService: PsicodelicsService, private router: Router) { }

  ngOnInit(): void {
    this.psicodelics = this._psicodelicsService.getPsicodelics();
    
  }


  

}
