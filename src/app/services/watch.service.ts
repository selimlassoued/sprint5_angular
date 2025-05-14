import { Injectable } from '@angular/core';
import { Watch } from '../models/watch.models';
import { Client } from '../models/client.models';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { ClientWrapper } from '../models/clientWrapper.model';
import { environment } from '../../environments/environment.development';
import { AuthService } from './auth.service';
const httpOptions={
  headers:new HttpHeaders({'Content-type':'application/json'})
}
@Injectable({
  providedIn: 'root'
})
export class WatchService {
  watches:Watch[];
  clients:Client[];
  apiURL='http://localhost:8081/montre/api';
  apiURLCli='http://localhost:8081/montre/cli';
  constructor(private http:HttpClient,private authServ:AuthService) {
    this.watches=[];
    this.clients=[];
   }



  listeMontres():Observable<Watch[]>{
    /*let jwt = this.authServ.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})*/
    return this.http.get< Watch[]>(this.apiURL+"/all");  
  }

  ajouterMontre(mont:Watch):Observable<Watch>{
    /*let jwt = this.authServ.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})*/
    return this.http.post<Watch>(this.apiURL+"/addmont",mont);
  }
  supprimerMontre(id:number){
    const url = `${this.apiURL}/delmont/${id}`;
  /*let jwt = this.authServ.getToken();
  jwt = "Bearer "+jwt;
  let httpHeaders = new HttpHeaders({"Authorization":jwt}) */
    return this.http.delete(url)
  }
  consulterMontre(id:number):Observable<Watch>{
    const url = `${this.apiURL}/getbyid/${id}`;
    /*let jwt = this.authServ.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt}) */
    return this.http.get<Watch>(url);
  }
  updateMontre(mont:Watch):Observable<Watch>{
   /* let jwt = this.authServ.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt}) */
    return this.http.put<Watch>(this.apiURL+"/updatemont",mont);
  }
  /*listeClients():Observable<Client[]>{
    return this.http.get<Client[]>(this.apiURL+'/cli');
  }*/
  consulterClient(id:number){

  }
  listeClients():Observable<ClientWrapper>{
    /*let jwt = this.authServ.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})*/
    return this.http.get<ClientWrapper>(this.apiURLCli);
    }

  rechercherParClient(idCli: number):Observable< Watch[]> {
    const url = `${this.apiURL}/montscli/${idCli}`;
    return this.http.get<Watch[]>(url);
    }
  
  rechercherParMarque(marque: string):Observable< Watch[]> {
    const url = `${this.apiURL}/montsByMarque/${marque}`;
    return this.http.get<Watch[]>(url);
    }

  ajouterClient( cli: Client):Observable<Client>{
    return this.http.post<Client>(this.apiURLCli, cli, httpOptions);
    }

  updateClient(cli: Client):Observable<Client>{
    const url=`${this.apiURLCli}/${cli.idClient}`;
    return this.http.put<Client>(url,cli,httpOptions);
  }
    
    


}
