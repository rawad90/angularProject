import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  
  constructor(private loggingService: LoggingService, 
              private accounstService: AccountsService) { }

  ngOnInit() {
  }
 
  onSetTo(status: string) {
    this.loggingService.logStatusChange(status);
    this.accounstService.updateStatus(this.id, status);
  }
}
