import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexChart,
  ApexAxisChartSeries,
  ApexTitleSubtitle,
  ApexDataLabels,
  ApexFill,
  ApexYAxis,
  ApexXAxis,
  ApexTooltip,
  ApexMarkers,
  ApexAnnotations,
  ApexStroke
} from "ng-apexcharts";



export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class CharttComponent implements OnInit {
  @ViewChild("chart") chart!: ChartComponent;
  public ApexChartOptions: Partial<ChartOptions>;

  constructor() {
    this.ApexChartOptions = {
      series: [
        {
          name: "My-series",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }
      ],
      chart: {
        height: 264,
        type: "area"
      },
      title: {
        text: "إحصائيات إستخدام القسيمة"
      },
      xaxis: {
        categories: ["Jan", "Feb",  "Mar",  "Apr",  "May",  "Jun",  "Jul",  "Aug", "Sep"]
      }
    };
  }







  changeChartLibrary(ele:HTMLElement){
    console.log(ele.style.visibility='hidden');

  }
ngOnInit(): void {

}





basicData = {
  labels: ['ديسمبر', 'نوفمبر', 'اكتوبر', 'سبتمبر', 'أغسطس', 'يوليو', 'يونيو', 'مايو', 'ابريل', 'مارس', 'فبراير' ,'يناير'],
  datasets: [
      {

          label: '',
          data: [540, 325, 702, 620, 540, 325, 702, 620, 540, 325, 702, 620],
          backgroundColor: ['rgba(153, 102, 255, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)'],
          borderColor: ['#8A74F9', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)'],
          borderWidth: 2,
          fill: true
      }
  ]
};

// basicOptions = {
//   plugins: {
//       legend: {
//           labels: {
//               color: 'red'
//           }
//       }
//   },
//   scales: {
//       y: {
//           beginAtZero: true,
//           ticks: {
//               color: 'green'
//           },
//           grid: {
//               color: 'black',
//               drawBorder: false
//           }
//       },
//       x: {
//           ticks: {
//               color: 'white'
//           },
//           grid: {
//               color: 'blue',
//               drawBorder: false
//           }
//       }
//   }
// };





config = {
  type: 'line',
  data: 'data',

  options: {

    elements: {
      point: {
        pointStyle: 'circle',
        borderWidth: 3
      },
      line: {
        tension: 0.4
      }
    },
    plugins: {
      legend: {
        labels: {
            // This more specific font property overrides the global property
            font: {
                size: 14,
                family: "'Neo Sans Arabic'",
                height:12.904
            }
        }
    },

      filler: {
        propagate: false,
      },
      subtitle: {
      align: 'end',

        display: true,
        text: '05 يوليو , 2023 - 05 أغسطس , 2023'
    },
    title: {
      align: 'end',
      font: {
        family: 'Neo Sans Arabic',
        size: 14,
        weight: 400
      },
      color: '#1C1C28',
      display: true,
      text: 'إحصائيات إستخدام القسيمة'
  }
    },
    interaction: {
      intersect: false,
    }
  },
};

}
