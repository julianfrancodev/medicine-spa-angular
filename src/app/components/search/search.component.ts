import { Component, OnInit } from '@angular/core';
import { PsicodelicsService } from 'src/app/services/psicodelics.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  psicodelics:any[] = [];


  constructor(private _psicodelicService: PsicodelicsService, private activeRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      this.psicodelics = this._psicodelicService.findPsicodelic(params['search']);
    })
  }

}
