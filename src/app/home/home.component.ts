import { Component, OnInit, Query } from '@angular/core';
import { Input } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger, AnimationTriggerMetadata } from '@angular/animations';
import { NavigationEnd, Router } from '@angular/router';
import { ActiviteService } from '../activite-service/activite-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations : [ trigger('animobjectifs' , [
    transition ('*=>*' , [
      query(':enter', style({opacity: 0}), {optional : true}),
      query(':enter', stagger('300ms', [animate ('.6s ease-in', keyframes ([
        style({opacity: 0, transform:'translate(-75%)', offset:0}), style({opacity: .5, transform:'translateY(35px)', offset: .3}),
        style({opacity: 1, transform:'translateY(0)', offset:1}),]))]), {optional: true})
    ]) ])]
})


export class HomeComponent implements OnInit {


  @Input()nbItem = 4;
  @Input()btnText = "Ajouter un élément";
  @Input()objectifText = "";
  @Input()animButton = false;

    objectifs;

  constructor(private monRouteur: Router, private activiteService: ActiviteService) { 
    setTimeout(()=> {
      this.objectifs = this.activiteService.objectifs;
      // monRouteur.navigate(['about'])
    }, 1000);
  }

  ajoutItem(){

    

    this.activiteService.objectifs.push(this.objectifText);
      this.nbItem = this.activiteService.objectifs.length;
  }

  getCom(){
    return this.objectifText;
  };

  getColor(){

    if (this.objectifText != "") {

      return 'green';

    } 
    else 
    {
      return 'red';

    }


  }

  getClass(){

    if (this.objectifText != "") {

      return true;

    } 
    else 
    {
      return  false;

    }


  }

  ngOnInit(): void {
    this.nbItem = this.activiteService.objectifs.length;
  }

}
