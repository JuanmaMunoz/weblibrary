import { Component } from '@angular/core';
import { AlertSystemService } from 'projects/lib/src/lib/services/alerts.service';
import { TypeAlert } from 'projects/lib/src/public-api';

@Component({
  selector: 'app-demo-alert-system',
  templateUrl: './demo-alert-system.component.html',
  styleUrls: ['./demo-alert-system.component.scss'],
})
export class DemoAlertSystemComponent {
  public title = 'Alert-system';
  public description =
    'Alert-system is an alert system where any component that injects this service can call the desired alert. Each alert consists of three parameters: text, alert type, and duration. The component that displays the contents of these alerts will go in the app.component of our application, thus making it accessible from any part of our website.';

  public html = `
  <!-- app.component -->

  <div class="container-alerts">
    <lib-alert-system></lib-alert-system>
  </div>

  //CSS
  .container-alerts {
    position: absolute;
    z-index: 2;
    top: 5rem;
    right: 2rem;
    width: 50%;
  }
  `;

  public typeScript = `
  constructor(private alertService: AlertSystemService) {}

  /* text, type and duration.
  The duration is optional, defaulting to 5000 milliseconds
  */
  createAlert() {
    this.alertService.createAlert(this.alertText, this.typeAlert, 5000);
  }
  `;

  public typeAlert: TypeAlert = TypeAlert.Primary;
  public alertText: string = 'Hello this is a alert';
  public typeAlerts = TypeAlert;

  constructor(private alertService: AlertSystemService) {}

  createAlert() {
    this.alertService.createAlert(this.alertText, this.typeAlert, 5000);
  }
}
