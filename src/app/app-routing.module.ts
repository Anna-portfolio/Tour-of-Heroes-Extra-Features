import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { PositionComponent } from "./position/position.component";
import { AdminComponent } from "./admin/admin.component";
import { AuthGuard } from "./auth.guard";
import { GAuthGuard } from "./g-auth.guard";

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'detail/:id/position', canActivate:[AuthGuard], component: PositionComponent },
  { path: 'admin', canActivate:[GAuthGuard], component: AdminComponent },
  { path: 'faq', loadChildren: () => import('./faq/faq.module').then(m => m.FaqModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }