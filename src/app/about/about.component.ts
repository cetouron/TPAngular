import { Component, OnInit } from '@angular/core';
import { ActiviteService } from '../activite-service/activite-service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  objectifs;

  constructor(private activiteService: ActiviteService) 
    {

      this.objectifs = this.activiteService.objectifs;
    }

  ngOnInit(): void {
    this.objectifs = this.activiteService.objectifs;
  }

}
