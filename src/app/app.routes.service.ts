
import { ModuleWithProviders } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ChartComponent } from './views/chart/chart.component';
import { NotFoundComponent } from './views/errors/not-found/not-found.component';
import { NewsComponent } from './views/news/news.component';
import { StopSpreadComponent } from './views/stop-spread/stop-spread.component';


const routes: Route[] = [
  { path: 'home', component: ChartComponent},
  { path: 'stop', component: StopSpreadComponent},
  { path: 'news', component: NewsComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', component: NotFoundComponent },

];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
