import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Client } from '../models/client.models';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-client',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-client.component.html',
  styles: ``
})
export class UpdateClientComponent implements OnInit{
  @Input()
  client!:Client;
  @Input()
  ajout!:boolean;

  @Output()
  clientUpdated = new EventEmitter<Client>();

  ngOnInit(): void {
    console.log("ngOnInit du composant UpdateClient ",this.client);

  }
  saveClient(){
    this.clientUpdated.emit(this.client);
  }

}
