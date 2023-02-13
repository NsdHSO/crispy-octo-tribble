import { Route } from '@angular/router';
import { RemoteEntryComponent } from './entry.component';

export const remoteRoutes: Route[] = [
  {
    path: '',
    component: RemoteEntryComponent,
    children: [{
      path: 'driver',
      loadChildren: () =>
        import('driver/Module').then((m) => m.RemoteEntryModule),
    }]
  }
];
