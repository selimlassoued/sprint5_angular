import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Watch } from '../models/watch.models';
import { WatchService } from '../services/watch.service';
import { RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-watches',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './watches.component.html',
  styleUrl: './watches.component.css'
})
export class WatchesComponent implements OnInit{
  watches?:Watch[];
  constructor(private watchServ:WatchService,public authServ:AuthService){
    this.watches=watchServ.watches;
  }
  ngOnInit(){
      this.chargerMontres();
  }

  chargerMontres(){
    this.watchServ.listeMontres().subscribe(monts => {
    console.log(monts);
    this.watches = monts;
    });
    }
    

  supprimerMontre(m:Watch){
    let conf=confirm("Etes-vous sûr ?");
    if(conf){
      this.watchServ.supprimerMontre(m.idMontre).subscribe(
        ()=>{
          console.log("produit supprimé");
          this.chargerMontres();
        }
      );
    }
  }

}
