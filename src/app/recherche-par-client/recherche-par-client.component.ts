import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Watch } from '../models/watch.models';
import { FormsModule } from '@angular/forms';
import { Client } from '../models/client.models';
import { WatchService } from '../services/watch.service';

@Component({
  selector: 'app-recherche-par-client',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './recherche-par-client.component.html',
  styles: ``
})
export class RechercheParClientComponent implements OnInit{
  watches!:Watch[];
  IdClient!:number;
  clients!:Client[];

  constructor(private watchServ:WatchService){}
  ngOnInit(): void {
    this.watchServ.listeClients().subscribe(
      clis => {
        this.clients = clis._embedded.clients;
        console.log(clis);
    });
  }
  onChange() {
    this.watchServ.rechercherParClient(this.IdClient).subscribe(
      monts =>{
        this.watches=monts
      });
    }
  

    
  
}
