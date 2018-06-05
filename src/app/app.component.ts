import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  tiles: any[] = [];
  selectedMonth: number;
  selectedYear: number;

  months: string[] = [
    'Janvier',
    'Fevrier',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juliet',
    'Aout',
    'Septempbre',
    'Octobre',
    'Novembre',
    'Decembre',
  ];

  years: number[] = [
    2010,
    2011,
    2012,
    2013,
    2014,
    2015,
    2016,
    2017,
    2018,
    2019,
    2020
  ];

  ngOnInit() {

    this.selectedMonth = moment().month() + 1;
    this.selectedYear = moment().year();
    this.initialiseCalendar();
  }

  setTiles(): void {
    this.tiles = [];

    for (let i = 0; i <= 5; i++) {
      this.tiles.push({
        day: 'Lundi'
      });
      this.tiles.push({
        day: 'Mardi'
      });
      this.tiles.push({
        day: 'Mercredi'
      });
      this.tiles.push({
        day: 'Jeudi'
      });
      this.tiles.push({
        day: 'Vendredi'
      });
      this.tiles.push({
        day: 'Samedi'
      });
      this.tiles.push({
        day: 'Dimanche'
      });
    }
  }

  initialiseCalendar(): void {
    this.setTiles();

    let startDay = moment(this.selectedYear + '-' + this.selectedMonth).startOf('month').day();
    const numDays = moment(this.selectedYear + '-' + this.selectedMonth).daysInMonth();

    if (startDay === 0) {
      startDay = 7;
    }

    for (let i = startDay; i < (numDays + startDay); i++) {
      this.tiles[i - 1].date = (i + 1) - startDay;
    }
  }

  nextMonth(): void {
    if (this.selectedMonth === 11) {
      this.selectedMonth = 0;
      this.selectedYear++;
    } else {
      this.selectedMonth++;
    }
    this.initialiseCalendar();
  }

  previousMonth(): void {
    if (this.selectedMonth < 1) {
      this.selectedMonth = 11;
      this.selectedYear--;
    } else {
      this.selectedMonth--;
    }
    this.initialiseCalendar();
  }

}
