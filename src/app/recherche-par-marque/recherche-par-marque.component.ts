import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Watch } from '../models/watch.models';
import { WatchService } from '../services/watch.service';
import { SearchFilterPipe } from "../search-filter.pipe";

@Component({
  selector: 'app-recherche-par-marque',
  standalone: true,
  imports: [FormsModule, CommonModule, SearchFilterPipe],
  templateUrl: './recherche-par-marque.component.html',
  styles: ``
})
export class RechercheParMarqueComponent implements OnInit{
  marque!:string;
  watches!:Watch[];
  allWatches!:Watch[];
  searchTerm!:string;

  constructor(private watchServ:WatchService){}

  ngOnInit(){
      this.watchServ.listeMontres().subscribe(
      monts => {
        console.log(monts);
        this.allWatches = monts;
        this.watches=monts;
      });
      /*this.watches=[];*/
  }

 /*rechercherMonts(){
    if(this.marque){
      this.watchServ.rechercherParMarque(this.marque).subscribe(
        monts => {
        console.log(monts);
        this.watches=monts;
      });
    }
    else{
      this.watchServ.listeMontres().subscribe(
        monts => {
          console.log(monts);
          this.watches = monts;
      });
    }
  }*/
  /*onKeyUp(filterText : string){
    this.watches = this.allWatches.filter(item =>
    item.marque.toLowerCase().includes(filterText));
    }*/

}
