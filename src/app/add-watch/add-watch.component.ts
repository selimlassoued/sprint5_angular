import { Component, OnInit } from '@angular/core';
import { Client } from '../models/client.models';
import { WatchService } from '../services/watch.service';
import { Router } from '@angular/router';
import { Watch } from '../models/watch.models';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-watch',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-watch.component.html',
  styleUrl: './add-watch.component.css'
})
export class AddWatchComponent implements OnInit {
  newWatch = new Watch();
  clients!: Client[];
  newIdCli!: number;
  newCli!: Client;
  constructor(private watchServ: WatchService, private router: Router) {

  }
  ngOnInit() {
    this.watchServ.listeClients().subscribe(
      cats => {
        this.clients = cats._embedded.clients;
        console.log(cats);
      }
    );
  }

  addMontre() {
    this.newWatch.client = this.clients.find(cli => cli.idClient == this.newIdCli)!;
    console.log('clients',this.clients);
    console.log('id client',this.newIdCli);
    console.log(this.newWatch);
    this.watchServ.ajouterMontre(this.newWatch)
      .subscribe(mont => {
        console.log(mont);
        this.router.navigate(['watches']);
      });
  }
}
