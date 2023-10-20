import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';
import { WeatherComponent } from './views/weather/weather.component';
import { DetailsOfTheDayComponent } from './views/details-of-the-day/details-of-the-day.component';

const routes: Routes = [
  {
    path:'home',
    component: HomeComponent
  },
  {
    path: 'weather',
    component: WeatherComponent
  },
  {
    path:'details-of-the-day',
    component: DetailsOfTheDayComponent
  },
  {
    path:'**',
    component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
