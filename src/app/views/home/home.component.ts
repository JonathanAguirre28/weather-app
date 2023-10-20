import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  data: any[] = []
  imageSrc: SafeResourceUrl;
  constructor(private weatherService: WeatherService, private sanitizer: DomSanitizer, private router: Router){ 
    this.imageSrc = this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/sunny.svg');
  }

  ngOnInit(): void {
      this.getWeather()
  }

  getWeather(){
    this.weatherService.getWatherInfo().subscribe({
      next: (res) => {
        this.data = res.days;
      }
    })
  }

  getDetails(hours: any){
    this.weatherService.setDataForHours(hours);
    this.router.navigate(['/details-of-the-day']);
  }
}
