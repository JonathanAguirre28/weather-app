import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherOfProvincesService {

  constructor(private http:HttpClient) { }

  traerDatosProvincia(provinces:string):Observable<any>{
    return this.http.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${provinces}?unitGroup=metric&key=AZNXEXBQX245H74XZ6REB3T3N`)
  }
}
