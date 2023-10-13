import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  data: any[] = []
  imageSrc: SafeResourceUrl;
  constructor(private weatherService: WeatherService, private sanitizer: DomSanitizer){ 
    this.imageSrc = this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/sunny.svg');
  }

  ngOnInit(): void {
      this.getWeather()
  }

  getWeather(){
    this.weatherService.getWatherInfo().subscribe({
      next: (res) => {
        console.log(res)
        this.data = res.days;
      }
    })
  }
}
