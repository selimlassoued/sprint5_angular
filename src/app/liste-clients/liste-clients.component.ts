import { Component, OnInit } from '@angular/core';
import { Client } from '../models/client.models';
import { WatchService } from '../services/watch.service';
import { UpdateClientComponent } from "../update-client/update-client.component";

@Component({
  selector: 'app-liste-clients',
  standalone: true,
  imports: [UpdateClientComponent],
  templateUrl: './liste-clients.component.html',
  styles: ``
})
export class ListeClientsComponent implements OnInit{
  clients! : Client[];
  cli1= new Client();
  ajout:boolean=true;

  updatedCli1:Client={"idClient":0,"nomCli":"","email":""};
  updatedCli=this.updatedCli1;
  constructor(private watchServ : WatchService) { }
  ngOnInit(): void {
    this.chargerClients();
  }

  chargerClients(){
    this.watchServ.listeClients().subscribe(
      clis => {this.clients = clis._embedded.clients;
      console.log(clis);
    });
  }
  clientUpdated(cli:Client){
    console.log("client recu du composant update client",cli);
    if(this.ajout){
    this.cli1.nomCli=cli.nomCli;
    this.cli1.email=cli.email;
    this.watchServ.ajouterClient(this.cli1).subscribe(
       ()=> {   
       this.initCli();}

      );
    }
    else{
      this.watchServ.updateClient(cli).subscribe(
        ()=>{   
         this.initCli();
        }
        
      );
    }
 
  }
  updateCli(cli:Client){
    this.updatedCli=cli;
    this.ajout=false; 
  }
  initCli(){
    this.updatedCli=this.updatedCli1;
    this.chargerClients();
    this.ajout=true;
  }
}
