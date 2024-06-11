import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { Questao1Component } from './pages/questao-1/questao-1.component';
import { Questao2Component } from './pages/questao-2/questao-2.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: '1', component: Questao1Component },
    { path: '2', component: Questao2Component },
    { path: '**', redirectTo: '' }
];

export default RouterModule.forRoot(routes);