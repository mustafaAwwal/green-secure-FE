import {Routes} from '@angular/router';
export const MainRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'first-view'
    },
    {
        path: 'first-view',
        loadChildren: 'src/app/modules/first/first.module#FirstModule'
    }
]