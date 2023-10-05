import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  data: any;
  constructor(private weatherService: WeatherService){ }

  ngOnInit(): void {
      this.getWeather()
  }

  getWeather(){
    this.weatherService.getWatherInfo().subscribe({
      next: (res) => {
        this.data = res;
        console.log(this.data)
      }
    })
  }

}
