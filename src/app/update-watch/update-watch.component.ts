import { Component, OnInit } from '@angular/core';
import { Watch } from '../models/watch.models';
import { ActivatedRoute, Router } from '@angular/router';
import { WatchService } from '../services/watch.service';
import { FormsModule } from '@angular/forms';
import { Client } from '../models/client.models';

@Component({
  selector: 'app-update-watch',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-watch.component.html',
  styleUrl: './update-watch.component.css'
})
export class UpdateWatchComponent implements OnInit{
  currentWatch=new Watch ();
  clients!:Client[];
  updatedCliId!:number;
  constructor(private actRoute:ActivatedRoute,private watchServ:WatchService,private router:Router){

  }
  ngOnInit(): void {
    this.watchServ.listeClients().subscribe(
      cli=>{
        this.clients=cli._embedded.clients;
        console.log(cli);
      }
    );

    this.watchServ.consulterMontre(this.actRoute.snapshot.params['id']).subscribe(
      mont=>{
        this.currentWatch=mont;
        this.updatedCliId=this.currentWatch.client?.idClient!;
      }
    );
  }

  updateMontre(){
    this.currentWatch.client=this.clients.find(cat=>cat.idClient==this.updatedCliId)!;
    this.watchServ.updateMontre(this.currentWatch).subscribe(
      mont => {
        this.router.navigate(['watches']);
      }
    );
  }


}
