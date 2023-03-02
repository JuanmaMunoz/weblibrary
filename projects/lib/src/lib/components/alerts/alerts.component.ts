import { Component, OnInit } from '@angular/core';
import { AlertsService } from '../../services/alerts.service';
import { showHideInOut } from '../../utils/effects/effects';

@Component({
  selector: 'lib-system-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss'],
  animations: [showHideInOut],
})
export class AlertsComponent implements OnInit {
  constructor(public alertsService: AlertsService) {}

  ngOnInit(): void {}
}
