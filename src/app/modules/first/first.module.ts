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
import { InfoSecTwoComponent } from './landing-page-G/landing-page-C/info-sec-two/info-sec-two.component';
import { InfoSecThreeComponent } from './landing-page-G/landing-page-C/info-sec-three/info-sec-three.component';
import { InfoSecFourComponent } from './landing-page-G/landing-page-C/info-sec-four/info-sec-four.component';
import { InfoSecFiveComponent } from './landing-page-G/landing-page-C/info-sec-five/info-sec-five.component';
import { InfoSecSixComponent } from './landing-page-G/landing-page-C/info-sec-six/info-sec-six.component';
import { FooterComponent } from './landing-page-G/landing-page-C/footer/footer.component';


@NgModule({
  declarations: [FirstOutletComponent, LandingPageComponent, JumbotronComponent, InfoSecOneComponent, InfoSecTwoComponent, InfoSecThreeComponent, InfoSecFourComponent, InfoSecFiveComponent, InfoSecSixComponent, FooterComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule.forChild(FirstRoutes),
    MaterialModule
  ]
})
export class FirstModule { }
