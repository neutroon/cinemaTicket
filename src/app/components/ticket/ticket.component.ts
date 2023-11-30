import {
  Component,
  WritableSignal,
  effect,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss'],
})
export class TicketComponent {
  constructor() {
    effect(() => {
      if (this.isCopied()) {
        this.copyText = 'link copied';
        return this.copyText;
      } else {
        this.copyText = 'Copy Link';
        return this.copyText;
      }
    });
  }

  copyText: string = 'Copy Link';

  isCopied: WritableSignal<boolean> = signal(false);
}
