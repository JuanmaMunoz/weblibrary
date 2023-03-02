import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TypeAlert } from '../models/enums';
import { IAlertSystem } from '../models/interfaces';

@Injectable({
  providedIn: 'root',
})
export class AlertsService {
  public alerts$: BehaviorSubject<IAlertSystem[]> = new BehaviorSubject([
    {},
  ] as IAlertSystem[]);
  timeAlert: number = 5000;
  timerAlert: any = null;
  constructor() {
    this.alerts$.subscribe(() => {
      if (this.alerts$.getValue().length > 0) {
        if (!this.timerAlert)
          this.timerAlert = setInterval(() => this.cleanAlerts(), 1000);
      } else {
        if (this.timerAlert) clearInterval(this.timerAlert);
        this.timerAlert = null;
      }
    });
  }

  public createAlert(text: string, type: TypeAlert) {
    const alert: IAlertSystem = {
      createDate: new Date(),
      type: type,
      text: text,
    };
    this.alerts$.next([alert, ...this.alerts$.getValue()]);
  }

  private cleanAlerts() {
    this.alerts$.next(
      this.alerts$.getValue().filter((e: IAlertSystem) => {
        if (e.createDate)
          e.createDate.getTime() + this.timeAlert > new Date().getTime();
      })
    );
  }
}
