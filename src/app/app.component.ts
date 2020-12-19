import { Component, OnInit } from '@angular/core';
import { ActiviteService } from './activite-service/activite-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  title = 'TP3ANgular';
  objectifs: any[];
  constructor(private activiteService: ActiviteService) {
    setTimeout(
      () => {
        true;
      }, 4000
    );
  }



  ngOnInit() {
      this.objectifs = this.activiteService.objectifs;
  }


}


