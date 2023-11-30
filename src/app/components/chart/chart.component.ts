import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class CharttComponent {



  basicData = {
    labels: [
      'ديسمبر',
      'نوفمبر',
      'اكتوبر',
      'سبتمبر',
      'أغسطس',
      'يوليو',
      'يونيو',
      'مايو',
      'ابريل',
      'مارس',
      'فبراير',
      'يناير',
    ],
    datasets: [
      {
        label: '',

        data: [540, 600, 702, 620, 540, 600, 702, 620, 540, 600, 702, 620],
        backgroundColor: [
          'rgba(153, 102, 255, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
        ],
        borderColor: [
          '#8A74F9',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
        ],
        borderWidth: 2,
        fill: true,
      },
    ],
  };


  config = {
    type: 'line',
    data: 'data',

    options: {

      scales: {
        y: {
          grid: {
            drawTicks: false,
            circular: false,
            offset: false
          },
          ticks: {
            display: false,

          }
        },
        x: {
          grid: {
            display: false,
            // drawOnChartArea: false
          },
          ticks: {
            color: '#9291A5',

            font: {
              family: 'Neo Sans Arabic',
              size: 12,
              weight: 500
            }
          }
        },
      },

      elements: {
        point: {
          pointStyle: 'circle',
          borderWidth: 3,
        },
        line: {
          tension: 0.4,
        },
      },
      plugins: {

        tooltip: {
          titleFont: {
            family: 'Neo Sans Arabic',
            size: 12.112,
            weight: 400
          },
          titleAlign: 'center',
          usePointStyle: true,
          // rtl: false
          xAlign: 'right'
        },

        legend: {
          display: false,
          labels: {
            // This more specific font property overrides the global property
            font: {
              size: 14,
              family: "'Neo Sans Arabic'",
              height: 12.904,
            },
          },
        },

        filler: {
          propagate: false,
        },
        subtitle: {
          align: 'end',
          padding: {
            bottom: 15
          },
          font: {
            family: 'Neo Sans Arabic',
            size: 14,
            weight: 400,
          },
          display: true,
          text: '05 يوليو , 2023 - 05 أغسطس , 2023 >',
        },
        title: {
          align: 'end',
          font: {
            family: 'Neo Sans Arabic',
            size: 14,
            weight: 400,
          },
          color: '#1C1C28',
          display: true,
          text: 'إحصائيات إستخدام القسيمة',
        },
      },


      interaction: {
        intersect: false,
        mode: 'x'


      },
    },
  };
}
