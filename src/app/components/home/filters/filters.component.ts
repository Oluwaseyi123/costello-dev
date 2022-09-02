import { Component, OnInit } from '@angular/core';
import { CtgovApiService } from 'src/app/services/ctgov-api.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  numTrials = 0;
  studyFields

  constructor(
    private ctgovService: CtgovApiService
  ) { }

  ngOnInit(): void {
    this.ctgovService.loadTrialData();  
    this.getTrialData()
  }

  getTrialData() {
    this.ctgovService.numTrials$.subscribe(numTrials => {
      console.log(numTrials)
      this.numTrials = numTrials;
      
    });
  }

  

}
