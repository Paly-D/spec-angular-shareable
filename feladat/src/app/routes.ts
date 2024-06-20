import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {DetailsComponent} from './details/details.component';
import { ModificationComponent } from './modification/modification.component';
const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page',
  },
  {
    path: 'new',
    component: ModificationComponent,
    title: 'Registering details',
  },
  {
    path: 'details/:id/edit',
    component: ModificationComponent,
    title: 'Editing details',
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Home details',
  },
  
];
export default routeConfig;