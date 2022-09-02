import { Component, OnInit, ViewChild } from '@angular/core';
import { CtgovApiService } from 'src/app/services/ctgov-api.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})


export class FiltersComponent implements OnInit {
  numTrials = 0;
  trials
  displayedColumns: string[] = ['rank', 'NCTId', 'title', 'condition', 'status', 'PCD'];
  statuses: string[] = []
  condition: string


  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private ctgovService: CtgovApiService
  ) { }

  ngOnInit(): void {
    this.ctgovService.loadTrialData();
    this.getTrialData()
    this.getStudyFields()
  }

  getTrialData() {
    this.ctgovService.numTrials$.subscribe((numTrials) => {
      this.numTrials = numTrials;

    });
  }

  getStudyFields() {
    this.ctgovService.trials$.subscribe((trials) => {

      this.trials = trials;
      this, trials.map((trial) => {
        //console.log(trial.OverallStatus)
        trial.OverallStatus.map((status) => {
          this.statuses.push(status)
          this.statuses = [...new Set(this.statuses)];

        })
      })
      console.log(this.statuses)
    });
  }


  applySearchFilter(e) {
    console.log(e.target.value)
    let filterValueLower = e.target.value.toLowerCase();
    console.log(filterValueLower)
    this.trials.map((trial) => {
      if (e.target.value === '') {
        this.trials = this.trials
      } else {
        if (e.target.value === '') {
          this.trials = this.trials
        }
        else {
         console.log(trials)
        }

      }
    })


  }
}



