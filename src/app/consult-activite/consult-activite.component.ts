import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Input } from '@angular/core';


@Component({
  selector: 'app-consult-activite',
  templateUrl: './consult-activite.component.html',
  styleUrls: ['./consult-activite.component.scss']
})
export class ConsultActiviteComponent implements OnInit {


  monParam: String;
  maVar2: String;
  constructor(private route: ActivatedRoute) {
    this.monParam = route.snapshot.params['id'];
    this.maVar2= route.snapshot.params['id2'];
   }

  ngOnInit(): void {
  }

}
