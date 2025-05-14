import { Client } from "./client.models";

export class Watch{
    idMontre !:number;
    datefabrication?:Date;
    diametre?:number;
    marque!:string;
    modele!:string;
    mouvement!:string;
    prix!:number;
    client?:Client;
}