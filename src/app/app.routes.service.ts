
import { ModuleWithProviders } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AnalyticsComponent } from './views/analytics/analytics.component';
import { CasesComponent } from './views/cases/cases.component';
import { Dashboard1Component } from './views/dashboards/dashboard1/dashboard1.component';
import { NotFoundComponent } from './views/errors/not-found/not-found.component';
import { InsightsComponent } from './views/insights/insights.component';
import { Map1Component } from './views/maps/map1/map1.component';
import { ModalsComponent } from './views/modals/modals.component';
import { Profile1Component } from './views/profile/profile1/profile1.component';
import { StopSpreadComponent } from './views/stop-spread/stop-spread.component';
import { BasicTableComponent } from './views/tables/basic-table/basic-table.component';


const routes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboards/v1' },
  { path: 'dashboards', children:
    [
      { path: 'v1', component: Dashboard1Component },
    ]
  },
  { path: 'profiles', children:
    [
      { path: 'profile1', component: Profile1Component },
    ]
  },
  { path: 'tables', children:
    [
      { path: 'table1', component: BasicTableComponent },
    ]
  },
  { path: 'maps', children:
    [
      { path: 'map1', component: Map1Component},
    ]
  },

  { path: 'modals', component: ModalsComponent},
  { path: 'stop', component: StopSpreadComponent},
  { path: 'analytics', component: AnalyticsComponent},
  { path: 'insights', component: InsightsComponent},
  { path: 'cases', component: CasesComponent},
  { path: '**', component: NotFoundComponent },

];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
