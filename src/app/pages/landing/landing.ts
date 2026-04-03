import { Component } from '@angular/core';
import { HeroComponent } from '../../components/sections/hero/hero';
import { FeaturesComponent } from '../../components/sections/features/features';
import { FaqComponent } from '../../components/sections/faq/faq';
import { MetricsComponent } from '../../components/sections/metrics/metrics';
import { HeaderComponent } from '../../components/header/header';
import { FooterComponent } from '../../components/footer/footer';

@Component({
  selector: 'app-landing',
  imports: [HeroComponent, FeaturesComponent, FaqComponent, MetricsComponent, HeaderComponent, FooterComponent, FooterComponent],
  templateUrl: './landing.html',
})
export class LandingComponent {}
