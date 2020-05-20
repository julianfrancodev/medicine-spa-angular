import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PsicodelicsComponent } from './components/psicodelics/psicodelics.component';
import { PsicodelicComponent } from './components/psicodelic/psicodelic.component';

const app_routes: Routes = [
    {path:'home', component:HomeComponent},
    {path:'about', component:AboutComponent},
    {path:'psicodelics', component:PsicodelicsComponent},
    {path:'psicodelic/:id', component:PsicodelicComponent},
    {path:'**',pathMatch:'full',redirectTo:''}
]

export const app_routing = RouterModule.forRoot(app_routes);