import { Routes } from '@angular/router';
import { CurriculoComponent } from './pages/curriculo/curriculo.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { ErroComponent } from './pages/erro/erro.component';

export const routes: Routes = [
    { path: '', component: LayoutComponent, pathMatch: 'full' },
    { path: '/resume', component: CurriculoComponent, pathMatch: 'full' },
    { path: '**', component: ErroComponent }

];
