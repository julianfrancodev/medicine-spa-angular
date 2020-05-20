import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PsicodelicsService } from 'src/app/services/psicodelics.service';

@Component({
  selector: 'app-psicodelic',
  templateUrl: './psicodelic.component.html',
  styleUrls: ['./psicodelic.component.css']
})
export class PsicodelicComponent implements OnInit {

  psicodelic: any = {};

  constructor(private activatedRoute: ActivatedRoute, private psicodelicService: PsicodelicsService) {
    this.activatedRoute.params.subscribe(params => {
      this.psicodelic = this.psicodelicService.getPsicodelic(params['id']);
    })
  }

  ngOnInit(): void {
  }

  getImage(image:string):string{
    let UriImage; 
    if(image == "Natural"){
      UriImage = "./assets/img/nature.jpg";
      return UriImage;
    }else{
      UriImage =  "./assets/img/sintetic.jpg";
      return UriImage
    }
  }

}
