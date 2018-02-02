import { Component, OnInit, Input } from '@angular/core';
import { TonalityText } from '../models/tonalityText';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  public doughnutChartLabels: string[] = [];
  public doughnutChartData: number[] = [];
  public doughnutChartType = 'doughnut';
  @Input() text: TonalityText;

  constructor() { }

  ngOnInit() {
    for (let i = 0; i < this.text.tonality.length; i++) {
      this.doughnutChartLabels.push(this.text.tonality[i].tone);
      this.doughnutChartData.push(this.text.tonality[i].score);
    }
  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

}
