import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WeatherOfProvincesService } from 'src/app/services/weather-of-provinces.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent {

  isLoading: boolean = false
  climaProvincia: any[] = []

  weather:FormGroup = this.formulario.group({
    provinces:''
  })
  weatherService: any;
  data: any;
  provinceSave = {
    temp : ''
  }

  constructor(private  formulario:FormBuilder, private provinciaService:WeatherOfProvincesService){}
  
  
  traerProvincia(){
    this.isLoading = true
    setTimeout(() => {
      this.provinciaService.traerDatosProvincia(this.weather.controls['provinces'].value).subscribe({
        next: (respuesta)=> {
          console.log(respuesta)
          this.climaProvincia = respuesta.days
          this.isLoading = false
        },
        error:(error) => {
          this.isLoading = false
          console.log('Esa provincia no existe!')
        }
      })
    },2000)
  }
}
