import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstOutletComponent } from './first-outlet/first-outlet.component';
import { LandingPageComponent } from './landing-page-G/landing-page/landing-page.component';
import { RouterModule } from '@angular/router';
import { FirstRoutes } from './first.routing';
import { MaterialModule } from 'src/app/shared/shared-modules/material-module/material.module';
import { JumbotronComponent } from './landing-page-G/landing-page-C/jumbotron/jumbotron.component';
import { InfoSecOneComponent } from './landing-page-G/landing-page-C/info-sec-one/info-sec-one.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [FirstOutletComponent, LandingPageComponent, JumbotronComponent, InfoSecOneComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule.forChild(FirstRoutes),
    MaterialModule
  ]
})
export class FirstModule { }
