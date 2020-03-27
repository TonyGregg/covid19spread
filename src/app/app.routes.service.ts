
import { ModuleWithProviders } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { CasesComponent } from './views/cases/cases.component';
import { Dashboard1Component } from './views/dashboards/dashboard1/dashboard1.component';
import { NotFoundComponent } from './views/errors/not-found/not-found.component';
import { InsightsComponent } from './views/insights/insights.component';
import { NewsComponent } from './views/news/news.component';
import { StopSpreadComponent } from './views/stop-spread/stop-spread.component';


const routes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboards/v1' },
  { path: 'dashboards', children:
    [
      { path: 'v1', component: Dashboard1Component },
    ]
  },
  { path: 'stop', component: StopSpreadComponent},
  { path: 'news', component: NewsComponent},
  { path: 'insights', component: InsightsComponent},
  { path: 'cases', component: CasesComponent},
  { path: '**', component: NotFoundComponent },

];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
