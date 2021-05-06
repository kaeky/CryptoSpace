import { AfterViewInit, Component, OnInit } from '@angular/core';
import {
  Chart,
  Legend,
  Title,
  Tooltip,
  LinearScale,
  CategoryScale,
  PointElement,
  BarElement,
  ArcElement,
  DoughnutController,
  LineElement,
  LineController,
  BarController, ChartConfiguration,
} from 'chart.js';

Chart.register(
  Legend,
  Title,
  Tooltip,
  LinearScale,
  CategoryScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  DoughnutController,
  BarController,
  LineController,
);

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit, AfterViewInit {
  divisa = "";
  title = 'sdada';
  labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
  ];
  data = {
    labels: this.labels,
    datasets: [{
      label: this.divisa,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45],
    }]
  };
  config: ChartConfiguration = {
    type: 'line',
    data: this.data,
    options: {}
  };

  hola: any;

  constructor() {
  }

  ngAfterViewInit(): void {
    this.hola = document.getElementById('okCanvas2');
    const myChart = new Chart(this.hola, this.config);
  }

  ngOnInit(): void {
  }
}
