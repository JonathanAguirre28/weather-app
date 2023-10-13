import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent {
  @Input() iconSrc!: string;
  @Input() title: string = "";
  @Input() subtitle: string = '';
  @Input() date: string = "";
  @Input() temperature: string = "";
  @Input() max: string = "";
  @Input() min: string = "";
}
