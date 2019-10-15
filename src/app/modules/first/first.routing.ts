import {Routes} from '@angular/router';
import { FirstOutletComponent } from './first-outlet/first-outlet.component';
import { LandingPageComponent } from './landing-page-G/landing-page/landing-page.component';
export const FirstRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'landing-page'
    },
    {
        path: 'landing-page',
        component: FirstOutletComponent,
        children: [
            {
                path:'',
                component: LandingPageComponent
            }
        ]
    }
]