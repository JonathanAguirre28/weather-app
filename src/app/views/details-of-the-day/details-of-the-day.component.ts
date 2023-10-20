import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-details-of-the-day',
  templateUrl: './details-of-the-day.component.html',
  styleUrls: ['./details-of-the-day.component.scss']
})
export class DetailsOfTheDayComponent implements OnInit {
  data: any[] = []
  constructor(private weatherService: WeatherService, private sanitizer: DomSanitizer){}
  ngOnInit(): void {
   this.getWeather()
  }
  getWeather() {
    this.weatherService.getWatherInfo().subscribe({
      next: (res) => {
        console.log(res)
        this.data = res.days[0].hours;

      }
    })
  }

}
