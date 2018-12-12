import { Component } from '@angular/core';

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styleUrls: ['./donut.component.css']
})
export class DonutComponent {
  // Doughnut
  public doughnutChartData: number[] = [350, 450, 100];

  public doughnutChartLabels: string[] = ['Tamales', 'Tortilla', 'Chorizo'];

  public doughnutChartType = 'doughnut';

  public randomize(): void {
    this.doughnutChartData = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100)
    ];
  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
}
