import { Routes } from '@angular/router';
import { WatchesComponent } from './watches/watches.component';
import { AddWatchComponent } from './add-watch/add-watch.component';
import { UpdateWatchComponent } from './update-watch/update-watch.component';
import { RechercheParClientComponent } from './recherche-par-client/recherche-par-client.component';
import { RechercheParMarqueComponent } from './recherche-par-marque/recherche-par-marque.component';
import { ListeClientsComponent } from './liste-clients/liste-clients.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { watchGuard } from './guard/watch.guard';

export const routes: Routes = [
    {path:"watches",component:WatchesComponent},
    {path:"add-watch",component:AddWatchComponent,canActivate:[watchGuard]},
    {path:"update-watch/:id",component:UpdateWatchComponent},
    {path:"rechercheParClient",component:RechercheParClientComponent},
    {path:"rechercheParMarque",component:RechercheParMarqueComponent},
    {path:"liste-clients",component:ListeClientsComponent},
    {path:'login',component:LoginComponent},
    {path: 'app-forbidden', component: ForbiddenComponent},
    {},
    {path:"",redirectTo:"watches",pathMatch:"full"}
];
