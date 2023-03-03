import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TypeAlert } from '../models/enums';
import { IAlertSystem } from '../models/interfaces';

@Injectable({
  providedIn: 'root',
})
export class AlertSystemService {
  alerts$: BehaviorSubject<IAlertSystem[]> = new BehaviorSubject([
    {} as IAlertSystem,
  ]);
  timerAlert: any = null;
  constructor() {
    this.alerts$.subscribe(() => {
      if (this.alerts$.getValue().length > 0) {
        if (!this.timerAlert)
          this.timerAlert = setInterval(() => this.cleanAlerts(), 1000);
      } else {
        clearInterval(this.timerAlert);
        this.timerAlert = null;
      }
    });
  }

  public createAlert(text: string, type: TypeAlert, duration?: number) {
    const alert: IAlertSystem = {
      createDate: new Date(),
      type: type,
      text: text,
      duration: duration ? duration : 5000,
    };
    this.alerts$.next([alert, ...this.alerts$.getValue()]);
  }

  private cleanAlerts() {
    this.alerts$.next(
      this.alerts$
        .getValue()
        .filter(
          (e: IAlertSystem) =>
            e?.createDate?.getTime() + e.duration > new Date().getTime()
        )
    );
  }
}
