import { Routes } from '@angular/router';
import { ShowComponent } from './show/show.component';

import { InteriorComponent } from './interior/interior.component';
import { CineComponent } from './cine/cine.component';


export const routes: Routes = [
    {path: 'show', component: ShowComponent },
    {path: 'interior', component: InteriorComponent },
    {path: 'cine', component: CineComponent }
];
