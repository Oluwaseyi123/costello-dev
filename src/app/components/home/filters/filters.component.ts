import { Component, OnInit } from '@angular/core';
import { CtgovApiService } from 'src/app/services/ctgov-api.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  numTrials = 0;
  trials

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
      console.log(trials)
      this.trials = trials;
    });
  }

  

}
