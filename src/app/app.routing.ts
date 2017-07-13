import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component'
import { LoginComponent } from './pages/login/login.component'
import { DashboardComponent } from './components/dashboard/dashboard.component'
import { WardrobeComponent } from './pages/wardrobe/wardrobe.component'

const routes : Routes = [
  { path : 'register', component : RegisterComponent },
  { path : 'login', component : LoginComponent,
    children : [
      { path : 'dashboard', component : DashboardComponent,
        children : [
          { path : 'wardrobe', component : WardrobeComponent }
        ]
      }
    ]
  } 
];

export const routing = RouterModule.forRoot(routes);
