import { Client } from "./client.models";

    export class ClientWrapper{
         _embedded!: { clients: Client[]};
    }
