import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  ticketInfo: any = [
    {
      userName: 'أحمد محمود',
      phoneNum: '0123456789',
      ticketNum: 'C-102',
      ticketPrice: 30,
      cinemaNames: ['سينما مصر ', 'مول العرب ', 'برج الأطنان ', 'سرايا القبة '],
      peopleCount: 1,
      purchasesNum: 'مرة واحدة',
      ticket: {
        pdf: 'تذكرة رقم 45.pdf',
        size: '9mb . PDF',
      },
    },
    {
      userName: 'أحمد محمود',
      phoneNum: '0123456789',
      ticketNum: 'C-102',
      ticketPrice: 30,
      cinemaNames: ['سينما مصر ', 'مول العرب ', 'برج الأطنان ', 'سرايا القبة '],
      peopleCount: 1,
      purchasesNum: 'مرة واحدة',
      ticket: {
        pdf: 'تذكرة رقم 45.pdf',
        size: '9mb . PDF',
      },
    },
    {
      userName: 'أحمد محمود',
      phoneNum: '0123456789',
      ticketNum: 'C-102',
      ticketPrice: 30,
      cinemaNames: ['سينما مصر ', 'مول العرب ', 'برج الأطنان ', 'سرايا القبة '],
      peopleCount: 1,
      purchasesNum: 'مرة واحدة',
      ticket: {
        pdf: 'تذكرة رقم 45.pdf',
        size: '9mb . PDF',
      },
    },
    {
      userName: 'أحمد محمود',
      phoneNum: '0123456789',
      ticketNum: 'C-102',
      ticketPrice: 30,
      cinemaNames: ['سينما مصر ', 'مول العرب ', 'برج الأطنان ', 'سرايا القبة '],
      peopleCount: 1,
      purchasesNum: 'مرة واحدة',
      ticket: {
        pdf: 'تذكرة رقم 45.pdf',
        size: '9mb . PDF',
      },
    },


  ];
}
