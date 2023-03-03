import { Component, OnInit } from '@angular/core';
import { AlertSystemService } from '../../services/alerts.service';
import { showHideInOut } from '../../utils/effects/effects';

@Component({
  selector: 'lib-alert-system',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss'],
  animations: [showHideInOut],
})
export class AlertsComponent implements OnInit {
  constructor(public alertsService: AlertSystemService) {}

  ngOnInit(): void {}
}
